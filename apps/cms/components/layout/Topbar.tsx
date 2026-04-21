'use client';

/**
 * @component Topbar
 * @description Admin topbar with user avatar and breadcrumb
 */
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface TopbarProps {
  className?: string;
  children?: React.ReactNode;
}

// TODO: Implement Topbar
export default function Topbar({ className, children }: TopbarProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
