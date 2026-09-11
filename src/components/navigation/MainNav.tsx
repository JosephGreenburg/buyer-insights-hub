"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Overview" },
  { href: "/leads", label: "Leads" },
  { href: "/buyers", label: "Buyers" },
];

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-1" aria-label="Main">
      {links.map(({ href, label }) => {
        const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={active
              ? "rounded-md bg-primary-foreground/15 px-3 py-2 text-sm font-semibold text-primary-foreground"
              : "rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
