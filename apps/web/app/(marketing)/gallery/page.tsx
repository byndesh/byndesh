import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Beyndesh',
  description: 'Premium adventure travel in Bangladesh.',
};

export const revalidate = 3600;

export default function GalleryPage() {
  return (
    <main id="main-content">
      {/* TODO: Build Gallery page */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Gallery</p>
      </div>
    </main>
  );
}
