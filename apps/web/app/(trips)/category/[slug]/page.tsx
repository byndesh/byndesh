import type { Metadata } from 'next';

export const revalidate = 3600;

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: `${params.slug} Trips | Beyndesh` };
}

export default function CategoryPage({ params }: Props) {
  return (
    <main id="main-content">
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Category: {params.slug}</p>
      </div>
    </main>
  );
}
