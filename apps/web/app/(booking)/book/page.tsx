import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Trip | Beyndesh',
  description: 'Premium adventure travel in Bangladesh.',
};

export const dynamic = 'force-dynamic';

export default function BookaTripPage() {
  return (
    <main id="main-content">
      {/* TODO: Build Book a Trip page */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Book a Trip</p>
      </div>
    </main>
  );
}
