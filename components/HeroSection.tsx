'use client';

import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import TravelMedia from '@/components/TravelMedia';
import { APP_CONFIG } from '@/lib/config';
import { logFunctionCall } from '@/lib/logger';

export default function HeroSection() {
  const handleJumpToItinerary = () => {
    logFunctionCall('jumpToSection', { target: 'itinerary' });
    const el = document.getElementById('itinerary');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="top" className="pt-10 pb-12 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
        >
          <div className="lg:col-span-6 flex flex-col justify-between py-1">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-[#57534E]">
                {APP_CONFIG.editionLabel}
              </p>

              <h1 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-[#1C1917] leading-[1.12] [text-wrap:balance]">
                Ten Days Across London, Paris &amp; Disneyland
              </h1>

              <p className="mt-5 text-base leading-relaxed text-[#44403C] max-w-xl">
                A structured family field plan built for two adults and two teenagers: four days in
                London, four days in Central Paris, and a two-day coaster finale in Marne-la-Vallée—linked
                by city-center Eurostar rail and governed by a strict 90-minute museum ceiling.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={handleJumpToItinerary}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1C1917] rounded-md hover:bg-[#292524] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1917]"
              >
                <span>Explore 10-Day Schedule</span>
                <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <div className="text-xs text-[#57534E] flex items-center gap-2">
                <span>Party: 2 Adults, 2 Teens</span>
                <span aria-hidden="true">·</span>
                <span>Open-Jaw: LHR In / CDG Out</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]">
            <TravelMedia slot="hero" showCaption className="h-full" priority />
          </div>
        </motion.div>

        <div className="mt-10 pt-8 border-t border-stone-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[#57534E]">
              Recommended Split
            </p>
            <p className="mt-1.5 font-mono-num text-2xl font-semibold text-[#1C1917]">
              4 · 4 · 2 Days
            </p>
            <p className="mt-1 text-xs text-[#57534E]">
              London · Central Paris · Disneyland
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[#57534E]">
              Practical Route Order
            </p>
            <p className="mt-1.5 font-display text-xl font-semibold text-[#1C1917]">
              London → Paris → Disney
            </p>
            <p className="mt-1 text-xs text-[#57534E]">
              Soft jet-lag landing &amp; 10m CDG exit
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[#57534E]">
              Channel Crossing
            </p>
            <p className="mt-1.5 font-mono-num text-2xl font-semibold text-[#1C1917]">
              2h 16m Rail
            </p>
            <p className="mt-1 text-xs text-[#57534E]">
              St Pancras to Gare du Nord direct
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[#57534E]">
              Anti-Fatigue Rule
            </p>
            <p className="mt-1.5 font-mono-num text-2xl font-semibold text-[#1E3A8A]">
              90-Min Cap
            </p>
            <p className="mt-1 text-xs text-[#57534E]">
              Max indoor gallery block per day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
