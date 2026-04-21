import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In | Beyndesh',
  description: 'Premium adventure travel in Bangladesh.',
};

// Static — built at build time (no revalidate export)

export default function SignInPage() {
  return (
    <main id="main-content">
      {/* TODO: Build Sign In page */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Sign In</p>
      </div>
    </main>
  );
}
