/**
 * Canonical data model for HC4M buyer insights.
 *
 * A Lead can have MANY BuyerAttempts. This shape is intentionally
 * transport-agnostic so the current spreadsheet snapshot can later be replaced
 * by a live LeadProsper API adapter without touching the UI.
 *
 * PRIVACY: no personally identifiable seller information is modeled here.
 */

export const BUYER_STATUSES = [
  "Accepted",
  "Outbid",
  "Rejected",
  "Filtered Out",
  "Not Accepted",
] as const;

export type BuyerStatus = (typeof BUYER_STATUSES)[number];

export type LastStage = "Before Ping" | "Ping" | "Post" | "After Ping";

export interface Campaign {
  name: string;
  id: string;
  timezone: string;
  date: string;
  totalLeads: number;
  accepted: number;
  failed: number;
  duplicates: number;
  grossAcceptanceRate: number;
  returned: number;
  netAccepted: number;
}

export interface Lead {
  leadId: string;
  /** LeadProsper lead detail URL (opens in a new tab). */
  url: string | null;
  leadAt: string;
  leadStatus: string;
  sanitizedError: string | null;
  revenue: number;
  returned: boolean;
  test: boolean;
  supplier: string;
}

export interface BuyerAttempt {
  leadId: string;
  leadAt: string;
  /** Short buyer label used in the UI and in routes. */
  buyer: string;
  /** Full LeadProsper buyer name. */
  buyerFull: string;
  status: BuyerStatus;
  lastStage: LastStage;
  pingResponse: string | null;
  bid: number | null;
  sent: boolean;
  price: number;
  outcome: string | null;
  httpStatus: number | null;
}

export interface BuyerReconciliation {
  buyerFull: string;
  eligiblePosts: number;
  accepted: number;
  errors: number;
  duplicates: number;
  grossRevenue: number;
  acceptanceRate: number;
  pings: number;
  pingAccepted: number;
  pingFailed: number;
}

export interface InsightsDataset {
  campaign: Campaign;
  leads: Lead[];
  attempts: BuyerAttempt[];
  reconciliation: BuyerReconciliation[];
  definitions: [string, string][];
}
