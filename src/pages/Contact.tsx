import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Phone, Mail, MapPin, Clock, AlertTriangle, Send } from 'lucide-react';
import { CalendlyEmbed } from '@/components/CalendlyEmbed';

export function Contact() {
  const headerReveal = useScrollReveal();
  const formReveal = useScrollReveal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="pt-[72px]">
      {/* Page Header */}
      <section className="bg-deep-forest pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="page-gutter">
          <div className="content-max-width" ref={headerReveal}>
            <p data-reveal className="text-caption text-teal mb-3">
              GET IN TOUCH
            </p>
            <h1 data-reveal className="text-display-m text-white">
              Contact Us
            </h1>
            <p data-reveal className="text-body-l text-white/70 mt-4 max-w-xl">
              We&apos;re here to help. Reach out by phone, email, or visit us in
              person. For appointments, use our online booking system.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-off-white section-gap">
        <div className="page-gutter">
          <div
            className="content-max-width grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10"
            ref={formReveal}
          >
            {/* Contact Form */}
            <div data-reveal>
              <div className="bg-sage-mist rounded-[20px] p-6 md:p-8">
                <h2 className="text-heading-m text-deep-forest mb-6">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                      <Send size={28} className="text-teal" />
                    </div>
                    <h3 className="text-heading-m text-deep-forest">
                      Message Sent!
                    </h3>
                    <p className="text-body-m text-charcoal mt-2">
                      We&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-caption text-muted-slate mb-1 block"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-white border text-body-m text-charcoal outline-none transition-all focus:border-teal focus:ring-2 focus:ring-[rgba(42,157,143,0.15)]"
                        style={{ borderColor: 'rgba(38,70,83,0.12)' }}
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="text-caption text-muted-slate mb-1 block"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 rounded-xl bg-white border text-body-m text-charcoal outline-none transition-all focus:border-teal focus:ring-2 focus:ring-[rgba(42,157,143,0.15)]"
                          style={{ borderColor: 'rgba(38,70,83,0.12)' }}
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="text-caption text-muted-slate mb-1 block"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl bg-white border text-body-m text-charcoal outline-none transition-all focus:border-teal focus:ring-2 focus:ring-[rgba(42,157,143,0.15)]"
                          style={{ borderColor: 'rgba(38,70,83,0.12)' }}
                          placeholder="012 345 6789"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="text-caption text-muted-slate mb-1 block"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border text-body-m text-charcoal outline-none transition-all focus:border-teal focus:ring-2 focus:ring-[rgba(42,157,143,0.15)]"
                        style={{ borderColor: 'rgba(38,70,83,0.12)' }}
                      >
                        <option>General Inquiry</option>
                        <option>Appointment Question</option>
                        <option>Feedback</option>
                        <option>Billing</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="text-caption text-muted-slate mb-1 block"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border text-body-m text-charcoal outline-none transition-all resize-none focus:border-teal focus:ring-2 focus:ring-[rgba(42,157,143,0.15)]"
                        style={{ borderColor: 'rgba(38,70,83,0.12)' }}
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary py-4"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right column - Emergency + Contact info */}
            <div data-reveal className="space-y-6">
              {/* Emergency notice */}
              <div
                className="rounded-2xl p-6 md:p-8 border"
                style={{
                  background: 'rgba(233,196,106,0.1)',
                  borderColor: '#E9C46A',
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-warm-sand/20 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle size={24} className="text-[#D4A843]" />
                  </div>
                  <div>
                    <h3 className="text-heading-m text-deep-foreground">
                      Medical Emergency?
                    </h3>
                    <p className="text-body-m text-charcoal mt-2">
                      If you are experiencing a life-threatening emergency, call
                      emergency services immediately or go to your nearest
                      hospital.
                    </p>
                    <a
                      href="tel:10177"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold mt-4 transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        background: '#E9C46A',
                        color: '#264653',
                      }}
                    >
                      Call Emergency: 10177
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct contact info */}
              <div className="bg-sage-mist rounded-2xl p-6 md:p-8 space-y-5">
                <h3 className="text-heading-m text-deep-foreground">
                  Contact Information
                </h3>

                <a
                  href="tel:0123040067"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-full bg-[rgba(42,157,143,0.15)] flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-teal" />
                  </div>
                  <div>
                    <p className="text-caption text-muted-slate">PHONE</p>
                    <p className="text-body-l text-teal font-medium group-hover:underline">
                      012 304 0067
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@familymedical.co.za"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-full bg-[rgba(42,157,143,0.15)] flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-teal" />
                  </div>
                  <div>
                    <p className="text-caption text-muted-slate">EMAIL</p>
                    <p className="text-body-m text-teal group-hover:underline">
                      info@familymedical.co.za
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[rgba(42,157,143,0.15)] flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-teal" />
                  </div>
                  <div>
                    <p className="text-caption text-muted-slate">ADDRESS</p>
                    <p className="text-body-m text-charcoal">
                      311 Robert Sobukwe Street
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[rgba(42,157,143,0.15)] flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-teal" />
                  </div>
                  <div>
                    <p className="text-caption text-muted-slate">HOURS</p>
                    <p className="text-body-m text-charcoal">
                      Mon-Fri: 8AM-5PM
                    </p>
                    <p className="text-body-m text-charcoal">
                      Sat: 9AM-1PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="bg-sage-mist section-gap">
        <div className="page-gutter">
          <div className="content-max-width text-center mb-10">
            <h2 className="text-heading-l text-deep-forest">
              Book Online
            </h2>
            <p className="text-body-m text-charcoal mt-4 max-w-xl mx-auto">
              Schedule your appointment directly using our online booking
              system. Available 24/7 for your convenience.
            </p>
          </div>
          <div className="content-max-width">
            <div className="bg-white rounded-2xl overflow-hidden">
              <CalendlyEmbed className="w-full" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
