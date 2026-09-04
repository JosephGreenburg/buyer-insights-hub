import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { StatusBadge } from "./StatusBadge";
import { LeadIdLink } from "./LeadIdLink";
import { currency, formatDateTime, leadAttempts } from "@/lib/hc4m/metrics";
import { loadDataset } from "@/lib/hc4m/source";
import type { BuyerAttempt } from "@/lib/hc4m/types";

function timelineSteps(a: BuyerAttempt) {
  const reachedPing = a.lastStage !== "Before Ping";
  return [
    { label: "Lead received", detail: formatDateTime(a.leadAt), done: true },
    { label: "Buyer evaluated", detail: `Furthest stage: ${a.lastStage}`, done: true },
    {
      label: "Ping response",
      detail: reachedPing ? (a.pingResponse ?? "No response recorded") : "Not pinged",
      done: reachedPing,
    },
    {
      label: "Bid returned",
      detail: typeof a.bid === "number" ? currency(a.bid) : "No bid returned",
      done: typeof a.bid === "number",
    },
    {
      label: a.sent ? "Lead posted to buyer" : "Lead not posted to buyer",
      detail: a.sent ? "Full lead delivered" : "Buyer never received the lead",
      done: a.sent,
    },
    {
      label: "Final buyer outcome",
      detail: a.outcome ?? a.status,
      done: a.status === "Accepted",
    },
  ];
}

export function LeadDrillDown({
  leadId,
  onClose,
}: {
  leadId: string | null;
  onClose: () => void;
}) {
  const lead = loadDataset().leads.find((l) => l.leadId === leadId);
  const attempts = leadId ? leadAttempts(leadId) : [];
  const winner = attempts.find((a) => a.status === "Accepted");

  return (
    <Sheet open={Boolean(leadId)} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side="right"
        className="w-full overflow-y-auto sm:max-w-2xl lg:max-w-3xl"
      >
        {leadId ? (
          <>
            <SheetHeader className="space-y-2">
              <SheetTitle className="font-display text-lg">Lead buyer responses</SheetTitle>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <LeadIdLink leadId={leadId} />
                <span>{lead ? formatDateTime(lead.leadAt) : ""}</span>
                <span>
                  {attempts.length} buyer{attempts.length === 1 ? "" : "s"} evaluated
                </span>
              </div>
            </SheetHeader>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-border bg-muted/40 p-3">
                <p className="text-xs font-semibold uppercase text-muted-foreground">
                  Winning buyer
                </p>
                <p className="mt-1 text-sm font-semibold">{winner?.buyer ?? "Not sold"}</p>
              </div>
              <div className="rounded-lg border border-border bg-muted/40 p-3">
                <p className="text-xs font-semibold uppercase text-muted-foreground">
                  Purchase price
                </p>
                <p className="mt-1 text-sm font-semibold">
                  {currency(winner?.price ?? 0)}
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted/40 p-3">
                <p className="text-xs font-semibold uppercase text-muted-foreground">
                  Highest bid
                </p>
                <p className="mt-1 text-sm font-semibold">
                  {currency(
                    Math.max(0, ...attempts.map((a) => (typeof a.bid === "number" ? a.bid : 0))),
                  )}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {attempts.map((a) => (
                <div
                  key={a.buyer}
                  className="rounded-xl border border-border bg-card p-4 shadow-card"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="font-display font-semibold">{a.buyer}</p>
                      <p className="text-xs text-muted-foreground">{a.buyerFull}</p>
                    </div>
                    <StatusBadge status={a.status} />
                  </div>
                  <ol className="mt-4 space-y-0">
                    {timelineSteps(a).map((step, i, arr) => (
                      <li key={step.label} className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <span
                            className={
                              step.done
                                ? "mt-1 size-2.5 rounded-full bg-success"
                                : "mt-1 size-2.5 rounded-full bg-border"
                            }
                            aria-hidden
                          />
                          {i < arr.length - 1 ? (
                            <span className="w-px flex-1 bg-border" aria-hidden />
                          ) : null}
                        </div>
                        <div className="pb-3">
                          <p className="text-sm font-medium">{step.label}</p>
                          <p className="text-xs text-muted-foreground">{step.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Technical response code: {a.httpStatus ?? "n/a"}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}
