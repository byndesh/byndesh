import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { TestimonialCard } from '@/components/cards';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import { reader } from '@/lib/keystatic';

export const metadata: Metadata = {
  title: 'Reviews & Testimonials — Bynd BD',
  description: 'The stories our travelers bring home from the delta.',
};

export default async function ReviewsPage() {
  const allReviews = await reader.collections.reviews.all();
  
  // Try to find a featured review, otherwise take the first one
  const featuredReview = allReviews.find(r => r.entry.featured) || allReviews[0];
  // The rest of the reviews (up to 6)
  const gridReviews = allReviews.filter(r => r.slug !== featuredReview?.slug).slice(0, 6);

  // Stats
  const stats = [
    { value: '4.9/5', label: 'Average Rating' },
    { value: '100+', label: 'Journeys Completed' },
    { value: '40%', label: 'Return Travelers' },
  ];

  return (
    <main className="bg-bynd-cream min-h-screen pt-32 pb-24">
      <Container>
        <div className="max-w-6xl mx-auto space-y-24">
          
          <div className="text-center space-y-6">
            <span className="text-bynd-flame font-heading font-black uppercase tracking-[0.4em] text-[10px]">
              GUEST EXPERIENCES
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl text-bynd-ink uppercase leading-tight">
              THE STORIES THEY<br />BRING HOME.
            </h1>
            <p className="font-accent italic text-bynd-flame text-2xl">
              words from the beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-bynd-border text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="font-heading text-4xl text-bynd-ink">{stat.value}</div>
                <div className="font-ui text-xs text-bynd-ash uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>

          {featuredReview && (
            <div className="bg-bynd-ink text-bynd-cream p-10 md:p-16 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-sunrise opacity-10" />
              <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
                <span className="font-heading text-6xl text-bynd-flame opacity-50 block leading-none">"</span>
                <p className="font-body text-2xl md:text-3xl leading-relaxed italic">
                  {featuredReview.entry.quote ?? ''}
                </p>
                <div className="space-y-2">
                  <p className="font-heading text-lg text-white uppercase">{featuredReview.entry.name ?? ''}</p>
                  <p className="font-ui text-sm text-bynd-ash uppercase tracking-widest">{featuredReview.entry.location ?? ''}</p>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-12">
            <h2 className="font-heading font-black uppercase text-[10px] tracking-[0.4em] text-bynd-ink border-b border-black/5 pb-4 text-center">
              MORE EXPERIENCES
            </h2>
            
            {gridReviews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gridReviews.map(review => (
                  <TestimonialCard 
                    key={review.slug}
                    author={review.entry.name ?? ''}
                    tripDetails={review.entry.location ?? ''}
                    quote={review.entry.quote ?? ''}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-body text-bynd-ash text-xl italic">More stories are being gathered from the field.</p>
              </div>
            )}
          </div>

          <div className="bg-white p-12 rounded-3xl border border-bynd-border shadow-soft text-center space-y-8">
            <h2 className="font-heading text-3xl text-bynd-ink uppercase">Ready to write your own story?</h2>
            <p className="font-body text-bynd-ash text-xl max-w-xl mx-auto">
              Every expedition begins with a conversation. Let us help you craft the perfect journey into Bangladesh.
            </p>
            <ButtonPrimary label="START EXPLORING" href="/trips" />
          </div>

        </div>
      </Container>
    </main>
  );
}
