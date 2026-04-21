import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Beyndesh',
  description: 'Premium adventure travel in Bangladesh.',
};

// Static — built at build time (no revalidate export)

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content">
      {/* TODO: Build Privacy Policy page */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Privacy Policy</p>
      </div>
    </main>
  );
}
