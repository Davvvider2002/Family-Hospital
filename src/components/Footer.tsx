import { Link } from 'react-router';

const quickLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Location', href: '/location' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  'General Consultations',
  'Chronic Disease Care',
  'Preventive Health',
  'Minor Procedures',
];

const legalLinks = [
  'Privacy Policy',
  'Terms of Service',
  'POPIA Compliance',
];

export function Footer() {
  return (
    <footer className="bg-deep-forest text-white">
      <div className="page-gutter py-16 pb-8">
        <div className="content-max-width">
          {/* Top row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Clinic info */}
            <div>
              <h3 className="text-heading-m font-semibold mb-2">
                Family Medical Clinic
              </h3>
              <p className="text-body-m text-[#5C6B73]">
                311 Robert Sobukwe Street
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-caption text-[#5C6B73] mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-body-m text-[#5C6B73] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-caption text-[#5C6B73] mb-4">Services</h4>
              <ul className="space-y-2">
                {serviceLinks.map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-body-m text-[#5C6B73] hover:text-white transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-caption text-[#5C6B73] mb-4">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((item) => (
                  <li key={item}>
                    <span className="text-body-m text-[#5C6B73] hover:text-white transition-colors cursor-pointer">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom row */}
          <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-caption text-[#5C6B73]">
              2025 Family Medical Clinic. All rights reserved.
            </p>
            <p className="text-caption text-[#5C6B73]">
              Crafted with care
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
