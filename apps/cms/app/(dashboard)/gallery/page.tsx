import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Gallery | Beyndesh CMS' };

export const dynamic = 'force-dynamic';

export default function CmsGalleryPage() {
  return (
    <div className="p-8">
      <h1 className="font-heading text-2xl font-bold uppercase text-gray-900 mb-6">Gallery</h1>
      {/* TODO: implement Gallery CMS page */}
      <div className="rounded-xl border border-bynd-border bg-white p-8 text-center text-bynd-ash">
        Coming soon
      </div>
    </div>
  );
}
