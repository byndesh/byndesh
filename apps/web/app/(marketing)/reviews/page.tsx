import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reviews | Beyndesh',
  description: 'Premium adventure travel in Bangladesh.',
};

export const revalidate = 3600;

export default function ReviewsPage() {
  return (
    <main id="main-content">
      {/* TODO: Build Reviews page */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Reviews</p>
      </div>
    </main>
  );
}
