/**
 * @component SitemapPage
 * @description HTML sitemap with grouped links
 * @example
 * <SitemapPage />
 */

import { cn } from '@/lib/utils';

interface SitemapPageProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * SitemapPage — HTML sitemap with grouped links
 * TODO: Implement full component logic and styling.
 */
export default function SitemapPage({ className, children }: SitemapPageProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
