import { CityId, PaceMode, RouteOrderId, SplitPresetId } from '@/types/travel';

export const APP_CONFIG = {
  appName: 'Channel & Castle',
  editionLabel: 'Family Field Monograph · London, Paris & Marne-la-Vallée',
  totalTripDays: 10,
  partyComposition: {
    adults: 2,
    teenagers: 2,
    totalTravelers: 4,
  },
  defaults: {
    splitPresetId: SplitPresetId.BALANCED_4_4_2,
    routeOrderId: RouteOrderId.LONDON_PARIS_DLP,
    paceMode: PaceMode.BALANCED,
    cityFilter: 'all' as CityId | 'all',
    selectedDayNumber: 1,
  },
  dayAllocationBounds: {
    [CityId.LONDON]: { min: 2, max: 6 },
    [CityId.PARIS]: { min: 2, max: 6 },
    [CityId.DISNEYLAND]: { min: 1, max: 4 },
  },
  pacingThresholds: {
    maxMuseumMinutesPerBlock: 90,
    recommendedDailyWalkKm: 8.5,
    eurostarCheckInBufferMinutes: 75,
    rerATransferMinutes: 42,
    tgvCdgTransferMinutes: 10,
  },
  logging: {
    enableInfoLogging: true,
    stripInlineDataKeys: ['inlineData', 'data', 'base64', 'bytes'] as const,
  },
  models: {
    // Centralized model configuration registry
    primaryPlannerModel: 'gemini-3.5-flash',
    fallbackModel: 'gemini-2.5-flash',
  },
  palette: {
    canvas: '#FBF9F5',
    surface: '#F3EFE6',
    ink: '#1C1917',
    mutedInk: '#57534E',
    accentLapis: '#1E3A8A',
    accentBronze: '#78350F',
    accentForest: '#14532D',
  },
} as const;
