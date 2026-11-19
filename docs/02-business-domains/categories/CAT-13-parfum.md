# CAT-13 — Parfum / Fragrance

> **Document:** DOC-02 category detail  
> **Status:** DRAFT — SOURCE-ALIGNED RECONSTRUCTED SUMMARY  
> **Mode:** Documentation only • `DB_PUSH_BLOCKED: ACTIVE`

## Source lineage

RMD-56 v1.1 category extension + RMD-67 v1.0 audit and v1.1 R67-D01–D12 conceptual FIX addendum

## Workflow baseline

**Recorded baseline:** RF-01–RF-10 Retail/Refill; FM-01–FM-12 Formulation/Manufacturing

**Category focus:** Retail/refill and formulation/manufacturing are separate category tracks.

**Workflow detail:** RF-01–RF-10 is the Retail/Refill track; FM-01–FM-12 is the Formulation/Manufacturing track. Do not merge them into a single WF-01–WF-22 chain.

## Decision status

R67-D01–D12 FIX — conceptual category decision baseline. No blanket Manager/Role/Module approval is inferred beyond the explicit decision scope.

## Residual details and guardrails

Numeric limits, formulation safety, ingredient controls, regulatory compliance, production/retail distinction and technical authorization remain OPEN unless a controlling source explicitly closes them. RMD-67 individual claim locators are PARTIAL in this pass.

## Source locator

RMD-56 v1.1 pp.1–3 §§1–8; Erratum v1.1 pp.1–2 §§3–5; RMD-67 sources in source map §4.4.

This page is a navigation summary, not a replacement for its primary RMD audit, FIX addendum or approval record. Where source-native workflow titles or exact page/section locators were not directly recovered, the gap is explicit. No workflow title, threshold, role grant, permission key or technical behavior is inferred.

No SQL/DDL/DML, schema, RLS/Auth, API/backend, application code, deployment or Production change is authorized. Stage 6 remains NOT AUTHORIZED.

 
## CW-10 project-authored logical workflow indexes — CAT-13 Parfum / Fragrance (20 November 2026)

CAT-13 contains two distinct tracks. These indexes are project-authored logical titles aligned to the 10-item Retail/Refill and 12-item Formulation/Manufacturing baselines; they are not source-native verbatim transcriptions. The tracks must not be collapsed into one 22-step lifecycle.

### Retail/Refill track — RF-01–RF-10

| ID | Project-authored logical workflow title | Primary owner | Supporting handoff |
|---|---|---|---|
| RF-01 | Retail/Refill Product and Packaging Catalog | M02 | M06 unit/packaging attributes |
| RF-02 | Supplier and Procurement | M08 | M16 payable |
| RF-03 | Receiving, Batch and Expiry | M06 | M18 quality |
| RF-04 | Refill Container and Volume Conversion | M06 | M02 product/packaging |
| RF-05 | Stock Placement and Custody | M07 | M06 stock ledger |
| RF-06 | POS and Refill Order | M03 | M16 payment |
| RF-07 | Refill Fulfillment and Quantity Reconciliation | M03 | M06 stock effect |
| RF-08 | Return, Deposit and Refund | M16 | M03 sale; M06 return |
| RF-09 | Label, Quality and Compliance | M18 | M02 product data |
| RF-10 | Inventory and Cost Review | M06 | M16 financial posting |

### Formulation/Manufacturing track — FM-01–FM-12

| ID | Project-authored logical workflow title | Primary owner | Supporting handoff |
|---|---|---|---|
| FM-01 | Formula and Recipe Governance | M10 | M02 product master |
| FM-02 | Ingredient and Product Master | M02 | M10 formulation |
| FM-03 | Supplier and Ingredient Procurement | M08 | M16 payable |
| FM-04 | Receiving and Quarantine | M06 | M18 quality |
| FM-05 | Batch Formulation and Production Planning | M10 | M11 capacity |
| FM-06 | Work Order and Batch Release | M10 | M17 workforce |
| FM-07 | Ingredient Reservation and Issue | M06 | M10 work order |
| FM-08 | Production Execution | M10 | M06 material ledger |
| FM-09 | Quality, Safety and Regulatory Release | M18 | M10 batch source; M20 safety |
| FM-10 | Finished Goods Receipt | M06 | M10 production output |
| FM-11 | Warehouse Custody and Transfer | M07 | M06 stock ledger |
| FM-12 | Costing and Batch Variance Review | M06 | M16 financial posting |

**Status:** 22/22 logical track titles and primary owners indexed; numeric, safety, formulation and regulatory detail remain OPEN. The two tracks retain separate CORE/CONDITIONAL profiles.
