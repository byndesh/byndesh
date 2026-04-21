/**
 * @component ItineraryDayCard
 * @description Day-by-day itinerary entry with icon and expandable detail
 * @example
 * <ItineraryDayCard />
 */

import { cn } from '@/lib/utils';

interface ItineraryDayCardProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * ItineraryDayCard — Day-by-day itinerary entry with icon and expandable detail
 * TODO: Implement full component logic and styling.
 */
export default function ItineraryDayCard({ className, children }: ItineraryDayCardProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
