import { Metadata } from 'next';
import { TripCard, TestimonialCard, StoryCard } from '@/components/cards';
import HeroSection from '@/components/heroes/HeroSection';
import { Carousel } from '@/components/carousels/Carousel';
import { NewsletterForm } from '@/components/forms';
import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/typography/SectionTitle';
import { BrandIcon } from '@/components/branding/BrandIcon';
import { reader } from '@/lib/keystatic';

export const metadata: Metadata = {
  title: 'Bynd BD — Beyond Bangladesh',
  description: 'Premium adventure travel in Bangladesh. Travel beyond the last light.',
};

export default async function Home() {
  const [trips, stories, reviews] = await Promise.all([
    reader.collections.trips.all(),
    reader.collections.stories.all(),
    reader.collections.reviews.all(),
  ]);

  const featuredStories = stories.filter(s => s.entry.featured);
  const featuredReviews = reviews.filter(r => r.entry.featured);

  return (
    <>
      {/* SECTION 1A — HERO */}
      <HeroSection 
        signatureText="Beyond Bangladesh"
        heading={"Beyond the last light."}
        subheading="Bespoke adventure travel and cultural experiences. We design journeys for the curious, the adventurous, and the seekers of truth."
        ctaText="DISCOVER YOUR BEYOND"
      />

      {/* SECTION 1B — MISSION */}
      <section className="w-full bg-white py-32 md:py-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sunrise opacity-5 pointer-events-none" />
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <SectionTitle label="OUR MISSION" title="The journey is the destination." />
              <div className="font-body text-xl md:text-2xl space-y-8 text-bynd-stone leading-relaxed italic">
                <p>
                  "We believe the most meaningful journeys begin where the guidebooks end — in the warmth of a stranger's welcome, the rhythm of a river, and the taste of home-cooked hilsa on a monsoon evening."
                </p>
                <div className="pt-4 flex items-center gap-4">
                  <div className="w-12 h-px bg-bynd-flame" />
                  <span className="font-heading text-[10px] tracking-[0.2em] text-bynd-flame font-black uppercase">
                    ASFAK CHOWDHURY — FOUNDER
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-12 pt-20 md:pt-0">
               <BrandIcon type="flight" />
               <BrandIcon type="map" />
               <BrandIcon type="hotel" />
               <BrandIcon type="support" />
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 1C — JOURNEY CATEGORIES (CMS BAKED) */}
      <section className="w-full bg-bynd-parchment py-32">
        <Container>
          <SectionTitle label="ALL JOURNEYS" title="Beyond every horizon lies Bangladesh." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-8">
            {trips.slice(0, 3).map(trip => (
              <TripCard 
                key={trip.slug}
                category={trip.entry.category?.replace('-', ' ').toUpperCase() ?? ''} 
                title={trip.entry.title ?? ''}
                description={trip.entry.location ?? ''}
                href={`/trips/${trip.slug}`}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 1D — THE DUSK EXPERIENCE (CURATED REVIEW CAROUSEL) */}
      {featuredReviews.length > 0 && (
        <section className="w-full bg-dusk py-32 md:py-48 text-bynd-cream">
          <Container>
            <SectionTitle label="WORDS FROM THE BEYOND" title="Traveling souls." onDark />
            <Carousel onDark>
               {featuredReviews.map(review => (
                  <div key={review.slug} className="w-[320px] md:w-[450px] flex-shrink-0">
                    <TestimonialCard 
                      author={review.entry.name ?? ''}
                      tripDetails={review.entry.location ?? ''}
                      quote={review.entry.quote ?? ''}
                    />
                  </div>
               ))}
            </Carousel>
          </Container>
        </section>
      )}

      {/* SECTION 1G — STORIES (CMS BAKED) */}
      <section className="w-full bg-bynd-linen/30 py-32">
        <Container>
          <SectionTitle label="STORIES & DISCOURSES" title="See you Beyond." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            {featuredStories.map(story => (
              <StoryCard 
                key={story.slug}
                category={story.entry.category?.toUpperCase() ?? ''} 
                title={story.entry.title ?? ''} 
                excerpt={story.entry.excerpt ?? ''} 
                href={`/stories/${story.slug}`} 
              />
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 1H — NEWSLETTER */}
      <section className="w-full bg-sunrise py-32">
        <Container>
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-12">
            <SectionTitle label="STAY CONNECTED" title="Discover your beyond." className="mb-0" />
            <p className="font-body text-xl md:text-2xl text-bynd-ink/80 italic max-w-2xl">
              Join the Bynd BD Club for early access to expeditions and stories from the delta.
            </p>
            <div className="w-full max-w-2xl">
              <NewsletterForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
