import HeroSection from './HeroSection'
import ServicesOverview from './ServicesOverview'
import AboutDoctor from './AboutDoctor'
import ReviewsHelix from './ReviewsHelix'
import LocationContact from './LocationContact'

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
