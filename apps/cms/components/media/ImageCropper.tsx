'use client';

/**
 * @component ImageCropper
 * @description In-browser image crop/resize tool
 */
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageCropperProps {
  className?: string;
  children?: React.ReactNode;
}

// TODO: Implement ImageCropper
export default function ImageCropper({ className, children }: ImageCropperProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
