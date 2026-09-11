# HC4M Buyer Insights: TanStack Start -> Next.js 16 migration

This migration overlay converts the existing Lovable/TanStack Start shell to the Next.js App Router while preserving the existing HC4M business logic, normalized dataset, charts, UI components, and styles.

## What changes

- `vite` / TanStack Start scripts become `next dev`, `next build`, and `next start`.
- TanStack file routes become Next.js App Router routes:
  - `src/routes/index.tsx` -> `app/page.tsx`
  - `src/routes/leads.tsx` -> `app/leads/page.tsx`
  - `src/routes/buyers.tsx` -> `app/buyers/layout.tsx`
  - `src/routes/buyers.index.tsx` -> `app/buyers/page.tsx`
  - `src/routes/buyers.$buyer.tsx` -> `app/buyers/[buyer]/page.tsx`
- Root metadata/shell moves from `src/routes/__root.tsx` to `app/layout.tsx`.
- Active navigation uses `next/navigation` and `next/link`.
- Client-only interactive modules are explicitly marked with `"use client"`.
- Tailwind v4 is wired through `@tailwindcss/postcss` and scans the new `app/` directory.
- Existing TanStack bootstrap files are excluded from TypeScript so they can remain temporarily during review.

## Apply to the existing repository

From outside the repository:

```bash
./buyer-insights-nextjs-migration/apply-nextjs-migration.sh /path/to/buyer-insights-hub
```

Then inside the repository:

```bash
rm -rf node_modules .next
npm install
npm run build
npm run dev
```

If your company standardizes on Bun, `bun install` and `bun run build` are also reasonable, but the application no longer depends on Vite or TanStack Start.

## Legacy files

The migration intentionally leaves these original Lovable/TanStack files in place but excludes them from Next.js type checking:

- `src/routes/`
- `src/router.tsx`
- `src/routeTree.gen.ts`
- `src/server.ts`
- `src/start.ts`
- `vite.config.ts`

After the Next.js build is validated, they can be deleted in a cleanup commit.

## Data/API path

`src/lib/hc4m/source.ts` is unchanged. Today it loads the normalized August 1 sample JSON. The same adapter boundary can later be replaced with server-side LeadProsper calls without changing the UI data shape.

For a company deployment, keep LeadProsper credentials server-side only (environment variables / secret manager). Never expose bearer tokens or API credentials through `NEXT_PUBLIC_*` variables or client components.

## Recommended production baseline

This overlay targets Next.js `16.3.3`, the Active LTS security-patched release current when this migration was prepared (September 2026), with React 19.2 and Tailwind CSS 4.
