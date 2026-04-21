/**
 * @component HeroDestination
 * @description Destination hero with stat bar overlay
 * @example
 * <HeroDestination />
 */

import { cn } from '@/lib/utils';

interface HeroDestinationProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * HeroDestination — Destination hero with stat bar overlay
 * TODO: Implement full component logic and styling.
 */
export default function HeroDestination({ className, children }: HeroDestinationProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
