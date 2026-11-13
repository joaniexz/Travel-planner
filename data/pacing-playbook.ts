import { BookingChecklistItem, CityId, PacingRule, SplitReconvenePair } from '@/types/travel';

export const PACING_RULES: PacingRule[] = [
  {
    index: '01',
    title: 'Enforce the 90-Minute Museum Ceiling',
    summary: 'No gallery visit exceeds 90 minutes, regardless of how famous the collection is.',
    tactic:
      'Pre-select 4–6 anchor works (e.g., Rosetta Stone + Assyrian Lions at the British Museum; Winged Victory + Mona Lisa + Napoleon III Apartments at the Louvre). Walk directly to them at 09:00 opening and exit while energy is still high.',
    antiFatigueWhy:
      'Teenage attention drops sharply after 75 minutes indoors under fluorescent or dim gallery lighting, souring the rest of the day for everyone.',
  },
  {
    index: '02',
    title: 'Use the "1 Indoor + 1 Outdoor + 1 Market" Daily Ratio',
    summary: 'Never stack two seated or indoor museums on the same calendar day.',
    tactic:
      'Pair every morning indoor cultural block with an afternoon of walking markets, street art, river boats, or rooftop climbs (Arc de Triomphe, Eiffel stairs, Camden Lock, Borough Market).',
    antiFatigueWhy:
      'Alternating sensory modes resets mental fatigue—teens recover quickly when fresh air, movement, and food choices follow quiet galleries.',
  },
  {
    index: '03',
    title: 'Deploy "Split-and-Reconvene" 90-Minute Windows',
    summary: 'Two adults and two teenagers do not need to be attached at the hip for 240 hours.',
    tactic:
      'Pick museum hubs located steps away from vibrant teen neighborhoods (V&A beside Knightsbridge/Hyde Park; Louvre beside Palais Royal/Rue Saint-Honoré; Musée d’Orsay beside Saint-Germain). Set a 90-minute timer and a cafe meetup.',
    antiFatigueWhy:
      'Teenagers crave autonomy. Giving them 90 minutes to explore a safe pedestrian district on their own turns compliance into enthusiasm.',
  },
  {
    index: '04',
    title: 'Replace Sit-Down Lunches with Grazing Markets',
    summary: 'Two-hour formal lunches drain momentum; save long meals for evening recovery.',
    tactic:
      'Use Borough Market, Camden Lock, Rue des Rosiers falafel, and Rue Cler picnics for lunch—where four people with four cravings can eat in 35 minutes without menu negotiations.',
    antiFatigueWhy:
      'Adults get authentic culinary variety while teens avoid restless waiting between courses midday.',
  },
  {
    index: '05',
    title: 'Give Each Teenager Ownership of One Half-Day',
    summary: 'Co-authored itineraries eliminate passive "dragged along" resentment.',
    tactic:
      'Before departure, hand each teenager one afternoon block (e.g., Day 2 Camden/Shoreditch or Day 6 covered arcades/Canal Saint-Martin) and a realistic dining pick.',
    antiFatigueWhy:
      'When teens invest 20 minutes choosing a sneaker shop, vinyl store, or ramen spot, they willingly engage with the adults’ morning architecture.',
  },
  {
    index: '06',
    title: 'Leverage Single-Rider Queues & Timed Stair Climbs',
    summary: 'Waiting in static queues causes more exhaustion than walking 10 km.',
    tactic:
      'Always book timed-entry museum slots for 09:00, climb Eiffel Tower stairs rather than queuing 90 minutes for ground lifts, and use Disneyland Paris Single Rider lines on Hyperspace Mountain, Crush’s Coaster, and Flight Force.',
    antiFatigueWhy:
      'Eliminating 3–4 hours of dead standing time preserves leg strength and mood across all ten days.',
  },
];

export const SPLIT_RECONVENE_PAIRS: SplitReconvenePair[] = [
  {
    id: 'south-ken',
    city: CityId.LONDON,
    cityLabel: 'London',
    district: 'South Kensington · Exhibition Road',
    adultTrack: 'Victoria & Albert Museum (Cast Courts, British Galleries & Jewelry)',
    adultDuration: '90 min',
    teenTrack: 'Natural History Museum Dinosaurs/Volcanoes OR Harrods Food Hall & Knightsbridge',
    teenDuration: '90 min',
    reconvenePoint: 'Serpentine Bar & Kitchen in Hyde Park',
    sharedTreat: 'Lakeside ice cream & pedal-boat walk toward Kensington Gardens',
  },
  {
    id: 'louvre-palais',
    city: CityId.PARIS,
    cityLabel: 'Central Paris',
    district: '1st Arrondissement · Louvre & Palais Royal',
    adultTrack: 'Musée de l’Orangerie (Monet Water Lilies) or extra Louvre Dutch Masters wing',
    adultDuration: '75 min',
    teenTrack: 'Palais Royal Buren Columns photo walk & Galerie Vivienne vintage/manga arcades',
    teenDuration: '75 min',
    reconvenePoint: 'Café Kitsuné inside Jardin du Palais Royal',
    sharedTreat: 'Iced matcha, espressos, and Tuileries fountain chairs',
  },
  {
    id: 'orsay-st-germain',
    city: CityId.PARIS,
    cityLabel: 'Central Paris',
    district: '7th / 6th Arrondissement · Left Bank',
    adultTrack: 'Musée d’Orsay Sculpture Nave & Van Gogh Top Floor',
    adultDuration: '80 min',
    teenTrack: 'Boulevard Saint-Germain bookshops, vinyl stores & Ladurée pastry run',
    teenDuration: '80 min',
    reconvenePoint: 'Les Deux Magots terrace or Jardin du Luxembourg Medici Fountain',
    sharedTreat: 'Macarons and warm chocolate croissants overlooking the pond',
  },
  {
    id: 'disneyland-village',
    city: CityId.DISNEYLAND,
    cityLabel: 'Disneyland Paris',
    district: 'Discoveryland & Avengers Campus',
    adultTrack: 'Main Street Liberty Arcade, Phantom Manor & Gibson Girl espresso terrace',
    adultDuration: '60 min',
    teenTrack: 'Single-Rider blitz on Hyperspace Mountain, Indiana Jones & RC Racer',
    teenDuration: '60 min',
    reconvenePoint: 'Central Plaza Hub facing Sleeping Beauty Castle',
    sharedTreat: 'Churros & prime viewing spot for the evening drone and fireworks show',
  },
];

export const BOOKING_CHECKLIST: BookingChecklistItem[] = [
  {
    id: 'eurostar-tickets',
    city: CityId.PARIS,
    cityLabel: 'Cross-Channel',
    item: 'Eurostar (London St Pancras → Paris Gare du Nord)',
    leadTime: '4–6 months ahead',
    priority: 'Essential',
    notes: 'Prices triple inside 6 weeks; reserve a family table-of-4 seat configuration in Standard Premier or Standard.',
  },
  {
    id: 'dlp-tickets-hotel',
    city: CityId.DISNEYLAND,
    cityLabel: 'Disneyland Paris',
    item: 'Disneyland Paris 2-Day / 2-Park Tickets + Dining Reservations',
    leadTime: '3–6 months ahead',
    priority: 'Essential',
    notes: 'Download the Disneyland Paris app; Bistrot Chez Rémy and Walt’s open 60 days ahead (or earlier for Disney hotel guests).',
  },
  {
    id: 'eiffel-stairs',
    city: CityId.PARIS,
    cityLabel: 'Central Paris',
    item: 'Eiffel Tower Timed Entry (2nd Floor Stairs or Summit Lift)',
    leadTime: '60 days ahead (midnight Paris time)',
    priority: 'Essential',
    notes: 'Stair tickets release 14 days out and rarely sell out instantly; lift-to-summit releases 60 days out.',
  },
  {
    id: 'louvre-9am',
    city: CityId.PARIS,
    cityLabel: 'Central Paris',
    item: 'Louvre Museum 09:00 Morning Timed Slot',
    leadTime: '4–8 weeks ahead',
    priority: 'Essential',
    notes: 'Note: Louvre is closed Tuesdays. Ages under 18 enter free with valid passport/ID, but still require a free timed reservation.',
  },
  {
    id: 'west-end-show',
    city: CityId.LONDON,
    cityLabel: 'London',
    item: 'London West End Musical Seats (Day 3 Evening)',
    leadTime: '6–12 weeks ahead',
    priority: 'High',
    notes: 'Book directly via official theatre box offices (TodayTix or ATG) to avoid third-party reseller markups.',
  },
  {
    id: 'london-thrills-immersive',
    city: CityId.LONDON,
    cityLabel: 'London',
    item: 'Thames RIB Speedboat, Frameless & Churchill War Rooms',
    leadTime: '3–6 weeks ahead',
    priority: 'Essential',
    notes: 'Reserve Natural History & Science Museum free timed tickets plus Frameless Marble Arch, Thames Rockets speedboat, and Churchill War Rooms slots.',
  },
  {
    id: 'tower-of-london',
    city: CityId.LONDON,
    cityLabel: 'London',
    item: 'Tower of London 09:00 Entry',
    leadTime: '3–4 weeks ahead',
    priority: 'High',
    notes: 'Look for Family Saver bundles (2 adults + up to 3 children ages 5–17).',
  },
  {
    id: 'catacombs-orsay',
    city: CityId.PARIS,
    cityLabel: 'Central Paris',
    item: 'Paris Catacombs (7 days out) / Musée d’Orsay Timed Slot',
    leadTime: '1–4 weeks ahead',
    priority: 'High',
    notes: 'Catacombs tickets release strictly 7 days prior—set a calendar alert at 10:00 Paris time.',
  },
  {
    id: 'tgv-cdg',
    city: CityId.DISNEYLAND,
    cityLabel: 'Departure',
    item: 'SNCF TGV Marne-la-Vallée → CDG Airport (10-Min Train)',
    leadTime: '4–8 weeks ahead',
    priority: 'Optional',
    notes: 'Leave at least 3.5 hours between TGV arrival at CDG Terminal 2 and international flight takeoff.',
  },
];
