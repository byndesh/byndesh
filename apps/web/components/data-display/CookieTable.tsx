/**
 * @component CookieTable
 * @description Cookie type, name, purpose, duration table
 * @example
 * <CookieTable />
 */

import { cn } from '@/lib/utils';

interface CookieTableProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * CookieTable — Cookie type, name, purpose, duration table
 * TODO: Implement full component logic and styling.
 */
export default function CookieTable({ className, children }: CookieTableProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
