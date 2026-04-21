import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Beyndesh',
  description: 'Premium adventure travel in Bangladesh.',
};

export const revalidate = 86400;

export default function CareersPage() {
  return (
    <main id="main-content">
      {/* TODO: Build Careers page */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Careers</p>
      </div>
    </main>
  );
}
