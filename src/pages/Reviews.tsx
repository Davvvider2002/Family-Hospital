import { useScrollReveal } from '@/hooks/useScrollReveal';
import { StarRating } from '@/components/StarRating';
import { reviews } from '@/data/reviews';
import { ExternalLink } from 'lucide-react';

export function Reviews() {
  const headerReveal = useScrollReveal();
  const gridReveal = useScrollReveal({ stagger: 0.08 });
  const ctaReveal = useScrollReveal();

  return (
    <main className="pt-[72px]">
      {/* Page Header */}
      <section className="bg-deep-forest pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="page-gutter">
          <div className="content-max-width" ref={headerReveal}>
            <p data-reveal className="text-caption text-teal mb-3">
              TESTIMONIALS
            </p>
            <h1 data-reveal className="text-display-m text-white">
              What Our Patients Say
            </h1>
            <div data-reveal className="flex flex-wrap items-center gap-4 mt-6">
              <StarRating rating={5} size={24} />
              <span className="text-body-l text-white/90 font-medium">
                4.9 out of 5
              </span>
              <span className="text-body-m text-white/60">
                Based on 120+ Google reviews
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Review Grid */}
      <section className="bg-off-white section-gap">
        <div className="page-gutter">
          <div
            className="content-max-width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            ref={gridReveal}
          >
            {reviews.map((review) => (
              <div
                key={review.name + review.date}
                data-reveal
                className="bg-sage-mist rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: '0 4px 20px rgba(38,70,83,0.04)',
                }}
              >
                <StarRating rating={review.rating} size={16} className="mb-4" />
                <p className="text-body-m text-charcoal italic leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-[rgba(38,70,83,0.08)]">
                  <p className="text-caption text-deep-forest font-medium">
                    {review.name}
                  </p>
                  <p className="text-caption text-muted-slate mt-0.5">
                    {review.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-16 md:py-20 bg-sage-mist">
        <div className="page-gutter">
          <div
            className="content-max-width text-center"
            ref={ctaReveal}
          >
            <p data-reveal className="text-body-l text-charcoal">
              Had a great experience? We&apos;d love to hear from you.
            </p>
            <a
              href="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID"
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              className="inline-flex items-center gap-2 btn-primary mt-6"
            >
              <ExternalLink size={18} />
              Leave a Review on Google
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
