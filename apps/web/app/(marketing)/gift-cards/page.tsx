import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gift Cards | Beyndesh',
  description: 'Premium adventure travel in Bangladesh.',
};

export const revalidate = 86400;

export default function GiftCardsPage() {
  return (
    <main id="main-content">
      {/* TODO: Build Gift Cards page */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Gift Cards</p>
      </div>
    </main>
  );
}
