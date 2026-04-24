import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <nav className="flex items-center text-sm font-heading font-semibold uppercase tracking-wider text-[#8E8D8A] mb-8" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center space-x-2">
              {isLast ? (
                <span className="text-[#FF5F0F]" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link href={item.href || '#'} className="hover:text-[#FF5F0F] transition-colors">
                    {item.label}
                  </Link>
                  <span className="text-bynd-ash">→</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
