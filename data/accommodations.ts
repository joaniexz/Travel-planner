import { AccommodationProperty, CityId } from '@/types/travel';
import { logFunctionCall } from '@/lib/logger';

export const ACCOMMODATION_RECOMMENDATIONS: AccommodationProperty[] = [
  {
    id: 'park-plaza-county-hall',
    name: 'Park Plaza County Hall London',
    city: CityId.LONDON,
    cityLabel: 'London',
    neighborhood: 'South Bank / Waterloo',
    propertyType: 'Family Hotel',
    laundrySetup: 'On-site guest self-service launderette (washers & dryers)',
    diningSetup: 'Atrio Restaurant & Bar + 24-hour room service & kids/family breakfast',
    roomConfig: 'Studio & 1-Bedroom Suites with pull-out sofa bed + kitchenette/microwave',
    museumConnectivity:
      '10-min walk to Imperial War Museum · 12-min walk across Westminster Bridge to Churchill War Rooms · 20-min direct Tube from Westminster to South Kensington (Science & Natural History Museums)',
    whyFamiliesLoveIt:
      'Rare full-service London hotel that combines spacious 4-person suites, 24-hour room service, and an on-site self-service guest laundry room—ideal for mid-trip refreshes.',
    bookingTip:
      'Request a high-floor Studio or 1-Bedroom Suite facing the London Eye / Waterloo side for quieter teenager sleep.',
  },
  {
    id: 'fraser-suites-queens-gate',
    name: 'Fraser Suites Queens Gate',
    city: CityId.LONDON,
    cityLabel: 'London',
    neighborhood: 'South Kensington',
    propertyType: 'Aparthotel',
    laundrySetup: 'Complimentary guest self-service laundry room (washers & dryers)',
    diningSetup: 'On-site Dining Room & Bar (daily breakfast + evening lounge meals/room dining)',
    roomConfig: '1- & 2-Bedroom Serviced Apartments with full kitchen & dining table',
    museumConnectivity:
      '4-min walk to Natural History Museum & Science Museum · 15-min Circle/District Line ride to Westminster (Churchill War Rooms) & Waterloo (IWM)',
    whyFamiliesLoveIt:
      'Set in a stately Victorian townhouse steps from Exhibition Road’s science museums—teens can walk straight back to the apartment after 90-minute museum blocks.',
    bookingTip:
      'Book a 2-Bedroom Suite or 1-Bedroom Deluxe with extra rollaway for four separate sleeping spots.',
  },
  {
    id: 'locke-broken-wharf',
    name: 'Locke at Broken Wharf',
    city: CityId.LONDON,
    cityLabel: 'London',
    neighborhood: 'South Bank / Millennium Bridge',
    propertyType: 'Aparthotel',
    laundrySetup: 'Private in-apartment washer/dryer inside every 1- & 2-bedroom suite',
    diningSetup: 'On-site restaurant, cocktail bar & specialty coffee bar right in the lobby',
    roomConfig: 'Designer 1- & 2-Bedroom Suites with full kitchen, dishwasher & living area',
    museumConnectivity:
      '10-min walk across Millennium Bridge to Borough Market · 18-min walk or 2 stops to Imperial War Museum · Blackfriars Circle/District Line direct to South Kensington & Westminster',
    whyFamiliesLoveIt:
      'Zero waiting for communal machines—having an in-suite washer/dryer lets you run a load overnight while teenagers enjoy the riverside lobby cafe.',
    bookingTip:
      'Reserve a River View Suite or connecting Studios; check that your selected suite tier specifies a sofa bed or 2 bedrooms.',
  },
  {
    id: 'wilde-paddington',
    name: 'Wilde Aparthotels London Paddington',
    city: CityId.LONDON,
    cityLabel: 'London',
    neighborhood: 'Paddington / Hyde Park',
    propertyType: 'Aparthotel',
    laundrySetup: 'On-site self-service guest laundry room (app/card-operated washers & dryers)',
    diningSetup: 'On-site all-day café, bar & breakfast dining',
    roomConfig: 'Modern 1-Bedroom Family Apartments & Studios with fully equipped kitchenettes',
    museumConnectivity:
      'Direct Heathrow Express / Elizabeth Line arrival · 10-min Circle Line to South Kensington (Science & NHM) · 12-min walk to Frameless (Marble Arch) & The Mayfair Chippy',
    whyFamiliesLoveIt:
      'Unbeatable arrival logistics from Heathrow and effortless direct Underground links to both South Kensington museums and Bakerloo Line to Waterloo (IWM).',
    bookingTip:
      'Choose a 1-Bedroom Apartment with double sofa bed, or two adjacent Studios for older teens wanting extra privacy.',
  },
  {
    id: 'citadines-les-halles',
    name: 'Citadines Les Halles Paris',
    city: CityId.PARIS,
    cityLabel: 'Central Paris',
    neighborhood: '1st Arrondissement · Châtelet-Les Halles',
    propertyType: 'Aparthotel',
    laundrySetup: 'On-site self-service guest launderette (washers & dryers)',
    diningSetup: 'On-site breakfast dining room + 24-hr lobby hot-drink lounge & immediate courtyard cafés',
    roomConfig: '1-Bedroom Apartments for 4 (queen bedroom + double sofa bed + full kitchen)',
    museumConnectivity:
      '8-min walk to the Louvre & Palais Royal · 12-min walk across the Seine to Sainte-Chapelle & Notre-Dame · Sits directly above RER A for a 38-min direct train to Disneyland Paris',
    whyFamiliesLoveIt:
      'The single most strategic transit hub in Paris for families: walk to the Louvre and Le Marais, wash clothes before Disneyland, and step onto RER A right outside the door.',
    bookingTip:
      'Ask for a courtyard-facing 1-bedroom apartment to keep street noise low while staying in Paris’s walkable center.',
  },
  {
    id: 'citadines-st-germain',
    name: 'Citadines Saint-Germain-des-Prés',
    city: CityId.PARIS,
    cityLabel: 'Central Paris',
    neighborhood: '6th Arrondissement · Left Bank',
    propertyType: 'Aparthotel',
    laundrySetup: 'On-site self-service guest laundry room (washers & dryers)',
    diningSetup: 'On-site breakfast lounge overlooking the Seine + dozens of bistro/crêperie terraces steps away',
    roomConfig: '1-Bedroom Family Apartments for 4 with kitchen, fridge & separate living area',
    museumConnectivity:
      '10-min walk to Musée d’Orsay & Louvre · 5-min walk to Vedettes du Pont Neuf Seine cruise & Sainte-Chapelle · Quick Metro Line 4/RER A connection',
    whyFamiliesLoveIt:
      'Right on the Left Bank quay across from Île de la Cité—combines residential apartment laundry convenience with classic Parisian café mornings.',
    bookingTip:
      'Book early as 1-bedroom river-side units sell out months ahead for summer and school breaks.',
  },
  {
    id: 'adagio-paris-opera',
    name: 'Aparthotel Adagio Paris Opéra',
    city: CityId.PARIS,
    cityLabel: 'Central Paris',
    neighborhood: '9th Arrondissement · Opéra Garnier',
    propertyType: 'Aparthotel',
    laundrySetup: 'On-site self-service guest laundry facility (washers & dryers)',
    diningSetup: 'On-site buffet breakfast room + 24/7 grab-and-go pantry & adjacent brasseries',
    roomConfig: 'Spacious 1-Bedroom Apartments for 4 with full kitchen & dishwasher',
    museumConnectivity:
      '12-min walk to Louvre & Palais Royal · 3-min walk to Auber RER A station (direct to Disneyland Paris) · 10-min Metro/cab from Eurostar Gare du Nord',
    whyFamiliesLoveIt:
      'Quiet upscale boulevard steps from Galeries Lafayette rooftop, Palais Garnier, and direct RER A access to Disneyland Paris.',
    bookingTip:
      'Note that central Paris full-service hotels rarely offer coin-operated washers; aparthotels like Adagio and Citadines are the gold standard for self-service laundry.',
  },
  {
    id: 'staycity-gare-de-lest',
    name: 'Staycity Aparthotels Paris Gare de l’Est',
    city: CityId.PARIS,
    cityLabel: 'Central Paris',
    neighborhood: '10th Arrondissement · Canal Saint-Martin',
    propertyType: 'Aparthotel',
    laundrySetup: 'On-site self-service guest laundry room (washers & dryers)',
    diningSetup: 'On-site Staycafé serving breakfast, hot pizzas, paninis & bar drinks 24/7',
    roomConfig: '1-Bedroom & Studio Family Apartments for 4 with full kitchenette',
    museumConnectivity:
      '8-min walk from Eurostar Gare du Nord · Direct Metro Line 4 & 7 to Châtelet, Louvre, Notre-Dame & Saint-Germain in 12 mins',
    whyFamiliesLoveIt:
      'Zero taxi hassle arriving off the Eurostar, a lively 24/7 on-site café for hungry teenagers, and reliable self-service laundry.',
    bookingTip:
      'Ideal value-conscious alternative to the 1st/6th arrondissements with quick Canal Saint-Martin bakery walks.',
  },
];

export function filterAccommodations(city: CityId | 'all'): AccommodationProperty[] {
  logFunctionCall('filterAccommodations', { city });
  if (city === 'all') {
    return ACCOMMODATION_RECOMMENDATIONS;
  }
  return ACCOMMODATION_RECOMMENDATIONS.filter((item) => item.city === city);
}
