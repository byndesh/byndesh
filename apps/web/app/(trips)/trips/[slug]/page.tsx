import type { Metadata } from 'next';

export const revalidate = 3600;

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `${params.slug} | Beyndesh`,
    description: 'Premium adventure trip in Bangladesh.',
  };
}

export default function TripDetailPage({ params }: Props) {
  return (
    <main id="main-content">
      {/* TODO: Build trip detail page for slug: {params.slug} */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Trip: {params.slug}</p>
      </div>
    </main>
  );
}
