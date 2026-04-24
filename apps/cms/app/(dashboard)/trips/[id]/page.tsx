import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Edit Trip | Beyndesh CMS' };

/**
 * Strategy: SSR — force-dynamic. CMS pages are always fresh, always authenticated.
 */
export const dynamic = 'force-dynamic';

interface Props { params: Promise<{ id: string }> }

export default async function EditTripPage({ params }: Props) {
  const { id } = await params;
  return (
    <div className="p-8">
      <h1 className="font-heading text-2xl font-bold uppercase text-gray-900 mb-6">
        Edit Trip
      </h1>
      {/* TODO: fetch trip by id and render TripForm */}
      <div className="rounded-xl border border-bynd-border bg-white p-8 text-center text-bynd-ash">
        Trip ID: {id} — Form coming soon
      </div>
    </div>
  );
}
