import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KpiCard } from "@/components/hc4m/KpiCard";
import { LeadTable } from "@/components/hc4m/LeadTable";
import { buyerFromSlug, loadDataset } from "@/lib/hc4m/source";
import { buyerSummary, currency, percent } from "@/lib/hc4m/metrics";

export const metadata: Metadata = { title: "Buyer Detail", description: "A single buyer's lead activity: acceptances, outbids, rejections, filters, bids and purchase value." };

export default async function BuyerDetail({ params }: { params: Promise<{ buyer: string }> }) {
  const { buyer: slug } = await params;
  const buyer = buyerFromSlug(slug);
  if (!buyer) notFound();
  const summary = buyerSummary(buyer);
  const attempts = loadDataset().attempts.filter((a) => a.buyer === buyer);
  return <div className="space-y-6"><div><h2 className="font-display text-xl font-bold">{summary.buyer}</h2><p className="text-sm text-muted-foreground">{summary.buyerFull}</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"><KpiCard label="Leads evaluated" value={summary.evaluated} /><KpiCard label="Leads accepted" value={summary.accepted} tone="success" /><KpiCard label="Acceptance rate" value={percent(summary.acceptanceRate)} /><KpiCard label="Leads outbid" value={summary.outbid} tone="info" /><KpiCard label="Leads rejected" value={summary.rejected} tone="danger" /><KpiCard label="Leads filtered out" value={summary.filteredOut} tone="warning" /><KpiCard label="Average bid" value={currency(summary.avgBid)} /><KpiCard label="Highest bid" value={currency(summary.highestBid)} /><KpiCard label="Total purchase value" value={currency(summary.totalValue)} tone="success" /><KpiCard label="Average purchase price" value={currency(summary.avgPrice)} /></div><LeadTable attempts={attempts} showBuyerColumn={false} title={`${summary.buyer} lead activity`} description="Click any row to see how every buyer responded to that lead." /></div>;
}
