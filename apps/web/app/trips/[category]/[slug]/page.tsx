import { Container } from '@/components/layout/Container';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import { notFound } from 'next/navigation';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/keystatic.config';
import { DocumentRenderer } from '@/components/keystatic/DocumentRenderer';

const reader = createReader(process.cwd(), keystaticConfig);

export async function generateStaticParams() {
  const trips = await reader.collections.trips.all();
  return trips.map((trip) => ({
    category: trip.entry.category || 'river-expeditions',
    slug: trip.slug,
  }));
}

export async function generateMetadata({ params }: { params: { category: string; slug: string } }) {
  const { slug } = params;
  const trip = await reader.collections.trips.read(slug);
  if (!trip) return { title: 'Trip Not Found — Bynd BD' };
  return {
    title: `${trip.title} — Bynd BD`,
    description: `Explore ${trip.title} in Bangladesh with Bynd BD. ${trip.duration || ''} adventure.`,
  };
}

export default async function TripDetailPage({ params }: { params: { category: string; slug: string } }) {
  const { category, slug } = params;
  const trip = await reader.collections.trips.read(slug);

  if (!trip || trip.category !== category) {
    notFound();
  }

  const overview = await trip.overview();

  return (
    <div className="bg-bynd-cream min-h-screen">
      <div className="h-[60vh] relative bg-bynd-charcoal flex items-end pb-20 overflow-hidden">
        {/* Sunrise Gradient wash on top of background */}
        <div className="absolute inset-0 bg-sunrise opacity-20 z-10" />
        
        <Container className="relative z-20">
          <div className="max-w-4xl space-y-8">
            <span className="text-bynd-flame font-heading font-black uppercase tracking-[0.4em] text-[10px]">
              {(trip.category ?? '').replace('-', ' ').toUpperCase()}
            </span>
            <h1 className="text-white font-body italic text-5xl md:text-7xl lg:text-8xl leading-tight grad-text">
              {trip.title ?? ''}
            </h1>
          </div>
        </Container>
      </div>

      <Container className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            <section className="space-y-8">
              <h2 className="font-heading font-black uppercase text-[10px] tracking-[0.4em] text-bynd-ink border-b border-black/5 pb-4">
                OVERVIEW
              </h2>
              <DocumentRenderer document={overview} />
            </section>

            {trip.itinerary && trip.itinerary.length > 0 && (
              <section className="space-y-12">
                <h2 className="font-heading font-black uppercase text-[10px] tracking-[0.4em] text-bynd-ink border-b border-black/5 pb-4">
                  ITINERARY
                </h2>
                <div className="space-y-16">
                  {await Promise.all(trip.itinerary.map(async (day, idx) => {
                    const description = await day.description();
                    return (
                      <div key={idx} className="flex gap-10">
                        <div className="w-16 h-16 rounded-full bg-fog border border-black/5 flex items-center justify-center shrink-0">
                           <span className="font-heading font-black text-bynd-flame">{idx + 1}</span>
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-body italic text-3xl text-bynd-ink">{day.title ?? ''}</h4>
                          <DocumentRenderer document={description} />
                        </div>
                      </div>
                    );
                  }))}
                </div>
              </section>
            )}
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-white p-12 rounded-[40px] border border-black/5 shadow-premium sticky top-32 space-y-10">
              <div className="space-y-3">
                <span className="text-bynd-silver font-heading font-black uppercase tracking-widest text-[9px]">INVESTMENT</span>
                <p className="text-bynd-ink text-4xl font-heading font-black uppercase tracking-tighter">
                  ৳{trip.price_bdt?.toLocaleString()}
                </p>
                <p className="text-bynd-ash font-body italic text-sm">
                  Approx. ${trip.price_usd} USD
                </p>
              </div>
              
              <ButtonPrimary label="START JOURNEY" href="/booking" fullWidth />
              
              <div className="pt-8 border-t border-black/5 space-y-6">
                <div className="flex justify-between items-baseline">
                  <span className="text-bynd-silver font-heading font-black uppercase text-[9px] tracking-widest">DURATION</span>
                  <span className="text-bynd-ink font-body italic font-bold">{trip.duration ?? ''}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-bynd-silver font-heading font-black uppercase text-[9px] tracking-widest">DIFFICULTY</span>
                  <span className="text-bynd-ink font-body italic font-bold uppercase">{trip.difficulty ?? ''}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-bynd-silver font-heading font-black uppercase text-[9px] tracking-widest">SEASON</span>
                  <span className="text-bynd-ink font-body italic font-bold">{trip.season ?? ''}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
