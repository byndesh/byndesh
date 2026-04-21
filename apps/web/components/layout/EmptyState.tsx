/**
 * @component EmptyState
 * @description Empty state illustration + message + CTA
 * @example
 * <EmptyState />
 */

import { cn } from '@/lib/utils';

interface EmptyStateProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * EmptyState — Empty state illustration + message + CTA
 * TODO: Implement full component logic and styling.
 */
export default function EmptyState({ className, children }: EmptyStateProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
