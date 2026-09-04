import { loadDataset } from "./source";
import { BUYER_STATUSES, type BuyerAttempt, type BuyerStatus } from "./types";

export const currency = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });

export const percent = (n: number) => `${(n * 100).toFixed(1)}%`;

export function formatDateTime(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

export interface OverviewKpis {
  totalLeads: number;
  leadsSold: number;
  totalAttempts: number;
  accepted: number;
  outbid: number;
  rejected: number;
  filteredOut: number;
  notAccepted: number;
  totalRevenue: number;
  avgWinningPrice: number;
}

export function overviewKpis(attempts = loadDataset().attempts): OverviewKpis {
  const leads = loadDataset().leads;
  const byStatus = (s: BuyerStatus) => attempts.filter((a) => a.status === s).length;
  const wins = attempts.filter((a) => a.status === "Accepted");
  const totalRevenue = wins.reduce((sum, a) => sum + a.price, 0);
  return {
    totalLeads: leads.length,
    leadsSold: new Set(wins.map((a) => a.leadId)).size,
    totalAttempts: attempts.length,
    accepted: wins.length,
    outbid: byStatus("Outbid"),
    rejected: byStatus("Rejected"),
    filteredOut: byStatus("Filtered Out"),
    notAccepted: byStatus("Not Accepted"),
    totalRevenue,
    avgWinningPrice: wins.length ? totalRevenue / wins.length : 0,
  };
}

export interface BuyerSummary {
  buyer: string;
  buyerFull: string;
  evaluated: number;
  accepted: number;
  acceptanceRate: number;
  outbid: number;
  rejected: number;
  filteredOut: number;
  notAccepted: number;
  avgBid: number;
  highestBid: number;
  totalValue: number;
  avgPrice: number;
}

export function buyerSummary(buyer: string): BuyerSummary {
  const attempts = loadDataset().attempts.filter((a) => a.buyer === buyer);
  return summarize(buyer, attempts);
}

function summarize(buyer: string, attempts: BuyerAttempt[]): BuyerSummary {
  const count = (s: BuyerStatus) => attempts.filter((a) => a.status === s).length;
  const bids = attempts.map((a) => a.bid).filter((b): b is number => typeof b === "number");
  const wins = attempts.filter((a) => a.status === "Accepted");
  const totalValue = wins.reduce((s, a) => s + a.price, 0);
  return {
    buyer,
    buyerFull: attempts[0]?.buyerFull ?? buyer,
    evaluated: attempts.length,
    accepted: wins.length,
    acceptanceRate: attempts.length ? wins.length / attempts.length : 0,
    outbid: count("Outbid"),
    rejected: count("Rejected"),
    filteredOut: count("Filtered Out"),
    notAccepted: count("Not Accepted"),
    avgBid: bids.length ? bids.reduce((s, b) => s + b, 0) / bids.length : 0,
    highestBid: bids.length ? Math.max(...bids) : 0,
    totalValue,
    avgPrice: wins.length ? totalValue / wins.length : 0,
  };
}

export function allBuyerSummaries(): BuyerSummary[] {
  const { attempts } = loadDataset();
  const buyers = Array.from(new Set(attempts.map((a) => a.buyer)));
  return buyers
    .map((b) => summarize(b, attempts.filter((a) => a.buyer === b)))
    .sort((a, b) => b.accepted - a.accepted || b.totalValue - a.totalValue);
}

export function statusBreakdown() {
  const { attempts } = loadDataset();
  return BUYER_STATUSES.map((status) => ({
    status,
    count: attempts.filter((a) => a.status === status).length,
  })).filter((d) => d.count > 0);
}

/** Funnel across every buyer attempt. */
export function funnelSteps() {
  const { attempts, leads } = loadDataset();
  const pinged = attempts.filter((a) => a.lastStage !== "Before Ping");
  return [
    { step: "Leads received", value: leads.length },
    { step: "Buyer evaluated", value: attempts.length },
    { step: "Pinged", value: pinged.length },
    { step: "Bid received", value: attempts.filter((a) => typeof a.bid === "number").length },
    { step: "Posted", value: attempts.filter((a) => a.sent).length },
    { step: "Accepted", value: attempts.filter((a) => a.status === "Accepted").length },
  ];
}

/** Groups sanitized Outcome Detail text into human-readable reason buckets. */
export function reasonBreakdown() {
  const { attempts } = loadDataset();
  const groups = new Map<string, number>();
  for (const a of attempts) {
    if (a.status === "Accepted") continue;
    groups.set(reasonBucket(a), (groups.get(reasonBucket(a)) ?? 0) + 1);
  }
  return Array.from(groups, ([reason, count]) => ({ reason, count })).sort(
    (x, y) => y.count - x.count,
  );
}

export function reasonBucket(a: BuyerAttempt): string {
  const text = (a.outcome ?? "").toLowerCase();
  if (text.includes("filter")) return "Buyer filter blocked the lead";
  if (text.includes("outbid")) return "Outbid by another buyer";
  if (text.includes("no buyer")) return "Buyer had no capacity";
  if (text.includes("invalid")) return "Invalid or incomplete data";
  if (text.includes("declin") || text.includes("reject")) return "Buyer declined the lead";
  if (a.status === "Not Accepted") return "Progressed but never posted";
  return "Other";
}

export function leadAttempts(leadId: string) {
  const order: Record<BuyerStatus, number> = {
    Accepted: 0,
    Outbid: 1,
    "Not Accepted": 2,
    Rejected: 3,
    "Filtered Out": 4,
  };
  return loadDataset()
    .attempts.filter((a) => a.leadId === leadId)
    .sort(
      (a, b) => order[a.status] - order[b.status] || (b.bid ?? 0) - (a.bid ?? 0),
    );
}
