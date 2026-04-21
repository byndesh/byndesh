import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Journal | Beyndesh',
  description: 'Premium adventure travel in Bangladesh.',
};

export const revalidate = 3600;

export default function JournalPage() {
  return (
    <main id="main-content">
      {/* TODO: Build Journal page */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Journal</p>
      </div>
    </main>
  );
}
