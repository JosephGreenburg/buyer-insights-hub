import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionCard } from "@/components/hc4m/SectionCard";
import { allBuyerSummaries, currency, percent } from "@/lib/hc4m/metrics";
import { buyerSlug } from "@/lib/hc4m/source";

export const Route = createFileRoute("/buyers/")({
  head: () => ({
    meta: [
      { title: "All Buyers | HC4M Buyer Insights" },
      {
        name: "description",
        content:
          "Compare every connected buyer on acceptance rate, bidding, rejections and total purchase value.",
      },
      { property: "og:title", content: "All Buyers | HC4M Buyer Insights" },
      {
        property: "og:description",
        content: "Side-by-side buyer performance comparison for Home Cash 4 Me leads.",
      },
    ],
  }),
  component: BuyersIndex,
});

function BuyersIndex() {
  const buyers = allBuyerSummaries();

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {buyers.map((b) => (
        <Link
          key={b.buyer}
          to="/buyers/$buyer"
          params={{ buyer: buyerSlug(b.buyer) }}
          className="block rounded-xl border border-border bg-card p-5 shadow-card transition-shadow hover:shadow-lg"
        >
          <p className="font-display text-base font-semibold">{b.buyer}</p>
          <p className="text-xs text-muted-foreground">{b.buyerFull}</p>
          <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="text-xs uppercase text-muted-foreground">Accepted</dt>
              <dd className="font-semibold text-success tabular-nums">
                {b.accepted} / {b.evaluated}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase text-muted-foreground">Acceptance rate</dt>
              <dd className="font-semibold tabular-nums">{percent(b.acceptanceRate)}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase text-muted-foreground">Avg bid</dt>
              <dd className="font-semibold tabular-nums">{currency(b.avgBid)}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase text-muted-foreground">Purchase value</dt>
              <dd className="font-semibold tabular-nums">{currency(b.totalValue)}</dd>
            </div>
          </dl>
        </Link>
      ))}
      <SectionCard
        title="How to read these numbers"
        description="Buyer status always describes that buyer's own result."
        className="md:col-span-2 xl:col-span-1"
      >
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">Accepted</strong> — this buyer purchased the lead.
          </li>
          <li>
            <strong className="text-foreground">Outbid</strong> — bid or qualified, another buyer
            won.
          </li>
          <li>
            <strong className="text-foreground">Rejected</strong> — the buyer declined the lead.
          </li>
          <li>
            <strong className="text-foreground">Filtered Out</strong> — buyer rules blocked the
            lead before ping.
          </li>
          <li>
            <strong className="text-foreground">Not Accepted</strong> — progressed part-way but
            never accepted.
          </li>
        </ul>
      </SectionCard>
    </div>
  );
}
