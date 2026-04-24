import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/keystatic.config';
import StoryCard from '@/components/cards/StoryCard';
import { SectionTitle } from '@/components/typography/SectionTitle';

const reader = createReader(process.cwd(), keystaticConfig);

export const metadata = {
  title: 'Stories — Bynd BD',
  description: 'Travel journals, destination guides, and the stories behind the stories.',
};

export default async function StoriesPage() {
  const allStories = await reader.collections.stories.all();

  const featured = allStories.find((s) => s.entry.featured === true);
  const rest = allStories.filter((s) => s.slug !== featured?.slug);

  return (
    <main className="pt-32 pb-20 bg-bynd-cream min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle label="BYND BD STORIES" title={'DISPATCHES FROM\nTHE DELTA.'} />
        <p className="font-body text-bynd-ash max-w-2xl text-lg mt-4 mb-16">
          Travel journals, destination guides, and the stories behind the stories. Written by our guides, our travelers, and the people we meet along the way.
        </p>

        {/* Featured Story */}
        {featured && (
          <a
            href={`/stories/${featured.slug}`}
            className="block mb-16 group"
          >
            <div className="bg-bynd-ink rounded-3xl p-8 md:p-12 text-white hover:bg-bynd-ink/90 transition">
              <span className="font-ui text-sm text-bynd-flame uppercase tracking-wider">
                {featured.entry.category ?? 'Featured'}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl uppercase mt-4 mb-4 group-hover:text-bynd-flame transition">
                {featured.entry.title ?? ''}
              </h2>
              <p className="font-body text-white/80 text-lg max-w-2xl">
                {featured.entry.excerpt ?? ''}
              </p>
              {featured.entry.read_time && (
                <span className="font-ui text-sm text-white/60 mt-4 inline-block">
                  {featured.entry.read_time} min read
                </span>
              )}
            </div>
          </a>
        )}

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((story) => (
            <StoryCard
              key={story.slug}
              title={story.entry.title ?? ''}
              category={story.entry.category ?? ''}
              excerpt={story.entry.excerpt ?? ''}
              readTime={story.entry.read_time ?? ''}
              href={`/stories/${story.slug}`}
            />
          ))}
        </div>

        {allStories.length === 0 && (
          <p className="font-body text-bynd-ash text-center py-20">
            Stories are coming soon. Check back shortly.
          </p>
        )}

        <div className="mt-20 text-center">
          <p className="font-body text-bynd-ash text-lg">
            Have a story from your Bynd BD trip? We&apos;d love to publish it.
          </p>
          <p className="font-body text-bynd-flame mt-2">
            stories@byndbd.com
          </p>
        </div>
      </div>
    </main>
  );
}
