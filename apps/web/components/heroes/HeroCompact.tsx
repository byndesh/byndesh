/**
 * @component HeroCompact
 * @description Shorter interior-page hero — no background image, uses bg color.
 *   Used on About, Contact, Blog, Legal pages etc.
 * @param {Object} props
 * @param {string} [props.label] - Small orange eyebrow label (e.g. "— ABOUT US")
 * @param {string} props.heading - Page heading
 * @param {string} [props.subheading] - Supporting subheading
 * @param {string} [props.signatureText] - Optional Lavishly Yours accent
 * @param {'paper'|'black'|'white'} [props.bg] - Background color
 * @example
 * <HeroCompact label="ABOUT US" heading="OUR STORY" bg="paper" />
 */

import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/typography/SectionLabel';
import SignatureAccent from '@/components/typography/SignatureAccent';
import { cn } from '@/lib/utils';

interface HeroCompactProps {
  label?: string;
  heading: string;
  subheading?: string;
  signatureText?: string;
  bg?: 'paper' | 'black' | 'white';
  align?: 'left' | 'center';
  className?: string;
}

const bgMap = {
  paper: 'bg-bynd-paper',
  black: 'bg-bynd-black',
  white: 'bg-white',
};

export default function HeroCompact({
  label,
  heading,
  subheading,
  signatureText,
  bg = 'paper',
  align = 'left',
  className,
}: HeroCompactProps) {
  const isDark = bg === 'black';

  return (
    <section
      className={cn('pt-36 pb-16 md:pt-44 md:pb-24', bgMap[bg], className)}
      aria-label={`${heading} page header`}
    >
      <Container>
        <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
          {label && (
            <SectionLabel className={cn('mb-4', isDark && 'text-bynd-black-200')}>
              {label}
            </SectionLabel>
          )}

          {signatureText && (
            <SignatureAccent color={isDark ? 'orange' : 'orange'} rotate={-2} className="mb-1">
              {signatureText}
            </SignatureAccent>
          )}

          <h1 className={cn(
            'font-heading font-black uppercase text-heading-1 leading-tight',
            isDark ? 'text-white' : 'text-bynd-black'
          )}>
            {heading}
          </h1>

          {subheading && (
            <p className={cn(
              'mt-5 font-body font-body text-lg leading-relaxed',
              isDark ? 'text-bynd-black-200' : 'text-bynd-black-300'
            )}>
              {subheading}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
