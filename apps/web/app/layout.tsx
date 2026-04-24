import type { Metadata } from "next";
import { Titillium_Web, Goudy_Bookletter_1911, Lavishly_Yours } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-titillium-web",
});

const goudy = Goudy_Bookletter_1911({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-goudy",
});

const lavishly = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lavishly",
});

export const metadata: Metadata = {
  title: "Bynd BD — Beyond Bangladesh",
  description: "Bespoke adventure travel and cultural experiences. Travel beyond the last light.",
  icons: {
    icon: "/favicon.ico",
  },
};

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import CookieBanner from '@/components/interactive/CookieBanner';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-bynd-cream text-bynd-ink antialiased selection:bg-bynd-flame selection:text-white",
          titillium.variable,
          goudy.variable,
          lavishly.variable
        )}
      >
        <Navbar />
        {/* Removed horizontal padding and top padding to allow full-width heroes/sections */}
        <main id="main-content">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
