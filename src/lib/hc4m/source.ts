/**
 * Data source adapter.
 *
 * Today: a normalized snapshot of the August 1, 2026 spreadsheet export.
 * Later: swap `loadDataset()` for a LeadProsper API adapter (server function)
 * that returns the same `InsightsDataset` shape — no UI changes required.
 */
import raw from "@/data/aug01-2026.json";
import type {
  BuyerAttempt,
  BuyerReconciliation,
  BuyerStatus,
  InsightsDataset,
  LastStage,
} from "./types";

function normalizeStatus(value: string): BuyerStatus {
  switch (value.trim().toLowerCase()) {
    case "accepted":
      return "Accepted";
    case "outbid":
      return "Outbid";
    case "rejected":
      return "Rejected";
    case "filtered out":
      return "Filtered Out";
    default:
      return "Not Accepted";
  }
}

function normalizeStage(value: string): LastStage {
  switch (value.trim().toLowerCase()) {
    case "before ping":
      return "Before Ping";
    case "post":
      return "Post";
    case "after ping":
      return "After Ping";
    default:
      return "Ping";
  }
}

const dataset: InsightsDataset = {
  campaign: raw.campaign,
  leads: raw.leads.map((l) => ({
    leadId: l.leadId,
    url: l.url ?? null,
    leadAt: l.leadAt,
    leadStatus: l.leadStatus,
    sanitizedError: l.sanitizedError ?? null,
    revenue: l.revenue ?? 0,
    returned: Boolean(l.returned),
    test: Boolean(l.test),
    supplier: l.supplier,
  })),
  attempts: raw.attempts.map(
    (a): BuyerAttempt => ({
      leadId: a.leadId,
      leadAt: a.leadAt,
      buyer: a.buyer,
      buyerFull: a.buyerFull,
      status: normalizeStatus(a.status),
      lastStage: normalizeStage(a.lastStage),
      pingResponse: a.pingResponse ?? null,
      bid: typeof a.bid === "number" ? a.bid : null,
      sent: Boolean(a.sent),
      price: a.price ?? 0,
      outcome: a.outcome ?? null,
      httpStatus: typeof a.http === "number" ? a.http : null,
    }),
  ),
  reconciliation: raw.reconciliation as unknown as BuyerReconciliation[],
  definitions: raw.definitions as [string, string][],
};

export function loadDataset(): InsightsDataset {
  return dataset;
}

export function leadUrl(leadId: string): string {
  const found = dataset.leads.find((l) => l.leadId === leadId);
  return (
    found?.url ?? `https://app.leadprosper.io/leads?keyword=${encodeURIComponent(leadId)}`
  );
}

export function buyerSlug(buyer: string): string {
  return buyer.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function buyerFromSlug(slug: string): string | undefined {
  return buyerNames().find((b) => buyerSlug(b) === slug);
}

export function buyerNames(): string[] {
  return Array.from(new Set(dataset.attempts.map((a) => a.buyer)));
}
