import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Location', href: '/location' },
  { label: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-[rgba(248,249,250,0.92)] backdrop-blur-xl shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full page-gutter flex items-center justify-between">
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Menu
              size={24}
              className={scrolled || !isHome ? 'text-[#264653]' : 'text-white'}
            />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`text-heading-m font-semibold transition-colors ${
              scrolled || !isHome ? 'text-[#264653]' : 'text-white'
            }`}
          >
            Family Medical Clinic
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-caption link-underline transition-colors ${
                  scrolled || !isHome ? 'text-[#5C6B73]' : 'text-white/80'
                } hover:text-[#2A9D8F]`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Book button */}
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2.5 px-5 md:py-3 md:px-7"
          >
            <span className="hidden md:inline">Book Appointment</span>
            <span className="md:hidden">Book</span>
          </a>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-[#264653] transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center">
            <span className="text-heading-m font-semibold text-white">
              Family Medical Clinic
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-white"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-6">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-display-m text-white font-semibold transition-all"
                style={{
                  transitionDelay: menuOpen ? `${i * 50}ms` : '0ms',
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </>
  );
}
