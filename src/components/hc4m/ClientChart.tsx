"use client";

import { useSyncExternalStore, type ReactNode } from "react";

const emptySubscribe = () => () => {};

function useHydrated() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

/**
 * Charts are measured against real DOM width, so they only render after
 * hydration. Keeps server HTML and client output consistent.
 */
export function ClientChart({
  children,
  height = 280,
}: {
  children: ReactNode;
  height?: number;
}) {
  const hydrated = useHydrated();

  if (!hydrated) {
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