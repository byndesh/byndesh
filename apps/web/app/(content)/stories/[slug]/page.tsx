import { notFound } from 'next/navigation';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/keystatic.config';
import { DocumentRenderer } from '@/components/keystatic/DocumentRenderer';

const reader = createReader(process.cwd(), keystaticConfig);

export async function generateStaticParams() {
  const stories = await reader.collections.stories.all();
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const story = await reader.collections.stories.read(slug);
  if (!story) return { title: 'Story Not Found — Bynd BD' };
  return {
    title: `${story.title} — Bynd BD Stories`,
    description: story.excerpt ?? 'A story from Bynd BD',
  };
}

export default async function StoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const story = await reader.collections.stories.read(slug);
  if (!story) notFound();

  const document = await story.body();

  return (
    <main className="pt-32 pb-20 bg-bynd-cream min-h-screen">
      <article className="mx-auto max-w-3xl px-6">
        <div className="mb-8">
          <span className="font-ui text-sm text-bynd-flame uppercase tracking-wider">
            {story.category ?? 'Story'}
          </span>
          {story.read_time && (
            <span className="font-ui text-sm text-bynd-ash ml-4">
              {story.read_time} min read
            </span>
          )}
        </div>

        <h1 className="font-heading text-4xl md:text-5xl text-bynd-ink uppercase mb-6">
          {story.title ?? ''}
        </h1>

        {story.excerpt && (
          <p className="font-body text-xl text-bynd-ash mb-12 leading-relaxed">
            {story.excerpt}
          </p>
        )}

        <div className="font-body text-bynd-ink prose prose-lg max-w-none">
          <DocumentRenderer document={document} />
        </div>

        <div className="mt-16 pt-8 border-t border-bynd-border">
          <a
            href="/stories"
            className="font-ui text-bynd-flame hover:underline"
          >
            ← BACK TO ALL STORIES
          </a>
        </div>
      </article>
    </main>
  );
}
