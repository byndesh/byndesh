import type { Metadata } from 'next';

// SSG + on-demand revalidation (triggered from CMS on publish)
export const dynamic = 'force-static';

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: `${params.slug} | Journal | Beyndesh` };
}

export default function BlogPostPage({ params }: Props) {
  return (
    <main id="main-content">
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Post: {params.slug}</p>
      </div>
    </main>
  );
}
