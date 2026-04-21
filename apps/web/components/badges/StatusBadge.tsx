/**
 * @component StatusBadge
 * @description Booking status: Confirmed/Deposit Paid/Cancelled
 * @example
 * <StatusBadge />
 */

import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * StatusBadge — Booking status: Confirmed/Deposit Paid/Cancelled
 * TODO: Implement full component logic and styling.
 */
export default function StatusBadge({ className, children }: StatusBadgeProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
