import { Link } from 'react-router';
import { Stethoscope, Heart, Shield, Syringe, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const serviceData = [
  {
    icon: Stethoscope,
    title: 'General Consultations',
    description:
      'From routine checkups to acute illness management, we provide thorough, personalized care for patients of all ages.',
  },
  {
    icon: Heart,
    title: 'Chronic Disease Care',
    description:
      'Ongoing management and support for diabetes, hypertension, asthma, and other long-term conditions.',
  },
  {
    icon: Shield,
    title: 'Preventive Health',
    description:
      'Vaccinations, health screenings, wellness exams, and lifestyle counseling to keep your family healthy.',
  },
  {
    icon: Syringe,
    title: 'Minor Procedures',
    description:
      'In-clinic procedures including wound care, injections, ear syringing, and skin lesion removal.',
  },
];

export function ServicesOverview() {
  const revealRef = useScrollReveal({ stagger: 0.1 });

  return (
    <section className="bg-off-white section-gap">
      <div className="page-gutter">
        <div className="content-max-width" ref={revealRef}>
          {/* Section header */}
          <div data-reveal>
            <p className="text-caption text-teal mb-3">WHAT WE OFFER</p>
            <h2 className="text-heading-l text-deep-forest">
              Comprehensive Family Healthcare
            </h2>
            <p className="text-body-m text-charcoal mt-4 max-w-xl">
              We provide a wide range of medical services designed to meet the
              health needs of every family member, from infants to seniors.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {serviceData.map((service) => (
              <div
                key={service.title}
                data-reveal
                className="bg-sage-mist rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: '0 4px 20px rgba(38,70,83,0.04)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    '0 12px 40px rgba(38,70,83,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    '0 4px 20px rgba(38,70,83,0.04)';
                }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-[rgba(42,157,143,0.15)] flex items-center justify-center">
                  <service.icon size={24} className="text-teal" />
                </div>

                <h3 className="text-heading-m text-deep-forest mt-5">
                  {service.title}
                </h3>
                <p className="text-body-m text-charcoal mt-2">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-caption text-teal link-underline mt-4"
                >
                  Learn more
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
