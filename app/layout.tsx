import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Channel & Castle — 10-Day Family Travel Planner',
  description:
    'A 10-day London, Central Paris, and Disneyland Paris itinerary, route order strategist, and anti-museum-fatigue pacing planner for two adults and two teenagers.',
  openGraph: {
    title: 'Channel & Castle — 10-Day Family Travel Planner',
    description:
      'A 10-day London, Central Paris, and Disneyland Paris itinerary, route order strategist, and anti-museum-fatigue pacing planner for two adults and two teenagers.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Channel & Castle — 10-Day Family Travel Planner',
    description:
      'A 10-day London, Central Paris, and Disneyland Paris itinerary, route order strategist, and anti-museum-fatigue pacing planner for two adults and two teenagers.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} ${jetbrains.variable}`}
    >
      <body suppressHydrationWarning className="min-h-screen bg-[#FBF9F5] text-[#1C1917] antialiased">
        {children}
      </body>
    </html>
  );
}
