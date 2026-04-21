/**
 * @component TestimonialCardLarge
 * @description Full-width featured review with author photo
 * @example
 * <TestimonialCardLarge />
 */

import { cn } from '@/lib/utils';

interface TestimonialCardLargeProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * TestimonialCardLarge — Full-width featured review with author photo
 * TODO: Implement full component logic and styling.
 */
export default function TestimonialCardLarge({ className, children }: TestimonialCardLargeProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
