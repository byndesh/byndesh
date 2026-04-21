/**
 * @component NewBadge
 * @description "NEW" pill badge for recently added content
 * @example
 * <NewBadge />
 */

import { cn } from '@/lib/utils';

interface NewBadgeProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * NewBadge — "NEW" pill badge for recently added content
 * TODO: Implement full component logic and styling.
 */
export default function NewBadge({ className, children }: NewBadgeProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
