import { HeroSection } from '@/sections/home/HeroSection';
import { ServicesOverview } from '@/sections/home/ServicesOverview';
import { AboutDoctor } from '@/sections/home/AboutDoctor';
import { ReviewsHelix } from '@/sections/home/ReviewsHelix';
import { LocationContact } from '@/sections/home/LocationContact';

export function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <AboutDoctor />
      <ReviewsHelix />
      <LocationContact />
    </main>
  );
}
