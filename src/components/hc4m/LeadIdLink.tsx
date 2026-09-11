"use client";

import { ExternalLink } from "lucide-react";
import { leadUrl } from "@/lib/hc4m/source";

export function LeadIdLink({ leadId }: { leadId: string }) {
  return (
    <a
      href={leadUrl(leadId)}
      target="_blank"
      rel="noreferrer noopener"
      title="Open this lead in LeadProsper"
      onClick={(e) => e.stopPropagation()}
      className="inline-flex items-center gap-1 font-mono text-xs font-medium text-info underline decoration-info/30 underline-offset-2 hover:decoration-info"
    >
      {leadId}
      <ExternalLink className="size-3" aria-hidden />
    </a>
  );
}
