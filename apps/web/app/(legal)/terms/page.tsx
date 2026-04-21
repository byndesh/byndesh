import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Beyndesh',
  description: 'Premium adventure travel in Bangladesh.',
};

// Static — built at build time (no revalidate export)

export default function TermsofServicePage() {
  return (
    <main id="main-content">
      {/* TODO: Build Terms of Service page */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Terms of Service</p>
      </div>
    </main>
  );
}
