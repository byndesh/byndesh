import Link from "next/link";
import { Container } from "../layout/Container";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { LogoMark } from "../branding/LogoMark";

export function Footer() {
  return (
    <footer className="bg-bynd-parchment text-bynd-ash pt-24 pb-20 border-t border-black/5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="flex flex-col space-y-6">
            <h3 className="font-heading uppercase text-[10px] font-bold text-bynd-flame tracking-[0.2em]">Journeys</h3>
             <Link href="/trips/river-expeditions" className="font-body text-sm hover:text-bynd-flame transition-colors">River Expeditions</Link>
             <Link href="/trips/sundarbans-safaris" className="font-body text-sm hover:text-bynd-flame transition-colors">Sundarbans Safaris</Link>
             <Link href="/trips/hill-tracts-trekking" className="font-body text-sm hover:text-bynd-flame transition-colors">Hill Tracts Trekking</Link>
             <Link href="/trips/tea-country-sylhet" className="font-body text-sm hover:text-bynd-flame transition-colors">Tea Country & Sylhet</Link>
          </div>

          <div className="flex flex-col space-y-6">
            <h3 className="font-heading uppercase text-[10px] font-bold text-bynd-flame tracking-[0.2em]">Company</h3>
             <Link href="/about" className="font-body text-sm hover:text-bynd-flame transition-colors">About Bynd BD</Link>
             <Link href="/stories" className="font-body text-sm hover:text-bynd-flame transition-colors">Stories</Link>
             <Link href="/partners" className="font-body text-sm hover:text-bynd-flame transition-colors">Partners</Link>
             <Link href="/gallery" className="font-body text-sm hover:text-bynd-flame transition-colors">Gallery</Link>
          </div>

          <div className="flex flex-col space-y-6">
            <h3 className="font-heading uppercase text-[10px] font-bold text-bynd-flame tracking-[0.2em]">Legal</h3>
             <Link href="/privacy" className="font-body text-sm hover:text-bynd-flame transition-colors">Privacy Policy</Link>
             <Link href="/terms" className="font-body text-sm hover:text-bynd-flame transition-colors">Terms of Service</Link>
             <Link href="/cancellation-policy" className="font-body text-sm hover:text-bynd-flame transition-colors">Cancellation Policy</Link>
          </div>

          <div className="flex flex-col space-y-6">
            <h3 className="font-heading uppercase text-[10px] font-bold text-bynd-flame tracking-[0.2em]">Connect</h3>
             <p className="font-body text-sm italic">Gulshan 1, Dhaka</p>
             <p className="font-body text-sm">+880 1711 000000</p>
             <p className="font-body text-sm underline">explore@bynd.travel</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/5">
          <div className="flex items-center gap-6 mb-8 md:mb-0">
            <LogoMark size={32} color="#1D1D1B" className="opacity-20" />
            <div className="flex flex-col">
              <span className="font-logo font-black uppercase text-xl opacity-20 tracking-widest text-bynd-ink">
                BYND BD
              </span>
              <span className="font-body text-bynd-silver text-sm italic">
                The journey is the destination.
              </span>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <span className="font-signature text-4xl grad-text italic">
              See you Beyond.
            </span>
            <div className="flex space-x-6 pt-4 text-bynd-silver">
               <Instagram className="w-5 h-5 hover:text-bynd-flame transition-colors" />
               <Facebook className="w-5 h-5 hover:text-bynd-flame transition-colors" />
               <Youtube className="w-5 h-5 hover:text-bynd-flame transition-colors" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
