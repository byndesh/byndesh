/**
 * @component StoryCard
 * @description Blog story card with category badge, read time, excerpt
 * @example
 * <StoryCard />
 */

import { cn } from '@/lib/utils';

interface StoryCardProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * StoryCard — Blog story card with category badge, read time, excerpt
 * TODO: Implement full component logic and styling.
 */
export default function StoryCard({ className, children }: StoryCardProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
