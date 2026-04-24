/**
 * @component HeroFullscreen
 * @description Full-viewport hero with background image, dark overlay, heading,
 *   tagline, dual CTAs, and scroll indicator. Used on the homepage.
 * @param {Object} props
 * @param {string} props.heading - Main hero heading (e.g. "BEYOND THE LAND")
 * @param {string} props.tagline - Sub-heading or tagline sentence
 * @param {string} [props.signatureText] - Lavishly Yours accent (e.g. "Bynd BD")
 * @param {string} props.imageUrl - Background image URL
 * @param {string} [props.videoUrl] - Optional background video URL
 * @param {string} [props.primaryCta] - Primary button label
 * @param {string} [props.primaryHref] - Primary button href
 * @param {string} [props.secondaryCta] - Secondary button label
 * @param {string} [props.secondaryHref] - Secondary button href
 * @example
 * <HeroFullscreen
 *   heading="BEYOND THE LAND"
 *   tagline="Premium adventure travel across Bangladesh"
 *   imageUrl="/images/hero-sundarbans.jpg"
 *   primaryCta="EXPLORE TRIPS" primaryHref="/trips"
 *   secondaryCta="OUR STORY" secondaryHref="/about"
 * />
 */

import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import ButtonOutline from '@/components/buttons/ButtonOutline';
import SignatureAccent from '@/components/typography/SignatureAccent';
import ScrollIndicator from './ScrollIndicator';
import { cn } from '@/lib/utils';

interface HeroFullscreenProps {
  heading: string;
  tagline: string;
  signatureText?: string;
  imageUrl: string;
  imageAlt?: string;
  videoUrl?: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  overlayStrength?: 'light' | 'medium' | 'heavy';
  className?: string;
}

const overlayMap = {
  light:  'bg-bynd-black/30',
  medium: 'bg-bynd-black/50',
  heavy:  'bg-bynd-black/70',
};

export default function HeroFullscreen({
  heading,
  tagline,
  signatureText,
  imageUrl,
  imageAlt = 'Bynd BD adventure landscape',
  videoUrl,
  primaryCta,
  primaryHref = '/trips',
  secondaryCta,
  secondaryHref = '/about',
  overlayStrength = 'medium',
  className,
}: HeroFullscreenProps) {
  return (
    <section
      className={cn('relative flex h-screen min-h-[600px] w-full items-center overflow-hidden', className)}
      aria-label="Hero section"
    >
      {/* Background */}
      {videoUrl ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      ) : (
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}

      {/* Dark overlay */}
      <div className={cn('absolute inset-0', overlayMap[overlayStrength])} aria-hidden="true" />

      {/* Content */}
      <Container className="relative z-10 pb-24 pt-32">
        <div className="max-w-3xl">
          {/* Signature accent above heading */}
          {signatureText && (
            <SignatureAccent color="orange" rotate={-2} size="md" className="mb-2">
              {signatureText}
            </SignatureAccent>
          )}

          {/* Main heading */}
          <h1 className="font-heading font-black uppercase font-heading text-5xl md:text-7xl uppercase text-white leading-none mb-6">
            {heading}
          </h1>

          {/* Tagline */}
          <p className="font-body font-body text-lg text-white/85 max-w-xl mb-10 leading-relaxed">
            {tagline}
          </p>

          {/* CTAs */}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-4">
              {primaryCta && (
                <ButtonPrimary label={primaryCta} href={primaryHref} size="lg" />
              )}
              {secondaryCta && (
                <ButtonOutline label={secondaryCta} href={secondaryHref} color="white" size="lg" />
              )}
            </div>
          )}
        </div>
      </Container>

      {/* Scroll indicator */}
      <ScrollIndicator className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" />
    </section>
  );
}
