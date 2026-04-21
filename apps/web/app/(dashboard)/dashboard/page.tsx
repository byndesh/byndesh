import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Dashboard | Beyndesh',
  description: 'Premium adventure travel in Bangladesh.',
};

export const dynamic = 'force-dynamic';

export default function MyDashboardPage() {
  return (
    <main id="main-content">
      {/* TODO: Build My Dashboard page */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">My Dashboard</p>
      </div>
    </main>
  );
}
