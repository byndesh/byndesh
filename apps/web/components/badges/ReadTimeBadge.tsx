/**
 * @component ReadTimeBadge
 * @description Estimated read time with clock icon
 * @example
 * <ReadTimeBadge />
 */

import { cn } from '@/lib/utils';

interface ReadTimeBadgeProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * ReadTimeBadge — Estimated read time with clock icon
 * TODO: Implement full component logic and styling.
 */
export default function ReadTimeBadge({ className, children }: ReadTimeBadgeProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
