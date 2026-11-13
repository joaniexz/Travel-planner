'use client';

import { useState } from 'react';
import { Bus, Clock, CreditCard, Ticket, Train } from 'lucide-react';
import { logFunctionCall } from '@/lib/logger';
import { CITY_FARE_SUMMARIES, filterDailyTransitLegs } from '@/data/daily-transit';
import { CityId } from '@/types/travel';

type TransitViewTab = 'all' | CityId.LONDON | CityId.PARIS | 'fare-math';

const TRANSIT_TABS: { id: TransitViewTab; label: string }[] = [
  { id: 'all', label: 'All Daily Legs' },
  { id: CityId.LONDON, label: 'London (Tube, Bus & DLR)' },
  { id: CityId.PARIS, label: 'Paris (Metro, RER & Funicular)' },
  { id: 'fare-math', label: '2026 Family Fare Math' },
];

export default function DailyTransitPlaybook() {
  const [activeTab, setActiveTab] = useState<TransitViewTab>('all');

  const handleTabChange = (nextTab: TransitViewTab) => {
    logFunctionCall('changeDailyTransitTab', { nextTab });
    setActiveTab(nextTab);
  };

  const visibleLegs =
    activeTab === 'fare-math' ? [] : filterDailyTransitLegs(activeTab as CityId | 'all');

  return (
    <section id="daily-transit" className="py-16 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-stone-200">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-widest text-[#57534E]">
              03. Daily Sightseeing Transit &amp; 2026 Fares
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-[#1C1917] [text-wrap:balance]">
              Exact Lines, Scenic Double-Deckers, Front-Seat DLR &amp; 2026 Caps
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#44403C]">
              In-city transit engineered for teenagers—prioritizing top-deck red buses past Big Ben,
              driverless front-seat DLR rides, automated Paris Metro lines, off-peak timing windows,
              and exact 2026 family-of-four fare caps.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Daily transit and 2026 fare guide"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EBE6DF] rounded-lg self-start lg:self-auto"
          >
            {TRANSIT_TABS.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-[#FBF9F5] text-[#1C1917] shadow-xs'
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2026 Family Fare Math Always Visible in Fare Math Tab or Compact Top Summary */}
        {activeTab === 'fare-math' ? (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {CITY_FARE_SUMMARIES.map((summary) => (
              <article
                key={summary.city}
                className="p-6 bg-[#F3EFE6]/60 border border-stone-200 rounded-md flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-medium text-[#1E3A8A]">{summary.cityLabel}</div>
                  <h3 className="mt-1.5 font-display text-2xl font-semibold text-[#1C1917]">
                    {summary.headline}
                  </h3>

                  <dl className="mt-5 pt-4 border-t border-stone-200 space-y-3 text-sm">
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-[#57534E]">
                        Adult Single Fares
                      </dt>
                      <dd className="mt-0.5 font-medium text-[#1C1917]">{summary.adultFare}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-[#57534E]">
                        Teenager Fares
                      </dt>
                      <dd className="mt-0.5 font-medium text-[#1C1917]">{summary.teenFare}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-[#57534E]">
                        Daily Cap vs. Multi-Day Pass Math
                      </dt>
                      <dd className="mt-0.5 text-[#44403C] leading-relaxed">
                        {summary.dailyCapOrPass}
                      </dd>
                    </div>
                    <div className="p-3.5 bg-[#FBF9F5] border border-stone-200 rounded">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
                        Family of Four (4-Day Total Math)
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-[#1C1917] font-mono-num">
                        {summary.familyOfFourMath}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-200">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1C1917]">
                    Step-by-Step How to Pay &amp; Buy
                  </p>
                  <ol className="mt-2 space-y-2 list-decimal list-inside text-xs text-[#44403C] leading-relaxed">
                    {summary.buyingSteps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <>
            {/* Compact 2026 Fare Reference Bar */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {CITY_FARE_SUMMARIES.map((summary) => (
                <div
                  key={summary.city}
                  className="p-4 bg-[#F3EFE6]/55 border border-stone-200 rounded-md flex flex-col justify-between gap-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-[#1E3A8A]">
                      {summary.cityLabel}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleTabChange('fare-math')}
                      className="text-xs font-medium text-[#1C1917] underline underline-offset-4 hover:text-[#1E3A8A] cursor-pointer"
                    >
                      Full 2026 Pass Math
                    </button>
                  </div>
                  <p className="text-xs font-medium text-[#1C1917] font-mono-num">
                    {summary.familyOfFourMath}
                  </p>
                </div>
              ))}
            </div>

            {/* Daily Transit Leg Cards */}
            <div className="mt-6 space-y-5">
              {visibleLegs.map((leg) => (
                <article
                  key={leg.id}
                  className="p-6 bg-[#FBF9F5] border border-stone-200 rounded-md"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-stone-200">
                    <div>
                      <div className="text-xs font-medium text-[#57534E] flex items-center gap-2">
                        <span className="font-semibold text-[#1E3A8A]">{leg.cityLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono-num">{leg.dayReference}</span>
                      </div>
                      <h3 className="mt-1 font-display text-xl font-semibold text-[#1C1917]">
                        {leg.routeTitle}
                      </h3>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1917]">
                      {leg.city === CityId.LONDON ? (
                        <Bus className="w-4 h-4 text-[#78350F]" aria-hidden="true" />
                      ) : (
                        <Train className="w-4 h-4 text-[#1E3A8A]" aria-hidden="true" />
                      )}
                      <span>{leg.modeAndLine}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-[#44403C] leading-relaxed">
                    <span className="font-semibold text-[#1E3A8A]">Teen Ride Highlight: </span>
                    {leg.teenHighlight}
                  </p>

                  <dl className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-[#F3EFE6]/50 border border-stone-200 rounded text-xs">
                    <div>
                      <dt className="inline-flex items-center gap-1.5 font-semibold text-[#1C1917]">
                        <Clock className="w-3.5 h-3.5 text-[#57534E]" aria-hidden="true" />
                        <span>Timetable &amp; Intervals</span>
                      </dt>
                      <dd className="mt-1 text-[#44403C] leading-relaxed">{leg.frequency}</dd>
                    </div>

                    <div>
                      <dt className="inline-flex items-center gap-1.5 font-semibold text-[#1C1917]">
                        <Clock className="w-3.5 h-3.5 text-[#14532D]" aria-hidden="true" />
                        <span>Best Departure Window</span>
                      </dt>
                      <dd className="mt-1 text-[#44403C] leading-relaxed">
                        {leg.bestTimeToTravel}
                      </dd>
                    </div>

                    <div>
                      <dt className="inline-flex items-center gap-1.5 font-semibold text-[#1C1917]">
                        <CreditCard className="w-3.5 h-3.5 text-[#78350F]" aria-hidden="true" />
                        <span>2026 Fares &amp; Caps</span>
                      </dt>
                      <dd className="mt-1 text-[#44403C] leading-relaxed">{leg.fares2026}</dd>
                    </div>

                    <div>
                      <dt className="inline-flex items-center gap-1.5 font-semibold text-[#1C1917]">
                        <Ticket className="w-3.5 h-3.5 text-[#1E3A8A]" aria-hidden="true" />
                        <span>Where &amp; How to Buy</span>
                      </dt>
                      <dd className="mt-1 text-[#44403C] leading-relaxed">{leg.ticketHowTo}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
