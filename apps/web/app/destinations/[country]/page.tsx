import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { notFound } from 'next/navigation';
import { reader } from '@/lib/keystatic';
import { DocumentRenderer } from '@/components/keystatic/DocumentRenderer';
import { TripCard } from '@/components/cards';

export async function generateStaticParams() {
  const destinations = await reader.collections.destinations.all();
  return destinations.map((dest) => ({
    country: dest.slug,
  }));
}

export async function generateMetadata({ params }: { params: { country: string } }): Promise<Metadata> {
  const { country } = params;
  const destination = await reader.collections.destinations.read(country);
  if (!destination) return { title: 'Destination Not Found' };
  
  return {
    title: `${destination.title} — Bynd BD`,
  };
}

export default async function DestinationDetailPage({ params }: { params: { country: string } }) {
  const { country } = params;
  const destination = await reader.collections.destinations.read(country);
  
  if (!destination) {
    notFound();
  }

  const overview = await destination.overview();

  // Get all trips for this destination
  const allTrips = await reader.collections.trips.all();
  const destTitle = destination.title ?? '';
  const destTrips = allTrips.filter(trip => trip.entry.location?.toLowerCase().includes(destTitle.toLowerCase()));

  return (
    <main className="bg-bynd-cream min-h-screen">
      {/* Hero Section */}
      <div className="h-[60vh] md:h-[70vh] bg-bynd-ink relative overflow-hidden flex items-end pb-24">
        <div className="absolute inset-0 bg-dusk opacity-40 z-10" />
        <Container className="relative z-20">
          <div className="max-w-4xl space-y-6">
            <span className="font-heading text-bynd-flame uppercase tracking-[0.4em] text-[10px] font-black">
              DESTINATION
            </span>
            <h1 className="font-body text-white text-5xl md:text-7xl lg:text-8xl italic leading-tight">
              {destination.title}
            </h1>
            {destination.signature_accent && (
              <p className="font-signature text-bynd-gold text-3xl md:text-4xl opacity-90">
                {destination.signature_accent}
              </p>
            )}
          </div>
        </Container>
      </div>

      <Container className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-20">
            
            {/* Overview */}
            <section className="space-y-8">
              <h2 className="font-heading font-black uppercase text-[10px] tracking-[0.4em] text-bynd-ink border-b border-black/5 pb-4">
                OVERVIEW
              </h2>
              <div className="prose prose-lg prose-bynd font-body text-bynd-ash">
                <DocumentRenderer document={overview} />
              </div>
            </section>

            {/* Experiences */}
            {destination.experiences && destination.experiences.length > 0 && (
              <section className="space-y-8">
                <h2 className="font-heading font-black uppercase text-[10px] tracking-[0.4em] text-bynd-ink border-b border-black/5 pb-4">
                  NOTABLE EXPERIENCES
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {destination.experiences.map((exp, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-3xl border border-bynd-border shadow-soft">
                      <p className="font-body text-bynd-ash">{exp}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Available Trips */}
            {destTrips.length > 0 && (
              <section className="space-y-8">
                <h2 className="font-heading font-black uppercase text-[10px] tracking-[0.4em] text-bynd-ink border-b border-black/5 pb-4">
                  JOURNEYS TO {(destination.title ?? '').toUpperCase()}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {destTrips.map(trip => (
                    <TripCard 
                      key={trip.slug}
                      category={trip.entry.category?.replace('-', ' ').toUpperCase() ?? ''} 
                      title={trip.entry.title ?? ''}
                      description={trip.entry.location ?? ''}
                      href={`/trips/${trip.entry.category}/${trip.slug}`}
                    />
                  ))}
                </div>
              </section>
            )}

          </div>

          <aside className="lg:col-span-1">
            <div className="bg-white p-10 rounded-[40px] border border-black/5 shadow-premium sticky top-32 space-y-12">
              
              {/* Stat Bar / Fast Facts */}
              <div className="space-y-6">
                <h3 className="font-heading font-black uppercase text-[10px] tracking-[0.4em] text-bynd-silver border-b border-black/5 pb-2">
                  FAST FACTS
                </h3>
                {destination.hero_stats && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-baseline border-b border-bynd-border pb-2">
                      <span className="font-ui text-xs text-bynd-ash uppercase tracking-widest">Heritage</span>
                      <span className="font-body italic text-bynd-ink font-bold">{destination.hero_stats.unesco || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-bynd-border pb-2">
                      <span className="font-ui text-xs text-bynd-ash uppercase tracking-widest">Wildlife</span>
                      <span className="font-body italic text-bynd-ink font-bold">{destination.hero_stats.wildlife || 'N/A'}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Practical Info */}
              {destination.practical_info && (
                <div className="space-y-6">
                  <h3 className="font-heading font-black uppercase text-[10px] tracking-[0.4em] text-bynd-silver border-b border-black/5 pb-2">
                    PRACTICAL INFO
                  </h3>
                  <div className="prose prose-sm prose-bynd font-body text-bynd-ash">
                    <DocumentRenderer document={await destination.practical_info()} />
                  </div>
                </div>
              )}

            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
