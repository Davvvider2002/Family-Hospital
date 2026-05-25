import { Routes, Route, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { FloatingBookButton } from '@/components/FloatingBookButton';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { Home } from '@/pages/Home';
import { Services } from '@/pages/Services';
import { About } from '@/pages/About';
import { Reviews } from '@/pages/Reviews';
import { Location } from '@/pages/Location';
import { Contact } from '@/pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('fadeOut');
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('fadeIn');
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);

  return (
    <div
      className={`transition-opacity duration-300 ${
        transitionStage === 'fadeOut' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {children}
    </div>
  );
}

function TidioChat() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//code.tidio.co/familymedicalclinic.js';
    script.async = true;
    // Note: Replace with actual Tidio public key when available
    // script.src = '//code.tidio.co/YOUR_TIDIO_KEY.js';
    // For now, we'll skip loading the actual Tidio script since we don't have the key
    // document.body.appendChild(script);

    return () => {
      // document.body.removeChild(script);
    };
  }, []);

  return null;
}

export default function App() {
  useSmoothScroll();

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <ScrollToTop />
      <TidioChat />
      <Navigation />

      <div className="flex-1">
        <PageTransition>
          <Routes location={useLocation()}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/location" element={<Location />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </div>

      <Footer />
      <FloatingBookButton />
    </div>
  );
}
