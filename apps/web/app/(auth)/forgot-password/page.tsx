import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forgot Password | Bynd BD',
  description: 'Premium adventure travel in Bangladesh.',
};

// Static — built at build time (no revalidate export)

export default function ForgotPasswordPage() {
  return (
    <main id="main-content">
      {/* TODO: Build Forgot Password page */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Forgot Password</p>
      </div>
    </main>
  );
}
