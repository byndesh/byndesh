export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <h1 className="font-heading text-display-2 uppercase tracking-tighter sm:text-display-1">
        Beyndesh
      </h1>
      <p className="mt-4 font-body text-body-lg text-bynd-black/70">
        Travel Experiences Beyond the Ordinary
      </p>
      <div className="mt-12 inline-flex items-center gap-2 rounded-full border border-bynd-black/10 bg-white/50 px-6 py-2 backdrop-blur-sm">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bynd-orange opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-bynd-orange"></span>
        </span>
        <span className="font-heading text-label uppercase">Coming Soon</span>
      </div>
    </div>
  );
}
