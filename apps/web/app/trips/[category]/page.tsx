import { notFound } from 'next/navigation';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/keystatic.config';
import TripCard from '@/components/cards/TripCard';
import { SectionTitle } from '@/components/typography/SectionTitle';

const reader = createReader(process.cwd(), keystaticConfig);

const CATEGORY_META: Record<string, { title: string; accent: string; description: string }> = {
  'river-expeditions': {
    title: 'RIVER\nEXPEDITIONS',
    accent: 'float, don\'t rush',
    description: 'Bangladesh sits at the confluence of three major river systems — the Ganges, Brahmaputra, and Meghna — creating a landscape of delta islands, haor wetlands, and floodplains that shape both the physical country and its culture. Over 700 rivers cross the country, and water defines architecture, agriculture, transport, and daily life.',
  },
  'sundarbans-safaris': {
    title: 'SUNDARBANS\nSAFARIS',
    accent: 'where the forest meets the tide',
    description: 'The Sundarbans is one of the natural wonders of Bangladesh and a UNESCO World Heritage site. The mangrove forest is home to the Royal Bengal Tiger, spotted deer, crocodiles, and many species of birds.',
  },
  'hill-tracts-trekking': {
    title: 'HILL TRACTS\nTREKKING',
    accent: 'above the clouds',
    description: 'Bandarban\'s mountainous terrain presents thrilling hiking opportunities and breathtaking viewpoints. The district is home to ethnic tribal communities with distinct cultures and traditions.',
  },
  'tea-country-sylhet': {
    title: 'TEA COUNTRY\n& SYLHET',
    accent: 'two leaves and a bud',
    description: 'Sylhet, known as the "Land of Two Leaves and a Bud," is a lush region of tea plantations and rivers flowing from the Khasi mountains.',
  },
  'old-dhaka-immersion': {
    title: 'OLD DHAKA\nIMMERSION',
    accent: 'chaos is a feature',
    description: 'The bustling riverside port is a hive of activity mixing small canoe river taxis with larger overnight river cruises. The streets everywhere are the same bustling energy-filled chaos.',
  },
  'cox-bazar-islands': {
    title: "COX'S BAZAR\n& ISLANDS",
    accent: 'where the land ends',
    description: 'Cox\'s Bazar continues to reign supreme as Bangladesh\'s crown jewel for tourism. Boasting the world\'s longest natural sea beach stretching an impressive 120 kilometers.',
  },
  'heritage-ruins': {
    title: 'HERITAGE\n& RUINS',
    accent: 'a thousand years of stories',
    description: 'Walk through a thousand years of history. From Somapura Mahavihara at Paharpur to the Sixty Dome Mosque in Bagerhat — UNESCO treasures await.',
  },
};

export async function generateStaticParams() {
  return Object.keys(CATEGORY_META).map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const meta = CATEGORY_META[category];
  if (!meta) return { title: 'Trips — Bynd BD' };
  return {
    title: `${meta.title.replace('\n', ' ')} — Bynd BD`,
    description: meta.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const meta = CATEGORY_META[category];
  if (!meta) notFound();

  const allTrips = await reader.collections.trips.all();
  const categoryTrips = allTrips.filter(
    (trip) => trip.entry.category === category
  );

  return (
    <main className="pt-32 pb-20 bg-bynd-cream min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        <p className="font-accent italic text-bynd-flame mb-4">{meta.accent}</p>
        <h1 className="font-heading text-5xl md:text-7xl text-bynd-ink whitespace-pre-line mb-6">
          {meta.title}
        </h1>
        <p className="font-body text-bynd-ash max-w-2xl text-lg mb-16">
          {meta.description}
        </p>

        {categoryTrips.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryTrips.map((trip) => (
              <TripCard
                key={trip.slug}
                title={trip.entry.title ?? ''}
                category={trip.entry.category?.replace('-', ' ').toUpperCase() ?? ''}
                location={trip.entry.location ?? ''}
                duration={trip.entry.duration ?? ''}
                price={trip.entry.price_bdt ? `৳${trip.entry.price_bdt.toLocaleString()}` : ''}
                difficulty={trip.entry.difficulty ?? ''}
                href={`/trips/${category}/${trip.slug}`}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-body text-bynd-ash text-lg mb-4">
              No trips in this category yet. We&apos;re always building new routes.
            </p>
            <a href="/contact" className="font-ui text-bynd-flame hover:underline">
              TELL US WHAT YOU&apos;RE LOOKING FOR →
            </a>
          </div>
        )}

        <div className="mt-20 text-center">
          <p className="font-body text-bynd-ash text-lg mb-4">
            Want something custom in this category?
          </p>
          <a
            href="/tailor-made"
            className="inline-block bg-bynd-flame text-white font-ui px-8 py-3 rounded-full hover:bg-bynd-flame/90 transition"
          >
            REQUEST A CUSTOM JOURNEY →
          </a>
        </div>
      </div>
    </main>
  );
}
