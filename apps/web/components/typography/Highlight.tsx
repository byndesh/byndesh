/**
 * @component Highlight
 * @description Inline text with orange background highlight
 * @example
 * <Highlight />
 */

import { cn } from '@/lib/utils';

interface HighlightProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Highlight — Inline text with orange background highlight
 * TODO: Implement full component logic and styling.
 */
export default function Highlight({ className, children }: HighlightProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
