import { Link } from 'react-router';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { StarRating } from '@/components/StarRating';
import { featuredReviews } from '@/data/reviews';

export function ReviewsHelix() {
  const revealRef = useScrollReveal({ stagger: 0.08 });

  return (
    <section className="bg-deep-forest py-20 md:py-[120px] relative overflow-hidden">
      <div className="page-gutter relative z-10">
        <div className="content-max-width" ref={revealRef}>
          {/* Section header */}
          <div data-reveal className="text-center mb-12">
            <p className="text-caption text-teal mb-3">TESTIMONIALS</p>
            <h2 className="text-heading-l text-white">
              What Our Patients Say
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <StarRating rating={5} size={20} />
              <span className="text-body-m text-white/80">
                4.9 out of 5
              </span>
              <span className="text-body-m text-white/50">
                Based on 120+ Google reviews
              </span>
            </div>
          </div>

          {/* Review cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredReviews.map((review) => (
              <div
                key={review.name + review.date}
                data-reveal
                className="bg-[rgba(232,243,241,0.08)] backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <StarRating rating={review.rating} size={16} className="mb-4" />
                <p className="text-body-m text-white/85 italic leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-caption text-white font-medium">
                    {review.name}
                  </p>
                  <p className="text-caption text-white/50 mt-0.5">
                    {review.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div data-reveal className="text-center mt-10">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold transition-all duration-200 border-[1.5px] text-warm-sand hover:bg-warm-sand hover:text-deep-forest"
              style={{ borderColor: '#E9C46A' }}
            >
              Read All Reviews
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(42,157,143,0.08) 0%, transparent 70%)',
        }}
      />
    </section>
  );
}
