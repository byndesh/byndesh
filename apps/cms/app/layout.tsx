import type { Metadata } from "next";
import { Titillium_Web, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-titillium-web",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Beyndesh CMS — Admin Portal",
  description: "Administrative interface for Beyndesh travel platform.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body
        className={cn(
          "min-h-screen font-body",
          titillium.variable,
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
