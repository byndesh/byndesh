"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Destinations", href: "/destinations" },
    { name: "Experiences", href: "/experiences" },
    { name: "About Us", href: "/about" },
    { name: "Journal", href: "/blog" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }} 
          className="fixed inset-0 z-50 bg-bynd-black flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="flex justify-end p-6">
            <button
              onClick={onClose}
              className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-bynd-orange"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center space-y-8">
            <nav className="flex flex-col items-center space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className="font-heading uppercase text-heading-2 text-white hover:text-bynd-orange transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <Link
              href="/book-now"
              onClick={onClose}
              className="mt-8 bg-bynd-orange text-white font-heading uppercase tracking-[0.1em] px-8 py-4 rounded-full hover:bg-white hover:text-bynd-orange transition-all font-bold text-sm"
              aria-label="Book Now"
            >
              Book Now
            </Link>
          </div>

          <div className="p-8 border-t border-bynd-black-800 flex flex-col items-center space-y-6">
            <div className="flex space-x-6 text-white">
              <Instagram className="w-6 h-6 hover:text-bynd-orange transition-colors cursor-pointer" />
              <Facebook className="w-6 h-6 hover:text-bynd-orange transition-colors cursor-pointer" />
              <Twitter className="w-6 h-6 hover:text-bynd-orange transition-colors cursor-pointer" />
            </div>
            <div className="text-bynd-black-400 text-sm">
              hello@beyndesh.com | +880-1XX-XXXX-XXX
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
