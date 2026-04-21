/**
 * @component ComparisonTable
 * @description Side-by-side trip comparison table
 * @example
 * <ComparisonTable />
 */

import { cn } from '@/lib/utils';

interface ComparisonTableProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * ComparisonTable — Side-by-side trip comparison table
 * TODO: Implement full component logic and styling.
 */
export default function ComparisonTable({ className, children }: ComparisonTableProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
