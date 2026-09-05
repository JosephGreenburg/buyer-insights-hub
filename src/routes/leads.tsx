import { createFileRoute } from "@tanstack/react-router";
import { LeadTable } from "@/components/hc4m/LeadTable";
import { SectionCard } from "@/components/hc4m/SectionCard";
import { loadDataset } from "@/lib/hc4m/source";
import { currency, formatDateTime, leadAttempts } from "@/lib/hc4m/metrics";
import { LeadIdLink } from "@/components/hc4m/LeadIdLink";

export const Route = createFileRoute("/leads")({
  head: () => ({
    meta: [
      { title: "Lead Activity | HC4M Buyer Insights" },
      {
        name: "description",
        content:
          "Search, filter and sort every HC4M lead with each buyer's status, bid, purchase price and outcome detail.",
      },
      { property: "og:title", content: "Lead Activity | HC4M Buyer Insights" },
      {
        property: "og:description",
        content: "Searchable lead-by-lead buyer response detail for Home Cash 4 Me.",
      },
    ],
  }),
  component: LeadsPage,
});

function LeadsPage() {
  const { attempts, leads } = loadDataset();

  return (
    <main className="mx-auto max-w-[104rem] space-y-6 px-5 py-7">
      <div>
        <h1 className="font-display text-2xl font-bold">Lead activity</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          One row per buyer response. Lead IDs open the matching LeadProsper record in a new tab.
        </p>
      </div>

      <SectionCard
        title="Leads at a glance"
        description="Each lead, the buyer that won it and what it sold for."
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[46rem] text-sm">
            <thead>
              <tr className="text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <th className="pb-2 pr-4">Date / time</th>
                <th className="pb-2 pr-4">Lead ID</th>
                <th className="pb-2 pr-4 text-right">Buyers evaluated</th>
                <th className="pb-2 pr-4 text-right">Bids received</th>
                <th className="pb-2 pr-4">Winning buyer</th>
                <th className="pb-2 text-right">Purchase price</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((l) => {
                const rows = leadAttempts(l.leadId);
                const winner = rows.find((a) => a.status === "Accepted");
                return (
                  <tr key={l.leadId} className="border-t border-border">
                    <td className="whitespace-nowrap py-2.5 pr-4 text-muted-foreground">
                      {formatDateTime(l.leadAt)}
                    </td>
                    <td className="py-2.5 pr-4">
                      <LeadIdLink leadId={l.leadId} />
                    </td>
                    <td className="py-2.5 pr-4 text-right tabular-nums">{rows.length}</td>
                    <td className="py-2.5 pr-4 text-right tabular-nums">
                      {rows.filter((a) => typeof a.bid === "number").length}
                    </td>
                    <td className="py-2.5 pr-4 font-medium">{winner?.buyer ?? "Not sold"}</td>
                    <td className="py-2.5 text-right font-medium tabular-nums">
                      {currency(winner?.price ?? 0)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </SectionCard>

      <LeadTable attempts={attempts} />
    </main>
  );
}
