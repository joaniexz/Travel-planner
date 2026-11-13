'use client';

import { Printer } from 'lucide-react';
import { APP_CONFIG } from '@/lib/config';
import { logFunctionCall } from '@/lib/logger';

export default function TopNav() {
  const handlePrint = () => {
    logFunctionCall('handlePrintDossier', { action: 'window.print' });
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleNavClick = (sectionId: string) => {
    logFunctionCall('navigateToSection', { sectionId });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        <a
          href="#top"
          onClick={() => handleNavClick('top')}
          className="font-display text-xl font-semibold tracking-tight text-[#1C1917] whitespace-nowrap shrink-0"
        >
          {APP_CONFIG.appName}
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#57534E]">
          <a
            href="#allocation"
            onClick={() => handleNavClick('allocation')}
            className="hover:text-[#1C1917] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Split Strategy
          </a>
          <a
            href="#route-order"
            onClick={() => handleNavClick('route-order')}
            className="hover:text-[#1C1917] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Route Order
          </a>
          <a
            href="#itinerary"
            onClick={() => handleNavClick('itinerary')}
            className="hover:text-[#1C1917] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            10-Day Plan
          </a>
          <a
            href="#food-desserts"
            onClick={() => handleNavClick('food-desserts')}
            className="hover:text-[#1C1917] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Food &amp; Treats
          </a>
          <a
            href="#accommodations"
            onClick={() => handleNavClick('accommodations')}
            className="hover:text-[#1C1917] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Stays &amp; Laundry
          </a>
        </nav>

        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#1E3A8A] rounded-md hover:bg-[#172D6B] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A]"
          >
            <Printer className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Print Plan</span>
          </button>
        </div>
      </div>
    </header>
  );
}
