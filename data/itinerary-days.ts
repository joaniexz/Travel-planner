import { CityId, ItineraryDay, MuseumLoad, PaceMode } from '@/types/travel';
import { logFunctionCall } from '@/lib/logger';

export const ITINERARY_DAYS: ItineraryDay[] = [
  {
    dayNumber: 1,
    city: CityId.LONDON,
    cityLabel: 'London',
    title: 'Arrival, Borough Market, Thames Speedboat & Milk Train',
    subtitle: 'Beat jet lag with street-food grazing, river adrenaline, and cotton-candy soft serve',
    walkingKm: 6.4,
    museumLoad: MuseumLoad.NONE,
    baseHotelArea: 'South Bank / Waterloo',
    foodAnchor: 'Borough Market (raclette, Humble Crumble) · Covent Garden & Milk Train Cafe',
    pacingTip: 'Stay outdoors until 19:00 so daylight, a 35mph Thames speedboat blast, and hyper-visual treats erase arrival grogginess.',
    slots: {
      morning: {
        timeOfDay: 'Morning',
        title: 'Airport Express & Hotel Bag Drop',
        description:
          'Ride the Elizabeth Line into central London, drop luggage at your South Bank/Waterloo hotel, and fuel up with espresso and pastries.',
        teenHook: 'Apple Pay / contactless tap-in on the Elizabeth Line feels effortless right off the plane.',
        adultHighlight: 'Smooth English-language arrival with zero car rental or baggage stress.',
        durationLabel: '2.5 hrs',
        bookingNeeded: false,
      },
      afternoonBalanced: {
        timeOfDay: 'Afternoon',
        title: 'Borough Market Lunch & Thames RIB Speedboat Ride',
        description:
          'Graze lunch across Borough Market (melted raclette, paella, Humble Crumble warm fruit crumble), walk the South Bank promenade, and board a 50-minute Thames RIB speedboat blasting under Tower Bridge.',
        teenHook: 'High-speed 35mph river twists with onboard music plus 100+ choose-your-own food stalls.',
        adultHighlight: 'Iconic Tower Bridge and St Paul’s skyline from water level.',
        durationLabel: '3.5 hrs',
        bookingNeeded: true,
      },
      afternoonTeenSwap: {
        timeOfDay: 'Afternoon',
        title: 'Borough Market, London Eye & Southbank Skatepark',
        description:
          'Pair Borough Market street-food lunch with the London Eye skyline pod and the graffiti-covered Southbank skatepark.',
        teenHook: 'Instant city orientation without tired legs.',
        adultHighlight: 'Golden-hour panoramic views over Westminster.',
        durationLabel: '3 hrs',
        bookingNeeded: true,
      },
      afternoonCultureSwap: {
        timeOfDay: 'Afternoon',
        title: 'St Paul’s Cathedral Dome & Borough Market',
        description:
          'Graze Borough Market for lunch, cross the Millennium Bridge, and climb St Paul’s 528 steps to the Golden Gallery.',
        teenHook: 'Whispering Gallery acoustics and an active dome climb.',
        adultHighlight: 'Wren’s Baroque architecture and Thames panorama.',
        durationLabel: '3 hrs',
        bookingNeeded: true,
      },
      evening: {
        timeOfDay: 'Evening',
        title: 'Covent Garden Casual Dinner & Milk Train Cafe Dessert',
        description:
          'Eat early at Seven Dials Market or Flat Iron Covent Garden, then walk 3 minutes to Milk Train Cafe for soft-serve ice cream wrapped in massive clouds of spun candy floss.',
        teenHook: 'Milk Train’s viral cotton-candy-halo cones inside a retro train-station parlor.',
        adultHighlight: 'Lively Covent Garden street performers and fairy-lit Neal’s Yard.',
        durationLabel: '2 hrs',
        bookingNeeded: true,
      },
    },
  },
  {
    dayNumber: 2,
    city: CityId.LONDON,
    cityLabel: 'London',
    title: 'Natural History, Science Museum, Frameless & Camden',
    subtitle: 'South Kensington discovery, 360° digital art, Mayfair/Camden Fish & Chips & Chin Chin Labs',
    walkingKm: 7.9,
    museumLoad: MuseumLoad.CAPPED_90M,
    baseHotelArea: 'South Bank / Waterloo',
    foodAnchor: 'The Mayfair Chippy (or Poppies Camden) · Camden Market & Chin Chin Labs',
    pacingTip: 'Split South Kensington into two crisp 75-minute targeted hits, pivot to Frameless, then reward teens with liquid-nitrogen ice cream in Camden.',
    slots: {
      morning: {
        timeOfDay: 'Morning',
        title: 'Natural History Museum & Science Museum Express (2 × 75m)',
        description:
          'Enter Natural History Museum at 10:00 opening for Hintze Hall’s blue whale, the animatronic T-Rex, and Earth Hall volcano escalator; step next door to the Science Museum for Exploring Space (Apollo 10) and Wonderlab.',
        teenHook: 'Interactive physics demos, real space capsules, and earthquake simulators—never passive glass-case browsing.',
        adultHighlight: 'Hintze Hall’s cathedral-like Victorian terracotta architecture.',
        durationLabel: '2.5–3 hrs total',
        bookingNeeded: true,
      },
      afternoonBalanced: {
        timeOfDay: 'Afternoon',
        title: 'Frameless Immersive Art & The Mayfair Chippy',
        description:
          'Ride the Tube to Marble Arch for Frameless (four 360° interactive rooms projecting Van Gogh, Dalí & Monet), then walk 5 minutes to The Mayfair Chippy for Michelin-recognized beer-battered cod and triple-cooked chips.',
        teenHook: 'Motion-reactive digital art rooms followed by top-tier crispy fish & chips.',
        adultHighlight: 'Masterpieces reimagined at architectural scale and refined British classics.',
        durationLabel: '2.5–3 hrs',
        bookingNeeded: true,
      },
      afternoonTeenSwap: {
        timeOfDay: 'Afternoon',
        title: 'Frameless + Oxford Street & Carnaby Flagships',
        description:
          'After Frameless at Marble Arch, stroll east down Oxford Street and dip into Carnaby’s sneaker and vintage boutiques.',
        teenHook: 'High-impact digital art followed by iconic London streetwear browsing.',
        adultHighlight: 'Liberty London Tudor architecture and Kingly Court coffee.',
        durationLabel: '3 hrs',
        bookingNeeded: true,
      },
      afternoonCultureSwap: {
        timeOfDay: 'Afternoon',
        title: 'Victoria & Albert Museum Highlights + Hyde Park Walk',
        description:
          'Add 75 minutes inside the V&A’s Cast Courts and Fashion gallery before walking across Hyde Park to Marble Arch and The Mayfair Chippy.',
        teenHook: 'Stage costumes, armor, and monumental plaster casts.',
        adultHighlight: 'Serene V&A courtyard cafe and Kensington Gardens stroll.',
        durationLabel: '2.5 hrs',
        bookingNeeded: true,
      },
      evening: {
        timeOfDay: 'Evening',
        title: 'Camden Market, Poppies & Chin Chin Labs Nitrogen Ice Cream',
        description:
          'Ride the Northern Line to Camden Lock for vintage denim, Cyberdog, bao/halloumi stalls (or retro Poppies Fish & Chips), and finish at Chin Chin Labs for -196°C liquid-nitrogen ice cream crowned with torched marshmallow fluff.',
        teenHook: 'Billowing liquid-nitrogen clouds at Chin Chin Labs plus Camden’s alternative thrift & music lanes.',
        adultHighlight: 'Historic Stables Market brick arches and evening Regent’s Canal atmosphere.',
        durationLabel: '2.5 hrs',
        bookingNeeded: false,
      },
    },
  },
  {
    dayNumber: 3,
    city: CityId.LONDON,
    cityLabel: 'London',
    title: 'Imperial War Museum, Churchill War Rooms & Chinatown',
    subtitle: 'Living WWII storytelling balanced with hand-pulled noodles, ramen & West End energy',
    walkingKm: 8.2,
    museumLoad: MuseumLoad.CAPPED_90M,
    baseHotelArea: 'South Bank / Waterloo',
    foodAnchor: 'Chinatown (Kung Fu Noodle, Bun House, Bubblewrap Waffle) & Bone Daddies / Marugame Udon',
    pacingTip: 'IWM’s hanging aircraft atrium and Churchill’s preserved map room tell gripping human stories—keep each to 75–90 minutes with a fresh-air walk along Westminster in between.',
    slots: {
      morning: {
        timeOfDay: 'Morning',
        title: 'Imperial War Museum (IWM London, 90-Min Cap)',
        description:
          'Walk 12 minutes from Waterloo to IWM London at 10:00 opening. Explore the dramatic Atrium (suspended Spitfire, Harrier jet, V-2 rocket) and targeted 20th-century conflict galleries.',
        teenHook: 'Full-scale fighter planes, Cold War tech, and immersive trench recreations.',
        adultHighlight: 'Moving, brilliantly curated modern history with free general admission.',
        durationLabel: '1.5–2 hrs',
        bookingNeeded: false,
      },
      afternoonBalanced: {
        timeOfDay: 'Afternoon',
        title: 'Big Ben Walk & Churchill War Rooms (90-Min Cap)',
        description:
          'Cross Westminster Bridge past Big Ben for photos, grab a quick cafe lunch near Whitehall, and descend into the 1945 underground Cabinet War Rooms & Map Room.',
        teenHook: 'Top-secret WWII underground bunkers preserved exactly as staff left them in 1945.',
        adultHighlight: 'Engaging audio drama bringing the Blitz command bunker to life.',
        durationLabel: '3 hrs',
        bookingNeeded: true,
      },
      afternoonTeenSwap: {
        timeOfDay: 'Afternoon',
        title: 'Churchill War Rooms + Outernet 360° Soho Screens',
        description:
          'Pair the 75-minute underground bunker tour with a walk up Whitehall and Trafalgar Square to Outernet’s massive interactive LED atrium at Tottenham Court Road.',
        teenHook: 'Secret WWII bunker contrast against futuristic neon digital walls.',
        adultHighlight: 'Trafalgar Square and Leicester Square afternoon energy.',
        durationLabel: '3 hrs',
        bookingNeeded: true,
      },
      afternoonCultureSwap: {
        timeOfDay: 'Afternoon',
        title: 'Churchill War Rooms + Westminster Abbey',
        description:
          'Tour Churchill’s underground bunker followed by a 60-minute loop through Westminster Abbey’s Coronation Chair and Poets’ Corner.',
        teenHook: 'Royal tombs and wartime espionage in one historic square mile.',
        adultHighlight: 'Unmatched 1,000-year British political and royal heritage.',
        durationLabel: '3.5 hrs',
        bookingNeeded: true,
      },
      evening: {
        timeOfDay: 'Evening',
        title: 'Chinatown / Soho Asian Food Crawl & West End Show',
        description:
          'Dine on hand-pulled biang-biang noodles at Kung Fu Noodle, steamed pork belly bao at Bun House, or tonkotsu ramen at Bone Daddies / Marugame Udon, then grab Bubblewrap Hong Kong egg waffles before an optional 19:30 West End show.',
        teenHook: 'Chefs pulling noodles in the window, crispy Bubblewrap gelato cones, and boba tea.',
        adultHighlight: 'Electric Chinatown/Soho dining energy and a seated West End finale.',
        durationLabel: '3.5 hrs',
        bookingNeeded: true,
      },
    },
  },
  {
    dayNumber: 4,
    city: CityId.LONDON,
    cityLabel: 'London',
    title: 'Tower of London, Spitalfields & Poppies Fish & Chips',
    subtitle: 'Medieval true crime at opening bell, street art, Poppies & Eurostar prep',
    walkingKm: 7.5,
    museumLoad: MuseumLoad.LOW,
    baseHotelArea: 'South Bank / Waterloo',
    foodAnchor: 'Old Spitalfields Market · Poppies Fish & Chips (Spitalfields) & Brick Lane Beigel Bake',
    pacingTip: 'Tower of London is open-air battlements and storytelling—pair it with East London street food and Poppies Fish & Chips so Day 4 finishes smoothly before Eurostar.',
    slots: {
      morning: {
        timeOfDay: 'Morning',
        title: 'Tower of London Opening Entry (09:00)',
        description:
          'Enter at 09:00 straight to the Crown Jewels before lines build, then join a witty 45-minute Yeoman Warder (Beefeater) tour across the medieval courtyards.',
        teenHook: 'Tudor true-crime executions, suits of armor, ravens, and massive diamonds.',
        adultHighlight: '1,000-year Norman White Tower and Tower Bridge views.',
        durationLabel: '2.5 hrs',
        bookingNeeded: true,
      },
      afternoonBalanced: {
        timeOfDay: 'Afternoon',
        title: 'Old Spitalfields Market & Shoreditch Street Art',
        description:
          'Walk 15 minutes north from the Tower to Old Spitalfields Market for casual Pan-Asian/street-food grazing (and Humble Crumble), then hunt Shoreditch street murals and Brick Lane vintage basements.',
        teenHook: 'Thrift denim, sneaker culture, Banksy-era murals, and 24-hour salt-beef bagels.',
        adultHighlight: 'Historic Georgian East End streets and artisan design stalls.',
        durationLabel: '3 hrs',
        bookingNeeded: false,
      },
      afternoonTeenSwap: {
        timeOfDay: 'Afternoon',
        title: 'Battersea Power Station & Lift 109 Chimney',
        description:
          'Hop on the Uber Boat river bus from Tower Pier to Battersea Power Station, browse the turbine halls, and ride the glass elevator 109m up inside the smokestack.',
        teenHook: 'Fast river boat + 360° glass chimney viewpoint.',
        adultHighlight: 'Iconic Art Deco industrial architecture restored.',
        durationLabel: '3 hrs',
        bookingNeeded: true,
      },
      afternoonCultureSwap: {
        timeOfDay: 'Afternoon',
        title: 'British Museum 90-Minute Rosetta & Parthenon Sprint',
        description:
          'Take the Tube to Bloomsbury for a strict 90-minute 5-artifact loop (Rosetta Stone, Assyrian Lions, Sutton Hoo) before exploring indie bookshops.',
        teenHook: 'Fast treasure-hunt route instead of wandering 80 rooms.',
        adultHighlight: 'World-class antiquities beneath Foster’s Great Court roof.',
        durationLabel: '2 hrs',
        bookingNeeded: true,
      },
      evening: {
        timeOfDay: 'Evening',
        title: 'Poppies Fish & Chips (or Dishoom) & Early Eurostar Pack',
        description:
          'Enjoy classic newspaper-wrapped haddock and chips at retro Poppies in Spitalfields (or Dishoom Bombay comfort food), then pack bags neatly for tomorrow’s 09:30 Eurostar.',
        teenHook: '1950s retro diner atmosphere, crispy fish & chips, and sticky toffee pudding.',
        adultHighlight: 'Relaxed final London evening with smooth morning departure prep.',
        durationLabel: '2 hrs',
        bookingNeeded: true,
      },
    },
  },
  {
    dayNumber: 5,
    city: CityId.PARIS,
    cityLabel: 'Central Paris',
    title: 'Eurostar Crossing, Le Marais & Seine Twilight Cruise',
    subtitle: 'City-center to city-center in 2h 16m—zero museum walls on arrival day',
    walkingKm: 6.5,
    museumLoad: MuseumLoad.NONE,
    baseHotelArea: 'Le Marais / Saint-Germain-des-Prés',
    foodAnchor: 'L’As du Fallafel & Glace Bachir (Le Marais) · Berthillon / Amorino & Petit Bao',
    pacingTip: 'Treat Eurostar arrival afternoon as pure sensory Paris: pastries, cobblestone lanes, pistachio-crusted gelato, and an open-air boat ride.',
    slots: {
      morning: {
        timeOfDay: 'Morning',
        title: 'Eurostar St Pancras → Paris Gare du Nord (09:30 train)',
        description:
          'Check out, walk or cab to St Pancras 75 minutes prior, glide beneath the English Channel at 300 km/h, and drop bags at your Paris hotel by 13:30.',
        teenHook: 'Watching English countryside turn into French villages in two hours.',
        adultHighlight: 'No baggage carousels or distant airport transfers.',
        durationLabel: '3.5 hrs door-to-door',
        bookingNeeded: true,
      },
      afternoonBalanced: {
        timeOfDay: 'Afternoon',
        title: 'Le Marais Stroll, Glace Bachir & Jacques Genin Chocolates',
        description:
          'Grab warm falafel on Rue des Rosiers, lounge at Place des Vosges, then stop by Glace Bachir (organic ice cream rolled in crushed pistachios) or Jacques Genin for sculptural fruit jellies & chocolates.',
        teenHook: 'Vibrant pistachio-crusted Bachir cones, vintage Levi’s shops & bustling Rue des Rosiers.',
        adultHighlight: 'Paris’s oldest planned royal square (1612) and master chocolatier tastings.',
        durationLabel: '3 hrs',
        bookingNeeded: false,
      },
      afternoonTeenSwap: {
        timeOfDay: 'Afternoon',
        title: 'Canal Saint-Martin Walk & Gros Bao Dim Sum',
        description:
          'Walk along the tree-lined Canal Saint-Martin iron footbridges, browse streetwear boutiques, and grab fluffy bao buns or soup dumplings at Gros Bao.',
        teenHook: 'Young Parisian hangout vibe, canal footbridges, and bamboo steamer baskets.',
        adultHighlight: 'Cast-iron canal locks and indie bakeries like Du Pain et des Idées.',
        durationLabel: '3 hrs',
        bookingNeeded: false,
      },
      afternoonCultureSwap: {
        timeOfDay: 'Afternoon',
        title: 'Carnavalet Museum (Free Paris History, 60-Min Cap)',
        description:
          'Stroll through the courtyard gardens of Musée Carnavalet in Le Marais—historic shop signs and French Revolution artifacts—followed by Pozzetto artisan gelato.',
        teenHook: 'Marie Antoinette’s personal items and guillotine-era curiosities in 60 minutes flat.',
        adultHighlight: 'Two Renaissance townhouses with serene manicured courtyards.',
        durationLabel: '2 hrs',
        bookingNeeded: false,
      },
      evening: {
        timeOfDay: 'Evening',
        title: 'Sunset Seine Cruise, Berthillon / Amorino & Petit Bao',
        description:
          'Grab artisan gelato from Berthillon or rose-petal cones at Amorino on Île Saint-Louis before boarding a 1-hour Pont Neuf sunset cruise, then finish with Shanghai soup dumplings at Petit Bao.',
        teenHook: 'Sculpted rose-petal gelato topped with a macaron, sparkling Eiffel Tower, and steaming xiaolongbao.',
        adultHighlight: 'Golden-to-blue-hour reflections along UNESCO riverbanks.',
        durationLabel: '2.5 hrs',
        bookingNeeded: true,
      },
    },
  },
  {
    dayNumber: 6,
    city: CityId.PARIS,
    cityLabel: 'Central Paris',
    title: 'The Louvre 90-Minute Sprint & Tuileries / Champs-Élysées',
    subtitle: 'Conquer the world’s largest museum without burnout using the 3-Wing Strike',
    walkingKm: 8.4,
    museumLoad: MuseumLoad.CAPPED_90M,
    baseHotelArea: 'Le Marais / Saint-Germain-des-Prés',
    foodAnchor: 'Angelina (Rue de Rivoli) · Rue Sainte-Anne Ramen (Kodawari / Higuma / Aki) & Cédric Grolet',
    pacingTip: 'Never spend 4 hours in the Louvre with teenagers. Hit 5 icons in 90 minutes, recharge on Rue de Rivoli pastries, and end in Paris’s Little Tokyo on Rue Sainte-Anne.',
    slots: {
      morning: {
        timeOfDay: 'Morning',
        title: 'Louvre 09:00 Timed Entry — 90-Minute Precision Route',
        description:
          'Enter underground via Carrousel du Louvre (short security line). Hit Winged Victory, Crown Jewels/Apollo Gallery, Mona Lisa, Venus de Milo, and Napoleon III Apartments—then walk straight out.',
        teenHook: '90-minute "heist-style" checklist leaves everyone energized instead of dazed.',
        adultHighlight: 'Seeing the top masterworks at crisp morning opening before tour groups bottleneck.',
        durationLabel: '1.5 hrs',
        bookingNeeded: true,
      },
      afternoonBalanced: {
        timeOfDay: 'Afternoon',
        title: 'Angelina Hot Chocolate, Tuileries & Arc de Triomphe',
        description:
          'Walk out to Angelina on Rue de Rivoli for Mont-Blanc pastry & thick hot chocolate (or Cédric Grolet Opéra click-and-collect fruit pastries), lounge by the Tuileries fountain, and climb the Arc de Triomphe.',
        teenHook: 'Arc de Triomphe rooftop views + viral trompe-l’œil sculpted fruit pastries.',
        adultHighlight: 'Classic Haussmann grand axis and iconic Belle Époque tearoom craftsmanship.',
        durationLabel: '3.5 hrs',
        bookingNeeded: true,
      },
      afternoonTeenSwap: {
        timeOfDay: 'Afternoon',
        title: 'Palais Royal Columns, Aki Boulangerie & Covered Arcades',
        description:
          'Snap photos at the striped Buren Columns, grab melonpan & matcha cream puffs at Aki Boulangerie on Rue Sainte-Anne, and explore Galerie Vivienne & Passage Jouffroy.',
        teenHook: 'Japanese bakery treats + 19th-century glass arcades packed with manga & retro shops.',
        adultHighlight: 'Architectural calm of Palais Royal courtyard and historic passages.',
        durationLabel: '2.5 hrs',
        bookingNeeded: false,
      },
      afternoonCultureSwap: {
        timeOfDay: 'Afternoon',
        title: 'Musée de l’Orangerie Monet Water Lilies (45 Min)',
        description:
          'Walk through the Tuileries to the oval sunlit rooms of L’Orangerie for Monet’s monumental Water Lilies—peaceful and impossible to over-fatigue.',
        teenHook: 'Just two bright white oval rooms—visual immersion in under 45 minutes.',
        adultHighlight: 'Pure Impressionist serenity steps from Place de la Concorde.',
        durationLabel: '2 hrs',
        bookingNeeded: true,
      },
      evening: {
        timeOfDay: 'Evening',
        title: 'Rue Sainte-Anne Japanese Ramen (Kodawari / Higuma) or Pizzeria Popolare',
        description:
          'Dine in Paris’s vibrant Little Tokyo district along Rue Sainte-Anne—step inside Kodawari Tsukiji’s immersive fish-market ramen hall or Higuma for sizzling gyoza & ramen (or Pizzeria Popolare nearby for truffle pizza).',
        teenHook: 'Slurping ramen inside a hyper-detailed Tokyo alley movie set minutes from the Louvre.',
        adultHighlight: 'Authentic Japanese broth craft or lively Neapolitan wood-fired comfort food.',
        durationLabel: '2 hrs',
        bookingNeeded: false,
      },
    },
  },
  {
    dayNumber: 7,
    city: CityId.PARIS,
    cityLabel: 'Central Paris',
    title: 'Eiffel Tower, Rue Cler Picnic & Musée d’Orsay / Catacombs',
    subtitle: 'Left Bank market culture plus dramatic contrasts above and below Paris',
    walkingKm: 8.9,
    museumLoad: MuseumLoad.CAPPED_90M,
    baseHotelArea: 'Le Marais / Saint-Germain-des-Prés',
    foodAnchor: 'Rue Cler Picnic · Pierre Hermé Macarons & Amorino Rose-Petal Gelato',
    pacingTip: 'Climb stairs to Eiffel Tower Level 2 instead of waiting 90 minutes for ground elevators—faster, cheaper, and thrilling for teens.',
    slots: {
      morning: {
        timeOfDay: 'Morning',
        title: 'Eiffel Tower Stair Climb & Champ de Mars Lawn Picnic',
        description:
          '09:30 timed entry: take the stairs up 674 steps to the 2nd floor (or elevator to summit), then assemble a fresh market picnic from pedestrian Rue Cler (plus Amorino gelato right on the street).',
        teenHook: 'Climbing inside the iron lattice structure feels active and beats elevator lines.',
        adultHighlight: 'Rue Cler fromageries and patisseries without tourist-trap cafes.',
        durationLabel: '3 hrs',
        bookingNeeded: true,
      },
      afternoonBalanced: {
        timeOfDay: 'Afternoon',
        title: 'Musée d’Orsay Impressionist Top Floor (75-Min Cap)',
        description:
          'Take the escalators straight up to Level 5 (Van Gogh, Monet, Renoir, Degas) and pause behind the giant Beaux-Arts train station clock.',
        teenHook: 'Monumental 1900 train station clock silhouettes make unforgettable teen portraits.',
        adultHighlight: 'Starry Night Over the Rhône and Van Gogh’s final works in natural skylight.',
        durationLabel: '1.5 hrs',
        bookingNeeded: true,
      },
      afternoonTeenSwap: {
        timeOfDay: 'Afternoon',
        title: 'Paris Catacombs Underground Ossuary (Denfert-Rochereau)',
        description:
          'Descend 131 steps into Paris’s 18th-century limestone tunnels lined with historic ossuary walls—1 hour brisk self-guided audio walk.',
        teenHook: 'Macabre, atmospheric, and zero art-history lecturing.',
        adultHighlight: 'Fascinating urban engineering history beneath Haussmann Paris.',
        durationLabel: '1.5 hrs',
        bookingNeeded: true,
      },
      afternoonCultureSwap: {
        timeOfDay: 'Afternoon',
        title: 'Rodin Museum Sculpture Gardens & Invalides',
        description:
          'Walk through the rose gardens of Hôtel Biron to see The Thinker outdoors in sunlight rather than crowded indoor halls.',
        teenHook: 'Outdoor sculpture garden lets everyone move at their own pace with espresso.',
        adultHighlight: 'Rodin’s former mansion and golden dome of Les Invalides behind.',
        durationLabel: '2 hrs',
        bookingNeeded: true,
      },
      evening: {
        timeOfDay: 'Evening',
        title: 'Saint-Germain Bistro / Pasta, Pierre Hermé & Amorino Gelato',
        description:
          'Enjoy wood-fired pizza, fresh pasta, or savory crêpes in Saint-Germain, then walk down Rue Bonaparte for Pierre Hermé Ispahan macarons and Amorino flower-petal gelato cones.',
        teenHook: 'Pastel macaron gift boxes from Pierre Hermé and rose-shaped gelato cones at dusk.',
        adultHighlight: 'Literary cafes and lively Left Bank student quarter energy.',
        durationLabel: '2 hrs',
        bookingNeeded: false,
      },
    },
  },
  {
    dayNumber: 8,
    city: CityId.PARIS,
    cityLabel: 'Central Paris',
    title: 'Montmartre Hilltop, Sainte-Chapelle & Checkout Buffer',
    subtitle: 'Artisan hillside streets in the morning, slow afternoon or Notre-Dame island',
    walkingKm: 7.2,
    museumLoad: MuseumLoad.LOW,
    baseHotelArea: 'Le Marais / Saint-Germain-des-Prés',
    foodAnchor: 'Pink Mamma (Truffle Pasta & Pizza) · Bo&Mie Croissants & Montmartre',
    pacingTip: 'Keep Day 8 afternoon intentionally light after a memorable Pink Mamma truffle-pasta lunch—teens need sleep margin before two full theme park days.',
    slots: {
      morning: {
        timeOfDay: 'Morning',
        title: 'Montmartre, Sacré-Cœur & Pink Mamma Truffle Pasta Lunch',
        description:
          'Ride Metro Line 12 to Abbesses (or funicular), explore Place du Tertre artists and Sacré-Cœur views, then walk down the hill to Pink Mamma’s four-story floral glass conservatory for truffle pasta & wood-fired pizza.',
        teenHook: 'Pink Mamma’s dramatic top-floor glasshouse, truffle pasta, and tableside tiramisu.',
        adultHighlight: 'Quiet morning Montmartre lanes followed by effortless comfort dining.',
        durationLabel: '3.5 hrs',
        bookingNeeded: true,
      },
      afternoonBalanced: {
        timeOfDay: 'Afternoon',
        title: 'Sainte-Chapelle Stained Glass & Île de la Cité',
        description:
          '25-minute timed visit inside Sainte-Chapelle’s jewel-box Gothic stained glass, admire the restored Notre-Dame Cathedral facade, and pause at Shakespeare and Company.',
        teenHook: 'Short, awe-inspiring visual burst (under 30 mins inside) + indie English bookshop.',
        adultHighlight: '13th-century Gothic rose windows and historic island heart of Paris.',
        durationLabel: '2.5 hrs',
        bookingNeeded: true,
      },
      afternoonTeenSwap: {
        timeOfDay: 'Afternoon',
        title: 'Galeries Lafayette Rooftop & Cédric Grolet Opéra',
        description:
          'Take the escalator to the free Galeries Lafayette rooftop terrace for panoramic Paris views, then pick up sculpted fruit pastries or giant cookies near Opéra.',
        teenHook: 'Free rooftop skyline view + viral Parisian pastry photography.',
        adultHighlight: 'Art Nouveau stained-glass cupola and Garnier marble staircase.',
        durationLabel: '2.5 hrs',
        bookingNeeded: false,
      },
      afternoonCultureSwap: {
        timeOfDay: 'Afternoon',
        title: 'Versailles Half-Day Bike & Gardens Express',
        description:
          'Ride RER C to Versailles Château, rent bikes across the Grand Canal grounds, and tour only the Hall of Mirrors & Royal Apartments in 60 minutes.',
        teenHook: 'Cycling miles of royal canal paths beats shuffling through palace rooms.',
        adultHighlight: 'Sun King’s Hall of Mirrors and Le Nôtre’s formal gardens.',
        durationLabel: '4 hrs',
        bookingNeeded: true,
      },
      evening: {
        timeOfDay: 'Evening',
        title: 'Transfer to Disneyland Paris Hotel (or Final Paris Bistro)',
        description:
          'Option A: Take a 40-min private van/RER A out to Marne-la-Vallée after dinner so you wake up with Early Magic Time on Day 9. Option B: Sleep in Paris and catch the 07:45 RER A.',
        teenHook: 'Waking up steps from the park gates gives a 1-hour head start on coasters.',
        adultHighlight: 'Zero early-morning commuter luggage stress on Day 9.',
        durationLabel: '1.5 hrs',
        bookingNeeded: true,
      },
    },
  },
  {
    dayNumber: 9,
    city: CityId.DISNEYLAND,
    cityLabel: 'Disneyland Paris',
    title: 'Disneyland Park: Classic Coasters & Nighttime Drone Finale',
    subtitle: 'Rope-drop Discoveryland & Frontierland, midday table-service recharge',
    walkingKm: 11.5,
    museumLoad: MuseumLoad.NONE,
    baseHotelArea: 'Disneyland Paris Resort / Val d’Europe',
    foodAnchor: 'Walt’s An American Restaurant or Bistrot Chez Rémy (book 60 days out)',
    pacingTip: 'Book a 13:30 sit-down lunch inside the park—two hours off your feet keeps teenagers fresh until the 22:30 castle fireworks.',
    slots: {
      morning: {
        timeOfDay: 'Morning',
        title: 'Extra Magic Time → Big Thunder Mountain & Hyperspace Mountain',
        description:
          'Enter at 08:30 (if staying onsite) or 09:30 rope drop. Strike Big Thunder Mountain first (Paris’s best coaster on an island), then Pirates of the Caribbean and Star Wars Hyperspace Mountain.',
        teenHook: 'High-speed inversions and Big Thunder’s underwater mine tunnels.',
        adultHighlight: 'Stunning Sleeping Beauty Castle stained glass & dragon cavern underneath.',
        durationLabel: '4 hrs',
        bookingNeeded: true,
      },
      afternoonBalanced: {
        timeOfDay: 'Afternoon',
        title: 'Sit-Down Lunch Recharge, Phantom Manor & Indiana Jones',
        description:
          'Recharge with a booked lunch, ride Phantom Manor (Paris’s darker Western-themed Haunted Mansion), Indiana Jones Temple of Peril loop, and Fantasyland strolls.',
        teenHook: 'Single-Rider queues on Space Mountain and Indiana Jones slash waits by 60%.',
        adultHighlight: 'Gorgeous Victorian Main Street arcades and storybook park landscaping.',
        durationLabel: '4.5 hrs',
        bookingNeeded: true,
      },
      afternoonTeenSwap: {
        timeOfDay: 'Afternoon',
        title: 'Premier Access Thrill Marathon & Arcade Break',
        description:
          'Use individual Premier Access passes on Big Thunder and Hyperspace Mountain for instant re-rides without waiting in 55-minute queues.',
        teenHook: 'Maximum ride count with minimal line standing.',
        adultHighlight: 'Grab coffee on Main Street Gibson Girl terrace while teens re-ride.',
        durationLabel: '4.5 hrs',
        bookingNeeded: true,
      },
      afternoonCultureSwap: {
        timeOfDay: 'Afternoon',
        title: 'Castle Dragon Walk-Through & Alice’s Curious Labyrinth',
        description:
          'Explore Paris-exclusive walkthrough details: Sleeping Beauty’s animatronic dragon dungeon, Robinson’s Treehouse, and Liberty Arcade.',
        teenHook: 'Unique Paris-only park features not found in Florida or California.',
        adultHighlight: 'Impressive European craftsmanship and quiet garden corners.',
        durationLabel: '4 hrs',
        bookingNeeded: false,
      },
      evening: {
        timeOfDay: 'Evening',
        title: 'Disney Electrical Sky Parade & Castle Fireworks',
        description:
          'Claim a spot on Central Plaza 35 minutes prior for synchronized drones, castle projections, and fireworks.',
        teenHook: 'Hundreds of illuminated drones dancing over Sleeping Beauty Castle.',
        adultHighlight: 'Unforgettable trip climax uniting the whole family.',
        durationLabel: '2 hrs',
        bookingNeeded: false,
      },
    },
  },
  {
    dayNumber: 10,
    city: CityId.DISNEYLAND,
    cityLabel: 'Disneyland Paris',
    title: 'Walt Disney Studios / Avengers Campus & 10-Min TGV to CDG',
    subtitle: 'Marvel thrills, Twilight Zone Tower of Terror, and effortless airport departure',
    walkingKm: 9.2,
    museumLoad: MuseumLoad.NONE,
    baseHotelArea: 'Disneyland Paris Resort / CDG Departure',
    foodAnchor: 'PYM Kitchen buffet (oversized & miniature Marvel-themed plates)',
    pacingTip: 'Use hotel luggage storage or Marne-la-Vallée Disney Express so you tour hands-free before catching the 10-minute TGV to CDG.',
    slots: {
      morning: {
        timeOfDay: 'Morning',
        title: 'Crush’s Coaster & Marvel Avengers Campus Rope Drop',
        description:
          'Head straight to Crush’s Coaster (lowest wait of the day at opening), then walk into Avengers Campus for Spider-Man W.E.B. Adventure and Avengers Assemble: Flight Force.',
        teenHook: 'Spinning indoor Crush’s Coaster + high-G Iron Man launch coaster.',
        adultHighlight: 'Ratatouille: The Adventure 4D trackless ride in charming Paris Place de Rémy.',
        durationLabel: '3.5 hrs',
        bookingNeeded: true,
      },
      afternoonBalanced: {
        timeOfDay: 'Afternoon',
        title: 'Twilight Zone Tower of Terror & Park Hopper Re-Rides',
        description:
          'Conquer Tower of Terror (randomized drop sequences), grab lunch at Bistrot Chez Rémy or PYM Kitchen, and hop back to Disneyland Park for final souvenirs or one last Big Thunder run.',
        teenHook: 'Tower of Terror in Paris has unpredictable drop profiles loved by teens.',
        adultHighlight: 'World of Pixar and Mickey & the Magician stage show (30-min sit-down break).',
        durationLabel: '3.5 hrs',
        bookingNeeded: true,
      },
      afternoonTeenSwap: {
        timeOfDay: 'Afternoon',
        title: 'Tower of Terror Double-Drop + RC Racer & Flight Force',
        description:
          'Focus strictly on high-thrill rides via Single Rider lines while skipping slow shows.',
        teenHook: 'Pure adrenaline afternoon before heading to the airport.',
        adultHighlight: 'Relaxed espresso in Studio 1 / Place de Rémy while teens hit RC Racer.',
        durationLabel: '3 hrs',
        bookingNeeded: false,
      },
      afternoonCultureSwap: {
        timeOfDay: 'Afternoon',
        title: 'Mickey & the Magician Live Show + Val d’Europe Outlet',
        description:
          'Catch Broadway-style stage illusion show Mickey & the Magician, then walk or hop 1 RER stop to Val d’Europe for French pharmacy skincare & souvenirs.',
        teenHook: 'French sneaker/clothing brands and Ladurée macarons before flying home.',
        adultHighlight: 'Stress-free airport souvenir packing and French pharmacy haul.',
        durationLabel: '3 hrs',
        bookingNeeded: false,
      },
      evening: {
        timeOfDay: 'Evening',
        title: 'Marne-la-Vallée Chessy → CDG Airport (10-Min TGV)',
        description:
          'Collect bags from station/hotel luggage desk and board the 10-minute high-speed TGV straight into Charles de Gaulle Terminal 2 for your evening flight (or overnight airport hotel for early morning flights).',
        teenHook: 'Zero Parisian ring-road taxi gridlock on departure day.',
        adultHighlight: 'Cleanest possible European family departure logistics.',
        durationLabel: '1.5 hrs + flight',
        bookingNeeded: true,
      },
    },
  },
];

export function filterItineraryDays(cityFilter: CityId | 'all'): ItineraryDay[] {
  logFunctionCall('filterItineraryDays', { cityFilter });
  if (cityFilter === 'all') {
    return ITINERARY_DAYS;
  }
  return ITINERARY_DAYS.filter((day) => day.city === cityFilter);
}

export function resolveAfternoonSlot(day: ItineraryDay, paceMode: PaceMode) {
  logFunctionCall('resolveAfternoonSlot', { dayNumber: day.dayNumber, paceMode });
  if (paceMode === PaceMode.TEEN_THRILL) {
    return day.slots.afternoonTeenSwap;
  }
  if (paceMode === PaceMode.CULTURE_DEEP) {
    return day.slots.afternoonCultureSwap;
  }
  return day.slots.afternoonBalanced;
}
