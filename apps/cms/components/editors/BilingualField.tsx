'use client';

/**
 * @component BilingualField
 * @description Side-by-side EN/BN input fields
 */
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface BilingualFieldProps {
  className?: string;
  children?: React.ReactNode;
}

// TODO: Implement BilingualField
export default function BilingualField({ className, children }: BilingualFieldProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
