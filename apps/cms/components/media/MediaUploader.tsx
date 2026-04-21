'use client';

/**
 * @component MediaUploader
 * @description Drag-and-drop uploader to Cloudflare R2
 */
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface MediaUploaderProps {
  className?: string;
  children?: React.ReactNode;
}

// TODO: Implement MediaUploader
export default function MediaUploader({ className, children }: MediaUploaderProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
