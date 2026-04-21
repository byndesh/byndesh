/**
 * @component QuickFactsBar
 * @description Horizontal bar: Price, Duration, Group, Difficulty, Season
 * @example
 * <QuickFactsBar />
 */

import { cn } from '@/lib/utils';

interface QuickFactsBarProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * QuickFactsBar — Horizontal bar: Price, Duration, Group, Difficulty, Season
 * TODO: Implement full component logic and styling.
 */
export default function QuickFactsBar({ className, children }: QuickFactsBarProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
