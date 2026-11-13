'use client';

import { useState } from 'react';
import { ArrowRight, Check, Clock, CreditCard, Ticket, Train } from 'lucide-react';
import { APP_CONFIG } from '@/lib/config';
import { logFunctionCall } from '@/lib/logger';
import { getRouteOrderById, ROUTE_ORDER_OPTIONS } from '@/data/route-orders';
import { RouteOrderId } from '@/types/travel';

export default function RouteOrderSection() {
  const [selectedId, setSelectedId] = useState<RouteOrderId>(APP_CONFIG.defaults.routeOrderId);
  const activeRoute = getRouteOrderById(selectedId);

  const handleSelectRoute = (routeId: RouteOrderId) => {
    logFunctionCall('selectRouteOrder', { routeId });
    setSelectedId(routeId);
  };

  return (
    <section id="route-order" className="py-16 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-stone-200">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-widest text-[#57534E]">
              02. Practical Sequence &amp; Inter-City Transit
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-[#1C1917] [text-wrap:balance]">
              London First, Eurostar to Paris, Disneyland Finale
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#44403C]">
              Every airport, Eurostar, RER A, and TGV transfer below specifies exact lines,
              timetables, rush-hour avoidance windows, 2026 fares for a family of four, and
              step-by-step ticketing instructions.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Route order comparison"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EBE6DF] rounded-lg self-start lg:self-auto"
          >
            {ROUTE_ORDER_OPTIONS.map((option) => {
              const isSelected = option.id === selectedId;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleSelectRoute(option.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-[#FBF9F5] text-[#1C1917] shadow-xs'
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  {option.sequenceLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Sequence Summary */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 bg-[#F3EFE6]/60 border border-stone-200 rounded-md p-6">
            <div className="text-xs font-medium text-[#57534E] flex items-center gap-2">
              <span>{activeRoute.sequenceLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono-num">{activeRoute.hotelCheckIns} Hotel Bases</span>
            </div>

            <h3 className="mt-2 font-display text-2xl font-semibold text-[#1C1917]">
              {activeRoute.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#44403C]">{activeRoute.summary}</p>

            <dl className="mt-6 pt-5 border-t border-stone-200 space-y-3 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wider text-[#57534E]">
                  Flight Strategy
                </dt>
                <dd className="mt-0.5 font-medium text-[#1C1917]">
                  {activeRoute.airportStrategy}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-[#57534E]">
                  Luggage Friction
                </dt>
                <dd className="mt-0.5 font-medium text-[#1C1917]">
                  {activeRoute.luggageFriction}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-[#57534E]">
                  Family Energy Arc
                </dt>
                <dd className="mt-0.5 font-medium text-[#1E3A8A]">{activeRoute.energyArc}</dd>
              </div>
            </dl>

            <div className="mt-6 pt-5 border-t border-stone-200 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#14532D]">
                  Why It Works
                </p>
                <ul className="mt-2 space-y-2">
                  {activeRoute.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#44403C]">
                      <Check
                        className="w-4 h-4 text-[#14532D] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#78350F]">
                  Watch Out For
                </p>
                <ul className="mt-2 space-y-1.5">
                  {activeRoute.cons.map((con, i) => (
                    <li key={i} className="text-sm text-[#57534E] leading-relaxed">
                      — {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Step-by-step Transit Table with 5 Required Specifications */}
          <div className="lg:col-span-8 border border-stone-200 rounded-md overflow-hidden bg-[#FBF9F5]">
            <div className="px-6 py-4 bg-[#F3EFE6]/70 border-b border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#1C1917]">
                <Train className="w-4 h-4 text-[#1E3A8A]" aria-hidden="true" />
                <span>Door-to-Door Transit Legs (2026 Timetables, Fares &amp; Ticketing)</span>
              </div>
              <span className="text-xs text-[#57534E] font-mono-num">
                {activeRoute.legs.length} Legs
              </span>
            </div>

            <div className="divide-y divide-stone-200">
              {activeRoute.legs.map((leg) => (
                <div key={leg.step} className="p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[#1C1917]">
                      <span className="font-mono-num text-xs text-[#57534E]">
                        0{leg.step}.
                      </span>
                      <span>{leg.from}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#57534E]" aria-hidden="true" />
                      <span>{leg.to}</span>
                    </div>

                    <span className="font-mono-num text-sm font-semibold text-[#1E3A8A] shrink-0">
                      {leg.duration}
                    </span>
                  </div>

                  <p className="mt-1.5 text-xs font-semibold text-[#1E3A8A]">{leg.mode}</p>

                  <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-[#F3EFE6]/45 border border-stone-200 rounded p-4">
                    <div>
                      <dt className="inline-flex items-center gap-1.5 font-semibold text-[#1C1917]">
                        <Clock className="w-3.5 h-3.5 text-[#57534E]" aria-hidden="true" />
                        <span>Timetable &amp; Frequency</span>
                      </dt>
                      <dd className="mt-1 text-[#44403C] leading-relaxed">{leg.frequency}</dd>
                    </div>

                    <div>
                      <dt className="inline-flex items-center gap-1.5 font-semibold text-[#1C1917]">
                        <Clock className="w-3.5 h-3.5 text-[#14532D]" aria-hidden="true" />
                        <span>Best Time (Avoid Rush Hour)</span>
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

                  <p className="mt-3 text-xs leading-relaxed text-[#57534E]">
                    Practical Note: {leg.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
