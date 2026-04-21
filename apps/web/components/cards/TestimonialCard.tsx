/**
 * @component TestimonialCard
 * @description Quote, author, trip name, star rating on cream background
 * @example
 * <TestimonialCard />
 */

import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * TestimonialCard — Quote, author, trip name, star rating on cream background
 * TODO: Implement full component logic and styling.
 */
export default function TestimonialCard({ className, children }: TestimonialCardProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
