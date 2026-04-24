interface TestimonialCardProps {
  quote: string;
  author: string;
  tripDetails: string;
  rating?: number;
  isFeatured?: boolean;
}

function TestimonialCard({ quote, author, tripDetails, rating = 5, isFeatured = false }: TestimonialCardProps) {
  return (
    <div className={`flex flex-col bg-bynd-cream rounded-3xl p-8 md:p-12 shadow-soft border border-bynd-border ${isFeatured ? 'col-span-full items-center text-center' : 'h-full'}`}>
      {/* Stars */}
      <div className={`flex gap-1.5 mb-8 text-bynd-gold ${isFeatured ? 'justify-center' : ''}`}>
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className={`font-body text-bynd-ink italic leading-relaxed mb-10 ${isFeatured ? 'text-2xl md:text-5xl max-w-4xl' : 'text-xl flex-1'}`}>
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author and Trip */}
      <div className={`mt-auto ${isFeatured ? 'flex flex-col items-center' : ''}`}>
        <p className="font-heading uppercase font-black text-bynd-ink tracking-[0.18em] mb-2 text-xs">
          &mdash; {author}
        </p>
        <p className="text-[10px] font-heading font-extrabold text-bynd-flame uppercase tracking-[0.25em]">
          {tripDetails}
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;
