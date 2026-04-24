import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Wishlist | Bynd BD',
  description: 'Premium adventure travel in Bangladesh.',
};

export const dynamic = 'force-dynamic';

export default function MyWishlistPage() {
  return (
    <main id="main-content">
      {/* TODO: Build My Wishlist page */}
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-bynd-black-300">My Wishlist</p>
      </div>
    </main>
  );
}
