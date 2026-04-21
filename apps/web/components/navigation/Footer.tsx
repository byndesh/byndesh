import Link from "next/link";
import { Container } from "../layout/Container";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-bynd-black text-white pt-20 pb-10 border-t border-bynd-black-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col space-y-4">
            <h3 className="font-heading uppercase text-label text-bynd-orange tracking-[0.2em]">Company</h3>
             <Link href="/about" className="font-heading uppercase text-body-sm text-bynd-black-200 hover:text-white transition-colors">Our Story</Link>
             <Link href="/contact" className="font-heading uppercase text-body-sm text-bynd-black-200 hover:text-white transition-colors">Contact</Link>
             <Link href="/careers" className="font-heading uppercase text-body-sm text-bynd-black-200 hover:text-white transition-colors">Careers</Link>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="font-heading uppercase text-label text-bynd-orange tracking-[0.2em]">Journeys</h3>
             <Link href="/destinations" className="font-heading uppercase text-body-sm text-bynd-black-200 hover:text-white transition-colors">Destinations</Link>
             <Link href="/experiences" className="font-heading uppercase text-body-sm text-bynd-black-200 hover:text-white transition-colors">Experiences</Link>
             <Link href="/custom-trips" className="font-heading uppercase text-body-sm text-bynd-black-200 hover:text-white transition-colors">Custom Trips</Link>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="font-heading uppercase text-label text-bynd-orange tracking-[0.2em]">Resources</h3>
             <Link href="/blog" className="font-heading uppercase text-body-sm text-bynd-black-200 hover:text-white transition-colors">Journal</Link>
             <Link href="/faq" className="font-heading uppercase text-body-sm text-bynd-black-200 hover:text-white transition-colors">FAQ</Link>
             <Link href="/travel-guide" className="font-heading uppercase text-body-sm text-bynd-black-200 hover:text-white transition-colors">Travel Guide</Link>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="font-heading uppercase text-label text-bynd-orange tracking-[0.2em]">Legal</h3>
             <Link href="/privacy" className="font-heading uppercase text-body-sm text-bynd-black-200 hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="/terms" className="font-heading uppercase text-body-sm text-bynd-black-200 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-bynd-black-800">
          <div className="font-logo font-bold uppercase text-2xl mb-6 md:mb-0">
            Beyndesh
          </div>
          
          <div className="text-bynd-black-400 text-sm mb-6 md:mb-0">
            &copy; {new Date().getFullYear()} Beyndesh Adventure Travel. All rights reserved.
          </div>

          <div className="flex space-x-6">
             <Link href="#" aria-label="Instagram"><Instagram className="w-5 h-5 text-bynd-black-400 hover:text-white transition-colors" /></Link>
             <Link href="#" aria-label="Facebook"><Facebook className="w-5 h-5 text-bynd-black-400 hover:text-white transition-colors" /></Link>
             <Link href="#" aria-label="Twitter"><Twitter className="w-5 h-5 text-bynd-black-400 hover:text-white transition-colors" /></Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
