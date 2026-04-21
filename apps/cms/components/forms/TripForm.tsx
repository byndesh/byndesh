'use client';

/**
 * @component TripForm
 * @description Full trip creation/edit form
 */
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface TripFormProps {
  className?: string;
  children?: React.ReactNode;
}

// TODO: Implement TripForm
export default function TripForm({ className, children }: TripFormProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
