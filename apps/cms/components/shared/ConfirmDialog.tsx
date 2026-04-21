'use client';

/**
 * @component ConfirmDialog
 * @description Destructive action confirmation dialog
 */
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ConfirmDialogProps {
  className?: string;
  children?: React.ReactNode;
}

// TODO: Implement ConfirmDialog
export default function ConfirmDialog({ className, children }: ConfirmDialogProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
