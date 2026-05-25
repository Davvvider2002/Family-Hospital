import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Phone, Clock, Mail, MapPin } from 'lucide-react';
import { CalendlyEmbed } from '@/components/CalendlyEmbed';

export function LocationContact() {
  const revealRef = useScrollReveal();

  return (
    <section className="bg-off-white section-gap">
      <div className="page-gutter">
        <div className="content-max-width" ref={revealRef}>
          <div data-reveal className="text-center mb-12">
            <p className="text-caption text-teal mb-3">GET IN TOUCH</p>
            <h2 className="text-heading-l text-deep-forest">
              Book Your Appointment
            </h2>
            <p className="text-body-m text-charcoal mt-4 max-w-xl mx-auto">
              Use our online booking system to schedule your visit, or contact
              us directly. We look forward to caring for your family.
            </p>
          </div>

          <div data-reveal className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10">
            {/* Contact info */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[rgba(42,157,143,0.15)] flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-teal" />
                </div>
                <div>
                  <p className="text-caption text-muted-slate mb-1">PHONE</p>
                  <a
                    href="tel:0123040067"
                    className="text-heading-m text-teal hover:underline"
                  >
                    012 304 0067
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[rgba(42,157,143,0.15)] flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-teal" />
                </div>
                <div>
                  <p className="text-caption text-muted-slate mb-1">HOURS</p>
                  <p className="text-body-m text-charcoal">
                    Mon-Fri: 8AM-5PM
                  </p>
                  <p className="text-body-m text-charcoal">
                    Sat: 9AM-1PM
                  </p>
                  <p className="text-body-m text-muted-slate">
                    Sun: Closed
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[rgba(42,157,143,0.15)] flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-teal" />
                </div>
                <div>
                  <p className="text-caption text-muted-slate mb-1">EMAIL</p>
                  <a
                    href="mailto:info@familymedical.co.za"
                    className="text-body-m text-teal hover:underline"
                  >
                    info@familymedical.co.za
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[rgba(42,157,143,0.15)] flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-teal" />
                </div>
                <div>
                  <p className="text-caption text-muted-slate mb-1">ADDRESS</p>
                  <p className="text-body-m text-charcoal">
                    311 Robert Sobukwe Street
                  </p>
                  <a
                    href="https://maps.google.com/?q=311+Robert+Sobukwe+Street"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-m text-teal hover:underline inline-flex items-center gap-1 mt-1"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Calendly Embed */}
            <div className="bg-sage-mist rounded-2xl overflow-hidden">
              <CalendlyEmbed className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
