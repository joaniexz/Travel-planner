'use client';

import { useState } from 'react';
import { Check, Copy, MapPin, SlidersHorizontal, Table as TableIcon, Utensils, LayoutGrid, List } from 'lucide-react';
import { APP_CONFIG } from '@/lib/config';
import { logFunctionCall } from '@/lib/logger';
import { filterItineraryDays, ITINERARY_DAYS, resolveAfternoonSlot } from '@/data/itinerary-days';
import { ActivitySlot, CityId, ItineraryDay, PaceMode } from '@/types/travel';

type ViewMode = 'inspector' | 'table' | 'expanded';

const CITY_FILTER_TABS: { id: CityId | 'all'; label: string }[] = [
  { id: 'all', label: 'All 10 Days' },
  { id: CityId.LONDON, label: 'London (1–4)' },
  { id: CityId.PARIS, label: 'Paris (5–8)' },
  { id: CityId.DISNEYLAND, label: 'Disneyland (9–10)' },
];

const PACE_OPTIONS: { id: PaceMode; label: string }[] = [
  { id: PaceMode.BALANCED, label: 'Balanced Family' },
  { id: PaceMode.TEEN_THRILL, label: 'Teen-First Thrill' },
  { id: PaceMode.CULTURE_DEEP, label: 'Culture-Rich' },
];

export default function ItineraryExplorer() {
  const [cityFilter, setCityFilter] = useState<CityId | 'all'>(APP_CONFIG.defaults.cityFilter);
  const [globalPace, setGlobalPace] = useState<PaceMode>(APP_CONFIG.defaults.paceMode);
  const [selectedDayNum, setSelectedDayNum] = useState<number>(
    APP_CONFIG.defaults.selectedDayNumber
  );
  const [dayPaceOverrides, setDayPaceOverrides] = useState<Record<number, PaceMode>>({});
  const [viewMode, setViewMode] = useState<ViewMode>('inspector');
  const [copiedTable, setCopiedTable] = useState<boolean>(false);

  const visibleDays = filterItineraryDays(cityFilter);
  const activeDay =
    visibleDays.find((d) => d.dayNumber === selectedDayNum) ?? visibleDays[0] ?? ITINERARY_DAYS[0];

  const handleCityFilterChange = (nextCity: CityId | 'all') => {
    logFunctionCall('changeItineraryCityFilter', { nextCity });
    setCityFilter(nextCity);
    const matching = filterItineraryDays(nextCity);
    if (matching.length > 0 && !matching.some((d) => d.dayNumber === selectedDayNum)) {
      setSelectedDayNum(matching[0].dayNumber);
    }
  };

  const handleGlobalPaceChange = (nextPace: PaceMode) => {
    logFunctionCall('changeGlobalPaceMode', { nextPace });
    setGlobalPace(nextPace);
    setDayPaceOverrides({});
  };

  const handleDaySelect = (dayNumber: number) => {
    logFunctionCall('selectItineraryDay', { dayNumber });
    setSelectedDayNum(dayNumber);
  };

  const handleSingleDayOverride = (dayNumber: number, pace: PaceMode) => {
    logFunctionCall('overrideDayAfternoonPace', { dayNumber, pace });
    setDayPaceOverrides((prev) => ({ ...prev, [dayNumber]: pace }));
  };

  const handleViewModeChange = (nextMode: ViewMode) => {
    logFunctionCall('changeItineraryViewMode', { nextMode });
    setViewMode(nextMode);
  };

  const handleCopyMarkdownTable = async () => {
    logFunctionCall('copyMarkdownScheduleTable', {
      cityFilter,
      globalPace,
      rowCount: visibleDays.length,
    });

    const header = '| Day | Morning | Afternoon | Evening | Teen Appeal Factor |';
    const separator = '| --- | --- | --- | --- | --- |';
    const rows = visibleDays.map((day) => {
      const effectivePace = dayPaceOverrides[day.dayNumber] ?? globalPace;
      const afternoon = resolveAfternoonSlot(day, effectivePace);
      const dayLabel = `Day ${day.dayNumber} (${day.cityLabel})`;
      const teenFactor = `${afternoon.teenHook} ${day.slots.evening.teenHook}`.trim();
      return `| ${dayLabel} | ${day.slots.morning.title} | ${afternoon.title} | ${day.slots.evening.title} | ${teenFactor} |`;
    });

    const markdown = [header, separator, ...rows].join('\n');
    try {
      await navigator.clipboard.writeText(markdown);
      setCopiedTable(true);
      setTimeout(() => setCopiedTable(false), 2000);
    } catch {
      setCopiedTable(false);
    }
  };

  const renderSlotCard = (slot: ActivitySlot, day: ItineraryDay, isAfternoon = false) => {
    const activeDayPace = dayPaceOverrides[day.dayNumber] ?? globalPace;

    return (
      <div className="p-5 bg-[#FBF9F5] border border-stone-200 rounded-md">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-xs font-medium text-[#57534E] flex items-center gap-2">
            <span className="uppercase tracking-wider text-[#1C1917] font-semibold">
              {slot.timeOfDay}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-mono-num">{slot.durationLabel}</span>
            {slot.bookingNeeded && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-[#1E3A8A] font-medium">Advance Ticket</span>
              </>
            )}
          </div>

          {isAfternoon && (
            <div className="inline-flex items-center gap-1 p-0.5 bg-[#EBE6DF] rounded text-[11px]">
              {PACE_OPTIONS.map((opt) => {
                const isSelected = activeDayPace === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSingleDayOverride(day.dayNumber, opt.id)}
                    className={`px-2 py-0.5 rounded transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      isSelected
                        ? 'bg-[#FBF9F5] text-[#1C1917] font-semibold'
                        : 'text-[#57534E] hover:text-[#1C1917]'
                    }`}
                  >
                    {opt.id === PaceMode.BALANCED
                      ? 'Balanced'
                      : opt.id === PaceMode.TEEN_THRILL
                        ? 'Teen Swap'
                        : 'Culture Swap'}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <h4 className="mt-2 font-display text-lg font-semibold text-[#1C1917]">{slot.title}</h4>
        <p className="mt-1.5 text-sm leading-relaxed text-[#44403C]">{slot.description}</p>

        <div className="mt-4 pt-3 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div>
            <span className="font-semibold text-[#1E3A8A]">Teen Hook: </span>
            <span className="text-[#44403C]">{slot.teenHook}</span>
          </div>
          <div>
            <span className="font-semibold text-[#78350F]">Adult Highlight: </span>
            <span className="text-[#44403C]">{slot.adultHighlight}</span>
          </div>
        </div>
      </div>
    );
  };

  const renderDayDetail = (day: ItineraryDay) => {
    const effectivePace = dayPaceOverrides[day.dayNumber] ?? globalPace;
    const afternoonSlot = resolveAfternoonSlot(day, effectivePace);

    return (
      <div className="bg-[#F3EFE6]/55 border border-stone-200 rounded-md p-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-stone-200">
          <div>
            <div className="text-xs font-medium text-[#57534E] flex flex-wrap items-center gap-2">
              <span className="font-mono-num font-semibold text-[#1E3A8A]">
                Day {String(day.dayNumber).padStart(2, '0')}
              </span>
              <span aria-hidden="true">·</span>
              <span>{day.cityLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono-num">{day.walkingKm.toFixed(1)} km walking</span>
              <span aria-hidden="true">·</span>
              <span>Museum Load: {day.museumLoad}</span>
            </div>

            <h3 className="mt-2 font-display text-2xl font-semibold text-[#1C1917]">
              {day.title}
            </h3>
            <p className="mt-1 text-sm text-[#57534E]">{day.subtitle}</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 pb-5 border-b border-stone-200 text-xs">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-[#57534E] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <span className="font-semibold text-[#1C1917]">Hotel Base: </span>
              <span className="text-[#44403C]">{day.baseHotelArea}</span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Utensils className="w-4 h-4 text-[#57534E] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <span className="font-semibold text-[#1C1917]">Food Anchor: </span>
              <span className="text-[#44403C]">{day.foodAnchor}</span>
            </div>
          </div>
        </div>

        <div className="mt-5 space-y-4">
          {renderSlotCard(day.slots.morning, day, false)}
          {renderSlotCard(afternoonSlot, day, true)}
          {renderSlotCard(day.slots.evening, day, false)}
        </div>

        <div className="mt-5 pt-4 border-t border-stone-200 text-sm text-[#44403C]">
          <span className="font-semibold text-[#14532D]">Pacing Strategy: </span>
          {day.pacingTip}
        </div>
      </div>
    );
  };

  return (
    <section id="itinerary" className="py-16 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-stone-200">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-widest text-[#57534E]">
              04. Day-by-Day Blueprint
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-[#1C1917] [text-wrap:balance]">
              Interactive 10-Day Family Itinerary
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#44403C]">
              Pairs must-visit London landmarks—Natural History Museum, Science Museum, Imperial War
              Museum, and Churchill War Rooms—with Frameless immersive art, a Thames RIB speedboat,
              Borough &amp; Camden Markets, Covent Garden/Soho dining, Paris icons, and Disneyland.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Itinerary display mode"
            className="inline-flex items-center gap-1 p-1 bg-[#EBE6DF] rounded-lg self-start lg:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === 'inspector'}
              onClick={() => handleViewModeChange('inspector')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                viewMode === 'inspector'
                  ? 'bg-[#FBF9F5] text-[#1C1917] shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Day Inspector</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === 'table'}
              onClick={() => handleViewModeChange('table')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                viewMode === 'table'
                  ? 'bg-[#FBF9F5] text-[#1C1917] shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Schedule Table</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === 'expanded'}
              onClick={() => handleViewModeChange('expanded')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                viewMode === 'expanded'
                  ? 'bg-[#FBF9F5] text-[#1C1917] shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              <List className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Full Dossier</span>
            </button>
          </div>
        </div>

        {/* Filter & Pace Toolbar */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div
            role="tablist"
            aria-label="Filter itinerary by destination"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EBE6DF] rounded-lg self-start"
          >
            {CITY_FILTER_TABS.map((tab) => {
              const isSelected = cityFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleCityFilterChange(tab.id)}
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

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#57534E]">
              <SlidersHorizontal className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Afternoon Pace Lens:</span>
            </span>

            <div
              role="tablist"
              aria-label="Global afternoon pacing mode"
              className="inline-flex items-center gap-1 p-1 bg-[#EBE6DF] rounded-lg"
            >
              {PACE_OPTIONS.map((option) => {
                const isSelected = globalPace === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleGlobalPaceChange(option.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      isSelected
                        ? 'bg-[#1E3A8A] text-white'
                        : 'text-[#57534E] hover:text-[#1C1917]'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* View Modes */}
        {viewMode === 'table' && (
          <div className="mt-8 border border-stone-200 rounded-md overflow-hidden bg-[#FBF9F5]">
            <div className="px-5 py-3.5 bg-[#F3EFE6]/70 border-b border-stone-200 flex items-center justify-between gap-4">
              <span className="text-xs font-semibold text-[#1C1917]">
                10-Day Family Schedule Matrix ({visibleDays.length} Days)
              </span>
              <button
                type="button"
                onClick={handleCopyMarkdownTable}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1C1917] bg-[#FBF9F5] border border-stone-300 rounded hover:bg-stone-100 transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                {copiedTable ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#14532D]" aria-hidden="true" />
                    <span>Copied Markdown</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Copy Markdown Table</span>
                  </>
                )}
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-stone-200 bg-[#F3EFE6]/40 text-xs uppercase tracking-wider text-[#57534E]">
                    <th className="py-3 px-4 font-semibold w-28">Day</th>
                    <th className="py-3 px-4 font-semibold">Morning</th>
                    <th className="py-3 px-4 font-semibold">Afternoon</th>
                    <th className="py-3 px-4 font-semibold">Evening</th>
                    <th className="py-3 px-4 font-semibold">Teen Appeal Factor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-sm">
                  {visibleDays.map((day) => {
                    const effectivePace = dayPaceOverrides[day.dayNumber] ?? globalPace;
                    const afternoon = resolveAfternoonSlot(day, effectivePace);
                    return (
                      <tr key={day.dayNumber} className="align-top hover:bg-[#F3EFE6]/30">
                        <td className="py-4 px-4 font-mono-num text-xs font-semibold text-[#1E3A8A] whitespace-nowrap">
                          <div>Day {String(day.dayNumber).padStart(2, '0')}</div>
                          <div className="mt-0.5 font-sans font-normal text-[#57534E]">
                            {day.cityLabel}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-[#1C1917]">
                          <div className="font-semibold">{day.slots.morning.title}</div>
                          <p className="mt-1 text-xs text-[#57534E] leading-relaxed">
                            {day.slots.morning.description}
                          </p>
                        </td>
                        <td className="py-4 px-4 text-[#1C1917]">
                          <div className="font-semibold">{afternoon.title}</div>
                          <p className="mt-1 text-xs text-[#57534E] leading-relaxed">
                            {afternoon.description}
                          </p>
                        </td>
                        <td className="py-4 px-4 text-[#1C1917]">
                          <div className="font-semibold">{day.slots.evening.title}</div>
                          <p className="mt-1 text-xs text-[#57534E] leading-relaxed">
                            {day.slots.evening.description}
                          </p>
                        </td>
                        <td className="py-4 px-4 text-xs text-[#44403C] leading-relaxed">
                          <p>{afternoon.teenHook}</p>
                          <p className="mt-1 text-[#57534E]">{day.slots.evening.teenHook}</p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {viewMode === 'expanded' && (
          <div className="mt-8 space-y-8">
            {visibleDays.map((day) => (
              <div key={day.dayNumber}>{renderDayDetail(day)}</div>
            ))}
          </div>
        )}

        {viewMode === 'inspector' && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 border border-stone-200 rounded-md divide-y divide-stone-200 bg-[#FBF9F5]">
              {visibleDays.map((day) => {
                const isSelected = day.dayNumber === activeDay.dayNumber;
                return (
                  <button
                    key={day.dayNumber}
                    type="button"
                    onClick={() => handleDaySelect(day.dayNumber)}
                    className={`w-full text-left px-4 py-3.5 transition-colors cursor-pointer block ${
                      isSelected ? 'bg-[#F3EFE6]' : 'hover:bg-[#F3EFE6]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs text-[#57534E]">
                      <span
                        className={`font-mono-num font-semibold ${
                          isSelected ? 'text-[#1E3A8A]' : 'text-[#57534E]'
                        }`}
                      >
                        Day {String(day.dayNumber).padStart(2, '0')} · {day.cityLabel}
                      </span>
                      <span className="font-mono-num">{day.walkingKm.toFixed(1)} km</span>
                    </div>
                    <p
                      className={`mt-1 text-sm font-semibold leading-snug ${
                        isSelected ? 'text-[#1C1917]' : 'text-[#44403C]'
                      }`}
                    >
                      {day.title}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-8">{renderDayDetail(activeDay)}</div>
          </div>
        )}
      </div>
    </section>
  );
}
