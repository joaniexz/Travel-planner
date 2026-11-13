'use client';

import { useState } from 'react';
import { Minus, Plus, RotateCcw } from 'lucide-react';
import { APP_CONFIG } from '@/lib/config';
import { logFunctionCall } from '@/lib/logger';
import { evaluateCustomAllocation, SPLIT_PRESETS } from '@/data/split-options';
import { CityId, DayAllocation, SplitPresetId } from '@/types/travel';
import TravelMedia from '@/components/TravelMedia';

const CITY_METADATA: Record<
  CityId,
  { name: string; role: string; mediaSlot: 'london' | 'paris' | 'disneyland' }
> = {
  [CityId.LONDON]: {
    name: 'London',
    role: 'Jet-lag landing, medieval drama, markets & West End',
    mediaSlot: 'london',
  },
  [CityId.PARIS]: {
    name: 'Central Paris',
    role: '90-min museum sprints, Seine, Le Marais & Left Bank',
    mediaSlot: 'paris',
  },
  [CityId.DISNEYLAND]: {
    name: 'Disneyland Paris',
    role: 'Two parks, coaster thrills & 10-min TGV airport exit',
    mediaSlot: 'disneyland',
  },
};

export default function DaySplitPlanner() {
  const defaultPreset =
    SPLIT_PRESETS.find((p) => p.id === APP_CONFIG.defaults.splitPresetId) ?? SPLIT_PRESETS[0];

  const [activePresetId, setActivePresetId] = useState<SplitPresetId | 'custom'>(defaultPreset.id);
  const [allocation, setAllocation] = useState<DayAllocation>({ ...defaultPreset.allocation });

  const handleSelectPreset = (presetId: SplitPresetId) => {
    const preset = SPLIT_PRESETS.find((p) => p.id === presetId);
    if (!preset) return;

    logFunctionCall('selectSplitPreset', { presetId, allocation: preset.allocation });
    setActivePresetId(presetId);
    setAllocation({ ...preset.allocation });
  };

  const handleAdjustDays = (targetCity: CityId, delta: 1 | -1) => {
    logFunctionCall('adjustCityDays', { targetCity, delta, currentAllocation: allocation });

    const bounds = APP_CONFIG.dayAllocationBounds[targetCity];
    const nextValue = allocation[targetCity] + delta;
    if (nextValue < bounds.min || nextValue > bounds.max) {
      return;
    }

    // Rebalance from the other cities to always keep total strictly equal to 10 days
    const donorOrder: CityId[] =
      targetCity === CityId.LONDON
        ? [CityId.PARIS, CityId.DISNEYLAND]
        : targetCity === CityId.PARIS
          ? [CityId.LONDON, CityId.DISNEYLAND]
          : [CityId.PARIS, CityId.LONDON];

    for (const donor of donorOrder) {
      const donorBounds = APP_CONFIG.dayAllocationBounds[donor];
      const donorCandidate = allocation[donor] - delta;
      if (donorCandidate >= donorBounds.min && donorCandidate <= donorBounds.max) {
        const updated: DayAllocation = {
          ...allocation,
          [targetCity]: nextValue,
          [donor]: donorCandidate,
        };
        setAllocation(updated);

        const matchedPreset = SPLIT_PRESETS.find(
          (p) =>
            p.allocation.london === updated.london &&
            p.allocation.paris === updated.paris &&
            p.allocation.disneyland === updated.disneyland
        );
        setActivePresetId(matchedPreset ? matchedPreset.id : 'custom');
        return;
      }
    }
  };

  const evaluation = evaluateCustomAllocation(allocation);
  const selectedPresetObj = SPLIT_PRESETS.find((p) => p.id === activePresetId);

  return (
    <section id="allocation" className="py-16 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-stone-200">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-widest text-[#57534E]">
              01. Dividing the 10 Days
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-[#1C1917] [text-wrap:balance]">
              The 4 · 4 · 2 Allocation Strategy
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#44403C]">
              With ten calendar days, every hotel move costs half a morning. Splitting{' '}
              <span className="font-semibold text-[#1C1917]">
                4 days in London, 4 days in Central Paris, and 2 days at Disneyland Paris
              </span>{' '}
              gives both capitals proper breathing room while matching the compact footprint of
              Disneyland Paris’s two parks.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="10-day split presets"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EBE6DF] rounded-lg self-start lg:self-auto"
          >
            {SPLIT_PRESETS.map((preset) => {
              const isActive = activePresetId === preset.id;
              return (
                <button
                  key={preset.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleSelectPreset(preset.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#FBF9F5] text-[#1C1917] shadow-xs'
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  {preset.shortRatio} · {preset.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Visual 10-Day Proportional Bar */}
        <div className="mt-8">
          <div className="flex items-center justify-between text-xs text-[#57534E] mb-2">
            <span>10-Day Distribution Bar (Click − / + below to test custom splits)</span>
            <span className="font-mono-num">
              Total: {allocation.london + allocation.paris + allocation.disneyland} /{' '}
              {APP_CONFIG.totalTripDays} Days
            </span>
          </div>

          <div className="grid grid-cols-10 gap-1 h-3 w-full">
            {Array.from({ length: allocation.london }).map((_, idx) => (
              <div
                key={`lon-${idx}`}
                className="bg-[#1C1917] h-full rounded-[2px]"
                title={`London Day ${idx + 1}`}
              />
            ))}
            {Array.from({ length: allocation.paris }).map((_, idx) => (
              <div
                key={`par-${idx}`}
                className="bg-[#1E3A8A] h-full rounded-[2px]"
                title={`Central Paris Day ${idx + 1}`}
              />
            ))}
            {Array.from({ length: allocation.disneyland }).map((_, idx) => (
              <div
                key={`dlp-${idx}`}
                className="bg-[#78350F] h-full rounded-[2px]"
                title={`Disneyland Paris Day ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Three City Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {([CityId.LONDON, CityId.PARIS, CityId.DISNEYLAND] as const).map((cityId) => {
            const meta = CITY_METADATA[cityId];
            const days = allocation[cityId];
            const bounds = APP_CONFIG.dayAllocationBounds[cityId];
            const pct = Math.round((days / APP_CONFIG.totalTripDays) * 100);
            const note =
              cityId === CityId.LONDON
                ? evaluation.londonNote
                : cityId === CityId.PARIS
                  ? evaluation.parisNote
                  : evaluation.disneylandNote;

            return (
              <article
                key={cityId}
                className="bg-[#F3EFE6]/60 border border-stone-200 rounded-md overflow-hidden flex flex-col"
              >
                <div className="h-44 w-full">
                  <TravelMedia slot={meta.mediaSlot} className="h-full" />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#57534E]">
                      <span>{meta.name}</span>
                      <span className="font-mono-num">{pct}% of trip</span>
                    </div>

                    <div className="mt-2 flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-2xl font-semibold text-[#1C1917]">
                        <span className="font-mono-num">{days}</span>{' '}
                        {days === 1 ? 'Day' : 'Days'}
                      </h3>

                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => handleAdjustDays(cityId, -1)}
                          disabled={days <= bounds.min}
                          aria-label={`Decrease ${meta.name} days`}
                          className="w-8 h-8 inline-flex items-center justify-center border border-stone-300 rounded bg-[#FBF9F5] text-[#1C1917] hover:bg-stone-100 disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAdjustDays(cityId, 1)}
                          disabled={days >= bounds.max}
                          aria-label={`Increase ${meta.name} days`}
                          className="w-8 h-8 inline-flex items-center justify-center border border-stone-300 rounded bg-[#FBF9F5] text-[#1C1917] hover:bg-stone-100 disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <p className="mt-2 text-xs font-medium text-[#57534E]">{meta.role}</p>
                    <p className="mt-3 pt-3 border-t border-stone-200 text-sm leading-relaxed text-[#44403C]">
                      {note}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Verdict & Trade-off Strip */}
        <div className="mt-6 p-6 bg-[#F3EFE6]/50 border border-stone-200 rounded-md flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-medium text-[#57534E] flex flex-wrap items-center gap-2">
              <span>
                {selectedPresetObj ? selectedPresetObj.label : 'Custom Allocation'}
              </span>
              <span aria-hidden="true">·</span>
              <span>
                {selectedPresetObj
                  ? selectedPresetObj.nightsBreakdown
                  : `${allocation.london} Nights London · ${allocation.paris} Nights Paris · ${allocation.disneyland} Days Disney`}
              </span>
            </div>
            <p className="mt-1.5 font-display text-lg font-medium text-[#1C1917]">
              {selectedPresetObj ? selectedPresetObj.headline : evaluation.overallVerdict}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-[#44403C]">
              {selectedPresetObj ? selectedPresetObj.rationale : evaluation.overallVerdict}
            </p>
            {selectedPresetObj && (
              <p className="mt-2 text-xs text-[#57534E]">
                Trade-off: {selectedPresetObj.tradeOff}
              </p>
            )}
          </div>

          {activePresetId !== SplitPresetId.BALANCED_4_4_2 && (
            <button
              type="button"
              onClick={() => handleSelectPreset(SplitPresetId.BALANCED_4_4_2)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#1C1917] bg-[#FBF9F5] border border-stone-300 rounded-md hover:bg-stone-100 transition-colors cursor-pointer whitespace-nowrap shrink-0 self-start lg:self-center"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Reset to 4 · 4 · 2</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
