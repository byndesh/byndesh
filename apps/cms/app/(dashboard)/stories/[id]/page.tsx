import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Edit Story | Beyndesh CMS' };

/**
 * Strategy: SSR — force-dynamic. CMS pages are always fresh, always authenticated.
 */
export const dynamic = 'force-dynamic';

interface Props { params: Promise<{ id: string }> }

export default async function EditStoryPage({ params }: Props) {
  const { id } = await params;
  return (
    <div className="p-8">
      <h1 className="font-heading text-2xl font-bold uppercase text-gray-900 mb-6">
        Edit Story
      </h1>
      {/* TODO: fetch story by id and render StoryForm */}
      <div className="rounded-xl border border-bynd-border bg-white p-8 text-center text-bynd-ash">
        Story ID: {id} — Form coming soon
      </div>
    </div>
  );
}
