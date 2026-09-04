import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { statusChartColor } from "./StatusBadge";
import { currency } from "@/lib/hc4m/metrics";
import type { BuyerStatus } from "@/lib/hc4m/types";

const axis = {
  stroke: "var(--muted-foreground)",
  fontSize: 12,
};

const tooltipStyle = {
  contentStyle: {
    background: "var(--card)",
    border: "1px solid var(--border)",
    borderRadius: "0.6rem",
    fontSize: "0.8rem",
    color: "var(--foreground)",
  },
};

export function AcceptanceByBuyerChart({
  data,
}: {
  data: { buyer: string; accepted: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} layout="vertical" margin={{ left: 8, right: 16 }}>
        <XAxis type="number" allowDecimals={false} {...axis} />
        <YAxis type="category" dataKey="buyer" width={130} {...axis} />
        <Tooltip {...tooltipStyle} />
        <Bar
          dataKey="accepted"
          name="Leads accepted"
          fill="var(--success)"
          radius={[0, 6, 6, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function OutcomeBreakdownChart({
  data,
}: {
  data: { status: BuyerStatus; count: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <PieChart>
        <Pie data={data} dataKey="count" nameKey="status" innerRadius={60} outerRadius={100}>
          {data.map((d) => (
            <Cell key={d.status} fill={statusChartColor(d.status)} />
          ))}
        </Pie>
        <Legend wrapperStyle={{ fontSize: "0.78rem" }} />
        <Tooltip {...tooltipStyle} />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function BidComparisonChart({
  data,
}: {
  data: { buyer: string; avgBid: number; highestBid: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} margin={{ left: 8, right: 8 }}>
        <XAxis dataKey="buyer" interval={0} tickFormatter={(v: string) => v.split(" ")[0]} {...axis} />
        <YAxis tickFormatter={(v: number) => `$${v}`} {...axis} />
        <Tooltip formatter={(v: number) => currency(v)} {...tooltipStyle} />
        <Legend wrapperStyle={{ fontSize: "0.78rem" }} />
        <Bar dataKey="avgBid" name="Average bid" fill="var(--chart-1)" radius={[6, 6, 0, 0]} />
        <Bar dataKey="highestBid" name="Highest bid" fill="var(--chart-4)" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function RevenueByBuyerChart({
  data,
}: {
  data: { buyer: string; totalValue: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} layout="vertical" margin={{ left: 8, right: 16 }}>
        <XAxis type="number" tickFormatter={(v: number) => `$${v}`} {...axis} />
        <YAxis type="category" dataKey="buyer" width={130} {...axis} />
        <Tooltip formatter={(v: number) => currency(v)} {...tooltipStyle} />
        <Bar
          dataKey="totalValue"
          name="Purchase value"
          fill="var(--chart-2)"
          radius={[0, 6, 6, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function FunnelChart({ data }: { data: { step: string; value: number }[] }) {
  const max = Math.max(...data.map((d) => d.value), 1);
  return (
    <ol className="space-y-3">
      {data.map((d) => (
        <li key={d.step}>
          <div className="flex items-baseline justify-between text-sm">
            <span className="font-medium">{d.step}</span>
            <span className="tabular-nums text-muted-foreground">{d.value}</span>
          </div>
          <div className="mt-1 h-2.5 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${(d.value / max) * 100}%` }}
            />
          </div>
        </li>
      ))}
    </ol>
  );
}

export function ReasonBreakdownChart({
  data,
}: {
  data: { reason: string; count: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} layout="vertical" margin={{ left: 8, right: 16 }}>
        <XAxis type="number" allowDecimals={false} {...axis} />
        <YAxis type="category" dataKey="reason" width={200} {...axis} />
        <Tooltip {...tooltipStyle} />
        <Bar dataKey="count" name="Buyer attempts" fill="var(--chart-3)" radius={[0, 6, 6, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
