import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/typography/SectionTitle';
import TripCard from '@/components/cards/TripCard';
import { reader } from '@/lib/keystatic';

export const metadata: Metadata = {
  title: 'All Journeys — Bynd BD',
  description: 'Explore our curated expeditions and seasonal journeys.',
};

export default async function TripsPage() {
  const trips = await reader.collections.trips.all();

  return (
    <div className="bg-bynd-cream min-h-screen pb-32">
      <Container className="pt-32 md:pt-48">
        <div className="space-y-16">
          <SectionTitle 
            label="ALL JOURNEYS" 
            title="Beyond every horizon lies Bangladesh." 
          />

          {trips.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-8">
              {trips.map((trip) => (
                <TripCard 
                  key={trip.slug}
                  category={trip.entry.category?.toUpperCase() || "EXPEDITION"} 
                  title={trip.entry.title ?? ''}
                  description={trip.entry.location}
                  href={`/trips/${trip.entry.category}/${trip.slug}`}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-fog rounded-3xl border border-black/5">
              <p className="font-body text-bynd-ash italic text-xl">No journeys found in the delta. Coming soon.</p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
