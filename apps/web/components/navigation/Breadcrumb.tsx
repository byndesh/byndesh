/**
 * @component Breadcrumb
 * @description Hierarchical breadcrumb trail for inner pages
 * @example
 * <Breadcrumb />
 */

import { cn } from '@/lib/utils';

interface BreadcrumbProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Breadcrumb — Hierarchical breadcrumb trail for inner pages
 * TODO: Implement full component logic and styling.
 */
export default function Breadcrumb({ className, children }: BreadcrumbProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
