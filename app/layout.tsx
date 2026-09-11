import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3 } from "lucide-react";
import { MainNav } from "@/components/navigation/MainNav";
import "@/styles.css";

export const metadata: Metadata = {
  title: { default: "HC4M Buyer Insights", template: "%s | HC4M Buyer Insights" },
  description: "Buyer-level lead performance reporting for Home Cash 4 Me: acceptances, bids, revenue and outcomes.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-background">
          <header className="border-b border-primary/40 bg-primary">
            <div className="mx-auto flex max-w-[104rem] flex-wrap items-center justify-between gap-3 px-5 py-3">
              <Link href="/" className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary-foreground/10">
                  <BarChart3 className="size-5 text-primary-foreground" aria-hidden />
                </span>
                <span>
                  <span className="block font-display text-base font-bold text-primary-foreground">HC4M Buyer Insights</span>
                  <span className="block text-xs text-primary-foreground/60">Home Cash 4 Me · buyer response reporting</span>
                </span>
              </Link>
              <MainNav />
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
