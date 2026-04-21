import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Beyndesh',
  description: 'Premium adventure travel in Bangladesh.',
};

export const revalidate = 86400;

export default function FAQPage() {
  return (
    <main id="main-content">
      {/* TODO: Build FAQ page */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">FAQ</p>
      </div>
    </main>
  );
}
