'use client';

/**
 * @component StoryForm
 * @description Blog story creation/edit form
 */
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface StoryFormProps {
  className?: string;
  children?: React.ReactNode;
}

// TODO: Implement StoryForm
export default function StoryForm({ className, children }: StoryFormProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
