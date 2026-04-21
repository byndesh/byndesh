/**
 * @component DestinationCard
 * @description Destination with image, name, trip count, hover overlay
 * @example
 * <DestinationCard />
 */

import { cn } from '@/lib/utils';

interface DestinationCardProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * DestinationCard — Destination with image, name, trip count, hover overlay
 * TODO: Implement full component logic and styling.
 */
export default function DestinationCard({ className, children }: DestinationCardProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
