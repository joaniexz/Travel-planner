export enum CityId {
  LONDON = 'london',
  PARIS = 'paris',
  DISNEYLAND = 'disneyland',
}

export enum PaceMode {
  BALANCED = 'balanced',
  TEEN_THRILL = 'teen-thrill',
  CULTURE_DEEP = 'culture-deep',
}

export enum SplitPresetId {
  BALANCED_4_4_2 = 'balanced-4-4-2',
  PARK_HEAVY_4_3_3 = 'park-heavy-4-3-3',
  CULTURE_DEEP_3_5_2 = 'culture-deep-3-5-2',
}

export enum RouteOrderId {
  LONDON_PARIS_DLP = 'london-paris-dlp',
  DLP_PARIS_LONDON = 'dlp-paris-london',
  PARIS_LONDON_DLP = 'paris-london-dlp',
}

export enum MuseumLoad {
  NONE = 'None',
  LOW = 'Low',
  MODERATE = 'Moderate',
  CAPPED_90M = 'Capped 90m',
}

export interface DayAllocation {
  [CityId.LONDON]: number;
  [CityId.PARIS]: number;
  [CityId.DISNEYLAND]: number;
}

export interface SplitPreset {
  id: SplitPresetId;
  label: string;
  shortRatio: string;
  isRecommended: boolean;
  allocation: DayAllocation;
  nightsBreakdown: string;
  headline: string;
  rationale: string;
  bestFor: string;
  tradeOff: string;
}

export interface TransitLeg {
  step: number;
  from: string;
  to: string;
  mode: string;
  duration: string;
  frequency: string;
  bestTimeToTravel: string;
  fares2026: string;
  ticketHowTo: string;
  note: string;
}

export interface DailyTransitLeg {
  id: string;
  city: CityId;
  cityLabel: string;
  dayReference: string;
  routeTitle: string;
  modeAndLine: string;
  teenHighlight: string;
  frequency: string;
  bestTimeToTravel: string;
  fares2026: string;
  ticketHowTo: string;
}

export interface CityFareSummary {
  city: CityId;
  cityLabel: string;
  headline: string;
  adultFare: string;
  teenFare: string;
  dailyCapOrPass: string;
  familyOfFourMath: string;
  buyingSteps: string[];
}

export interface RouteOrderOption {
  id: RouteOrderId;
  title: string;
  sequenceLabel: string;
  isRecommended: boolean;
  airportStrategy: string;
  hotelCheckIns: number;
  luggageFriction: string;
  energyArc: string;
  summary: string;
  pros: string[];
  cons: string[];
  legs: TransitLeg[];
}

export interface ActivitySlot {
  timeOfDay: 'Morning' | 'Afternoon' | 'Evening';
  title: string;
  description: string;
  teenHook: string;
  adultHighlight: string;
  durationLabel: string;
  bookingNeeded: boolean;
}

export interface ItineraryDay {
  dayNumber: number;
  city: CityId;
  cityLabel: string;
  title: string;
  subtitle: string;
  walkingKm: number;
  museumLoad: MuseumLoad;
  baseHotelArea: string;
  foodAnchor: string;
  pacingTip: string;
  slots: {
    morning: ActivitySlot;
    afternoonBalanced: ActivitySlot;
    afternoonTeenSwap: ActivitySlot;
    afternoonCultureSwap: ActivitySlot;
    evening: ActivitySlot;
  };
}

export interface PacingRule {
  index: string;
  title: string;
  summary: string;
  tactic: string;
  antiFatigueWhy: string;
}

export interface SplitReconvenePair {
  id: string;
  city: CityId;
  cityLabel: string;
  district: string;
  adultTrack: string;
  adultDuration: string;
  teenTrack: string;
  teenDuration: string;
  reconvenePoint: string;
  sharedTreat: string;
}

export interface BookingChecklistItem {
  id: string;
  city: CityId;
  cityLabel: string;
  item: string;
  leadTime: string;
  priority: 'Essential' | 'High' | 'Optional';
  notes: string;
}

export enum FoodCategory {
  FISH_AND_CHIPS = 'fish-and-chips',
  COMFORT_PASTA_PIZZA = 'comfort-pasta-pizza',
  ASIAN_NOODLES = 'asian-noodles',
  VISUAL_DESSERT = 'visual-dessert',
  STREET_MARKET = 'street-market',
}

export interface FoodDessertSpot {
  id: string;
  name: string;
  city: CityId;
  cityLabel: string;
  neighborhood: string;
  category: FoodCategory;
  categoryLabel: string;
  pairedDay: number;
  signatureOrder: string;
  teenAppeal: string;
  practicalTip: string;
}

export interface AccommodationProperty {
  id: string;
  name: string;
  city: CityId;
  cityLabel: string;
  neighborhood: string;
  propertyType: 'Aparthotel' | 'Family Hotel';
  laundrySetup: string;
  diningSetup: string;
  roomConfig: string;
  museumConnectivity: string;
  whyFamiliesLoveIt: string;
  bookingTip: string;
}
