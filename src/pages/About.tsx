import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Award, Users, MapPin } from 'lucide-react';

const stats = [
  {
    icon: Award,
    number: '15+',
    label: 'years serving the community',
  },
  {
    icon: Users,
    number: '5,000+',
    label: 'families under our care',
  },
  {
    icon: MapPin,
    number: '1',
    label: 'conveniently located clinic',
  },
];

const credentials = [
  { label: 'Medical Degree', value: 'MBChB, University of Cape Town' },
  { label: 'Experience', value: '15+ years in family medicine' },
  { label: 'Registration', value: 'HPCSA Registered Practitioner' },
  { label: 'Special Interest', value: 'Chronic disease management & preventive care' },
];

export function About() {
  const headerReveal = useScrollReveal();
  const profileReveal = useScrollReveal();
  const clinicReveal = useScrollReveal();

  return (
    <main className="pt-[72px]">
      {/* Page Header */}
      <section className="bg-deep-forest pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="page-gutter">
          <div className="content-max-width" ref={headerReveal}>
            <p data-reveal className="text-caption text-teal mb-3">
              ABOUT US
            </p>
            <h1 data-reveal className="text-display-m text-white">
              Meet Dr. Williams
            </h1>
            <p data-reveal className="text-body-l text-white/70 mt-4 max-w-xl">
              A dedicated family physician committed to providing personalized,
              compassionate healthcare to every patient who walks through our
              doors.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="bg-off-white section-gap">
        <div className="page-gutter">
          <div
            className="content-max-width grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 items-start"
            ref={profileReveal}
          >
            {/* Portrait */}
            <div data-reveal>
              <img
                src="/doctor-portrait.jpg"
                alt="Dr. Williams portrait"
                className="w-full rounded-[20px] object-cover"
                style={{ aspectRatio: '3/4' }}
                loading="lazy"
              />
            </div>

            {/* Bio */}
            <div data-reveal>
              <h2 className="text-heading-l text-deep-forest">
                Dr. John Williams — MBChB, Dip Fam Med
              </h2>

              <div className="mt-6 space-y-4">
                <p className="text-body-l text-charcoal">
                  Dr. John Williams is a board-certified family medicine
                  practitioner with over 15 years of clinical experience. After
                  earning his Bachelor of Medicine and Bachelor of Surgery
                  (MBChB) from the University of Cape Town, he completed his
                  diploma in Family Medicine and has since dedicated his career
                  to serving the local community.
                </p>
                <p className="text-body-l text-charcoal">
                  His practice philosophy centers on treating the whole person,
                  not just symptoms. He takes time to understand each
                  patient&apos;s unique medical history, lifestyle, and health
                  goals. This holistic approach has earned him the trust of over
                  5,000 families in the area.
                </p>
                <p className="text-body-l text-charcoal">
                  Dr. Williams has a special interest in chronic disease
                  management, particularly diabetes and hypertension care. He
                  stays current with the latest medical research and
                  evidence-based treatment protocols to ensure his patients
                  receive the best possible care.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 space-y-4">
                {credentials.map((cred) => (
                  <div
                    key={cred.label}
                    className="flex items-start gap-4 p-4 bg-sage-mist rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-full bg-[rgba(42,157,143,0.15)] flex items-center justify-center flex-shrink-0">
                      <Award size={20} className="text-teal" />
                    </div>
                    <div>
                      <p className="text-caption text-muted-slate">
                        {cred.label}
                      </p>
                      <p className="text-body-m text-deep-forest font-medium">
                        {cred.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-8 pl-6 border-l-4 border-teal bg-sage-mist rounded-r-xl p-6">
                <p className="text-heading-m italic text-deep-foreground">
                  &ldquo;My goal is not just to treat illness, but to build
                  lasting relationships with my patients and their families. When
                  you know your patients well, you can provide truly
                  personalized care.&rdquo;
                </p>
                <footer className="mt-3 text-caption text-muted-slate">
                  — Dr. John Williams
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Info */}
      <section className="bg-sage-mist section-gap">
        <div className="page-gutter">
          <div className="content-max-width" ref={clinicReveal}>
            <div data-reveal className="text-center mb-12">
              <h2 className="text-heading-l text-deep-forest">Our Practice</h2>
              <p className="text-body-m text-charcoal mt-4 max-w-xl mx-auto">
                Family Medical Clinic has been a cornerstone of community health
                care, providing accessible, high-quality medical services to
                families across the region.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  data-reveal
                  className="bg-white rounded-2xl p-8 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[rgba(42,157,143,0.15)] flex items-center justify-center mx-auto">
                    <stat.icon size={28} className="text-teal" />
                  </div>
                  <p className="text-display-m text-teal mt-4">{stat.number}</p>
                  <p className="text-body-m text-charcoal mt-2">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Clinic photos */}
            <div data-reveal className="mt-12 grid grid-cols-2 gap-4">
              <img
                src="/clinic-exterior.jpg"
                alt="Clinic exterior"
                className="rounded-2xl object-cover w-full h-48 md:h-64"
                loading="lazy"
              />
              <img
                src="/clinic-waiting.jpg"
                alt="Clinic waiting area"
                className="rounded-2xl object-cover w-full h-48 md:h-64"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
