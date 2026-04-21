'use client';

/**
 * @component MapPicker
 * @description Mapbox-based map click-to-pick location input
 */
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface MapPickerProps {
  className?: string;
  children?: React.ReactNode;
}

// TODO: Implement MapPicker
export default function MapPicker({ className, children }: MapPickerProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
