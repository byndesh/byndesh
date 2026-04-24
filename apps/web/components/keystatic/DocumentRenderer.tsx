'use client';

import { DocumentRenderer as KeystaticRenderer } from '@keystatic/core/renderer';

interface DocumentRendererProps {
  document: any;
}

export function DocumentRenderer({ document }: DocumentRendererProps) {
  if (!document) return null;

  return (
    <div className="prose prose-lg prose-stone max-w-none 
      prose-headings:font-body prose-headings:italic prose-headings:text-bynd-ink
      prose-p:font-body prose-p:text-bynd-ash prose-p:leading-relaxed
      prose-strong:text-bynd-ink prose-strong:font-bold
      prose-a:text-bynd-flame prose-a:no-underline hover:prose-a:underline
      prose-img:rounded-3xl prose-img:shadow-premium">
      <KeystaticRenderer document={document} />
    </div>
  );
}
