'use client';

/**
 * @component ActivityFeed
 * @description Recent admin activity log feed
 */
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ActivityFeedProps {
  className?: string;
  children?: React.ReactNode;
}

// TODO: Implement ActivityFeed
export default function ActivityFeed({ className, children }: ActivityFeedProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
