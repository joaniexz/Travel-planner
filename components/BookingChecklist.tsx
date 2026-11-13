'use client';

import { useState } from 'react';
import { CheckSquare, RotateCcw, Square } from 'lucide-react';
import { logFunctionCall } from '@/lib/logger';
import { BOOKING_CHECKLIST } from '@/data/pacing-playbook';

export default function BookingChecklist() {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const handleToggleItem = (id: string) => {
    logFunctionCall('toggleBookingChecklistItem', { id });
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleReset = () => {
    logFunctionCall('resetBookingChecklist', {});
    setCheckedIds([]);
  };

  return (
    <section id="bookings" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-stone-200">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-widest text-[#57534E]">
              08. Advance Reservations
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-[#1C1917] [text-wrap:balance]">
              Queue-Skipping Booking Timeline
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#44403C]">
              Nothing drains teenager patience faster than standing 90 minutes in an unbooked ticket
              queue. Lock in these timed entries on schedule so every morning starts immediately.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span className="font-mono-num text-sm font-semibold text-[#1C1917]">
              {checkedIds.length} / {BOOKING_CHECKLIST.length} Booked
            </span>

            {checkedIds.length > 0 && (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#57534E] hover:text-[#1C1917] border border-stone-300 rounded cursor-pointer transition-colors"
              >
                <RotateCcw className="w-3 h-3" aria-hidden="true" />
                <span>Clear</span>
              </button>
            )}
          </div>
        </div>

        <div className="mt-8 border border-stone-200 rounded-md divide-y divide-stone-200 bg-[#FBF9F5]">
          {BOOKING_CHECKLIST.map((entry) => {
            const isChecked = checkedIds.includes(entry.id);
            return (
              <button
                key={entry.id}
                type="button"
                onClick={() => handleToggleItem(entry.id)}
                className={`w-full text-left p-5 flex items-start gap-4 transition-colors cursor-pointer ${
                  isChecked ? 'bg-[#F3EFE6]/70' : 'hover:bg-[#F3EFE6]/40'
                }`}
              >
                <span className="mt-0.5 text-[#1E3A8A] shrink-0">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5" aria-hidden="true" />
                  ) : (
                    <Square className="w-5 h-5 text-[#78716C]" aria-hidden="true" />
                  )}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span
                      className={`text-sm font-semibold ${
                        isChecked ? 'line-through text-[#78716C]' : 'text-[#1C1917]'
                      }`}
                    >
                      {entry.item}
                    </span>

                    <span className="font-mono-num text-xs font-medium text-[#1E3A8A] shrink-0">
                      {entry.leadTime}
                    </span>
                  </div>

                  <div className="mt-1 text-xs text-[#57534E] flex flex-wrap items-center gap-2">
                    <span>{entry.cityLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>Priority: {entry.priority}</span>
                  </div>

                  <p className="mt-2 text-sm text-[#44403C] leading-relaxed">{entry.notes}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
