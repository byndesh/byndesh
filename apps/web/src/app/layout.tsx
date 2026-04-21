import type { Metadata } from "next";
import { Titillium_Web, Lavishly_Yours, Sorts_Mill_Goudy } from "next/font/google";
import "./globals.css";

const titillium = Titillium_Web({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-titillium-web",
});

const goudy = Sorts_Mill_Goudy({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-goudy-old-style",
});

const lavishly = Lavishly_Yours({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-lavishly-yours",
});

export const metadata: Metadata = {
  title: "Beyndesh - Premium Adventure Travel in Bangladesh",
  description: "Experience the premium side of Bangladesh with Beyndesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${titillium.variable} ${goudy.variable} ${lavishly.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-paper text-black">
        {children}
      </body>
    </html>
  );
}
