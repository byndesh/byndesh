'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="pt-32 pb-20 bg-bynd-cream min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <p className="font-accent italic text-bynd-flame text-xl mb-4">something went wrong</p>
        <h1 className="font-heading text-4xl text-bynd-ink uppercase mb-6">
          UNEXPECTED ERROR
        </h1>
        <p className="font-body text-bynd-ash text-lg max-w-md mx-auto mb-10">
          We hit a snag. This has been logged and our team will look into it.
        </p>
        <button
          onClick={reset}
          className="inline-block bg-bynd-flame text-white font-ui px-8 py-3 rounded-full hover:bg-bynd-flame/90 transition"
        >
          TRY AGAIN →
        </button>
      </div>
    </main>
  );
}
