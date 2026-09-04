import { CheckCircle2, CircleSlash, Filter, MinusCircle, XCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BuyerStatus } from "@/lib/hc4m/types";

const map: Record<BuyerStatus, { className: string; Icon: LucideIcon; hint: string }> = {
  Accepted: {
    className: "bg-success-soft text-success border-success/25",
    Icon: CheckCircle2,
    hint: "This buyer purchased the lead",
  },
  Outbid: {
    className: "bg-info-soft text-info border-info/25",
    Icon: CircleSlash,
    hint: "Bid or qualified, but another buyer won",
  },
  Rejected: {
    className: "bg-danger-soft text-danger border-danger/25",
    Icon: XCircle,
    hint: "This buyer declined the lead",
  },
  "Filtered Out": {
    className: "bg-warning-soft text-warning border-warning/25",
    Icon: Filter,
    hint: "Buyer rules blocked the lead before ping",
  },
  "Not Accepted": {
    className: "bg-muted text-muted-foreground border-border",
    Icon: MinusCircle,
    hint: "Progressed part-way but never accepted",
  },
};

export function statusHint(status: BuyerStatus) {
  return map[status].hint;
}

export function statusChartColor(status: BuyerStatus) {
  return {
    Accepted: "var(--success)",
    Outbid: "var(--info)",
    Rejected: "var(--danger)",
    "Filtered Out": "var(--warning)",
    "Not Accepted": "var(--muted-foreground)",
  }[status];
}

export function StatusBadge({
  status,
  className,
}: {
  status: BuyerStatus;
  className?: string;
}) {
  const { className: tone, Icon } = map[status];
  return (
    <span
      title={map[status].hint}
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold",
        tone,
        className,
      )}
    >
      <Icon className="size-3.5" aria-hidden />
      {status}
    </span>
  );
}
