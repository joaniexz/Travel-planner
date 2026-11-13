'use client';

import { useState } from 'react';
import { Building2, Train, Utensils, WashingMachine } from 'lucide-react';
import { logFunctionCall } from '@/lib/logger';
import { filterAccommodations } from '@/data/accommodations';
import { CityId } from '@/types/travel';

const CITY_TABS: { id: CityId | 'all'; label: string }[] = [
  { id: 'all', label: 'All Stays (London & Paris)' },
  { id: CityId.LONDON, label: 'London (4)' },
  { id: CityId.PARIS, label: 'Central Paris (4)' },
];

export default function AccommodationGuide() {
  const [selectedCity, setSelectedCity] = useState<CityId | 'all'>('all');
  const visibleProperties = filterAccommodations(selectedCity);

  const handleCityChange = (nextCity: CityId | 'all') => {
    logFunctionCall('changeAccommodationCityFilter', { nextCity });
    setSelectedCity(nextCity);
  };

  return (
    <section id="accommodations" className="py-16 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-stone-200">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-widest text-[#57534E]">
              06. Family Stays, Laundry &amp; Museum Access
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-[#1C1917] [text-wrap:balance]">
              Central Aparthotels &amp; Hotels With Self-Service Laundry
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#44403C]">
              Every property below fits four travelers comfortably, provides guest-accessible
              washers and dryers plus on-site dining or room service, and sits within walking
              distance or one direct rail hop of London’s science/war museums and Paris’s core
              landmarks.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter recommended stays by city"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EBE6DF] rounded-lg self-start lg:self-auto"
          >
            {CITY_TABS.map((tab) => {
              const isSelected = selectedCity === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleCityChange(tab.id)}
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

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleProperties.map((stay) => (
            <article
              key={stay.id}
              className="p-6 bg-[#F3EFE6]/55 border border-stone-200 rounded-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-[#57534E]">
                  <span>
                    {stay.cityLabel} · {stay.neighborhood}
                  </span>
                  <span className="font-medium text-[#1E3A8A]">{stay.propertyType}</span>
                </div>

                <h3 className="mt-2 font-display text-xl font-semibold text-[#1C1917]">
                  {stay.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#44403C]">
                  {stay.whyFamiliesLoveIt}
                </p>

                <dl className="mt-4 pt-4 border-t border-stone-200 space-y-2.5 text-xs">
                  <div className="flex items-start gap-2.5">
                    <WashingMachine
                      className="w-4 h-4 text-[#1E3A8A] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="inline font-semibold text-[#1C1917]">Laundry: </dt>
                      <dd className="inline text-[#44403C]">{stay.laundrySetup}</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Utensils
                      className="w-4 h-4 text-[#78350F] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="inline font-semibold text-[#1C1917]">On-Site Dining: </dt>
                      <dd className="inline text-[#44403C]">{stay.diningSetup}</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Building2
                      className="w-4 h-4 text-[#57534E] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="inline font-semibold text-[#1C1917]">Room Layout: </dt>
                      <dd className="inline text-[#44403C]">{stay.roomConfig}</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Train
                      className="w-4 h-4 text-[#14532D] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="inline font-semibold text-[#1C1917]">Museum Links: </dt>
                      <dd className="inline text-[#44403C]">{stay.museumConnectivity}</dd>
                    </div>
                  </div>
                </dl>
              </div>

              <p className="mt-4 pt-3 border-t border-stone-200 text-xs leading-relaxed text-[#57534E]">
                Booking Note: {stay.bookingTip}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
