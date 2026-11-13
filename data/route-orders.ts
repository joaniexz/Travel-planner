import { RouteOrderId, RouteOrderOption } from '@/types/travel';
import { logFunctionCall } from '@/lib/logger';

export const ROUTE_ORDER_OPTIONS: RouteOrderOption[] = [
  {
    id: RouteOrderId.LONDON_PARIS_DLP,
    title: 'London → Central Paris → Disneyland Paris',
    sequenceLabel: 'Recommended Sequence',
    isRecommended: true,
    airportStrategy: 'Open-Jaw Flight: Arrive London (LHR / LGW) · Depart Paris (CDG)',
    hotelCheckIns: 3,
    luggageFriction: 'Low — Single city-center Eurostar haul, 10-min TGV to CDG at end',
    energyArc: 'Soft Landing → Cultural Immersion → Coaster Finale',
    summary:
      'Start in London for an effortless English-language jet-lag landing, ride the Eurostar straight from central St Pancras to Gare du Nord, finish at Disneyland Paris, and hop 10 minutes via TGV directly to Charles de Gaulle Airport.',
    pros: [
      'English signage, contactless Tube payments, and familiar pharmacies ease Day 1 jet lag.',
      'Eurostar departs central London and drops you in central Paris in 2h 16m with zero airport baggage wait.',
      'Teens stay engaged during Paris museums because Disneyland Paris serves as the grand finale.',
      'Marne-la-Vallée Chessy station is 10 minutes by TGV (or 35 mins private van) from CDG Terminal 2—no backtracking into Paris traffic.',
    ],
    cons: [
      'Requires booking an open-jaw (multi-city) flight itinerary into London and out of Paris.',
      'Packing once more for the short 40-minute RER A hop out to Disneyland Paris.',
    ],
    legs: [
      {
        step: 1,
        from: 'Heathrow Airport (LHR Terminals 2/3/4/5)',
        to: 'Central London (Tottenham Court Rd / Waterloo / Paddington)',
        mode: 'Elizabeth Line (Purple) → Jubilee/Bakerloo Tube or Bus 15/139',
        duration: '35–48 min',
        frequency: 'Every 5–10 min (05:10–23:55 daily)',
        bestTimeToTravel:
          'Avoid weekday 07:30–09:30 & 16:30–18:45 commuter peaks if carrying large suitcases; 10:00–15:30 has ample luggage space.',
        fares2026:
          '2026 TfL Airport Rate: £15.50/adult · £7.75/teen (ages 11–15 with Young Visitor Discount on Oyster). Family of 4 total: £46.50 (with 2 teens 11–15) or £62.00 (teens 16+).',
        ticketHowTo:
          'Adults & teens 16+: tap any contactless Visa/Mastercard or Apple Pay/Google Pay directly at the yellow Heathrow Underground barrier (one unique card/device per traveler). Ages 11–15: buy an Oyster card at Heathrow Underground ticket machine (£7 deposit/fee) and ask a TfL staff member at the counter to add the 50% Young Visitor Discount.',
        note: 'Do NOT pay £25–£40 for Heathrow Express unless staying directly inside Paddington—Elizabeth Line costs less and stops straight through central London.',
      },
      {
        step: 2,
        from: 'London St Pancras International',
        to: 'Paris Gare du Nord',
        mode: 'Eurostar High-Speed Rail (e320)',
        duration: '2h 16m',
        frequency: '14–17 departures daily (06:01–20:01, roughly every 60–90 min)',
        bestTimeToTravel:
          'Book the 09:31 or 10:31 mid-morning departure; arrive at St Pancras 75 minutes prior (08:15) to clear UK exit and French Schengen border control smoothly.',
        fares2026:
          '2026 Advance Standard Fare: £44–£85/person when booked 4–6 months ahead (£176–£340 total for 4 travelers; youth ages 12–25 occasionally see slight promotional savings). Inside 4 weeks fares jump to £150–£220/person.',
        ticketHowTo:
          'Book directly on eurostar.com or the Eurostar iOS/Android app. Select seats around a facing table-of-4 at no extra charge in Standard, and scan the mobile QR barcode at the St Pancras departure gates.',
        note: 'Zero liquid weight limits and 2 large suitcases + 1 hand bag per person included free.',
      },
      {
        step: 3,
        from: 'Central Paris (Châtelet-Les Halles / Nation)',
        to: 'Marne-la-Vallée / Chessy (Disneyland Paris Gates)',
        mode: 'RER A Suburban Express Train (Red Line — Direction Marne-la-Vallée Chessy)',
        duration: '38–42 min',
        frequency: 'Every 8–12 min (05:15–00:20 daily)',
        bestTimeToTravel:
          'Depart Central Paris between 10:00–15:30 (or after 19:30) to skip the heavy 08:00–09:30 and 17:30–19:30 weekday commuter crush on RER A.',
        fares2026:
          '2026 Île-de-France Flat Fare: €2.55 per person (ages 10+ pay full €2.55 flat Metro-Train-RER fare—old €5+ zone surcharges were abolished!). Family of 4 total: €10.20 (vs €85+ private taxi).',
        ticketHowTo:
          'Load "Metro-Train-RER" (€2.55) tickets onto a reusable Navigo Easy card (€2 card fee at any station kiosk/machine, one card per traveler) OR buy directly inside the Île-de-France Mobilités / Bonjour RATP smartphone app (iPhone Apple Wallet / Android NFC) and tap at the RER turnstiles.',
        note: 'Confirm the overhead platform screen shows "Marne-la-Vallée Chessy" (Mickey icon) since RER A splits eastward.',
      },
      {
        step: 4,
        from: 'Marne-la-Vallée / Chessy (Outside Disney Gates)',
        to: 'Paris Charles de Gaulle (CDG) Airport Terminal 2',
        mode: 'SNCF TGV INOUI / OUIGO High-Speed Rail',
        duration: '9–11 min',
        frequency: '15–22 trains daily (06:30–21:45, roughly every 30–60 min)',
        bestTimeToTravel:
          'Aim for a train arriving at CDG Terminal 2 at least 3.5 hours before an international flight; mid-day departures have the calmest platform boarding.',
        fares2026:
          '2026 Advance TGV Fare: €19–€29/adult · ~€15–€22/teen (youth 12–25 with Carte Avantage or standard advance). Family of 4 total: ~€76–€110 (far faster and often cheaper than a €90–€120 Magical Shuttle bus or taxi).',
        ticketHowTo:
          'Book 4–8 weeks in advance on sncf-connect.com or Trainline app and scan the QR code on your phone at the Marne-la-Vallée TGV platform gate.',
        note: 'Drops you directly inside CDG Terminal 2 TGV station—take escalators straight up to check-in desks or the free CDGVAL shuttle to Terminal 1/3.',
      },
    ],
  },
  {
    id: RouteOrderId.DLP_PARIS_LONDON,
    title: 'Disneyland Paris → Central Paris → London',
    sequenceLabel: 'Reverse Order',
    isRecommended: false,
    airportStrategy: 'Open-Jaw Flight: Arrive Paris (CDG) · Depart London (LHR / LGW)',
    hotelCheckIns: 3,
    luggageFriction: 'Low-Moderate — Direct CDG-to-Disney start, Eurostar mid-trip',
    energyArc: 'Immediate Thrills → Culture → Theater Finale',
    summary:
      'Fly into CDG, ride the 10-minute TGV straight to Disneyland Paris to power through jet lag outdoors, move into Central Paris, and end with London West End theater and departures from Heathrow.',
    pros: [
      'Outdoors sunlight and rollercoasters on Day 1 help teenagers push past morning jet lag.',
      'Ideal if return flight schedules from London Heathrow are significantly cheaper or nonstop.',
      'Ending in London gives teens English-speaking comfort when everyone is slightly tired by Day 9.',
    ],
    cons: [
      'Moving from high-adrenaline Disneyland into Central Paris museums can trigger comparison fatigue for teens.',
      'Morning flight arrivals at CDG often mean waiting until 15:00 for Disney hotel room check-in while jet-lagged.',
    ],
    legs: [
      {
        step: 1,
        from: 'Paris Charles de Gaulle (CDG Terminal 2)',
        to: 'Disneyland Paris (Marne-la-Vallée Chessy)',
        mode: 'SNCF TGV INOUI (High-Speed Rail) or Magical Shuttle Coach',
        duration: '10 min (TGV) / 45–60 min (Bus)',
        frequency: 'TGV every 30–60 min (07:00–21:30); Shuttle every 45 min',
        bestTimeToTravel:
          'Book a flexible/later TGV slot 90 mins after scheduled flight landing to absorb passport control delays.',
        fares2026:
          '2026 Fares: TGV €19–€29/person (€76–€116 for 4); Magical Shuttle €24/adult & €11/child under 12 (teens 12+ pay €24).',
        ticketHowTo:
          'Buy TGV tickets on sncf-connect.com or at the yellow/blue SNCF kiosks in CDG Terminal 2; Magical Shuttle tickets at magicalshuttle.co.uk.',
        note: 'Use Disney Express luggage drop at Marne-la-Vallée station so you enter the parks hands-free before 15:00 room check-in.',
      },
      {
        step: 2,
        from: 'Marne-la-Vallée / Chessy (Disneyland Paris)',
        to: 'Central Paris (Châtelet-Les Halles / Charles de Gaulle-Étoile)',
        mode: 'RER A Suburban Rail (Westbound toward Saint-Germain-en-Laye / Poissy)',
        duration: '40–45 min',
        frequency: 'Every 8–12 min (05:15–00:20 daily)',
        bestTimeToTravel:
          'Leave Disney between 10:00 and 15:30 to avoid crowded morning inbound commuters (07:45–09:30).',
        fares2026:
          '2026 Flat Fare: €2.55 per traveler (ages 10+). Family of 4 total: €10.20.',
        ticketHowTo:
          'Tap Navigo Easy card (€2) or Île-de-France Mobilités smartphone ticket loaded with a €2.55 Metro-Train-RER fare.',
        note: 'Check station screens for Châtelet-Les Halles or Nation depending on your hotel.',
      },
      {
        step: 3,
        from: 'Paris Gare du Nord',
        to: 'London St Pancras International',
        mode: 'Eurostar High-Speed Rail',
        duration: '2h 17m',
        frequency: '14–17 departures daily (07:13–21:13)',
        bestTimeToTravel:
          'Mid-morning 10:13 departure; arrive 75 minutes prior at Gare du Nord for French exit and UK border control.',
        fares2026:
          '2026 Advance Fare: £44–£85/person (£176–£340 for 4) booked 4–6 months ahead.',
        ticketHowTo:
          'Book via eurostar.com / Eurostar app and scan QR pass at Gare du Nord Eurostar mezzanine.',
        note: 'Have UK ETA (Electronic Travel Authorisation) completed online prior to departure if required for your passport.',
      },
      {
        step: 4,
        from: 'Central London (Paddington / Tottenham Court Rd / Liverpool St)',
        to: 'Heathrow Airport (LHR)',
        mode: 'Elizabeth Line (Purple)',
        duration: '30–40 min',
        frequency: 'Every 5–10 min (05:00–23:45)',
        bestTimeToTravel:
          'Depart central London outside 07:30–09:30 & 16:30–18:45 rush hours, arriving at LHR 3 hours pre-flight.',
        fares2026:
          '2026 TfL Airport Fare: £15.50/adult · £7.75/teen (11–15 Young Visitor Discount). Family of 4: £46.50–£62.00.',
        ticketHowTo:
          'Tap the exact same contactless card/Apple Pay (or Oyster card for teens 11–15) used during your London stay.',
        note: 'Confirm whether your train terminates at Terminal 2 & 3, Terminal 4, or Terminal 5 on the overhead platform display.',
      },
    ],
  },
  {
    id: RouteOrderId.PARIS_LONDON_DLP,
    title: 'Central Paris → London → Disneyland Paris',
    sequenceLabel: 'Double-Crossing (Not Advised)',
    isRecommended: false,
    airportStrategy: 'Complex — Requires backtracking across the English Channel',
    hotelCheckIns: 3,
    luggageFriction: 'High — Backtracks through Paris/Channel twice',
    energyArc: 'Fragmented Transit',
    summary:
      'Only viable if forced by round-trip London flights or specific event dates. Crossing back from London to France solely for Disneyland Paris sacrifices half a touring day to border queues and luggage transfers.',
    pros: [
      'Works only if you must fly round-trip out of a single airport and pair it with a specific date constraint.',
    ],
    cons: [
      'Wastes ~5 hours door-to-door crossing the Channel a second time.',
      'Doubles Eurostar family ticket costs (~£400–£650 extra for four travelers).',
    ],
    legs: [
      {
        step: 1,
        from: 'Paris CDG Airport',
        to: 'Central Paris (Châtelet-Les Halles)',
        mode: 'RER B Express (Blue Line)',
        duration: '35–42 min',
        frequency: 'Every 10–15 min (04:56–23:50)',
        bestTimeToTravel: '10:00–15:30 outside morning/evening commuter peaks.',
        fares2026: '2026 Paris Airport Fare: €14.00/person (€56.00 for 4).',
        ticketHowTo:
          'Buy the €14 "Paris Region ⇄ Airports" ticket via Île-de-France Mobilités app or CDG station kiosk (standard €2.55 tickets will not open airport gates).',
        note: 'Take an express RER B train stopping only at Gare du Nord and Châtelet.',
      },
      {
        step: 2,
        from: 'Paris Gare du Nord',
        to: 'London St Pancras International',
        mode: 'Eurostar High-Speed Rail',
        duration: '2h 16m',
        frequency: '14–17 departures daily',
        bestTimeToTravel: 'Mid-morning (arrive 75 min prior).',
        fares2026: '£44–£85/person advance (£176–£340 for 4).',
        ticketHowTo: 'Book in advance on eurostar.com.',
        note: 'First Channel crossing.',
      },
      {
        step: 3,
        from: 'London St Pancras',
        to: 'Paris Gare du Nord → Marne-la-Vallée',
        mode: 'Eurostar + RER B (1 stop) + RER A',
        duration: '4h 30m door-to-door',
        frequency: 'Eurostar every 60–90 min; RER A every 8–12 min',
        bestTimeToTravel: 'Morning Eurostar to reach Disney by mid-afternoon.',
        fares2026: '£176–£340 Eurostar + €10.20 RER A for 4.',
        ticketHowTo: 'eurostar.com + €2.55 Navigo Easy / IDF Mobilités app.',
        note: 'Redundant second international border crossing with full family luggage.',
      },
    ],
  },
];

export function getRouteOrderById(id: RouteOrderId): RouteOrderOption {
  logFunctionCall('getRouteOrderById', { id });
  return ROUTE_ORDER_OPTIONS.find((option) => option.id === id) ?? ROUTE_ORDER_OPTIONS[0];
}
