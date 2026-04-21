import type { Metadata } from "next";
import { Titillium_Web, Goudy_Bookletter_1911, Lavishly_Yours } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

// --- Google Fonts ---
const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-titillium",
});

const goudy = Goudy_Bookletter_1911({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-goudy",
});

const lavishly = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lavishly",
});

// --- Local Font (Hubot Sans) ---
// Temporarily disabled until font file is added to public/fonts/
/*
const hubot = localFont({
  src: "../public/fonts/hubot-sans.woff2",
  variable: "--font-hubot",
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: "Arial",
  display: "swap",
});
*/

export const metadata: Metadata = {
  title: "Beyndesh — Travel Experiences Beyond the Ordinary",
  description: "Bespoke adventure travel and cultural experiences in Bangladesh.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-bynd-paper text-bynd-black",
          titillium.variable,
          goudy.variable,
          lavishly.variable
          // hubot.variable
        )}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
