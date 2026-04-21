/**
 * @component BlockQuote
 * @description Styled blockquote with left border and italic Goudy
 * @example
 * <BlockQuote />
 */

import { cn } from '@/lib/utils';

interface BlockQuoteProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * BlockQuote — Styled blockquote with left border and italic Goudy
 * TODO: Implement full component logic and styling.
 */
export default function BlockQuote({ className, children }: BlockQuoteProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
