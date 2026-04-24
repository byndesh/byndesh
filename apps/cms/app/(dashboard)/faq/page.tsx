import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'FAQ | Beyndesh CMS' };

export const dynamic = 'force-dynamic';

export default function CmsFAQPage() {
  return (
    <div className="p-8">
      <h1 className="font-heading text-2xl font-bold uppercase text-gray-900 mb-6">FAQ</h1>
      {/* TODO: implement FAQ CMS page */}
      <div className="rounded-xl border border-bynd-border bg-white p-8 text-center text-bynd-ash">
        Coming soon
      </div>
    </div>
  );
}
