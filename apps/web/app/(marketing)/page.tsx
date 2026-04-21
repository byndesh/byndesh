import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Beyndesh',
  description: 'Premium adventure travel in Bangladesh.',
};

export const revalidate = 3600;

export default function HomePage() {
  return (
    <main id="main-content">
      {/* TODO: Build Home page */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Home</p>
      </div>
    </main>
  );
}
