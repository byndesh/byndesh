'use client';

/**
 * @component RichTextEditor
 * @description TipTap-based WYSIWYG rich text editor
 */
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface RichTextEditorProps {
  className?: string;
  children?: React.ReactNode;
}

// TODO: Implement RichTextEditor
export default function RichTextEditor({ className, children }: RichTextEditorProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
