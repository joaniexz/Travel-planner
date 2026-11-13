import { APP_CONFIG } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#F3EFE6]/50 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#57534E]">
        <div>
          <span className="font-display text-sm font-semibold text-[#1C1917]">
            {APP_CONFIG.appName}
          </span>
          <span className="mx-2" aria-hidden="true">
            ·
          </span>
          <span>10-Day Family Itinerary for 2 Adults &amp; 2 Teenagers</span>
        </div>

        <div className="flex items-center gap-5">
          <a href="#allocation" className="hover:text-[#1C1917] transition-colors">
            Allocation
          </a>
          <a href="#route-order" className="hover:text-[#1C1917] transition-colors">
            Route Order
          </a>
          <a href="#itinerary" className="hover:text-[#1C1917] transition-colors">
            10-Day Plan
          </a>
          <a href="#pacing" className="hover:text-[#1C1917] transition-colors">
            Pacing Guide
          </a>
        </div>
      </div>
    </footer>
  );
}
