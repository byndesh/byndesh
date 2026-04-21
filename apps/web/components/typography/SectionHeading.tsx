import { cn } from "@/lib/utils";

type HeadingSize = "display-1" | "display-2" | "heading-1" | "heading-2" | "heading-3";
type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface SectionHeadingProps {
  children: React.ReactNode;
  as?: HeadingTag;
  size?: HeadingSize;
  className?: string;
}

export function SectionHeading({ children, as: Tag = "h2", size = "heading-2", className }: SectionHeadingProps) {
  return (
    <Tag className={cn("font-heading uppercase", `text-${size}`, className)}>
      {children}
    </Tag>
  );
}
