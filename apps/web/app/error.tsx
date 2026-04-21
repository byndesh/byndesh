"use client";

import { useEffect } from "react";

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
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="font-heading text-display-2 uppercase tracking-tighter">
        Something Went Wrong
      </h1>
      <p className="mt-4 font-body text-body-lg text-bynd-black/70">
        The expedition encountered an unexpected error.
      </p>
      <button
        onClick={() => reset()}
        className="mt-8 rounded-full bg-bynd-black px-8 py-3 font-heading text-label uppercase text-white hover:bg-bynd-orange transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
