import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function KpiCard({
  label,
  value,
  sub,
  Icon,
  tone = "default",
  hint,
}: {
  label: string;
  value: string | number;
  sub?: string;
  Icon?: LucideIcon;
  tone?: "default" | "success" | "info" | "danger" | "warning" | "muted";
  hint?: string;
}) {
  const tones: Record<string, string> = {
    default: "text-foreground",
    success: "text-success",
    info: "text-info",
    danger: "text-danger",
    warning: "text-warning",
    muted: "text-muted-foreground",
  };
  return (
    <div
      title={hint}
      className="rounded-xl border border-border bg-card p-4 shadow-card transition-shadow hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        {Icon ? <Icon className={cn("size-4 shrink-0", tones[tone])} aria-hidden /> : null}
      </div>
      <p className={cn("mt-2 font-display text-2xl font-bold tabular-nums", tones[tone])}>
        {value}
      </p>
      {sub ? <p className="mt-1 text-xs text-muted-foreground">{sub}</p> : null}
    </div>
  );
}
