'use client';

import { useState } from 'react';
import { Coffee, Users } from 'lucide-react';
import { logFunctionCall } from '@/lib/logger';
import { PACING_RULES, SPLIT_RECONVENE_PAIRS } from '@/data/pacing-playbook';

export default function PacingPlaybook() {
  const [selectedPairId, setSelectedPairId] = useState<string>(SPLIT_RECONVENE_PAIRS[0].id);

  const activePair =
    SPLIT_RECONVENE_PAIRS.find((pair) => pair.id === selectedPairId) ?? SPLIT_RECONVENE_PAIRS[0];

  const handleSelectPair = (pairId: string) => {
    logFunctionCall('selectSplitReconvenePair', { pairId });
    setSelectedPairId(pairId);
  };

  return (
    <section id="pacing" className="py-16 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl pb-8 border-b border-stone-200">
          <p className="text-xs font-medium uppercase tracking-widest text-[#57534E]">
            07. Teen &amp; Adult Pacing Playbook
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-[#1C1917] [text-wrap:balance]">
            Preventing “Museum Fatigue” Without Shortchanging Adults
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#44403C]">
            Museum fatigue happens when adults treat world-class collections like endurance races.
            These six structural rules keep teenagers energized while letting adults absorb the
            landmarks they flew across the ocean to see.
          </p>
        </div>

        {/* 6 Pacing Rules Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PACING_RULES.map((rule) => (
            <article
              key={rule.index}
              className="p-6 bg-[#F3EFE6]/55 border border-stone-200 rounded-md flex flex-col justify-between"
            >
              <div>
                <p className="font-mono-num text-xs font-semibold text-[#1E3A8A]">
                  Rule {rule.index}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-[#1C1917]">
                  {rule.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-[#1C1917]">{rule.summary}</p>
                <p className="mt-2.5 text-sm leading-relaxed text-[#44403C]">{rule.tactic}</p>
              </div>

              <p className="mt-4 pt-3 border-t border-stone-200 text-xs leading-relaxed text-[#57534E]">
                Why it works: {rule.antiFatigueWhy}
              </p>
            </article>
          ))}
        </div>

        {/* Split-and-Reconvene District Blueprints */}
        <div className="mt-12 pt-10 border-t border-stone-200">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#57534E]">
                <Users className="w-3.5 h-3.5 text-[#1E3A8A]" aria-hidden="true" />
                <span>Split-and-Reconvene Blueprints</span>
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold text-[#1C1917]">
                90-Minute Parallel Tracks That Meet Back for Espresso
              </h3>
            </div>

            <div
              role="tablist"
              aria-label="Split and reconvene neighborhood options"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EBE6DF] rounded-lg self-start lg:self-auto"
            >
              {SPLIT_RECONVENE_PAIRS.map((pair) => {
                const isSelected = pair.id === activePair.id;
                return (
                  <button
                    key={pair.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleSelectPair(pair.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      isSelected
                        ? 'bg-[#FBF9F5] text-[#1C1917] shadow-xs'
                        : 'text-[#57534E] hover:text-[#1C1917]'
                    }`}
                  >
                    {pair.cityLabel}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 bg-[#F3EFE6]/60 border border-stone-200 rounded-md p-6">
            <div className="text-xs font-medium text-[#57534E] pb-4 border-b border-stone-200">
              {activePair.cityLabel} · {activePair.district}
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-[#FBF9F5] border border-stone-200 rounded-md">
                <div className="flex items-center justify-between text-xs text-[#78350F] font-semibold">
                  <span>Adult Track</span>
                  <span className="font-mono-num">{activePair.adultDuration}</span>
                </div>
                <p className="mt-2 text-base font-medium text-[#1C1917]">{activePair.adultTrack}</p>
              </div>

              <div className="p-5 bg-[#FBF9F5] border border-stone-200 rounded-md">
                <div className="flex items-center justify-between text-xs text-[#1E3A8A] font-semibold">
                  <span>Teenager Track</span>
                  <span className="font-mono-num">{activePair.teenDuration}</span>
                </div>
                <p className="mt-2 text-base font-medium text-[#1C1917]">{activePair.teenTrack}</p>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
              <div className="flex items-center gap-2 text-[#1C1917]">
                <Coffee className="w-4 h-4 text-[#14532D] shrink-0" aria-hidden="true" />
                <span>
                  <span className="font-semibold">Reconvene Point:</span> {activePair.reconvenePoint}
                </span>
              </div>
              <span className="text-xs text-[#57534E]">{activePair.sharedTreat}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
