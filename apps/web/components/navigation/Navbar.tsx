"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/lib/hooks/useScrollPosition";
import { MobileMenu } from "./MobileMenu";

interface NavbarProps {
  transparent?: boolean;
}

export function Navbar({ transparent = false }: NavbarProps) {
  const scrollY = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If we scroll past 50px, we treat it as scrolled
  const isScrolled = scrollY > 50;
  
  // The nav starts transparent only if asked to, and we haven't scrolled
  const isTransparent = transparent && !isScrolled;

  const navLinks = [
    { name: "Destinations", href: "/destinations" },
    { name: "Experiences", href: "/experiences" },
    { name: "About", href: "/about" },
    { name: "Journal", href: "/blog" },
  ];

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-white focus:text-bynd-black">
        Skip to main content
      </a>
      <nav
        aria-label="Main navigation"
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-300",
          {
            "bg-transparent text-white": isTransparent,
            "bg-bynd-paper shadow-sm text-bynd-black": !isTransparent,
          }
        )}
      >
        <div className="mx-auto w-full px-5 sm:px-8 lg:px-12 max-w-7xl">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              href="/"
              className="font-logo font-bold uppercase text-2xl tracking-tight flex-shrink-0"
              aria-label="Beyndesh Home"
            >
              Beyndesh
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-heading uppercase text-label tracking-[0.2em] hover:text-bynd-orange transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex flex-shrink-0 ml-8">
              <Link
                href="/book-now"
                className="bg-bynd-orange text-white font-heading uppercase text-xs tracking-[0.1em] px-6 py-3 rounded-full hover:bg-black transition-colors font-bold"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Hamburger toggle */}
            <button
              className="md:hidden flex items-center p-2 focus:outline-none focus:ring-2 focus:ring-bynd-orange rounded"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-label="Open main menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
