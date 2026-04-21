/**
 * @component StatsRow
 * @description Horizontal row of animated StatCards
 * @example
 * <StatsRow />
 */

import { cn } from '@/lib/utils';

interface StatsRowProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * StatsRow — Horizontal row of animated StatCards
 * TODO: Implement full component logic and styling.
 */
export default function StatsRow({ className, children }: StatsRowProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
