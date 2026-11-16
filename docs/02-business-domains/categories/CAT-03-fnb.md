# CAT-03 — F&B / Restoran / Kafe

> **Document:** DOC-02 category detail  
> **Status:** DRAFT — SOURCE-ALIGNED RECONSTRUCTED SUMMARY  
> **Mode:** Documentation only • `DB_PUSH_BLOCKED: ACTIVE`

## Source lineage

RMD-59 v1.0 audit + v1.1 R59-D01–D12 conceptual FIX addendum

## Workflow baseline

**Recorded baseline:** WF-01–WF-14

**Category focus:** Menu, recipe, table/order, kitchen/bar, ingredients, service and waste.

**Workflow detail:** The baseline contains 14 workflows. Directly recovered detail includes WF-01 Menu, Product & Recipe Governance. Do not invent the remaining workflow titles; use RMD-59 v1.0 for the complete source-native sequence.

## Decision status

FIX — conceptual. R59-D01 approves WF-01–WF-14 as the category baseline; conditional workflows apply only when used.

## Residual details and guardrails

Menu/recipe governance, version publishing, order execution and pricing/cost approval are separate. Kitchen-ready is not customer handoff/delivery. Ingredient reservation is distinct from physical consumption. Waste, spoilage, staff meal, comp, remake, quality rejection and stock write-off are distinct records/actions. Tax/service charge, discount/comp/refund, waste, recipe-costing and procurement thresholds remain OPEN.

## Source locator

RMD-59 v1.0 §§1–3, 9–11; RMD-59 v1.1 R59-D01–D12; source map §4.4.

This page is a navigation summary, not a replacement for its primary RMD audit, FIX addendum or approval record. Where source-native workflow titles or exact page/section locators were not directly recovered, the gap is explicit. No workflow title, threshold, role grant, permission key or technical behavior is inferred.

No SQL/DDL/DML, schema, RLS/Auth, API/backend, application code, deployment or Production change is authorized. Stage 6 remains NOT AUTHORIZED.
