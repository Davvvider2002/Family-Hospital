import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Phone, Mail, MapPin, Clock, Car, Train } from 'lucide-react';

const hours = [
  { day: 'Monday', hours: '8:00 AM - 5:00 PM' },
  { day: 'Tuesday', hours: '8:00 AM - 5:00 PM' },
  { day: 'Wednesday', hours: '8:00 AM - 5:00 PM' },
  { day: 'Thursday', hours: '8:00 AM - 5:00 PM' },
  { day: 'Friday', hours: '8:00 AM - 5:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 1:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

export function Location() {
  const headerReveal = useScrollReveal();
  const infoReveal = useScrollReveal();
  const galleryReveal = useScrollReveal();

  return (
    <main className="pt-[72px]">
      {/* Page Header */}
      <section className="bg-deep-forest pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="page-gutter">
          <div className="content-max-width" ref={headerReveal}>
            <p data-reveal className="text-caption text-teal mb-3">
              FIND US
            </p>
            <h1 data-reveal className="text-display-m text-white">
              Our Location
            </h1>
            <p data-reveal className="text-body-l text-white/70 mt-4 max-w-xl">
              Conveniently located on Robert Sobukwe Street with easy access and
              parking. Visit us for all your family medical needs.
            </p>
          </div>
        </div>
      </section>

      {/* Map & Info */}
      <section className="bg-off-white section-gap">
        <div className="page-gutter">
          <div
            className="content-max-width grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10"
            ref={infoReveal}
          >
            {/* Map */}
            <div data-reveal>
              <div className="rounded-[20px] overflow-hidden h-[400px] lg:h-[500px] bg-sage-mist">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.!2d28.2!3d-25.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQyJzAwLjAiUyAyOMKwMTInMDAuMCJF!5e0!3m2!1sen!2sza!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.1)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Family Medical Clinic Location"
                />
              </div>
            </div>

            {/* Info */}
            <div data-reveal className="space-y-8">
              <div>
                <h2 className="text-heading-l text-deep-forest">
                  Family Medical Clinic
                </h2>
                <div className="flex items-start gap-3 mt-4">
                  <MapPin size={22} className="text-teal flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-body-m text-charcoal">
                      311 Robert Sobukwe Street
                    </p>
                    <p className="text-body-m text-charcoal">
                      Pretoria, Gauteng
                    </p>
                    <a
                      href="https://maps.google.com/?q=311+Robert+Sobukwe+Street+Pretoria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body-m text-teal hover:underline inline-flex items-center gap-1 mt-1"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours table */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={20} className="text-teal" />
                  <h3 className="text-heading-m text-deep-foreground">
                    Operating Hours
                  </h3>
                </div>
                <div className="rounded-xl overflow-hidden border border-[rgba(38,70,83,0.08)]">
                  {hours.map((item, i) => (
                    <div
                      key={item.day}
                      className={`flex justify-between items-center px-4 py-3 ${
                        i % 2 === 0 ? 'bg-sage-mist' : 'bg-white'
                      }`}
                    >
                      <span className="text-body-m text-charcoal">
                        {item.day}
                      </span>
                      <span
                        className={`text-body-m font-medium ${
                          item.hours === 'Closed'
                            ? 'text-muted-slate'
                            : 'text-deep-forest'
                        }`}
                      >
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-3">
                <a
                  href="tel:0123040067"
                  className="flex items-center gap-3 text-heading-m text-teal hover:underline"
                >
                  <Phone size={22} />
                  012 304 0067
                </a>
                <a
                  href="mailto:info@familymedical.co.za"
                  className="flex items-center gap-3 text-body-m text-teal hover:underline"
                >
                  <Mail size={20} />
                  info@familymedical.co.za
                </a>
              </div>

              {/* Notes */}
              <div className="space-y-2 pt-4 border-t border-[rgba(38,70,83,0.08)]">
                <div className="flex items-center gap-2 text-body-m text-charcoal">
                  <Car size={18} className="text-teal flex-shrink-0" />
                  Free parking available on site
                </div>
                <div className="flex items-center gap-2 text-body-m text-charcoal">
                  <Train size={18} className="text-teal flex-shrink-0" />
                  Accessible via main road transport routes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-sage-mist section-gap">
        <div className="page-gutter">
          <div className="content-max-width" ref={galleryReveal}>
            <h2 data-reveal className="text-heading-l text-deep-forest mb-8">
              Our Clinic
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/clinic-exterior.jpg"
                alt="Clinic exterior"
                className="rounded-2xl object-cover w-full h-48 md:h-72"
                loading="lazy"
                data-reveal
              />
              <img
                src="/clinic-waiting.jpg"
                alt="Waiting room"
                className="rounded-2xl object-cover w-full h-48 md:h-72"
                loading="lazy"
                data-reveal
              />
              <img
                src="/clinic-consultation.jpg"
                alt="Consultation room"
                className="rounded-2xl object-cover w-full h-48 md:h-72"
                loading="lazy"
                data-reveal
              />
              <img
                src="/doctor-portrait.jpg"
                alt="Dr. Williams"
                className="rounded-2xl object-cover w-full h-48 md:h-72"
                loading="lazy"
                data-reveal
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
