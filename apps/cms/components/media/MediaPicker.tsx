'use client';

/**
 * @component MediaPicker
 * @description Compact media picker modal for form fields
 */
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface MediaPickerProps {
  className?: string;
  children?: React.ReactNode;
}

// TODO: Implement MediaPicker
export default function MediaPicker({ className, children }: MediaPickerProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
