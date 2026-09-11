"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Charts are measured against real DOM width, so they only render after
 * hydration. Keeps server HTML and client output consistent.
 */
export function ClientChart({ children, height = 280 }: { children: ReactNode; height?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <div
        style={{ height }}
        className="animate-pulse rounded-lg bg-secondary"
        aria-hidden
      />
    );
  }
  return <div style={{ height, width: "100%" }}>{children}</div>;
}
