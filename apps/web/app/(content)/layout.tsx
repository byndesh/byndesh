export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="pt-24 pb-16 min-h-screen">
      {children}
    </main>
  );
}
