import type { Metadata } from 'next';

export const revalidate = 86400;

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: `${params.slug} | Destinations | Beyndesh` };
}

export default function DestinationPage({ params }: Props) {
  return (
    <main id="main-content">
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Destination: {params.slug}</p>
      </div>
    </main>
  );
}
