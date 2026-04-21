/**
 * @component TripCategoryCard
 * @description Category card with image, title, description, CTA
 * @example
 * <TripCategoryCard />
 */

import { cn } from '@/lib/utils';

interface TripCategoryCardProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * TripCategoryCard — Category card with image, title, description, CTA
 * TODO: Implement full component logic and styling.
 */
export default function TripCategoryCard({ className, children }: TripCategoryCardProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
