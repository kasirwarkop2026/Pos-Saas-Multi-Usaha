# CAT-06 — Manufaktur / Produksi

> **Document:** DOC-02 category detail  
> **Status:** DRAFT — SOURCE-ALIGNED RECONSTRUCTED SUMMARY  
> **Mode:** Documentation only • `DB_PUSH_BLOCKED: ACTIVE`

## Source lineage

RMD-62 v1.0 audit + v1.1 R62-D01–D12 conceptual FIX addendum

## Workflow baseline

**Recorded baseline:** WF-01–WF-14

**Category focus:** BOM/formula, planning, production order, WIP, quality, batch and costing.

**Workflow detail:** 14-workflow category baseline. Exact source-native titles/sequence are not reproduced in this pass; see RMD-62 v1.0 and v1.1.

## Decision status

FIX — conceptual category decision baseline.

## Residual details and guardrails

Formula/BOM governance, version/effectivity, planning, material issue/consumption, output, QC, batch traceability, WIP and costing are the category focus. Detailed formula confidentiality, costing and production thresholds/enforcement remain subject to their own decisions.

## Source locator

RMD-62 v1.0/v1.1; source mapping §4.4. Exact page/section locators PARTIAL.

This page is a navigation summary, not a replacement for its primary RMD audit, FIX addendum or approval record. Where source-native workflow titles or exact page/section locators were not directly recovered, the gap is explicit. No workflow title, threshold, role grant, permission key or technical behavior is inferred.

No SQL/DDL/DML, schema, RLS/Auth, API/backend, application code, deployment or Production change is authorized. Stage 6 remains NOT AUTHORIZED.


## CW-10 project-authored logical workflow title and owner index — CAT-06 Manufacturing (20 November 2026)

These are project-authored logical titles aligned to the 14-workflow baseline; they are not claimed as source-native verbatim titles.

| ID | Project-authored logical workflow title | Primary owner | Supporting handoff |
|---|---|---|---|
| WF-01 | Product, Variant and Specification Master | M02 | M10 formulation reference |
| WF-02 | Formula, BOM and Revision Governance | M10 | M02 product/variant |
| WF-03 | Production Plan and Capacity Planning | M10 | M11 asset capacity; M17 workforce |
| WF-04 | Supplier and Material Procurement | M08 | M16 payable |
| WF-05 | Receiving, Inspection and Quarantine | M06 | M18 quality disposition |
| WF-06 | Material Reservation and Issue | M06 | M10 work order |
| WF-07 | Work Order Release and Scheduling | M10 | M17 workforce |
| WF-08 | Production Execution and WIP | M10 | M06 material ledger |
| WF-09 | Batch and Lot Traceability | M06 | M10 production source |
| WF-10 | Quality Inspection and Nonconformance | M18 | M10 work order |
| WF-11 | Finished Goods Receipt | M06 | M10 production output |
| WF-12 | Warehouse Transfer and Dispatch | M07 | M06 ledger; M19 external delivery |
| WF-13 | Costing, Yield and Variance Review | M06 | M16 financial posting |
| WF-14 | Asset Maintenance and Safety | M20 | M11 asset registry |

**Status:** 14/14 logical titles and primary owners project-authored; formula confidentiality, production safety and quality gates remain OPEN.
