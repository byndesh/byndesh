/**
 * @component CategoryBadge
 * @description Colored uppercase category label pill
 * @example
 * <CategoryBadge />
 */

import { cn } from '@/lib/utils';

interface CategoryBadgeProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * CategoryBadge — Colored uppercase category label pill
 * TODO: Implement full component logic and styling.
 */
export default function CategoryBadge({ className, children }: CategoryBadgeProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
