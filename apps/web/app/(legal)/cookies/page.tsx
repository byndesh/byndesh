import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Beyndesh',
  description: 'Premium adventure travel in Bangladesh.',
};

// Static — built at build time (no revalidate export)

export default function CookiePolicyPage() {
  return (
    <main id="main-content">
      {/* TODO: Build Cookie Policy page */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Cookie Policy</p>
      </div>
    </main>
  );
}
