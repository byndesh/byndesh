/**
 * @component NotFoundPage
 * @description "Lost in Bangladesh?" 404 page with search and home link
 * @example
 * <NotFoundPage />
 */

import { cn } from '@/lib/utils';

interface NotFoundPageProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * NotFoundPage — "Lost in Bangladesh?" 404 page with search and home link
 * TODO: Implement full component logic and styling.
 */
export default function NotFoundPage({ className, children }: NotFoundPageProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
