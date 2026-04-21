'use client';

/**
 * @component JsonEditor
 * @description Raw JSON editor for advanced content fields
 */
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface JsonEditorProps {
  className?: string;
  children?: React.ReactNode;
}

// TODO: Implement JsonEditor
export default function JsonEditor({ className, children }: JsonEditorProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
