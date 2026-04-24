import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import Link from 'next/link';

interface HeroSectionProps {
  signatureText: string;
  heading: string;
  subheading: string;
  ctaText: string;
}

function HeroSection({
  signatureText,
  heading,
  subheading,
  ctaText
}: HeroSectionProps) {
  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center w-full overflow-hidden bg-bynd-cream">
      {/* Background with Sunrise Gradient per rule */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-sunrise opacity-90 z-10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />
      </div>

      <Container className="relative z-20 flex flex-col items-center text-center">
        {/* Signature accent text per rule */}
        <span className="font-signature italic text-bynd-flame text-4xl mb-10 block">
          {signatureText}
        </span>

        {/* Editorial Display Heading per rule */}
        <h1 
          className="font-body italic text-bynd-ink leading-[0.9] text-[clamp(48px,8vw,96px)] max-w-6xl mb-12 grad-text"
        >
          {heading}
        </h1>

        {/* Subtitles per rule */}
        <p className="font-body italic text-bynd-stone text-xl md:text-2xl max-w-[700px] leading-relaxed mb-16 px-4">
          {subheading}
        </p>

        {/* Primary CTA (Ember Gradient Pill shape) */}
        <div className="flex flex-col items-center gap-4">
          <Link
            href="/trips"
            className="bg-ember text-white font-heading uppercase text-[10px] font-bold tracking-[0.15em] px-12 py-4 rounded-full shadow-premium hover:shadow-orange-500/20 transition-all hover:scale-105 active:scale-95"
          >
            {ctaText}
          </Link>
          <span className="font-heading text-[9px] text-bynd-silver tracking-[0.4em] uppercase pt-4">
            Beyond the last light.
          </span>
        </div>
      </Container>

      {/* Decorative Golden Line per rule */}
      <div className="absolute bottom-12 inset-x-0 h-px bg-golden opacity-30 z-20 mx-auto max-w-6xl" />
    </section>
  );
}

export default HeroSection;
