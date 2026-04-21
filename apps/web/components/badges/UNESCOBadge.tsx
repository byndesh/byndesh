/**
 * @component UNESCOBadge
 * @description UNESCO World Heritage Site marker badge
 * @example
 * <UNESCOBadge />
 */

import { cn } from '@/lib/utils';

interface UNESCOBadgeProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * UNESCOBadge — UNESCO World Heritage Site marker badge
 * TODO: Implement full component logic and styling.
 */
export default function UNESCOBadge({ className, children }: UNESCOBadgeProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
