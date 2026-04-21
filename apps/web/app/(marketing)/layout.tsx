import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col flex-1">
      <Navbar transparent={true} />
      <main id="main-content" className="flex-1 flex flex-col pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
