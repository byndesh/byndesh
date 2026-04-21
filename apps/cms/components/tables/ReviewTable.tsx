'use client';

/**
 * @component ReviewTable
 * @description Review moderation table with approve/reject
 */
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ReviewTableProps {
  className?: string;
  children?: React.ReactNode;
}

// TODO: Implement ReviewTable
export default function ReviewTable({ className, children }: ReviewTableProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
