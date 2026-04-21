/**
 * @component JobCard
 * @description Career listing: title, location, type, description, CTA
 * @example
 * <JobCard />
 */

import { cn } from '@/lib/utils';

interface JobCardProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * JobCard — Career listing: title, location, type, description, CTA
 * TODO: Implement full component logic and styling.
 */
export default function JobCard({ className, children }: JobCardProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
