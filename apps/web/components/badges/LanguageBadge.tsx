/**
 * @component LanguageBadge
 * @description EN / BN language indicator badge
 * @example
 * <LanguageBadge />
 */

import { cn } from '@/lib/utils';

interface LanguageBadgeProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * LanguageBadge — EN / BN language indicator badge
 * TODO: Implement full component logic and styling.
 */
export default function LanguageBadge({ className, children }: LanguageBadgeProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
