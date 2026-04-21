/**
 * @component TripCardFeatured
 * @description Larger horizontal-layout featured trip card
 * @example
 * <TripCardFeatured />
 */

import { cn } from '@/lib/utils';

interface TripCardFeaturedProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * TripCardFeatured — Larger horizontal-layout featured trip card
 * TODO: Implement full component logic and styling.
 */
export default function TripCardFeatured({ className, children }: TripCardFeaturedProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
