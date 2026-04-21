/**
 * @component SkeletonLoader
 * @description Gray placeholder skeleton for loading states
 * @example
 * <SkeletonLoader />
 */

import { cn } from '@/lib/utils';

interface SkeletonLoaderProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * SkeletonLoader — Gray placeholder skeleton for loading states
 * TODO: Implement full component logic and styling.
 */
export default function SkeletonLoader({ className, children }: SkeletonLoaderProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
