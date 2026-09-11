import { BuyerNav } from "@/components/navigation/BuyerNav";
import { buyerNames } from "@/lib/hc4m/source";

export default function BuyersLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-[104rem] space-y-6 px-5 py-7">
      <div><h1 className="font-display text-2xl font-bold">Buyer views</h1><p className="mt-1 text-sm text-muted-foreground">Switch between buyers to see how each one performed on HC4M leads.</p></div>
      <BuyerNav buyers={buyerNames()} />
      {children}
    </main>
  );
}
