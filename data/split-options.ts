import { CityId, DayAllocation, SplitPreset, SplitPresetId } from '@/types/travel';
import { logFunctionCall } from '@/lib/logger';

export const SPLIT_PRESETS: SplitPreset[] = [
  {
    id: SplitPresetId.BALANCED_4_4_2,
    label: 'Recommended Balance',
    shortRatio: '4 · 4 · 2',
    isRecommended: true,
    allocation: {
      [CityId.LONDON]: 4,
      [CityId.PARIS]: 4,
      [CityId.DISNEYLAND]: 2,
    },
    nightsBreakdown: '4 Nights London · 4 Nights Central Paris · 1–2 Nights Marne-la-Vallée',
    headline: 'Four days per capital, two high-thrill days at Disneyland Paris',
    rationale:
      'London absorbs arrival fatigue best and requires four days to cover Westminster, the Tower, South Bank markets, and West End theater without sprinting. Four days in Central Paris unlocks neighborhoods plus a half-day excursion without rushing. Disneyland Paris has two compact parks—two full days is the exact sweet spot for teenagers focused on coasters and Marvel Avengers Campus.',
    bestFor: 'First-time family visits balancing iconic landmarks, neighborhood cafes, West End theater, and theme park thrills.',
    tradeOff: 'Day 5 includes the 2h 16m Eurostar transfer, so Paris gets 3.5 active touring days rather than 4 full mornings.',
  },
  {
    id: SplitPresetId.PARK_HEAVY_4_3_3,
    label: 'Park & Thrill Focus',
    shortRatio: '4 · 3 · 3',
    isRecommended: false,
    allocation: {
      [CityId.LONDON]: 4,
      [CityId.PARIS]: 3,
      [CityId.DISNEYLAND]: 3,
    },
    nightsBreakdown: '4 Nights London · 3 Nights Central Paris · 2–3 Nights Marne-la-Vallée',
    headline: 'Extra park buffer for repeat rides, shows, and a slower final morning',
    rationale:
      'Shifts one day from Central Paris into Disneyland Paris. Works well if your teenagers want unhurried re-rides on Hyperspace Mountain, Avengers Assemble: Flight Force, and Tower of Terror, or prefer a relaxed resort pool afternoon.',
    bestFor: 'Disney enthusiasts or summer peak-crowd weeks when queues exceed 60 minutes without Premier Access.',
    tradeOff: 'Compresses Central Paris into three tight days, forcing you to cut either Montmartre or a Seine/Le Marais slow afternoon.',
  },
  {
    id: SplitPresetId.CULTURE_DEEP_3_5_2,
    label: 'Paris Deep Dive',
    shortRatio: '3 · 5 · 2',
    isRecommended: false,
    allocation: {
      [CityId.LONDON]: 3,
      [CityId.PARIS]: 5,
      [CityId.DISNEYLAND]: 2,
    },
    nightsBreakdown: '3 Nights London · 5 Nights Central Paris · 1–2 Nights Marne-la-Vallée',
    headline: 'Adds a dedicated Versailles or Loire-adjacent day from Paris',
    rationale:
      'Trims London to three high-impact days (ideal if the family has visited London before) and awards Central Paris five days—enough room for a full Versailles bike-and-palace excursion plus four relaxed neighborhood days.',
    bestFor: 'Families who already know London or want a full day cycling the Gardens of Versailles.',
    tradeOff: 'London feels noticeably brisk; Day 1 jet lag leaves little margin before boarding the Eurostar on Day 4.',
  },
];

export function evaluateCustomAllocation(allocation: DayAllocation): {
  londonNote: string;
  parisNote: string;
  disneylandNote: string;
  overallVerdict: string;
} {
  logFunctionCall('evaluateCustomAllocation', { allocation });

  const london = allocation[CityId.LONDON];
  const paris = allocation[CityId.PARIS];
  const dlp = allocation[CityId.DISNEYLAND];

  const londonNote =
    london <= 2
      ? 'Very tight—only covers Westminster and Tower of London with zero buffer for jet lag.'
      : london === 3
        ? 'Brisk pace—covers headline sights and one West End show, skips outer neighborhoods.'
        : london === 4
          ? 'Optimal London window—absorbs Day 1 jet lag and leaves room for Borough Market and Camden or Soho.'
          : 'Generous London stay—allows a relaxed day trip to Windsor Castle, Greenwich, or Harry Potter Studios.';

  const parisNote =
    paris <= 2
      ? 'Too compressed—Eurostar arrival eats half a day, leaving teens rushed between major icons.'
      : paris === 3
        ? 'Tight core highlights—Louvre, Eiffel Tower, and Seine cruise fit, but skips Versailles.'
        : paris === 4
          ? 'Balanced Paris rhythm—three distinct neighborhood days plus Eurostar arrival afternoon.'
          : 'Unrushed Paris immersion—easily accommodates Versailles palace gardens by bike plus cafe downtime.';

  const dlpNote =
    dlp === 1
      ? 'Single-day sprint—requires Premier Access Ultimate and leaves little time for both parks.'
      : dlp === 2
        ? 'Ideal teen target—one day per park (Disneyland Park + Walt Disney Studios/Avengers Campus) with evening fireworks.'
        : 'Relaxed resort pace—plenty of re-rides and midday breaks, though older teens may finish coasters by Day 2.';

  const overallVerdict =
    london === 4 && paris === 4 && dlp === 2
      ? 'Optimal 4-4-2 Balance: Minimal transit friction, built-in jet-lag cushion, and peak teen motivation.'
      : dlp >= 3 && paris <= 3
        ? 'Park-Weighted Plan: Consider purchasing 2-day park tickets instead if teens prefer city street culture over repeat queues.'
        : london <= 3 && paris >= 5
          ? 'Paris-Forward Plan: Keep London mornings structured so jet lag does not erode your shorter UK window.'
          : 'Custom Family Split: Keep museum visits under 90 minutes per block to preserve afternoon energy.';

  return { londonNote, parisNote, disneylandNote: dlpNote, overallVerdict };
}
