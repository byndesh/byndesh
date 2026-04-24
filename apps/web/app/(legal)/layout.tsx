export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="pt-24 pb-16 min-h-screen bg-bynd-cream">
      <div className="mx-auto max-w-3xl px-6">
        {children}
      </div>
    </main>
  );
}
