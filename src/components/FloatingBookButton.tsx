import { Calendar } from 'lucide-react';

export function FloatingBookButton() {
  return (
    <a
      href="https://calendly.com"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[90] md:hidden flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm shadow-lg transition-all duration-200 hover:-translate-y-0.5"
      style={{
        background: '#2A9D8F',
        color: '#F8F9FA',
      }}
    >
      <Calendar size={18} />
      Book
    </a>
  );
}
