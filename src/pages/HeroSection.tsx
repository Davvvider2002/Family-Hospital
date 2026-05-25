import { HelixSystem } from '@/components/helix/HelixSystem';
import { StarRating } from '@/components/StarRating';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden bg-[#264653]">
      {/* 3D Helix Background */}
      <HelixSystem />

      {/* Hero text overlay */}
      <div
        className="absolute bottom-[10vh] left-0 page-gutter z-10 pointer-events-none"
        style={{ maxWidth: '640px' }}
      >
        <div
          className="rounded-2xl p-8 md:p-10"
          style={{
            background: 'rgba(29,45,53,0.75)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          {/* Star rating */}
          <div className="flex items-center gap-3 mb-5">
            <StarRating rating={5} size={18} />
            <span className="text-caption text-[#E9C46A]/90">
              4.9 from 120+ reviews
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-display-xl font-semibold text-white"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.3)' }}
          >
            Trusted Care for Your Family
          </h1>

          {/* Subheadline */}
          <p className="text-body-l text-white/85 mt-4">
            Personalized medical attention from Dr. Williams, serving the
            community with compassion and expertise.
          </p>

          {/* CTA Row */}
          <div className="flex flex-wrap gap-4 mt-8 pointer-events-auto">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Appointment
            </a>
            <a href="tel:0123040067" className="btn-secondary">
              Call 012 304 0067
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center transition-opacity duration-500 ${
          scrolled ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="relative w-px h-10 bg-white/40 overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-3 bg-white/80 rounded-full"
            style={{
              animation: 'scrollDot 2s ease-in-out infinite',
            }}
          />
        </div>
        <style>{`
          @keyframes scrollDot {
            0% { transform: translateY(-12px); opacity: 0; }
            30% { opacity: 1; }
            70% { opacity: 1; }
            100% { transform: translateY(40px); opacity: 0; }
          }
        `}</style>
      </div>
    </section>
  );
}
