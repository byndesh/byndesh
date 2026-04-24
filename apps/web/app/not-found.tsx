import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="pt-32 pb-20 bg-bynd-cream min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <p className="font-accent italic text-bynd-flame text-xl mb-4">lost in the delta</p>
        <h1 className="font-heading text-5xl md:text-7xl text-bynd-ink uppercase mb-6">
          PAGE NOT FOUND
        </h1>
        <p className="font-body text-bynd-ash text-lg max-w-md mx-auto mb-10">
          This page doesn&apos;t exist — but there&apos;s still a whole country to explore.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-bynd-flame text-white font-ui px-8 py-3 rounded-full hover:bg-bynd-flame/90 transition"
          >
            GO HOME →
          </Link>
          <Link
            href="/trips"
            className="inline-block border border-bynd-flame text-bynd-flame font-ui px-8 py-3 rounded-full hover:bg-bynd-flame hover:text-white transition"
          >
            EXPLORE TRIPS →
          </Link>
        </div>
      </div>
    </main>
  );
}
