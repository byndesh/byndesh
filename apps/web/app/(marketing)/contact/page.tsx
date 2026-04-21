import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Beyndesh',
  description: 'Premium adventure travel in Bangladesh.',
};

// Static — built at build time (no revalidate export)

export default function ContactPage() {
  return (
    <main id="main-content">
      {/* TODO: Build Contact page */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">Contact</p>
      </div>
    </main>
  );
}
