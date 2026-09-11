"use client";

import { useMemo, useState } from "react";
import { ArrowUpDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "./StatusBadge";
import { LeadIdLink } from "./LeadIdLink";
import { LeadDrillDown } from "./LeadDrillDown";
import { currency, formatDateTime } from "@/lib/hc4m/metrics";
import { BUYER_STATUSES, type BuyerAttempt } from "@/lib/hc4m/types";
import { cn } from "@/lib/utils";

type SortKey = "leadAt" | "bid" | "price" | "buyer" | "status";

const ALL = "__all__";

function SortHeader({
  label,
  sortKey,
  activeSort,
  onSort,
}: {
  label: string;
  sortKey: SortKey;
  activeSort: SortKey;
  onSort: (key: SortKey) => void;
}) {
  return (
    <button
      onClick={() => onSort(sortKey)}
      className={cn(
        "inline-flex items-center gap-1 hover:text-foreground",
        activeSort === sortKey && "text-foreground",
      )}
    >
      {label}
      <ArrowUpDown className="size-3" aria-hidden />
    </button>
  );
}

export function LeadTable({
  attempts,
  showBuyerColumn = true,
  title = "Lead activity",
  description = "Every buyer response, one row per buyer attempt. Click a row for the full buyer timeline.",
}: {
  attempts: BuyerAttempt[];
  showBuyerColumn?: boolean;
  title?: string;
  description?: string;
}) {
  const [query, setQuery] = useState("");
  const [buyer, setBuyer] = useState(ALL);
  const [status, setStatus] = useState(ALL);
  const [sentFilter, setSentFilter] = useState(ALL);
  const [date, setDate] = useState("");
  const [minBid, setMinBid] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [sort, setSort] = useState<{ key: SortKey; dir: "asc" | "desc" }>({
    key: "leadAt",
    dir: "asc",
  });
  const [openLead, setOpenLead] = useState<string | null>(null);

  const buyers = useMemo(
    () => Array.from(new Set(attempts.map((a) => a.buyer))).sort(),
    [attempts],
  );

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    const bidFloor = minBid === "" ? null : Number(minBid);
    const priceFloor = minPrice === "" ? null : Number(minPrice);

    const filtered = attempts.filter((a) => {
      if (q && !`${a.leadId} ${a.buyer} ${a.outcome ?? ""} ${a.status}`.toLowerCase().includes(q))
        return false;
      if (buyer !== ALL && a.buyer !== buyer) return false;
      if (status !== ALL && a.status !== status) return false;
      if (sentFilter !== ALL && String(a.sent) !== sentFilter) return false;
      if (date && !a.leadAt.startsWith(date)) return false;
      if (bidFloor !== null && !Number.isNaN(bidFloor) && (a.bid ?? 0) < bidFloor) return false;
      if (priceFloor !== null && !Number.isNaN(priceFloor) && a.price < priceFloor) return false;
      return true;
    });

    const dir = sort.dir === "asc" ? 1 : -1;
    return filtered.sort((a, b) => {
      switch (sort.key) {
        case "bid":
          return ((a.bid ?? 0) - (b.bid ?? 0)) * dir;
        case "price":
          return (a.price - b.price) * dir;
        case "buyer":
          return a.buyer.localeCompare(b.buyer) * dir;
        case "status":
          return a.status.localeCompare(b.status) * dir;
        default:
          return a.leadAt.localeCompare(b.leadAt) * dir;
      }
    });
  }, [attempts, query, buyer, status, sentFilter, date, minBid, minPrice, sort]);

  const toggleSort = (key: SortKey) =>
    setSort((prev) =>
      prev.key === key ? { key, dir: prev.dir === "asc" ? "desc" : "asc" } : { key, dir: "desc" },
    );

  return (
    <section className="rounded-xl border border-border bg-card shadow-card">
      <header className="border-b border-border px-5 py-4">
        <h2 className="font-display text-base font-semibold">{title}</h2>
        <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search lead ID, buyer, outcome"
              className="pl-9"
              aria-label="Search leads"
            />
          </div>

          {showBuyerColumn ? (
            <Select value={buyer} onValueChange={setBuyer}>
              <SelectTrigger aria-label="Filter by buyer">
                <SelectValue placeholder="All buyers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL}>All buyers</SelectItem>
                {buyers.map((b) => (
                  <SelectItem key={b} value={b}>
                    {b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : null}

          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger aria-label="Filter by buyer status">
              <SelectValue placeholder="All statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL}>All statuses</SelectItem>
              {BUYER_STATUSES.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sentFilter} onValueChange={setSentFilter}>
            <SelectTrigger aria-label="Filter by lead sent">
              <SelectValue placeholder="Sent to buyer?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL}>Sent or not sent</SelectItem>
              <SelectItem value="true">Sent to buyer</SelectItem>
              <SelectItem value="false">Not sent</SelectItem>
            </SelectContent>
          </Select>

          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            aria-label="Filter by date"
          />
          <Input
            type="number"
            min="0"
            step="0.01"
            value={minBid}
            onChange={(e) => setMinBid(e.target.value)}
            placeholder="Min bid ($)"
            aria-label="Minimum bid"
          />
          <Input
            type="number"
            min="0"
            step="0.01"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min purchase price ($)"
            aria-label="Minimum purchase price"
          />
          <Button
            variant="outline"
            onClick={() => {
              setQuery("");
              setBuyer(ALL);
              setStatus(ALL);
              setSentFilter(ALL);
              setDate("");
              setMinBid("");
              setMinPrice("");
            }}
          >
            Clear filters
          </Button>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Showing {rows.length} of {attempts.length} buyer attempts
        </p>
      </header>

      <div className="max-h-[36rem] overflow-auto">
        <table className="w-full min-w-[64rem] border-collapse text-sm">
          <thead className="sticky top-0 z-10 bg-secondary/95 backdrop-blur">
            <tr className="text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <th className="px-4 py-3">
                <SortHeader label="Date / time" sortKey="leadAt" activeSort={sort.key} onSort={toggleSort} />
              </th>
              <th className="px-4 py-3">Lead ID</th>
              {showBuyerColumn ? (
                <th className="px-4 py-3">
                  <SortHeader label="Date / time" sortKey="leadAt" activeSort={sort.key} onSort={toggleSort} />
                </th>
              ) : null}
              <th className="px-4 py-3">
                <SortHeader label="Date / time" sortKey="leadAt" activeSort={sort.key} onSort={toggleSort} />
              </th>
              <th className="px-4 py-3">Last stage</th>
              <th className="px-4 py-3">Ping response</th>
              <th className="px-4 py-3 text-right">
                <SortHeader label="Date / time" sortKey="leadAt" activeSort={sort.key} onSort={toggleSort} />
              </th>
              <th className="px-4 py-3">Lead sent?</th>
              <th className="px-4 py-3 text-right">
                <SortHeader

  label="Date / time"

  sortKey="leadAt"

  activeSort={sort.key}

  onSort={toggleSort}

/>
              </th>
              <th className="px-4 py-3">Outcome detail</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((a) => (
              <tr
                key={`${a.leadId}-${a.buyer}`}
                onClick={() => setOpenLead(a.leadId)}
                className="cursor-pointer border-t border-border transition-colors hover:bg-secondary/60"
              >
                <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                  {formatDateTime(a.leadAt)}
                </td>
                <td className="px-4 py-3">
                  <LeadIdLink leadId={a.leadId} />
                </td>
                {showBuyerColumn ? (
                  <td className="whitespace-nowrap px-4 py-3 font-medium">{a.buyer}</td>
                ) : null}
                <td className="px-4 py-3">
                  <StatusBadge status={a.status} />
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                  {a.lastStage}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                  {a.pingResponse ?? "—"}
                </td>
                <td className="px-4 py-3 text-right tabular-nums">
                  {typeof a.bid === "number" ? currency(a.bid) : "—"}
                </td>
                <td className="px-4 py-3">{a.sent ? "Yes" : "No"}</td>
                <td className="px-4 py-3 text-right font-medium tabular-nums">
                  {a.price > 0 ? currency(a.price) : "—"}
                </td>
                <td className="px-4 py-3 text-muted-foreground">{a.outcome ?? "—"}</td>
              </tr>
            ))}
            {rows.length === 0 ? (
              <tr>
                <td colSpan={10} className="px-4 py-10 text-center text-muted-foreground">
                  No buyer attempts match these filters.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      <LeadDrillDown leadId={openLead} onClose={() => setOpenLead(null)} />
    </section>
  );
}
