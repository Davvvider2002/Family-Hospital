import { useEffect, useRef } from 'react';

interface CalendlyEmbedProps {
  url?: string;
  className?: string;
}

export function CalendlyEmbed({
  url = 'https://calendly.com/familymedicalclinic/appointment',
  className = '',
}: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Calendly widget script
    const existingScript = document.getElementById('calendly-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'calendly-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if ((window as any).Calendly && containerRef.current) {
          (window as any).Calendly.initInlineWidget({
            url,
            parentElement: containerRef.current,
            prefill: {},
            utm: {},
          });
        }
      };
    } else {
      // Script already loaded, init widget directly
      if ((window as any).Calendly && containerRef.current) {
        (window as any).Calendly.initInlineWidget({
          url,
          parentElement: containerRef.current,
          prefill: {},
          utm: {},
        });
      }
    }

    return () => {
      // Cleanup
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      className={`calendly-inline-widget ${className}`}
      style={{ minWidth: '320px', height: '700px' }}
      data-auto-load="false"
    />
  );
}
