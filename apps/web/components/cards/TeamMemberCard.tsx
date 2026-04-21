/**
 * @component TeamMemberCard
 * @description Staff profile: photo, name, role, region, languages
 * @example
 * <TeamMemberCard />
 */

import { cn } from '@/lib/utils';

interface TeamMemberCardProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * TeamMemberCard — Staff profile: photo, name, role, region, languages
 * TODO: Implement full component logic and styling.
 */
export default function TeamMemberCard({ className, children }: TeamMemberCardProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
