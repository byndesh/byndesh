"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Map, 
  BookOpen, 
  Compass, 
  HelpCircle, 
  FileText, 
  Briefcase,
  Image as ImageIcon,
  Library,
  ShoppingCart,
  Star,
  Gift,
  Users,
  UserCheck,
  Mail,
  Contact,
  Tag,
  Menu,
  Settings,
  BarChart3,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon: any;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const NAV_SECTIONS: NavSection[] = [
  {
    title: "CONTENT",
    items: [
      { label: "Trips", href: "/trips", icon: Map },
      { label: "Stories", href: "/stories", icon: BookOpen },
      { label: "Destinations", href: "/destinations", icon: Compass },
      { label: "FAQ", href: "/faq", icon: HelpCircle },
      { label: "Pages", href: "/pages", icon: FileText },
      { label: "Jobs", href: "/jobs", icon: Briefcase },
    ],
  },
  {
    title: "MEDIA",
    items: [
      { label: "Library", href: "/media/library", icon: Library },
      { label: "Gallery", href: "/media/gallery", icon: ImageIcon },
    ],
  },
  {
    title: "COMMERCE",
    items: [
      { label: "Bookings", href: "/bookings", icon: ShoppingCart },
      { label: "Reviews", href: "/reviews", icon: Star },
      { label: "Gift Cards", href: "/gift-cards", icon: Gift },
    ],
  },
  {
    title: "PEOPLE",
    items: [
      { label: "Users", href: "/people/users", icon: Users },
      { label: "Team", href: "/people/team", icon: UserCheck },
      { label: "Newsletter", href: "/people/newsletter", icon: Mail },
      { label: "Contacts", href: "/people/contacts", icon: Contact },
    ],
  },
  {
    title: "SYSTEM",
    items: [
      { label: "Taxonomy", href: "/system/taxonomy", icon: Tag },
      { label: "Menus", href: "/system/menus", icon: Menu },
      { label: "Settings", href: "/system/settings", icon: Settings },
      { label: "Analytics", href: "/system/analytics", icon: BarChart3 },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 w-60 bg-bynd-black text-white overflow-y-auto">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6">
          <h1 className="font-heading text-label uppercase tracking-widest text-bynd-orange">
            Beyndesh CMS
          </h1>
        </div>

        {/* Dashboard Link */}
        <div className="px-3 mb-6">
          <Link
            href="/dashboard"
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
              pathname === "/dashboard" 
                ? "bg-white/10 text-bynd-orange" 
                : "text-white/60 hover:text-white hover:bg-white/5"
            )}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
        </div>

        {/* Sections */}
        <nav className="flex-1 px-3 space-y-8 pb-8">
          {NAV_SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="px-3 mb-2 text-xs font-semibold tracking-wider text-white/30 uppercase">
                {section.title}
              </h2>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                        isActive 
                          ? "bg-white/10 text-bynd-orange" 
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      )}
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 mt-auto">
          <button className="flex w-full items-center gap-3 px-3 py-2 rounded-md text-white/60 hover:text-white hover:bg-white/5 transition-colors">
            <LogOut className="w-4 h-4" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
