import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partners | Beyndesh',
  description: 'Premium adventure travel in Bangladesh.',
};

// Static — built at build time (no revalidate export)

export default function PartnersPage() {
  return (
    <main id="main-content">
      {/* TODO: Build Partners page */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Partners</p>
      </div>
    </main>
  );
}
