import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="font-heading text-display-2 uppercase tracking-tighter">
        Trail Not Found
      </h1>
      <p className="mt-4 font-body text-body-lg text-bynd-black/70">
        The path you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/" 
        className="mt-8 font-heading text-label uppercase underline underline-offset-4 hover:text-bynd-orange transition-colors"
      >
        Return to Base
      </Link>
    </div>
  );
}
