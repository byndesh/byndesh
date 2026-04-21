import type { Metadata } from 'next';

/**
 * Strategy: ISR — revalidate every 1 hour.
 * On-demand: CMS calls POST /api/revalidate with path=/trips/[slug]
 * after an editor publishes changes. Cache tag: `trip-${slug}`
 */
export const revalidate = 3600; // 1 hour

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // TODO: fetch trip by slug from @beyndesh/api and use real title/description
  return {
    title: `${slug.replace(/-/g, ' ').toUpperCase()} | Beyndesh`,
    description: 'Premium adventure trip in Bangladesh.',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      alternateLocale: 'bn_BD',
    },
  };
}

export default async function TripDetailPage({ params }: Props) {
  const { slug } = await params;
  // TODO: const trip = await getTripBySlug(slug); if (!trip) notFound();
  return (
    <main id="main-content">
      {/* TODO: Build full trip detail page */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Trip: {slug}</p>
      </div>
    </main>
  );
}
