import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Link } from 'react-router';

const credentials = ['MBChB', 'Family Medicine', 'HPCSA Registered'];

export function AboutDoctor() {
  const revealRef = useScrollReveal();

  return (
    <section className="bg-sage-mist section-gap">
      <div className="page-gutter">
        <div
          className="content-max-width grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 items-center"
          ref={revealRef}
        >
          {/* Image column */}
          <div data-reveal className="relative">
            <img
              src="/doctor-portrait.jpg"
              alt="Dr. Williams - Family Medical Practitioner"
              className="w-full rounded-[20px] object-cover"
              style={{ aspectRatio: '3/4' }}
              loading="lazy"
            />
          </div>

          {/* Content column */}
          <div data-reveal>
            <p className="text-caption text-teal mb-3">MEET YOUR DOCTOR</p>
            <h2 className="text-heading-l text-deep-forest">
              Dr. Williams — MBChB, 15 Years of Experience
            </h2>
            <p className="text-body-m text-charcoal mt-4">
              Dr. Williams has dedicated his career to providing compassionate,
              patient-centered family medicine. After graduating with his MBChB
              degree, he pursued specialized training in family medicine and has
              been serving the local community for over 15 years.
            </p>
            <p className="text-body-m text-charcoal mt-4">
              His approach combines evidence-based medical practice with genuine
              care for each patient&apos;s unique circumstances. He believes in
              building long-term relationships with families, understanding their
              health history, and providing continuity of care across
              generations.
            </p>

            {/* Credential badges */}
            <div className="flex flex-wrap gap-3 mt-6">
              {credentials.map((cred) => (
                <span
                  key={cred}
                  className="px-4 py-2 rounded-full text-caption text-teal bg-white border"
                  style={{ borderColor: 'rgba(42,157,143,0.15)' }}
                >
                  {cred}
                </span>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-1 text-teal font-medium mt-6 link-underline"
            >
              Learn More About Dr. Williams
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
