'use client';

/**
 * @component CMSEmptyState
 * @description Empty state for CMS data tables
 */
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface CMSEmptyStateProps {
  className?: string;
  children?: React.ReactNode;
}

// TODO: Implement CMSEmptyState
export default function CMSEmptyState({ className, children }: CMSEmptyStateProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
