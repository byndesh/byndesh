import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Account | Beyndesh',
  description: 'Premium adventure travel in Bangladesh.',
};

// Static — built at build time (no revalidate export)

export default function CreateAccountPage() {
  return (
    <main id="main-content">
      {/* TODO: Build Create Account page */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Create Account</p>
      </div>
    </main>
  );
}
