import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Reviews | Beyndesh CMS' };

export const dynamic = 'force-dynamic';

export default function CmsReviewsPage() {
  return (
    <div className="p-8">
      <h1 className="font-heading text-2xl font-bold uppercase text-gray-900 mb-6">Reviews</h1>
      {/* TODO: implement Reviews CMS page */}
      <div className="rounded-xl border border-gray-200 bg-white p-8 text-center text-gray-400">
        Coming soon
      </div>
    </div>
  );
}
