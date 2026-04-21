/**
 * @component Caption
 * @description Small muted caption text for images and media
 * @example
 * <Caption />
 */

import { cn } from '@/lib/utils';

interface CaptionProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Caption — Small muted caption text for images and media
 * TODO: Implement full component logic and styling.
 */
export default function Caption({ className, children }: CaptionProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
