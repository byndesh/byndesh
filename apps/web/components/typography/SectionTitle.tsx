import { cn } from "@/lib/utils";

interface SectionTitleProps {
  label: string;
  title?: string;
  className?: string;
  onDark?: boolean;
  center?: boolean;
}

export function SectionTitle({ label, title, className, onDark = false, center = false }: SectionTitleProps) {
  return (
    <div className={cn("mb-16", center && "text-center", className)}>
      <div className={cn(
        "font-heading text-[10px] uppercase tracking-[0.4em] border-b pb-2 mb-8 inline-block min-w-[120px]",
        onDark ? "text-white/40 border-white/10" : "text-bynd-silver border-black/5"
      )}>
        {label}
      </div>
      {title && (
        <h2 className={cn(
          "font-body italic text-4xl md:text-5xl",
          onDark ? "text-bynd-cream" : "text-bynd-ink"
        )}>
          {title}
        </h2>
      )}
    </div>
  );
}
