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

 
## CW-10 project-authored logical workflow title and owner index — CAT-03 F&B (20 November 2026)

These are project-authored logical titles aligned to the 14-workflow baseline; they are not claimed as source-native verbatim titles.

| ID | Project-authored logical workflow title | Primary owner | Supporting handoff |
|---|---|---|---|
| WF-01 | Menu, Product and Price Governance | M02 | M10 recipe reference |
| WF-02 | Recipe and Preparation Specification | M10 | M02 catalog/variant |
| WF-03 | Supplier and Ingredient Procurement | M08 | M16 payable |
| WF-04 | Receiving and Ingredient Lot Control | M06 | M18 quality |
| WF-05 | Guest/Customer Order Intake | M03 | M04 customer; M05 booking where used |
| WF-06 | POS Order and Payment | M03 | M16 payment |
| WF-07 | Kitchen Ticket and Production Execution | M10 | M03 order source |
| WF-08 | Service, Handoff and Fulfillment | M12 | M19 external delivery where used |
| WF-09 | Discount, Comp and Void | M03 | M16 financial controls |
| WF-10 | Refund and Settlement | M16 | M03 sales source |
| WF-11 | Waste, Spoilage and Stock Adjustment | M06 | M18 quality review |
| WF-12 | Stock Count and Replenishment | M06 | M08 procurement |
| WF-13 | Food Safety and Quality Inspection | M18 | M10 production source |
| WF-14 | Shift, Cash and Cost Close | M16 | M17 workforce; M10 cost source |

**Status:** 14/14 logical titles and primary owners project-authored; recipe/cost, food-safety and financial thresholds remain OPEN.
