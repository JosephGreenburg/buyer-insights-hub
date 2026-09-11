"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buyerSlug } from "@/lib/hc4m/source";

export function BuyerNav({ buyers }: { buyers: string[] }) {
  const pathname = usePathname();
  const items = [{ href: "/buyers", label: "All buyers" }, ...buyers.map((buyer) => ({ href: `/buyers/${buyerSlug(buyer)}`, label: buyer }))];
  return (
    <nav className="flex flex-wrap gap-2 rounded-xl border border-border bg-card p-3 shadow-card" aria-label="Buyers">
      {items.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={active
              ? "rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground"
              : "rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
