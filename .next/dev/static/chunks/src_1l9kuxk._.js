(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/hc4m/ClientChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientChart",
    ()=>ClientChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ClientChart({ children, height = 280 }) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientChart.useEffect": ()=>setMounted(true)
    }["ClientChart.useEffect"], []);
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                height
            },
            className: "animate-pulse rounded-lg bg-secondary",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/hc4m/ClientChart.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height,
            width: "100%"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/hc4m/ClientChart.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
_s(ClientChart, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = ClientChart;
var _c;
__turbopack_context__.k.register(_c, "ClientChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/hc4m/LeadDrillDown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeadDrillDown",
    ()=>LeadDrillDown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hc4m$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/hc4m/StatusBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hc4m$2f$LeadIdLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/hc4m/LeadIdLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hc4m/metrics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hc4m/source.ts [app-client] (ecmascript)");
;
;
;
;
;
;
function timelineSteps(a) {
    const reachedPing = a.lastStage !== "Before Ping";
    return [
        {
            label: "Lead received",
            detail: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateTime"])(a.leadAt),
            done: true
        },
        {
            label: "Buyer evaluated",
            detail: `Furthest stage: ${a.lastStage}`,
            done: true
        },
        {
            label: "Ping response",
            detail: reachedPing ? a.pingResponse ?? "No response recorded" : "Not pinged",
            done: reachedPing
        },
        {
            label: "Bid returned",
            detail: typeof a.bid === "number" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currency"])(a.bid) : "No bid returned",
            done: typeof a.bid === "number"
        },
        {
            label: a.sent ? "Lead posted to buyer" : "Lead not posted to buyer",
            detail: a.sent ? "Full lead delivered" : "Buyer never received the lead",
            done: a.sent
        },
        {
            label: "Final buyer outcome",
            detail: a.outcome ?? a.status,
            done: a.status === "Accepted"
        }
    ];
}
function LeadDrillDown({ leadId, onClose }) {
    const lead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDataset"])().leads.find((l)=>l.leadId === leadId);
    const attempts = leadId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leadAttempts"])(leadId) : [];
    const winner = attempts.find((a)=>a.status === "Accepted");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
        open: Boolean(leadId),
        onOpenChange: (open)=>!open && onClose(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
            side: "right",
            className: "w-full overflow-y-auto sm:max-w-2xl lg:max-w-3xl",
            children: leadId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHeader"], {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                className: "font-display text-lg",
                                children: "Lead buyer responses"
                            }, void 0, false, {
                                fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-3 text-sm text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hc4m$2f$LeadIdLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadIdLink"], {
                                        leadId: leadId
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: lead ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateTime"])(lead.leadAt) : ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            attempts.length,
                                            " buyer",
                                            attempts.length === 1 ? "" : "s",
                                            " evaluated"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 grid gap-3 sm:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-border bg-muted/40 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold uppercase text-muted-foreground",
                                        children: "Winning buyer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm font-semibold",
                                        children: winner?.buyer ?? "Not sold"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-border bg-muted/40 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold uppercase text-muted-foreground",
                                        children: "Purchase price"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm font-semibold",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currency"])(winner?.price ?? 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                lineNumber: 73,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-border bg-muted/40 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold uppercase text-muted-foreground",
                                        children: "Highest bid"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm font-semibold",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currency"])(Math.max(0, ...attempts.map((a)=>typeof a.bid === "number" ? a.bid : 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                        lineNumber: 66,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 space-y-4",
                        children: attempts.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-border bg-card p-4 shadow-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-between gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-display font-semibold",
                                                        children: a.buyer
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: a.buyerFull
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                                lineNumber: 100,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hc4m$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusBadge"], {
                                                status: a.status
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                                lineNumber: 104,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                        lineNumber: 99,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                        className: "mt-4 space-y-0",
                                        children: timelineSteps(a).map((step, i, arr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: step.done ? "mt-1 size-2.5 rounded-full bg-success" : "mt-1 size-2.5 rounded-full bg-border",
                                                                "aria-hidden": true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                                                lineNumber: 110,
                                                                columnNumber: 27
                                                            }, this),
                                                            i < arr.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-px flex-1 bg-border",
                                                                "aria-hidden": true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 29
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-medium",
                                                                children: step.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                                                lineNumber: 123,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: step.detail
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, step.label, true, {
                                                fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                                lineNumber: 108,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                        lineNumber: 106,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs text-muted-foreground",
                                        children: [
                                            "Technical response code: ",
                                            a.httpStatus ?? "n/a"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                        lineNumber: 129,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, a.buyer, true, {
                                fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                                lineNumber: 95,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                        lineNumber: 93,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
                lineNumber: 54,
                columnNumber: 11
            }, this) : null
        }, void 0, false, {
            fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/hc4m/LeadDrillDown.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_c = LeadDrillDown;
var _c;
__turbopack_context__.k.register(_c, "LeadDrillDown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/hc4m/LeadIdLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeadIdLink",
    ()=>LeadIdLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hc4m/source.ts [app-client] (ecmascript)");
"use client";
;
;
;
function LeadIdLink({ leadId }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leadUrl"])(leadId),
        target: "_blank",
        rel: "noreferrer noopener",
        title: "Open this lead in LeadProsper",
        onClick: (e)=>e.stopPropagation(),
        className: "inline-flex items-center gap-1 font-mono text-xs font-medium text-info underline decoration-info/30 underline-offset-2 hover:decoration-info",
        children: [
            leadId,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                className: "size-3",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/components/hc4m/LeadIdLink.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/hc4m/LeadIdLink.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = LeadIdLink;
var _c;
__turbopack_context__.k.register(_c, "LeadIdLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/hc4m/LeadTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeadTable",
    ()=>LeadTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-down.js [app-client] (ecmascript) <export default as ArrowUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hc4m$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/hc4m/StatusBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hc4m$2f$LeadIdLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/hc4m/LeadIdLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hc4m$2f$LeadDrillDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/hc4m/LeadDrillDown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hc4m/metrics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hc4m/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const ALL = "__all__";
function LeadTable({ attempts, showBuyerColumn = true, title = "Lead activity", description = "Every buyer response, one row per buyer attempt. Click a row for the full buyer timeline." }) {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [buyer, setBuyer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ALL);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ALL);
    const [sentFilter, setSentFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ALL);
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [minBid, setMinBid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [minPrice, setMinPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sort, setSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        key: "leadAt",
        dir: "asc"
    });
    const [openLead, setOpenLead] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const buyers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LeadTable.useMemo[buyers]": ()=>Array.from(new Set(attempts.map({
                "LeadTable.useMemo[buyers]": (a)=>a.buyer
            }["LeadTable.useMemo[buyers]"]))).sort()
    }["LeadTable.useMemo[buyers]"], [
        attempts
    ]);
    const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LeadTable.useMemo[rows]": ()=>{
            const q = query.trim().toLowerCase();
            const bidFloor = minBid === "" ? null : Number(minBid);
            const priceFloor = minPrice === "" ? null : Number(minPrice);
            const filtered = attempts.filter({
                "LeadTable.useMemo[rows].filtered": (a)=>{
                    if (q && !`${a.leadId} ${a.buyer} ${a.outcome ?? ""} ${a.status}`.toLowerCase().includes(q)) return false;
                    if (buyer !== ALL && a.buyer !== buyer) return false;
                    if (status !== ALL && a.status !== status) return false;
                    if (sentFilter !== ALL && String(a.sent) !== sentFilter) return false;
                    if (date && !a.leadAt.startsWith(date)) return false;
                    if (bidFloor !== null && !Number.isNaN(bidFloor) && (a.bid ?? 0) < bidFloor) return false;
                    if (priceFloor !== null && !Number.isNaN(priceFloor) && a.price < priceFloor) return false;
                    return true;
                }
            }["LeadTable.useMemo[rows].filtered"]);
            const dir = sort.dir === "asc" ? 1 : -1;
            return filtered.sort({
                "LeadTable.useMemo[rows]": (a, b)=>{
                    switch(sort.key){
                        case "bid":
                            return ((a.bid ?? 0) - (b.bid ?? 0)) * dir;
                        case "price":
                            return (a.price - b.price) * dir;
                        case "buyer":
                            return a.buyer.localeCompare(b.buyer) * dir;
                        case "status":
                            return a.status.localeCompare(b.status) * dir;
                        default:
                            return a.leadAt.localeCompare(b.leadAt) * dir;
                    }
                }
            }["LeadTable.useMemo[rows]"]);
        }
    }["LeadTable.useMemo[rows]"], [
        attempts,
        query,
        buyer,
        status,
        sentFilter,
        date,
        minBid,
        minPrice,
        sort
    ]);
    const toggleSort = (key)=>setSort((prev)=>prev.key === key ? {
                key,
                dir: prev.dir === "asc" ? "desc" : "asc"
            } : {
                key,
                dir: "desc"
            });
    const SortHeader = ({ label, k })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: ()=>toggleSort(k),
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-1 hover:text-foreground", sort.key === k && "text-foreground"),
            children: [
                label,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__["ArrowUpDown"], {
                    className: "size-3",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                    lineNumber: 102,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/hc4m/LeadTable.tsx",
            lineNumber: 94,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rounded-xl border border-border bg-card shadow-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b border-border px-5 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-display text-base font-semibold",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-0.5 text-sm text-muted-foreground",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: query,
                                        onChange: (e)=>setQuery(e.target.value),
                                        placeholder: "Search lead ID, buyer, outcome",
                                        className: "pl-9",
                                        "aria-label": "Search leads"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            showBuyerColumn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: buyer,
                                onValueChange: setBuyer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        "aria-label": "Filter by buyer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: "All buyers"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: ALL,
                                                children: "All buyers"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this),
                                            buyers.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: b,
                                                    children: b
                                                }, b, false, {
                                                    fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: status,
                                onValueChange: setStatus,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        "aria-label": "Filter by buyer status",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: "All statuses"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: ALL,
                                                children: "All statuses"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                                lineNumber: 148,
                                                columnNumber: 15
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BUYER_STATUSES"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: s,
                                                    children: s
                                                }, s, false, {
                                                    fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: sentFilter,
                                onValueChange: setSentFilter,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        "aria-label": "Filter by lead sent",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: "Sent to buyer?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: ALL,
                                                children: "Sent or not sent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                                lineNumber: 162,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "true",
                                                children: "Sent to buyer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "false",
                                                children: "Not sent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                                lineNumber: 164,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                type: "date",
                                value: date,
                                onChange: (e)=>setDate(e.target.value),
                                "aria-label": "Filter by date"
                            }, void 0, false, {
                                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                type: "number",
                                min: "0",
                                step: "0.01",
                                value: minBid,
                                onChange: (e)=>setMinBid(e.target.value),
                                placeholder: "Min bid ($)",
                                "aria-label": "Minimum bid"
                            }, void 0, false, {
                                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                type: "number",
                                min: "0",
                                step: "0.01",
                                value: minPrice,
                                onChange: (e)=>setMinPrice(e.target.value),
                                placeholder: "Min purchase price ($)",
                                "aria-label": "Minimum purchase price"
                            }, void 0, false, {
                                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                onClick: ()=>{
                                    setQuery("");
                                    setBuyer(ALL);
                                    setStatus(ALL);
                                    setSentFilter(ALL);
                                    setDate("");
                                    setMinBid("");
                                    setMinPrice("");
                                },
                                children: "Clear filters"
                            }, void 0, false, {
                                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-xs text-muted-foreground",
                        children: [
                            "Showing ",
                            rows.length,
                            " of ",
                            attempts.length,
                            " buyer attempts"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-h-[36rem] overflow-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full min-w-[64rem] border-collapse text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "sticky top-0 z-10 bg-secondary/95 backdrop-blur",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortHeader, {
                                            label: "Date / time",
                                            k: "leadAt"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                            lineNumber: 217,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3",
                                        children: "Lead ID"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this),
                                    showBuyerColumn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortHeader, {
                                            label: "Buyer",
                                            k: "buyer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                            lineNumber: 222,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                        lineNumber: 221,
                                        columnNumber: 17
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortHeader, {
                                            label: "Buyer status",
                                            k: "status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3",
                                        children: "Last stage"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3",
                                        children: "Ping response"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-right",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortHeader, {
                                            label: "Bid",
                                            k: "bid"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                            lineNumber: 231,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3",
                                        children: "Lead sent?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-right",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortHeader, {
                                            label: "Purchase price",
                                            k: "price"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                            lineNumber: 235,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3",
                                        children: "Outcome detail"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: [
                                rows.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        onClick: ()=>setOpenLead(a.leadId),
                                        className: "cursor-pointer border-t border-border transition-colors hover:bg-secondary/60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "whitespace-nowrap px-4 py-3 text-muted-foreground",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateTime"])(a.leadAt)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                                lineNumber: 247,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hc4m$2f$LeadIdLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadIdLink"], {
                                                    leadId: a.leadId
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                                lineNumber: 250,
                                                columnNumber: 17
                                            }, this),
                                            showBuyerColumn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "whitespace-nowrap px-4 py-3 font-medium",
                                                children: a.buyer
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                                lineNumber: 254,
                                                columnNumber: 19
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hc4m$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusBadge"], {
                                                    status: a.status
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                                lineNumber: 256,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "whitespace-nowrap px-4 py-3 text-muted-foreground",
                                                children: a.lastStage
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "whitespace-nowrap px-4 py-3 text-muted-foreground",
                                                children: a.pingResponse ?? "—"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                                lineNumber: 262,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3 text-right tabular-nums",
                                                children: typeof a.bid === "number" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currency"])(a.bid) : "—"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3",
                                                children: a.sent ? "Yes" : "No"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                                lineNumber: 268,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3 text-right font-medium tabular-nums",
                                                children: a.price > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currency"])(a.price) : "—"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                                lineNumber: 269,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3 text-muted-foreground",
                                                children: a.outcome ?? "—"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, `${a.leadId}-${a.buyer}`, true, {
                                        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, this)),
                                rows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 10,
                                        className: "px-4 py-10 text-center text-muted-foreground",
                                        children: "No buyer attempts match these filters."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                        lineNumber: 277,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                            lineNumber: 240,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hc4m$2f$LeadDrillDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadDrillDown"], {
                leadId: openLead,
                onClose: ()=>setOpenLead(null)
            }, void 0, false, {
                fileName: "[project]/src/components/hc4m/LeadTable.tsx",
                lineNumber: 286,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/hc4m/LeadTable.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s(LeadTable, "cxlWOK2SsL2y+wuMw+dc53JuI7A=");
_c = LeadTable;
var _c;
__turbopack_context__.k.register(_c, "LeadTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/hc4m/StatusBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusBadge",
    ()=>StatusBadge,
    "statusChartColor",
    ()=>statusChartColor,
    "statusHint",
    ()=>statusHint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$slash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleSlash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-slash.js [app-client] (ecmascript) <export default as CircleSlash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-minus.js [app-client] (ecmascript) <export default as MinusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const map = {
    Accepted: {
        className: "bg-success-soft text-success border-success/25",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
        hint: "This buyer purchased the lead"
    },
    Outbid: {
        className: "bg-info-soft text-info border-info/25",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$slash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleSlash$3e$__["CircleSlash"],
        hint: "Bid or qualified, but another buyer won"
    },
    Rejected: {
        className: "bg-danger-soft text-danger border-danger/25",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"],
        hint: "This buyer declined the lead"
    },
    "Filtered Out": {
        className: "bg-warning-soft text-warning border-warning/25",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"],
        hint: "Buyer rules blocked the lead before ping"
    },
    "Not Accepted": {
        className: "bg-muted text-muted-foreground border-border",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusCircle$3e$__["MinusCircle"],
        hint: "Progressed part-way but never accepted"
    }
};
function statusHint(status) {
    return map[status].hint;
}
function statusChartColor(status) {
    return ({
        Accepted: "var(--success)",
        Outbid: "var(--info)",
        Rejected: "var(--danger)",
        "Filtered Out": "var(--warning)",
        "Not Accepted": "var(--muted-foreground)"
    })[status];
}
function StatusBadge({ status, className }) {
    const { className: tone, Icon } = map[status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        title: map[status].hint,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold", tone, className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "size-3.5",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/components/hc4m/StatusBadge.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            status
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/hc4m/StatusBadge.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c = StatusBadge;
var _c;
__turbopack_context__.k.register(_c, "StatusBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/hc4m/charts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AcceptanceByBuyerChart",
    ()=>AcceptanceByBuyerChart,
    "BidComparisonChart",
    ()=>BidComparisonChart,
    "FunnelChart",
    ()=>FunnelChart,
    "OutcomeBreakdownChart",
    ()=>OutcomeBreakdownChart,
    "ReasonBreakdownChart",
    ()=>ReasonBreakdownChart,
    "RevenueByBuyerChart",
    ()=>RevenueByBuyerChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hc4m$2f$ClientChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/hc4m/ClientChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hc4m$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/hc4m/StatusBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hc4m/metrics.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const axis = {
    stroke: "var(--muted-foreground)",
    fontSize: 12
};
const tooltipStyle = {
    contentStyle: {
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "0.6rem",
        fontSize: "0.8rem",
        color: "var(--foreground)"
    }
};
function AcceptanceByBuyerChart({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hc4m$2f$ClientChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientChart"], {
        height: 280,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                data: data,
                layout: "vertical",
                margin: {
                    left: 8,
                    right: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                        type: "number",
                        allowDecimals: false,
                        ...axis
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/charts.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        type: "category",
                        dataKey: "buyer",
                        width: 130,
                        ...axis
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/charts.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        ...tooltipStyle
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/charts.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                        dataKey: "accepted",
                        name: "Leads accepted",
                        fill: "var(--success)",
                        radius: [
                            0,
                            6,
                            6,
                            0
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/charts.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/hc4m/charts.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/hc4m/charts.tsx",
            lineNumber: 42,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/hc4m/charts.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c = AcceptanceByBuyerChart;
function OutcomeBreakdownChart({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hc4m$2f$ClientChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientChart"], {
        height: 280,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                        data: data,
                        dataKey: "count",
                        nameKey: "status",
                        innerRadius: 60,
                        outerRadius: 100,
                        children: data.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hc4m$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusChartColor"])(d.status)
                            }, d.status, false, {
                                fileName: "[project]/src/components/hc4m/charts.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/charts.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                        wrapperStyle: {
                            fontSize: "0.78rem"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/charts.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        ...tooltipStyle
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/charts.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/hc4m/charts.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/hc4m/charts.tsx",
            lineNumber: 66,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/hc4m/charts.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_c1 = OutcomeBreakdownChart;
function BidComparisonChart({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hc4m$2f$ClientChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientChart"], {
        height: 280,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                data: data,
                margin: {
                    left: 8,
                    right: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                        dataKey: "buyer",
                        interval: 0,
                        tickFormatter: (v)=>v.split(" ")[0] ?? v,
                        ...axis
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/charts.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        tickFormatter: (v)=>`$${v}`,
                        ...axis
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/charts.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        formatter: (v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currency"])(v),
                        ...tooltipStyle
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/charts.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                        wrapperStyle: {
                            fontSize: "0.78rem"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/charts.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                        dataKey: "avgBid",
                        name: "Average bid",
                        fill: "var(--chart-1)",
                        radius: [
                            6,
                            6,
                            0,
                            0
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/charts.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                        dataKey: "highestBid",
                        name: "Highest bid",
                        fill: "var(--chart-4)",
                        radius: [
                            6,
                            6,
                            0,
                            0
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/charts.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/hc4m/charts.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/hc4m/charts.tsx",
            lineNumber: 88,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/hc4m/charts.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_c2 = BidComparisonChart;
function RevenueByBuyerChart({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hc4m$2f$ClientChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientChart"], {
        height: 280,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                data: data,
                layout: "vertical",
                margin: {
                    left: 8,
                    right: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                        type: "number",
                        tickFormatter: (v)=>`$${v}`,
                        ...axis
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/charts.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        type: "category",
                        dataKey: "buyer",
                        width: 130,
                        ...axis
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/charts.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        formatter: (v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currency"])(v),
                        ...tooltipStyle
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/charts.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                        dataKey: "totalValue",
                        name: "Purchase value",
                        fill: "var(--chart-2)",
                        radius: [
                            0,
                            6,
                            6,
                            0
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/charts.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/hc4m/charts.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/hc4m/charts.tsx",
            lineNumber: 109,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/hc4m/charts.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_c3 = RevenueByBuyerChart;
function FunnelChart({ data }) {
    const max = Math.max(...data.map((d)=>d.value), 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
        className: "space-y-3",
        children: data.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-baseline justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: d.step
                            }, void 0, false, {
                                fileName: "[project]/src/components/hc4m/charts.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tabular-nums text-muted-foreground",
                                children: d.value
                            }, void 0, false, {
                                fileName: "[project]/src/components/hc4m/charts.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/hc4m/charts.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 h-2.5 w-full overflow-hidden rounded-full bg-secondary",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full rounded-full bg-primary",
                            style: {
                                width: `${d.value / max * 100}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/hc4m/charts.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/charts.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this)
                ]
            }, d.step, true, {
                fileName: "[project]/src/components/hc4m/charts.tsx",
                lineNumber: 131,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/hc4m/charts.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_c4 = FunnelChart;
function ReasonBreakdownChart({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hc4m$2f$ClientChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientChart"], {
        height: 300,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                data: data,
                layout: "vertical",
                margin: {
                    left: 8,
                    right: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                        type: "number",
                        allowDecimals: false,
                        ...axis
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/charts.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        type: "category",
                        dataKey: "reason",
                        width: 200,
                        ...axis
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/charts.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        ...tooltipStyle
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/charts.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                        dataKey: "count",
                        name: "Buyer attempts",
                        fill: "var(--chart-3)",
                        radius: [
                            0,
                            6,
                            6,
                            0
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/hc4m/charts.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/hc4m/charts.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/hc4m/charts.tsx",
            lineNumber: 155,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/hc4m/charts.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c5 = ReasonBreakdownChart;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "AcceptanceByBuyerChart");
__turbopack_context__.k.register(_c1, "OutcomeBreakdownChart");
__turbopack_context__.k.register(_c2, "BidComparisonChart");
__turbopack_context__.k.register(_c3, "RevenueByBuyerChart");
__turbopack_context__.k.register(_c4, "FunnelChart");
__turbopack_context__.k.register(_c5, "ReasonBreakdownChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 43,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"];
const SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"];
const SelectTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 29,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = SelectTrigger;
SelectTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const SelectScrollUpButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 44,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = SelectScrollUpButton;
SelectScrollUpButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"].displayName;
const SelectScrollDownButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 58,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 53,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = SelectScrollDownButton;
SelectScrollDownButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"].displayName;
const SelectContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 79,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 80,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 89,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 68,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 67,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = SelectContent;
SelectContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const SelectLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 99,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = SelectLabel;
SelectLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"].displayName;
const SelectItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 120,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 119,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 124,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 111,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = SelectItem;
SelectItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
const SelectSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 133,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = SelectSeparator;
SelectSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "SelectTrigger$React.forwardRef");
__turbopack_context__.k.register(_c1, "SelectTrigger");
__turbopack_context__.k.register(_c2, "SelectScrollUpButton");
__turbopack_context__.k.register(_c3, "SelectScrollDownButton");
__turbopack_context__.k.register(_c4, "SelectContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "SelectContent");
__turbopack_context__.k.register(_c6, "SelectLabel$React.forwardRef");
__turbopack_context__.k.register(_c7, "SelectLabel");
__turbopack_context__.k.register(_c8, "SelectItem$React.forwardRef");
__turbopack_context__.k.register(_c9, "SelectItem");
__turbopack_context__.k.register(_c10, "SelectSeparator$React.forwardRef");
__turbopack_context__.k.register(_c11, "SelectSeparator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetOverlay",
    ()=>SheetOverlay,
    "SheetPortal",
    ()=>SheetPortal,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const Sheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SheetTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const SheetClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const SheetPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const SheetOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c = SheetOverlay;
SheetOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const sheetVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
        }
    },
    defaultVariants: {
        side: "right"
    }
});
const SheetContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = ({ side = "right", className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 62,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sheetVariants({
                    side
                }), className),
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 65,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 66,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/sheet.tsx",
                        lineNumber: 64,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 63,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 61,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = SheetContent;
SheetContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const SheetHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 75,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = SheetHeader;
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = SheetFooter;
SheetFooter.displayName = "SheetFooter";
const SheetTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 91,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c6 = SheetTitle;
SheetTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const SheetDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 103,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c8 = SheetDescription;
SheetDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "SheetOverlay");
__turbopack_context__.k.register(_c1, "SheetContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "SheetContent");
__turbopack_context__.k.register(_c3, "SheetHeader");
__turbopack_context__.k.register(_c4, "SheetFooter");
__turbopack_context__.k.register(_c5, "SheetTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "SheetTitle");
__turbopack_context__.k.register(_c7, "SheetDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/aug01-2026.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("{\"campaign\":{\"name\":\"Home Cash 4 Me\",\"id\":\"31804\",\"timezone\":\"America/New_York\",\"date\":\"August 1, 2026\",\"totalLeads\":7,\"accepted\":6,\"failed\":1,\"duplicates\":0,\"grossAcceptanceRate\":0.8571,\"returned\":0,\"netAccepted\":6},\"leads\":[{\"leadId\":\"A4FrvZ8B8GXak7Gj2-t2\",\"url\":\"https://app.leadprosper.io/leads?keyword=A4FrvZ8B8GXak7Gj2-t2\",\"leadAt\":\"2026-08-01T09:03:10.198000\",\"leadStatus\":\"Accepted\",\"sanitizedError\":null,\"revenue\":52.5,\"returned\":false,\"test\":false,\"supplier\":\"HC4M - Production (Supplier)\"},{\"leadId\":\"8j1uvZ8B8JeApcHIr8Vj\",\"url\":\"https://app.leadprosper.io/leads?keyword=8j1uvZ8B8JeApcHIr8Vj\",\"leadAt\":\"2026-08-01T09:06:15.523000\",\"leadStatus\":\"Accepted\",\"sanitizedError\":null,\"revenue\":5,\"returned\":false,\"test\":false,\"supplier\":\"HC4M - Production (Supplier)\"},{\"leadId\":\"AYj9vZ8B8GXak7GjoeHs\",\"url\":\"https://app.leadprosper.io/leads?keyword=AYj9vZ8B8GXak7GjoeHs\",\"leadAt\":\"2026-08-01T11:42:23.724000\",\"leadStatus\":\"Accepted\",\"sanitizedError\":null,\"revenue\":45,\"returned\":false,\"test\":false,\"supplier\":\"HC4M - Production (Supplier)\"},{\"leadId\":\"EwRWvp8B8I6kutDmY1gS\",\"url\":\"https://app.leadprosper.io/leads?keyword=EwRWvp8B8I6kutDmY1gS\",\"leadAt\":\"2026-08-01T13:19:20.337000\",\"leadStatus\":\"Accepted\",\"sanitizedError\":null,\"revenue\":45,\"returned\":false,\"test\":false,\"supplier\":\"HC4M - Production (Supplier)\"},{\"leadId\":\"kAlWvp8B8J-QmL7X8XvG\",\"url\":\"https://app.leadprosper.io/leads?keyword=kAlWvp8B8J-QmL7X8XvG\",\"leadAt\":\"2026-08-01T13:19:56.870000\",\"leadStatus\":\"Accepted\",\"sanitizedError\":null,\"revenue\":5,\"returned\":false,\"test\":false,\"supplier\":\"HC4M - Production (Supplier)\"},{\"leadId\":\"b3aHv58B8JeApcHIQ1L9\",\"url\":\"https://app.leadprosper.io/leads?keyword=b3aHv58B8JeApcHIQ1L9\",\"leadAt\":\"2026-08-01T18:52:20.861000\",\"leadStatus\":\"Error\",\"sanitizedError\":\"No buyers available\",\"revenue\":0,\"returned\":false,\"test\":false,\"supplier\":\"HC4M - Production (Supplier)\"},{\"leadId\":\"_Qf9v58B8GXak7GjCxri\",\"url\":\"https://app.leadprosper.io/leads?keyword=_Qf9v58B8GXak7GjCxri\",\"leadAt\":\"2026-08-01T21:00:59.746000\",\"leadStatus\":\"Accepted\",\"sanitizedError\":null,\"revenue\":5,\"returned\":false,\"test\":false,\"supplier\":\"HC4M - Production (Supplier)\"}],\"attempts\":[{\"buyer\":\"Content Cognition\",\"buyerFull\":\"Content Cognition - Production\",\"leadAt\":\"2026-08-01T09:03:10.198000\",\"leadId\":\"A4FrvZ8B8GXak7Gj2-t2\",\"status\":\"Outbid\",\"lastStage\":\"Ping\",\"pingResponse\":\"Continue\",\"bid\":4.68,\"sent\":false,\"price\":0,\"outcome\":\"Buyer returned continue; outbid before post\",\"http\":200},{\"buyer\":\"Content Cognition\",\"buyerFull\":\"Content Cognition - Production\",\"leadAt\":\"2026-08-01T09:06:15.523000\",\"leadId\":\"8j1uvZ8B8JeApcHIr8Vj\",\"status\":\"Outbid\",\"lastStage\":\"Ping\",\"pingResponse\":\"Continue\",\"bid\":4.68,\"sent\":false,\"price\":0,\"outcome\":\"Buyer returned continue; outbid before post\",\"http\":200},{\"buyer\":\"Content Cognition\",\"buyerFull\":\"Content Cognition - Production\",\"leadAt\":\"2026-08-01T11:42:23.724000\",\"leadId\":\"AYj9vZ8B8GXak7GjoeHs\",\"status\":\"Outbid\",\"lastStage\":\"Ping\",\"pingResponse\":\"Continue\",\"bid\":6.73,\"sent\":false,\"price\":0,\"outcome\":\"Buyer returned continue; outbid before post\",\"http\":200},{\"buyer\":\"Content Cognition\",\"buyerFull\":\"Content Cognition - Production\",\"leadAt\":\"2026-08-01T13:19:20.337000\",\"leadId\":\"EwRWvp8B8I6kutDmY1gS\",\"status\":\"Outbid\",\"lastStage\":\"Ping\",\"pingResponse\":\"Continue\",\"bid\":4.59,\"sent\":false,\"price\":0,\"outcome\":\"Buyer returned continue; outbid before post\",\"http\":200},{\"buyer\":\"Content Cognition\",\"buyerFull\":\"Content Cognition - Production\",\"leadAt\":\"2026-08-01T13:19:56.870000\",\"leadId\":\"kAlWvp8B8J-QmL7X8XvG\",\"status\":\"Rejected\",\"lastStage\":\"Ping\",\"pingResponse\":\"Reject\",\"bid\":null,\"sent\":false,\"price\":0,\"outcome\":\"No buyer found\",\"http\":200},{\"buyer\":\"Content Cognition\",\"buyerFull\":\"Content Cognition - Production\",\"leadAt\":\"2026-08-01T18:52:20.861000\",\"leadId\":\"b3aHv58B8JeApcHIQ1L9\",\"status\":\"Filtered out\",\"lastStage\":\"Before ping\",\"pingResponse\":\"Not sent\",\"bid\":null,\"sent\":false,\"price\":0,\"outcome\":\"Buyer filter rejected the lead: home value was invalid\",\"http\":null},{\"buyer\":\"Content Cognition\",\"buyerFull\":\"Content Cognition - Production\",\"leadAt\":\"2026-08-01T21:00:59.746000\",\"leadId\":\"_Qf9v58B8GXak7GjCxri\",\"status\":\"Filtered out\",\"lastStage\":\"Before ping\",\"pingResponse\":\"Not sent\",\"bid\":null,\"sent\":false,\"price\":0,\"outcome\":\"Buyer filter rejected the lead: home value was invalid\",\"http\":null},{\"buyer\":\"GVG\",\"buyerFull\":\"GVG - Production\",\"leadAt\":\"2026-08-01T09:03:10.198000\",\"leadId\":\"A4FrvZ8B8GXak7Gj2-t2\",\"status\":\"Outbid\",\"lastStage\":\"Ping\",\"pingResponse\":\"Success\",\"bid\":15.3,\"sent\":false,\"price\":0,\"outcome\":\"Successful ping; outbid before post\",\"http\":200},{\"buyer\":\"GVG\",\"buyerFull\":\"GVG - Production\",\"leadAt\":\"2026-08-01T09:06:15.523000\",\"leadId\":\"8j1uvZ8B8JeApcHIr8Vj\",\"status\":\"Rejected\",\"lastStage\":\"Ping\",\"pingResponse\":\"Declined\",\"bid\":null,\"sent\":false,\"price\":0,\"outcome\":\"No Buyers Available\",\"http\":200},{\"buyer\":\"GVG\",\"buyerFull\":\"GVG - Production\",\"leadAt\":\"2026-08-01T11:42:23.724000\",\"leadId\":\"AYj9vZ8B8GXak7GjoeHs\",\"status\":\"Outbid\",\"lastStage\":\"Ping\",\"pingResponse\":\"Success\",\"bid\":8.5,\"sent\":false,\"price\":0,\"outcome\":\"Successful ping; outbid before post\",\"http\":200},{\"buyer\":\"GVG\",\"buyerFull\":\"GVG - Production\",\"leadAt\":\"2026-08-01T13:19:20.337000\",\"leadId\":\"EwRWvp8B8I6kutDmY1gS\",\"status\":\"Rejected\",\"lastStage\":\"Ping\",\"pingResponse\":\"Declined\",\"bid\":null,\"sent\":false,\"price\":0,\"outcome\":\"No Buyers Available\",\"http\":200},{\"buyer\":\"GVG\",\"buyerFull\":\"GVG - Production\",\"leadAt\":\"2026-08-01T13:19:56.870000\",\"leadId\":\"kAlWvp8B8J-QmL7X8XvG\",\"status\":\"Rejected\",\"lastStage\":\"Ping\",\"pingResponse\":\"Declined\",\"bid\":null,\"sent\":false,\"price\":0,\"outcome\":\"No Buyers Available\",\"http\":200},{\"buyer\":\"GVG\",\"buyerFull\":\"GVG - Production\",\"leadAt\":\"2026-08-01T18:52:20.861000\",\"leadId\":\"b3aHv58B8JeApcHIQ1L9\",\"status\":\"Rejected\",\"lastStage\":\"Ping\",\"pingResponse\":\"Declined\",\"bid\":null,\"sent\":false,\"price\":0,\"outcome\":\"Invalid reason\",\"http\":200},{\"buyer\":\"GVG\",\"buyerFull\":\"GVG - Production\",\"leadAt\":\"2026-08-01T21:00:59.746000\",\"leadId\":\"_Qf9v58B8GXak7GjCxri\",\"status\":\"Rejected\",\"lastStage\":\"Ping\",\"pingResponse\":\"Declined\",\"bid\":null,\"sent\":false,\"price\":0,\"outcome\":\"No Buyers Available\",\"http\":200},{\"buyer\":\"Motivated Sellers\",\"buyerFull\":\"Motivated Sellers - Production\",\"leadAt\":\"2026-08-01T09:03:10.198000\",\"leadId\":\"A4FrvZ8B8GXak7Gj2-t2\",\"status\":\"Accepted\",\"lastStage\":\"Post\",\"pingResponse\":\"Ping Accepted\",\"bid\":52.5,\"sent\":true,\"price\":52.5,\"outcome\":\"Lead Accepted\",\"http\":200},{\"buyer\":\"Motivated Sellers\",\"buyerFull\":\"Motivated Sellers - Production\",\"leadAt\":\"2026-08-01T09:06:15.523000\",\"leadId\":\"8j1uvZ8B8JeApcHIr8Vj\",\"status\":\"Rejected\",\"lastStage\":\"Ping\",\"pingResponse\":\"Rejected\",\"bid\":null,\"sent\":false,\"price\":0,\"outcome\":\"Ping Lead Rejected\",\"http\":200},{\"buyer\":\"Motivated Sellers\",\"buyerFull\":\"Motivated Sellers - Production\",\"leadAt\":\"2026-08-01T11:42:23.724000\",\"leadId\":\"AYj9vZ8B8GXak7GjoeHs\",\"status\":\"Accepted\",\"lastStage\":\"Post\",\"pingResponse\":\"Ping Accepted\",\"bid\":45,\"sent\":true,\"price\":45,\"outcome\":\"Lead Accepted\",\"http\":200},{\"buyer\":\"Motivated Sellers\",\"buyerFull\":\"Motivated Sellers - Production\",\"leadAt\":\"2026-08-01T13:19:20.337000\",\"leadId\":\"EwRWvp8B8I6kutDmY1gS\",\"status\":\"Rejected\",\"lastStage\":\"Ping\",\"pingResponse\":\"Rejected\",\"bid\":null,\"sent\":false,\"price\":0,\"outcome\":\"Ping Lead Rejected\",\"http\":200},{\"buyer\":\"Motivated Sellers\",\"buyerFull\":\"Motivated Sellers - Production\",\"leadAt\":\"2026-08-01T13:19:56.870000\",\"leadId\":\"kAlWvp8B8J-QmL7X8XvG\",\"status\":\"Rejected\",\"lastStage\":\"Ping\",\"pingResponse\":\"Rejected\",\"bid\":null,\"sent\":false,\"price\":0,\"outcome\":\"Ping Lead Rejected\",\"http\":200},{\"buyer\":\"Motivated Sellers\",\"buyerFull\":\"Motivated Sellers - Production\",\"leadAt\":\"2026-08-01T18:52:20.861000\",\"leadId\":\"b3aHv58B8JeApcHIQ1L9\",\"status\":\"Rejected\",\"lastStage\":\"Ping\",\"pingResponse\":\"Rejected\",\"bid\":null,\"sent\":false,\"price\":0,\"outcome\":\"Ping Lead Rejected\",\"http\":200},{\"buyer\":\"Motivated Sellers\",\"buyerFull\":\"Motivated Sellers - Production\",\"leadAt\":\"2026-08-01T21:00:59.746000\",\"leadId\":\"_Qf9v58B8GXak7GjCxri\",\"status\":\"Rejected\",\"lastStage\":\"Ping\",\"pingResponse\":\"Rejected\",\"bid\":null,\"sent\":false,\"price\":0,\"outcome\":\"Ping Lead Rejected\",\"http\":200},{\"buyer\":\"Leadzolo Inbound\",\"buyerFull\":\"Leadzolo - No Email/SMS - Production\",\"leadAt\":\"2026-08-01T09:03:10.198000\",\"leadId\":\"A4FrvZ8B8GXak7Gj2-t2\",\"status\":\"Outbid\",\"lastStage\":\"Ping\",\"pingResponse\":\"Match found\",\"bid\":5,\"sent\":false,\"price\":0,\"outcome\":\"Match found; outbid before post\",\"http\":200},{\"buyer\":\"Leadzolo Inbound\",\"buyerFull\":\"Leadzolo - No Email/SMS - Production\",\"leadAt\":\"2026-08-01T09:06:15.523000\",\"leadId\":\"8j1uvZ8B8JeApcHIr8Vj\",\"status\":\"Accepted\",\"lastStage\":\"Post\",\"pingResponse\":\"Match found\",\"bid\":5,\"sent\":true,\"price\":5,\"outcome\":\"Accepted by buyer\",\"http\":201},{\"buyer\":\"Leadzolo Inbound\",\"buyerFull\":\"Leadzolo - No Email/SMS - Production\",\"leadAt\":\"2026-08-01T11:42:23.724000\",\"leadId\":\"AYj9vZ8B8GXak7GjoeHs\",\"status\":\"Outbid\",\"lastStage\":\"Ping\",\"pingResponse\":\"Match found\",\"bid\":5,\"sent\":false,\"price\":0,\"outcome\":\"Match found; outbid before post\",\"http\":200},{\"buyer\":\"Leadzolo Inbound\",\"buyerFull\":\"Leadzolo - No Email/SMS - Production\",\"leadAt\":\"2026-08-01T13:19:20.337000\",\"leadId\":\"EwRWvp8B8I6kutDmY1gS\",\"status\":\"Outbid\",\"lastStage\":\"Ping\",\"pingResponse\":\"Match found\",\"bid\":5,\"sent\":false,\"price\":0,\"outcome\":\"Match found; outbid before post\",\"http\":200},{\"buyer\":\"Leadzolo Inbound\",\"buyerFull\":\"Leadzolo - No Email/SMS - Production\",\"leadAt\":\"2026-08-01T13:19:56.870000\",\"leadId\":\"kAlWvp8B8J-QmL7X8XvG\",\"status\":\"Accepted\",\"lastStage\":\"Post\",\"pingResponse\":\"Match found\",\"bid\":5,\"sent\":true,\"price\":5,\"outcome\":\"Accepted by buyer\",\"http\":201},{\"buyer\":\"Leadzolo Inbound\",\"buyerFull\":\"Leadzolo - No Email/SMS - Production\",\"leadAt\":\"2026-08-01T18:52:20.861000\",\"leadId\":\"b3aHv58B8JeApcHIQ1L9\",\"status\":\"Filtered out\",\"lastStage\":\"Before ping\",\"pingResponse\":\"Not sent\",\"bid\":null,\"sent\":false,\"price\":0,\"outcome\":\"Buyer filter rejected the lead: affiliate was invalid\",\"http\":null},{\"buyer\":\"Leadzolo Inbound\",\"buyerFull\":\"Leadzolo - No Email/SMS - Production\",\"leadAt\":\"2026-08-01T21:00:59.746000\",\"leadId\":\"_Qf9v58B8GXak7GjCxri\",\"status\":\"Accepted\",\"lastStage\":\"Post\",\"pingResponse\":\"Match found\",\"bid\":5,\"sent\":true,\"price\":5,\"outcome\":\"Accepted by buyer\",\"http\":201},{\"buyer\":\"Leadzolo Outbound\",\"buyerFull\":\"Leadzolo - Other, Email, Sms - Production\",\"leadAt\":\"2026-08-01T09:03:10.198000\",\"leadId\":\"A4FrvZ8B8GXak7Gj2-t2\",\"status\":\"Outbid\",\"lastStage\":\"Ping\",\"pingResponse\":\"Match found\",\"bid\":2,\"sent\":false,\"price\":0,\"outcome\":\"Match found; outbid before post\",\"http\":200},{\"buyer\":\"Leadzolo Outbound\",\"buyerFull\":\"Leadzolo - Other, Email, Sms - Production\",\"leadAt\":\"2026-08-01T09:06:15.523000\",\"leadId\":\"8j1uvZ8B8JeApcHIr8Vj\",\"status\":\"Outbid\",\"lastStage\":\"Ping\",\"pingResponse\":\"Match found\",\"bid\":2,\"sent\":false,\"price\":0,\"outcome\":\"Match found; outbid before post\",\"http\":200},{\"buyer\":\"Leadzolo Outbound\",\"buyerFull\":\"Leadzolo - Other, Email, Sms - Production\",\"leadAt\":\"2026-08-01T11:42:23.724000\",\"leadId\":\"AYj9vZ8B8GXak7GjoeHs\",\"status\":\"Outbid\",\"lastStage\":\"Ping\",\"pingResponse\":\"Match found\",\"bid\":2,\"sent\":false,\"price\":0,\"outcome\":\"Match found; outbid before post\",\"http\":200},{\"buyer\":\"Leadzolo Outbound\",\"buyerFull\":\"Leadzolo - Other, Email, Sms - Production\",\"leadAt\":\"2026-08-01T13:19:20.337000\",\"leadId\":\"EwRWvp8B8I6kutDmY1gS\",\"status\":\"Outbid\",\"lastStage\":\"Ping\",\"pingResponse\":\"Match found\",\"bid\":2,\"sent\":false,\"price\":0,\"outcome\":\"Match found; outbid before post\",\"http\":200},{\"buyer\":\"Leadzolo Outbound\",\"buyerFull\":\"Leadzolo - Other, Email, Sms - Production\",\"leadAt\":\"2026-08-01T13:19:56.870000\",\"leadId\":\"kAlWvp8B8J-QmL7X8XvG\",\"status\":\"Outbid\",\"lastStage\":\"Ping\",\"pingResponse\":\"Match found\",\"bid\":2,\"sent\":false,\"price\":0,\"outcome\":\"Match found; outbid before post\",\"http\":200},{\"buyer\":\"Leadzolo Outbound\",\"buyerFull\":\"Leadzolo - Other, Email, Sms - Production\",\"leadAt\":\"2026-08-01T18:52:20.861000\",\"leadId\":\"b3aHv58B8JeApcHIQ1L9\",\"status\":\"Not accepted\",\"lastStage\":\"After ping\",\"pingResponse\":\"Match found\",\"bid\":0,\"sent\":false,\"price\":0,\"outcome\":\"Post conditions were not met\",\"http\":200},{\"buyer\":\"Leadzolo Outbound\",\"buyerFull\":\"Leadzolo - Other, Email, Sms - Production\",\"leadAt\":\"2026-08-01T21:00:59.746000\",\"leadId\":\"_Qf9v58B8GXak7GjCxri\",\"status\":\"Outbid\",\"lastStage\":\"Ping\",\"pingResponse\":\"Match found\",\"bid\":2,\"sent\":false,\"price\":0,\"outcome\":\"Outbid by another buyer\",\"http\":200},{\"buyer\":\"RGR Marketing\",\"buyerFull\":\"RGR Marketing - Production\",\"leadAt\":\"2026-08-01T09:03:10.198000\",\"leadId\":\"A4FrvZ8B8GXak7Gj2-t2\",\"status\":\"Outbid\",\"lastStage\":\"Ping\",\"pingResponse\":\"Matched\",\"bid\":9.07,\"sent\":false,\"price\":0,\"outcome\":\"Matched; outbid before post\",\"http\":200},{\"buyer\":\"RGR Marketing\",\"buyerFull\":\"RGR Marketing - Production\",\"leadAt\":\"2026-08-01T09:06:15.523000\",\"leadId\":\"8j1uvZ8B8JeApcHIr8Vj\",\"status\":\"Outbid\",\"lastStage\":\"Ping\",\"pingResponse\":\"Matched\",\"bid\":4.2,\"sent\":false,\"price\":0,\"outcome\":\"Matched; outbid before post\",\"http\":200},{\"buyer\":\"RGR Marketing\",\"buyerFull\":\"RGR Marketing - Production\",\"leadAt\":\"2026-08-01T11:42:23.724000\",\"leadId\":\"AYj9vZ8B8GXak7GjoeHs\",\"status\":\"Outbid\",\"lastStage\":\"Ping\",\"pingResponse\":\"Matched\",\"bid\":18.38,\"sent\":false,\"price\":0,\"outcome\":\"Matched; outbid before post\",\"http\":200},{\"buyer\":\"RGR Marketing\",\"buyerFull\":\"RGR Marketing - Production\",\"leadAt\":\"2026-08-01T13:19:20.337000\",\"leadId\":\"EwRWvp8B8I6kutDmY1gS\",\"status\":\"Outbid\",\"lastStage\":\"Ping\",\"pingResponse\":\"Matched\",\"bid\":4.2,\"sent\":false,\"price\":0,\"outcome\":\"Matched; outbid before post\",\"http\":200},{\"buyer\":\"RGR Marketing\",\"buyerFull\":\"RGR Marketing - Production\",\"leadAt\":\"2026-08-01T13:19:56.870000\",\"leadId\":\"kAlWvp8B8J-QmL7X8XvG\",\"status\":\"Outbid\",\"lastStage\":\"Ping\",\"pingResponse\":\"Matched\",\"bid\":4.2,\"sent\":false,\"price\":0,\"outcome\":\"Matched; outbid before post\",\"http\":200},{\"buyer\":\"RGR Marketing\",\"buyerFull\":\"RGR Marketing - Production\",\"leadAt\":\"2026-08-01T18:52:20.861000\",\"leadId\":\"b3aHv58B8JeApcHIQ1L9\",\"status\":\"Rejected\",\"lastStage\":\"Ping\",\"pingResponse\":\"Unmatched\",\"bid\":null,\"sent\":false,\"price\":0,\"outcome\":\"Buyer returned unmatched\",\"http\":200},{\"buyer\":\"RGR Marketing\",\"buyerFull\":\"RGR Marketing - Production\",\"leadAt\":\"2026-08-01T21:00:59.746000\",\"leadId\":\"_Qf9v58B8GXak7GjCxri\",\"status\":\"Not accepted\",\"lastStage\":\"After ping\",\"pingResponse\":\"Matched\",\"bid\":1.4,\"sent\":false,\"price\":0,\"outcome\":\"Post conditions were not met\",\"http\":200},{\"buyer\":\"Prince Media\",\"buyerFull\":\"Prince Media - No Email/SMS - Production\",\"leadAt\":\"2026-08-01T09:03:10.198000\",\"leadId\":\"A4FrvZ8B8GXak7Gj2-t2\",\"status\":\"Outbid\",\"lastStage\":\"Ping\",\"pingResponse\":\"Accepted\",\"bid\":52.5,\"sent\":false,\"price\":0,\"outcome\":\"Accepted ping; outbid before post\",\"http\":200},{\"buyer\":\"Prince Media\",\"buyerFull\":\"Prince Media - No Email/SMS - Production\",\"leadAt\":\"2026-08-01T09:06:15.523000\",\"leadId\":\"8j1uvZ8B8JeApcHIr8Vj\",\"status\":\"Rejected\",\"lastStage\":\"Post\",\"pingResponse\":\"Accepted\",\"bid\":7.62,\"sent\":true,\"price\":0,\"outcome\":\"Post rejected: no buyers available\",\"http\":200},{\"buyer\":\"Prince Media\",\"buyerFull\":\"Prince Media - No Email/SMS - Production\",\"leadAt\":\"2026-08-01T11:42:23.724000\",\"leadId\":\"AYj9vZ8B8GXak7GjoeHs\",\"status\":\"Outbid\",\"lastStage\":\"Ping\",\"pingResponse\":\"Accepted\",\"bid\":45,\"sent\":false,\"price\":0,\"outcome\":\"Accepted ping; outbid before post\",\"http\":200},{\"buyer\":\"Prince Media\",\"buyerFull\":\"Prince Media - No Email/SMS - Production\",\"leadAt\":\"2026-08-01T13:19:20.337000\",\"leadId\":\"EwRWvp8B8I6kutDmY1gS\",\"status\":\"Accepted\",\"lastStage\":\"Post\",\"pingResponse\":\"Accepted\",\"bid\":45,\"sent\":true,\"price\":45,\"outcome\":\"Accepted by buyer\",\"http\":200},{\"buyer\":\"Prince Media\",\"buyerFull\":\"Prince Media - No Email/SMS - Production\",\"leadAt\":\"2026-08-01T13:19:56.870000\",\"leadId\":\"kAlWvp8B8J-QmL7X8XvG\",\"status\":\"Outbid\",\"lastStage\":\"Ping\",\"pingResponse\":\"Accepted\",\"bid\":0.46,\"sent\":false,\"price\":0,\"outcome\":\"Accepted ping; outbid before post\",\"http\":200},{\"buyer\":\"Prince Media\",\"buyerFull\":\"Prince Media - No Email/SMS - Production\",\"leadAt\":\"2026-08-01T18:52:20.861000\",\"leadId\":\"b3aHv58B8JeApcHIQ1L9\",\"status\":\"Filtered out\",\"lastStage\":\"Before ping\",\"pingResponse\":\"Not sent\",\"bid\":null,\"sent\":false,\"price\":0,\"outcome\":\"Buyer filter rejected the lead: timeframe was invalid\",\"http\":null},{\"buyer\":\"Prince Media\",\"buyerFull\":\"Prince Media - No Email/SMS - Production\",\"leadAt\":\"2026-08-01T21:00:59.746000\",\"leadId\":\"_Qf9v58B8GXak7GjCxri\",\"status\":\"Rejected\",\"lastStage\":\"Ping\",\"pingResponse\":\"Rejected\",\"bid\":null,\"sent\":false,\"price\":0,\"outcome\":\"Ping rejected\",\"http\":200}],\"reconciliation\":[{\"buyerFull\":\"Content Cognition - Production\",\"eligiblePosts\":0,\"accepted\":0,\"errors\":0,\"duplicates\":0,\"grossRevenue\":0,\"acceptanceRate\":0,\"pings\":5,\"pingAccepted\":4,\"pingFailed\":1},{\"buyerFull\":\"GVG - Production\",\"eligiblePosts\":0,\"accepted\":0,\"errors\":0,\"duplicates\":0,\"grossRevenue\":0,\"acceptanceRate\":0,\"pings\":7,\"pingAccepted\":2,\"pingFailed\":5},{\"buyerFull\":\"Motivated Sellers - Production\",\"eligiblePosts\":2,\"accepted\":2,\"errors\":0,\"duplicates\":0,\"grossRevenue\":97.5,\"acceptanceRate\":1,\"pings\":7,\"pingAccepted\":2,\"pingFailed\":5},{\"buyerFull\":\"Leadzolo - No Email/SMS - Production\",\"eligiblePosts\":3,\"accepted\":3,\"errors\":0,\"duplicates\":0,\"grossRevenue\":15,\"acceptanceRate\":1,\"pings\":6,\"pingAccepted\":6,\"pingFailed\":0},{\"buyerFull\":\"Leadzolo - Other, Email, Sms - Production\",\"eligiblePosts\":0,\"accepted\":0,\"errors\":0,\"duplicates\":0,\"grossRevenue\":0,\"acceptanceRate\":0,\"pings\":7,\"pingAccepted\":7,\"pingFailed\":0},{\"buyerFull\":\"RGR Marketing - Production\",\"eligiblePosts\":0,\"accepted\":0,\"errors\":0,\"duplicates\":0,\"grossRevenue\":0,\"acceptanceRate\":0,\"pings\":7,\"pingAccepted\":6,\"pingFailed\":1},{\"buyerFull\":\"Prince Media - No Email/SMS - Production\",\"eligiblePosts\":2,\"accepted\":1,\"errors\":1,\"duplicates\":0,\"grossRevenue\":45,\"acceptanceRate\":0.5,\"pings\":6,\"pingAccepted\":5,\"pingFailed\":1}],\"definitions\":[[\"Buyer Status - Accepted\",\"This specific buyer accepted/purchased the lead.\"],[\"Buyer Status - Outbid\",\"Buyer qualified or bid, but another buyer won before this buyer received the lead.\"],[\"Buyer Status - Rejected\",\"The buyer declined/rejected the lead.\"],[\"Buyer Status - Filtered Out\",\"LeadProsper buyer rules prevented the lead from being sent to this buyer.\"],[\"Buyer Status - Not Accepted\",\"Buyer reached a stage after ping but the lead was not ultimately posted/accepted.\"],[\"Last Stage\",\"Furthest stage reached for this buyer: Before Ping, Ping, Post, or After Ping.\"],[\"Buyer Ping Response\",\"Sanitized operational result returned at ping, when available.\"],[\"Buyer Bid\",\"Bid returned by this buyer, when available.\"],[\"Lead Sent to Buyer?\",\"Yes only if the lead was posted to this buyer.\"],[\"Buyer Purchase Price\",\"Amount paid by this buyer when accepted; otherwise $0.\"],[\"Outcome Detail\",\"Sanitized explanation of this buyer's final outcome.\"],[\"Lead ID\",\"Clickable Lead ID that opens the individual LeadProsper lead detail using the keyword URL parameter.\"]],\"buyerMeta\":{\"Content Cognition\":\"Content Cognition - Production\",\"GVG\":\"GVG - Production\",\"Motivated Sellers\":\"Motivated Sellers - Production\",\"Leadzolo Inbound\":\"Leadzolo - No Email/SMS - Production\",\"Leadzolo Outbound\":\"Leadzolo - Other, Email, Sms - Production\",\"RGR Marketing\":\"RGR Marketing - Production\",\"Prince Media\":\"Prince Media - No Email/SMS - Production\"}}");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/hc4m/metrics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allBuyerSummaries",
    ()=>allBuyerSummaries,
    "buyerSummary",
    ()=>buyerSummary,
    "currency",
    ()=>currency,
    "formatDateTime",
    ()=>formatDateTime,
    "formatTime",
    ()=>formatTime,
    "funnelSteps",
    ()=>funnelSteps,
    "leadAttempts",
    ()=>leadAttempts,
    "overviewKpis",
    ()=>overviewKpis,
    "percent",
    ()=>percent,
    "reasonBreakdown",
    ()=>reasonBreakdown,
    "reasonBucket",
    ()=>reasonBucket,
    "statusBreakdown",
    ()=>statusBreakdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hc4m/source.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hc4m/types.ts [app-client] (ecmascript)");
;
;
const currency = (n)=>n.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2
    });
const percent = (n)=>`${(n * 100).toFixed(1)}%`;
const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
function formatDateTime(iso) {
    return `${MONTHS[Number(iso.slice(5, 7)) - 1]} ${Number(iso.slice(8, 10))}, ${formatTime(iso)}`;
}
function formatTime(iso) {
    const h = Number(iso.slice(11, 13));
    const suffix = h >= 12 ? "PM" : "AM";
    const hour12 = h % 12 === 0 ? 12 : h % 12;
    return `${hour12}:${iso.slice(14, 16)} ${suffix}`;
}
function overviewKpis(attempts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDataset"])().attempts) {
    const leads = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDataset"])().leads;
    const byStatus = (s)=>attempts.filter((a)=>a.status === s).length;
    const wins = attempts.filter((a)=>a.status === "Accepted");
    const totalRevenue = wins.reduce((sum, a)=>sum + a.price, 0);
    return {
        totalLeads: leads.length,
        leadsSold: new Set(wins.map((a)=>a.leadId)).size,
        totalAttempts: attempts.length,
        accepted: wins.length,
        outbid: byStatus("Outbid"),
        rejected: byStatus("Rejected"),
        filteredOut: byStatus("Filtered Out"),
        notAccepted: byStatus("Not Accepted"),
        totalRevenue,
        avgWinningPrice: wins.length ? totalRevenue / wins.length : 0
    };
}
function buyerSummary(buyer) {
    const attempts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDataset"])().attempts.filter((a)=>a.buyer === buyer);
    return summarize(buyer, attempts);
}
function summarize(buyer, attempts) {
    const count = (s)=>attempts.filter((a)=>a.status === s).length;
    const bids = attempts.map((a)=>a.bid).filter((b)=>typeof b === "number");
    const wins = attempts.filter((a)=>a.status === "Accepted");
    const totalValue = wins.reduce((s, a)=>s + a.price, 0);
    return {
        buyer,
        buyerFull: attempts[0]?.buyerFull ?? buyer,
        evaluated: attempts.length,
        accepted: wins.length,
        acceptanceRate: attempts.length ? wins.length / attempts.length : 0,
        outbid: count("Outbid"),
        rejected: count("Rejected"),
        filteredOut: count("Filtered Out"),
        notAccepted: count("Not Accepted"),
        avgBid: bids.length ? bids.reduce((s, b)=>s + b, 0) / bids.length : 0,
        highestBid: bids.length ? Math.max(...bids) : 0,
        totalValue,
        avgPrice: wins.length ? totalValue / wins.length : 0
    };
}
function allBuyerSummaries() {
    const { attempts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDataset"])();
    const buyers = Array.from(new Set(attempts.map((a)=>a.buyer)));
    return buyers.map((b)=>summarize(b, attempts.filter((a)=>a.buyer === b))).sort((a, b)=>b.accepted - a.accepted || b.totalValue - a.totalValue);
}
function statusBreakdown() {
    const { attempts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDataset"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BUYER_STATUSES"].map((status)=>({
            status,
            count: attempts.filter((a)=>a.status === status).length
        })).filter((d)=>d.count > 0);
}
function funnelSteps() {
    const { attempts, leads } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDataset"])();
    const pinged = attempts.filter((a)=>a.lastStage !== "Before Ping");
    return [
        {
            step: "Leads received",
            value: leads.length
        },
        {
            step: "Buyer evaluated",
            value: attempts.length
        },
        {
            step: "Pinged",
            value: pinged.length
        },
        {
            step: "Bid received",
            value: attempts.filter((a)=>typeof a.bid === "number").length
        },
        {
            step: "Posted",
            value: attempts.filter((a)=>a.sent).length
        },
        {
            step: "Accepted",
            value: attempts.filter((a)=>a.status === "Accepted").length
        }
    ];
}
function reasonBreakdown() {
    const { attempts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDataset"])();
    const groups = new Map();
    for (const a of attempts){
        if (a.status === "Accepted") continue;
        groups.set(reasonBucket(a), (groups.get(reasonBucket(a)) ?? 0) + 1);
    }
    return Array.from(groups, ([reason, count])=>({
            reason,
            count
        })).sort((x, y)=>y.count - x.count);
}
function reasonBucket(a) {
    const text = (a.outcome ?? "").toLowerCase();
    if (text.includes("filter")) return "Buyer filter blocked the lead";
    if (text.includes("outbid")) return "Outbid by another buyer";
    if (text.includes("no buyer")) return "Buyer had no capacity";
    if (text.includes("invalid")) return "Invalid or incomplete data";
    if (text.includes("declin") || text.includes("reject")) return "Buyer declined the lead";
    if (a.status === "Not Accepted") return "Progressed but never posted";
    return "Other";
}
function leadAttempts(leadId) {
    const order = {
        Accepted: 0,
        Outbid: 1,
        "Not Accepted": 2,
        Rejected: 3,
        "Filtered Out": 4
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hc4m$2f$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDataset"])().attempts.filter((a)=>a.leadId === leadId).sort((a, b)=>order[a.status] - order[b.status] || (b.bid ?? 0) - (a.bid ?? 0));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/hc4m/source.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buyerFromSlug",
    ()=>buyerFromSlug,
    "buyerNames",
    ()=>buyerNames,
    "buyerSlug",
    ()=>buyerSlug,
    "leadUrl",
    ()=>leadUrl,
    "loadDataset",
    ()=>loadDataset
]);
/**
 * Data source adapter.
 *
 * Today: a normalized snapshot of the August 1, 2026 spreadsheet export.
 * Later: swap `loadDataset()` for a LeadProsper API adapter (server function)
 * that returns the same `InsightsDataset` shape — no UI changes required.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$aug01$2d$2026$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/aug01-2026.json.[json].cjs [app-client] (ecmascript)");
;
function normalizeStatus(value) {
    switch(value.trim().toLowerCase()){
        case "accepted":
            return "Accepted";
        case "outbid":
            return "Outbid";
        case "rejected":
            return "Rejected";
        case "filtered out":
            return "Filtered Out";
        default:
            return "Not Accepted";
    }
}
function normalizeStage(value) {
    switch(value.trim().toLowerCase()){
        case "before ping":
            return "Before Ping";
        case "post":
            return "Post";
        case "after ping":
            return "After Ping";
        default:
            return "Ping";
    }
}
const dataset = {
    campaign: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$aug01$2d$2026$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].campaign,
    leads: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$aug01$2d$2026$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].leads.map((l)=>({
            leadId: l.leadId,
            url: l.url ?? null,
            leadAt: l.leadAt,
            leadStatus: l.leadStatus,
            sanitizedError: l.sanitizedError ?? null,
            revenue: l.revenue ?? 0,
            returned: Boolean(l.returned),
            test: Boolean(l.test),
            supplier: l.supplier
        })),
    attempts: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$aug01$2d$2026$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].attempts.map((a)=>({
            leadId: a.leadId,
            leadAt: a.leadAt,
            buyer: a.buyer,
            buyerFull: a.buyerFull,
            status: normalizeStatus(a.status),
            lastStage: normalizeStage(a.lastStage),
            pingResponse: a.pingResponse ?? null,
            bid: typeof a.bid === "number" ? a.bid : null,
            sent: Boolean(a.sent),
            price: a.price ?? 0,
            outcome: a.outcome ?? null,
            httpStatus: typeof a.http === "number" ? a.http : null
        })),
    reconciliation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$aug01$2d$2026$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].reconciliation,
    definitions: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$aug01$2d$2026$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].definitions
};
function loadDataset() {
    return dataset;
}
function leadUrl(leadId) {
    const found = dataset.leads.find((l)=>l.leadId === leadId);
    return found?.url ?? `https://app.leadprosper.io/leads?keyword=${encodeURIComponent(leadId)}`;
}
function buyerSlug(buyer) {
    return buyer.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
function buyerFromSlug(slug) {
    return buyerNames().find((b)=>buyerSlug(b) === slug);
}
function buyerNames() {
    return Array.from(new Set(dataset.attempts.map((a)=>a.buyer)));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/hc4m/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Canonical data model for HC4M buyer insights.
 *
 * A Lead can have MANY BuyerAttempts. This shape is intentionally
 * transport-agnostic so the current spreadsheet snapshot can later be replaced
 * by a live LeadProsper API adapter without touching the UI.
 *
 * PRIVACY: no personally identifiable seller information is modeled here.
 */ __turbopack_context__.s([
    "BUYER_STATUSES",
    ()=>BUYER_STATUSES
]);
const BUYER_STATUSES = [
    "Accepted",
    "Outbid",
    "Rejected",
    "Filtered Out",
    "Not Accepted"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1l9kuxk._.js.map