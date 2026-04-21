/**
 * @component LegalText
 * @description Small dense legal/disclaimer text
 * @example
 * <LegalText />
 */

import { cn } from '@/lib/utils';

interface LegalTextProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * LegalText — Small dense legal/disclaimer text
 * TODO: Implement full component logic and styling.
 */
export default function LegalText({ className, children }: LegalTextProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
