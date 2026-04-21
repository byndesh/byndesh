import type { Metadata } from 'next';

/**
 * Strategy: SSG + on-demand revalidation.
 * - Built statically at deploy time via generateStaticParams().
 * - Revalidated on-demand when a CMS editor clicks "Publish":
 *   CMS POST /api/revalidate → revalidatePath('/blog/${slug}', 'page')
 * - Do NOT add `export const revalidate` here — that would switch to ISR.
 * - Do NOT add `export const dynamic = 'force-static'` — that prevents on-demand.
 */

interface Props { params: Promise<{ slug: string }> }

/**
 * Pre-generates all published blog post pages at build time.
 * TODO: replace with real DB query: const posts = await getAllStories();
 */
export async function generateStaticParams() {
  // const posts = await getAllStories();
  // return posts.map(p => ({ slug: p.slug }));
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // TODO: const post = await getStoryBySlug(slug);
  return {
    title: `${slug.replace(/-/g, ' ')} | Journal | Beyndesh`,
    description: 'A travel story from Beyndesh.',
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  // TODO: const post = await getStoryBySlug(slug); if (!post) notFound();
  return (
    <main id="main-content">
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Post: {slug}</p>
      </div>
    </main>
  );
}
