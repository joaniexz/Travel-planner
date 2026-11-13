import { CityFareSummary, CityId, DailyTransitLeg } from '@/types/travel';
import { logFunctionCall } from '@/lib/logger';

export const CITY_FARE_SUMMARIES: CityFareSummary[] = [
  {
    city: CityId.LONDON,
    cityLabel: 'London (TfL 2026)',
    headline: 'Tap-to-Pay Contactless & 50% Teen Oyster Discount',
    adultFare: 'Tube/DLR Zone 1–2 single: £2.90–£3.10 · Red Bus Hopper (unlimited 60 min): £1.85',
    teenFare:
      'Ages 11–15: 50% off ALL fares & caps with Young Visitor Discount on Oyster (£1.45 Tube / £0.90 Bus). Ages 16+: adult rate.',
    dailyCapOrPass:
      'Adult Zone 1–2 Daily Cap: £8.90 (£4.45 for ages 11–15) · Bus-Only Daily Cap: £5.55 (£2.75 for ages 11–15). Do NOT buy paper Travelcards—caps automatically beat them.',
    familyOfFourMath:
      'Full day of unlimited London rides (2 Adults + 2 Teens ages 11–15): £8.90×2 + £4.45×2 = £26.70/day max (or £35.60/day if teens are 16+). Over 4 days: ~£106–£142 total + £46.50–£62 Heathrow Elizabeth Line arrival.',
    buyingSteps: [
      'Adults & teens 16+: use one separate contactless credit/debit card or Apple Pay / Google Pay device per person—never share one card across two people or daily capping breaks.',
      'Teens ages 11–15: buy a physical Visitor Oyster or standard Oyster card (£7 fee) at Heathrow or any Underground machine, then ask a TfL staff member at the station barrier/ticket window (with the teen present) to load the free 14-day Young Visitor Discount.',
      'Always tap IN and tap OUT on Tube, DLR, Overground, and Elizabeth Line yellow readers; on London red buses, tap IN only upon boarding.',
    ],
  },
  {
    city: CityId.PARIS,
    cityLabel: 'Central Paris & Disneyland (IDF Mobilités 2026)',
    headline: 'Simplified €2.55 Flat-Rate Region-Wide Fares',
    adultFare: 'Metro-Train-RER Ticket: €2.55 flat (covers ALL of Paris + Disneyland Paris RER A & Versailles!) · Bus/Tram: €2.05',
    teenFare:
      'Ages 10+ (all teenagers): pay the standard €2.55 Metro-Train-RER fare (€1.30 reduced fare applies only to ages 4–9).',
    dailyCapOrPass:
      'Skip expensive multi-day Paris Visite tourist passes! A 1-day Navigo Jour costs ~€12.30 (excl. airports), whereas 3–4 flat €2.55 rides cost €7.65–€10.20/day.',
    familyOfFourMath:
      'Typical Paris sightseeing day (3 Metro/RER rides × 4 people): €2.55 × 12 = €30.60/day. Disneyland RER A transfer for 4 people: €10.20 total (vs €85+ Uber/taxi). Over 4 Paris days: ~€120–€135 total.',
    buyingSteps: [
      'Paper magnetic cardboard tickets are phased out across Paris—every traveler needs either a smartphone pass or a physical Navigo Easy card.',
      'Option A (Easiest for Teens with Phones): Download the official Île-de-France Mobilités or Bonjour RATP app, buy packs of 10 or individual €2.55 "Metro-Train-RER" tickets, and tap your iPhone (Apple Wallet) or Android NFC at the turnstile.',
      'Option B (Physical Card): Buy one reusable Navigo Easy card per traveler (€2.00 one-time fee) at Gare du Nord or any Metro ticket machine and top up €2.55 Metro-Train-RER rides by card.',
    ],
  },
];

export const DAILY_TRANSIT_LEGS: DailyTransitLeg[] = [
  {
    id: 'london-southbank-covent',
    city: CityId.LONDON,
    cityLabel: 'London',
    dayReference: 'Day 1 · Evening',
    routeTitle: 'Borough Market / South Bank → Covent Garden & Milk Train',
    modeAndLine: 'Scenic Red Double-Decker Bus Route 15 or Route 139 (Upper Deck Front Seats) / Waterloo Jubilee-Northern',
    teenHighlight:
      'Grab the top-deck front seats on a red double-decker bus crossing Waterloo Bridge or Fleet Street past St Paul’s—free panoramic sightseeing at bus fare.',
    frequency: 'Every 6–9 min (05:30–00:30; Night Bus N15 runs 24/7)',
    bestTimeToTravel:
      '17:15–19:30; walking across Hungerford/Golden Jubilee pedestrian bridges or riding Bus 139 avoids crowded peak Tube platforms.',
    fares2026: '£1.85/adult · £0.90/teen (11–15) — includes 60-min unlimited Hopper bus transfers.',
    ticketHowTo: 'Tap contactless card/Apple Pay (or 11–15 discounted Oyster) on the yellow reader beside the bus driver—do NOT tap out when exiting.',
  },
  {
    id: 'london-southken-frameless-camden',
    city: CityId.LONDON,
    cityLabel: 'London',
    dayReference: 'Day 2 · Morning → Night',
    routeTitle: 'Waterloo → Natural History / Science Museum → Frameless → Camden Market',
    modeAndLine:
      'District/Circle Line (Green/Yellow) to South Kensington → Bus 360/14 or Circle Line to Marble Arch (Frameless) → Bus 274 or Northern Line to Camden Town',
    teenHighlight:
      'Riding Red Bus 274 from Marble Arch skirts Regent’s Park & London Zoo directly into Camden Market above ground.',
    frequency: 'Tube every 2–5 min (05:30–00:30); Bus 274 every 8–12 min',
    bestTimeToTravel:
      'Leave Waterloo at 09:30 (right after morning rush hour clears) to hit South Kensington at 10:00 opening; ride up to Camden at 17:30–18:00.',
    fares2026: 'All rides merge into the £8.90 adult / £4.45 teen (11–15) Zone 1–2 Daily Cap (£26.70/day for family of 4).',
    ticketHowTo: 'Tap in/out at South Kensington & Marble Arch Tube gates; tap in only on Bus 274.',
  },
  {
    id: 'london-iwm-churchill-soho',
    city: CityId.LONDON,
    cityLabel: 'London',
    dayReference: 'Day 3 · Morning → Night',
    routeTitle: 'Waterloo → Imperial War Museum → Churchill War Rooms → Chinatown / Soho',
    modeAndLine:
      '12-min walk (or Bakerloo Line 1 stop to Lambeth North) → Scenic Red Bus 12 / 53 / 453 across Westminster Bridge past Big Ben → Bus 24 / Northern Line to Leicester Square',
    teenHighlight:
      'Taking a red double-decker bus (Route 12 or 453) across Westminster Bridge puts teens eye-level with Big Ben and Parliament before stepping off at Whitehall.',
    frequency: 'Buses 12/24/453 every 4–7 min (24-hour service on Routes 12 & 24); Northern/Bakerloo every 2–4 min',
    bestTimeToTravel:
      '09:40 walk to IWM (after 06:30–09:30 peak); 12:30 midday bus hop across Westminster Bridge; walk up through Trafalgar Square into Chinatown around 17:30.',
    fares2026: 'Bus hops £1.85/adult (£0.90 teen 11–15), capped under £8.90/£4.45 if combined with Tube return.',
    ticketHowTo: 'Tap contactless or discounted Oyster upon boarding the bus; walk between Whitehall, Trafalgar Square, and Chinatown.',
  },
  {
    id: 'london-tower-dlr-shoreditch',
    city: CityId.LONDON,
    cityLabel: 'London',
    dayReference: 'Day 4 · Morning & Afternoon',
    routeTitle: 'Waterloo → Tower of London → Front-Seat DLR Joyride → Spitalfields / Poppies',
    modeAndLine:
      'Jubilee Line to London Bridge (or Bus 15) → Driverless DLR (Docklands Light Railway) from Tower Gateway to Canary Wharf/Greenwich & back → Windrush Overground or 15-min walk to Spitalfields',
    teenHighlight:
      'The DLR has NO driver cab—teens can sit in the very front panoramic seats and "drive" through skyscrapers between Tower Gateway and Canary Wharf!',
    frequency: 'DLR every 4–8 min (05:30–00:30 Mon–Sat, 07:00–23:30 Sun); Jubilee Line every 2–3 min',
    bestTimeToTravel:
      'Take Jubilee Line at 08:35 (arrive Tower of London for 09:00 bell—avoid 16:00–19:00 Canary Wharf office rush on DLR; ride DLR midday 12:00–15:00).',
    fares2026: 'Fully covered by the £8.90 adult / £4.45 teen (11–15) Zones 1–2 Daily Cap.',
    ticketHowTo:
      'DLR stations often have open platforms with freestanding yellow card readers—remember to tap IN and tap OUT on the platform pedestals to avoid maximum-fare penalties.',
  },
  {
    id: 'paris-louvre-sainte-anne-arc',
    city: CityId.PARIS,
    cityLabel: 'Central Paris',
    dayReference: 'Day 6 · Full Day',
    routeTitle: 'Le Marais/Châtelet → Louvre → Arc de Triomphe → Rue Sainte-Anne Ramen',
    modeAndLine: 'Paris Metro Line 1 (Yellow Driverless Line — Palais Royal-Musée du Louvre ↔ Charles de Gaulle-Étoile) + Metro Line 7/14 to Pyramides',
    teenHighlight:
      'Line 1 is automated with front-window views through illuminated tunnel junctions—plus zero stairs-and-traffic delays along Champs-Élysées.',
    frequency: 'Every 2–4 min (05:30–00:40 Sun–Thu, until 01:40 Fri–Sat)',
    bestTimeToTravel:
      'Board Line 1 at 08:30 (before peak Louvre queues) or walk; return from Arc de Triomphe toward Rue Sainte-Anne around 17:15 just ahead of the 17:30–19:30 crush.',
    fares2026: '€2.55 flat per ride for adults & teens 10+ (€10.20 per ride for 4 people).',
    ticketHowTo:
      'Tap Navigo Easy card or IDF Mobilités app on the green/purple Metro turnstile sensor; keep your validated device/card handy until exiting.',
  },
  {
    id: 'paris-eiffel-orsay-montmartre',
    city: CityId.PARIS,
    cityLabel: 'Central Paris',
    dayReference: 'Days 7 & 8',
    routeTitle: 'Eiffel Tower (Bir-Hakeim / École Militaire) → Musée d’Orsay → Montmartre & Pink Mamma',
    modeAndLine:
      'Metro Line 6 (Elevated Open-Air Viaduct crossing the Seine at Bir-Hakeim!) → RER C to Musée d’Orsay → Metro Line 12 to Abbesses (plus Montmartre Funicular!)',
    teenHighlight:
      'Metro Line 6 runs elevated outdoors across the Bir-Hakeim bridge with jaw-dropping Eiffel Tower views, and the Montmartre Funicular climbs Sacré-Cœur in 90 seconds for a single Metro ticket.',
    frequency: 'Metro Lines 6 & 12 every 3–5 min (05:30–00:40); Funicular every 3–5 min',
    bestTimeToTravel:
      'Take Line 6 to Bir-Hakeim around 09:00; ride Line 12 to Abbesses at 09:30 after peak office hours; avoid 17:30–19:30 RER C/Line 12 crush.',
    fares2026:
      '€2.55 flat Metro-Train-RER ticket covers Line 6, RER C, and Line 12 (€10.20 per trip for 4); the Montmartre Funicular takes a €2.05 Bus-Tram ticket (or walk 5 min from Abbesses).',
    ticketHowTo:
      'Load €2.55 Metro-Train-RER fares (and €2.05 Bus-Tram fares for standalone buses/Montmartre Funicular) on Navigo Easy or the IDF Mobilités app.',
  },
];

export function filterDailyTransitLegs(city: CityId | 'all'): DailyTransitLeg[] {
  logFunctionCall('filterDailyTransitLegs', { city });
  if (city === 'all') {
    return DAILY_TRANSIT_LEGS;
  }
  return DAILY_TRANSIT_LEGS.filter((leg) => leg.city === city);
}
