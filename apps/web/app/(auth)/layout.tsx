// Minimal auth layout
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bynd-paper flex items-center justify-center">
      {children}
    </div>
  );
}
