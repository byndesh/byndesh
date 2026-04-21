import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Beyndesh',
  description: 'Premium adventure travel in Bangladesh.',
};

// Static — built at build time (no revalidate export)

export default function AboutUsPage() {
  return (
    <main id="main-content">
      {/* TODO: Build About Us page */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">About Us</p>
      </div>
    </main>
  );
}
