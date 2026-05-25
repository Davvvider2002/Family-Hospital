import { services } from '@/data/services';
import { Stethoscope, Heart, Shield, Syringe, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { StarRating } from '@/components/StarRating';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Stethoscope,
  Heart,
  Shield,
  Syringe,
};

export function Services() {
  const revealRef = useScrollReveal();
  const ctaRevealRef = useScrollReveal();

  return (
    <main className="pt-[72px]">
      {/* Page Header */}
      <section className="bg-deep-forest pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="page-gutter">
          <div className="content-max-width" ref={revealRef}>
            <p data-reveal className="text-caption text-teal mb-3">
              OUR SERVICES
            </p>
            <h1 data-reveal className="text-display-m text-white">
              Comprehensive Family Healthcare
            </h1>
            <p data-reveal className="text-body-l text-white/70 mt-4 max-w-xl">
              We offer a full range of medical services tailored to every member
              of your family, from infants to seniors.
            </p>
          </div>
        </div>
      </section>

      {/* Service Detail Cards */}
      <section className="bg-off-white section-gap">
        <div className="page-gutter">
          <div className="content-max-width space-y-12">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Stethoscope;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`bg-sage-mist rounded-[20px] overflow-hidden grid grid-cols-1 lg:grid-cols-[40%_60%] ${
                    !isEven ? 'lg:grid-cols-[60%_40%]' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 lg:h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className={`p-8 md:p-12 flex flex-col justify-center ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="w-12 h-12 rounded-full bg-[rgba(42,157,143,0.15)] flex items-center justify-center mb-4">
                      <Icon size={24} className="text-teal" />
                    </div>
                    <h2 className="text-heading-m text-deep-forest">
                      {service.title}
                    </h2>
                    <p className="text-body-l text-charcoal mt-3">
                      {service.fullDescription}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {service.subServices.map((sub) => (
                        <li key={sub} className="flex items-center gap-2 text-body-m text-charcoal">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                          {sub}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary self-start mt-6"
                    >
                      Book This Service
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-teal py-16 md:py-20">
        <div className="page-gutter">
          <div
            className="content-max-width text-center"
            ref={ctaRevealRef}
          >
            <h2 data-reveal className="text-display-m text-white">
              Ready to Prioritize Your Health?
            </h2>
            <p data-reveal className="text-body-l text-white/85 mt-4 max-w-xl mx-auto">
              Book an appointment today and experience personalized family
              medical care.
            </p>
            <div data-reveal className="mt-8 flex items-center justify-center gap-1">
              <StarRating rating={5} size={16} />
              <span className="text-caption text-white/80 ml-2">
                Trusted by 120+ patients
              </span>
            </div>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white text-teal mt-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Book Appointment
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
