import TopNav from '@/components/TopNav';
import HeroSection from '@/components/HeroSection';
import DaySplitPlanner from '@/components/DaySplitPlanner';
import RouteOrderSection from '@/components/RouteOrderSection';
import DailyTransitPlaybook from '@/components/DailyTransitPlaybook';
import ItineraryExplorer from '@/components/ItineraryExplorer';
import FoodDessertGuide from '@/components/FoodDessertGuide';
import AccommodationGuide from '@/components/AccommodationGuide';
import PacingPlaybook from '@/components/PacingPlaybook';
import BookingChecklist from '@/components/BookingChecklist';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1917]">
      <TopNav />
      <main className="flex-1">
        <HeroSection />
        <DaySplitPlanner />
        <RouteOrderSection />
        <DailyTransitPlaybook />
        <ItineraryExplorer />
        <FoodDessertGuide />
        <AccommodationGuide />
        <PacingPlaybook />
        <BookingChecklist />
      </main>
      <Footer />
    </div>
  );
}
