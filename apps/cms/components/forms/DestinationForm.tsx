'use client';

/**
 * @component DestinationForm
 * @description Destination creation/edit form
 */
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface DestinationFormProps {
  className?: string;
  children?: React.ReactNode;
}

// TODO: Implement DestinationForm
export default function DestinationForm({ className, children }: DestinationFormProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
