import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Trips | Beyndesh',
  description: 'Premium adventure travel in Bangladesh.',
};

export const revalidate = 1800;

export default function AllTripsPage() {
  return (
    <main id="main-content">
      {/* TODO: Build All Trips page */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">All Trips</p>
      </div>
    </main>
  );
}
