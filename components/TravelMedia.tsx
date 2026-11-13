'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Compass } from 'lucide-react';
import heroImg from '@/src/assets/images/hero_channel_journey_1794551542836.jpg';
import londonImg from '@/src/assets/images/london_editorial_day_1794551543218.jpg';
import parisImg from '@/src/assets/images/paris_editorial_day_1794551543837.jpg';
import disneylandImg from '@/src/assets/images/disneyland_paris_castle_1794551544153.jpg';

export type MediaSlotKey = 'hero' | 'london' | 'paris' | 'disneyland';

const MEDIA_REGISTRY: Record<
  MediaSlotKey,
  { src: StaticImageData; alt: string; caption: string }
> = {
  hero: {
    src: heroImg,
    alt: 'Eurostar high-speed train beneath St Pancras International Victorian glass roof at golden hour',
    caption: 'Fig. 01 — St Pancras International departure platform for the 2h 16m Channel crossing to Paris.',
  },
  london: {
    src: londonImg,
    alt: 'London South Bank riverside walkway toward Tower Bridge in crisp morning light',
    caption: 'Fig. 02 — Thames South Bank promenade linking Borough Market, Shakespeare’s Globe, and Tower Bridge.',
  },
  paris: {
    src: parisImg,
    alt: 'Sunlit cobblestone corner and cafe terrace in central Paris Le Marais',
    caption: 'Fig. 03 — Haussmann limestone corners and street-side cafe terraces in central Paris.',
  },
  disneyland: {
    src: disneylandImg,
    alt: 'Fairytale chateau spires and formal French gardens illuminated at twilight',
    caption: 'Fig. 04 — Evening twilight gardens in Marne-la-Vallée marking the two-day coaster finale.',
  },
};

interface TravelMediaProps {
  slot: MediaSlotKey;
  className?: string;
  showCaption?: boolean;
  priority?: boolean;
}

export default function TravelMedia({
  slot,
  className = '',
  showCaption = false,
  priority = false,
}: TravelMediaProps) {
  const [hasError, setHasError] = useState(false);
  const item = MEDIA_REGISTRY[slot];

  return (
    <figure className={`flex flex-col ${className}`}>
      <div className="relative w-full h-full overflow-hidden bg-[#EBE6DF] border border-stone-200">
        {!hasError ? (
          <Image
            src={item.src}
            alt={item.alt}
            fill
            priority={priority}
            referrerPolicy="no-referrer"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full p-8 text-center bg-gradient-to-br from-[#F3EFE6] to-[#E5DEC9] text-[#57534E]">
            <Compass className="w-7 h-7 mb-3 text-[#1E3A8A]" strokeWidth={1.5} />
            <p className="font-display text-base font-medium text-[#1C1917]">{item.alt}</p>
          </div>
        )}
      </div>
      {showCaption && (
        <figcaption className="mt-2.5 text-xs font-serif italic text-[#57534E]">
          {item.caption}
        </figcaption>
      )}
    </figure>
  );
}
