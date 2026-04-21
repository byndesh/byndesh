/**
 * @component PriceBadge
 * @description Starting price display in BDT or USD
 * @example
 * <PriceBadge />
 */

import { cn } from '@/lib/utils';

interface PriceBadgeProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * PriceBadge — Starting price display in BDT or USD
 * TODO: Implement full component logic and styling.
 */
export default function PriceBadge({ className, children }: PriceBadgeProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
