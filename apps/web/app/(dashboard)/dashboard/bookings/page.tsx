import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Bookings | Bynd BD',
  description: 'Premium adventure travel in Bangladesh.',
};

export const dynamic = 'force-dynamic';

export default function MyBookingsPage() {
  return (
    <main id="main-content">
      {/* TODO: Build My Bookings page */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">My Bookings</p>
      </div>
    </main>
  );
}
