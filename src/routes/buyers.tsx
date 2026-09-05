import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { buyerNames, buyerSlug } from "@/lib/hc4m/source";

export const Route = createFileRoute("/buyers")({
  component: BuyersLayout,
});

function BuyersLayout() {
  return (
    <main className="mx-auto max-w-[104rem] space-y-6 px-5 py-7">
      <div>
        <h1 className="font-display text-2xl font-bold">Buyer views</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Switch between buyers to see how each one performed on HC4M leads.
        </p>
      </div>

      <nav
        className="flex flex-wrap gap-2 rounded-xl border border-border bg-card p-3 shadow-card"
        aria-label="Buyers"
      >
        <Link
          to="/buyers"
          activeOptions={{ exact: true }}
          className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          activeProps={{
            className:
              "rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground",
          }}
        >
          All buyers
        </Link>
        {buyerNames().map((b) => (
          <Link
            key={b}
            to="/buyers/$buyer"
            params={{ buyer: buyerSlug(b) }}
            className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            activeProps={{
              className:
                "rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground",
            }}
          >
            {b}
          </Link>
        ))}
      </nav>

      <Outlet />
    </main>
  );
}
