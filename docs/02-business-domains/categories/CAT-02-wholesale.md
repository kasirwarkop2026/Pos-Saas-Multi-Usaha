# CAT-02 — Grosir / Distributor

> **Document:** DOC-02 category detail  
> **Status:** DRAFT — SOURCE-ALIGNED RECONSTRUCTED SUMMARY  
> **Mode:** Documentation only • `DB_PUSH_BLOCKED: ACTIVE`

## Source lineage

RMD-58 v1.0 audit + v1.1 R58-D01–D12 conceptual FIX addendum

## Workflow baseline

**Recorded baseline:** WF-01–WF-14

**Category focus:** Sales order/quotation, warehouse, picking, delivery, customer and AR/collection operations.

**Workflow detail:** The baseline contains 14 workflows. The exact WF-01–WF-14 titles are not transcribed in this page because the complete title list was not directly extracted in this pass; see RMD-58 v1.0 and its v1.1 addendum.

## Decision status

FIX — conceptual. R58-D01 approves WF-01–WF-14 as the conceptual baseline; conditional workflows apply only when used.

## Residual details and guardrails

Procurement request/PO creation, PO approval, receiving, discrepancy review and supplier payment are separate. Warehouse/bin and stock operations are warehouse-scoped by default. Reservation/allocation is not physical movement. Picking, packing, dispatch, delivery and POD are separate lifecycle actions. Pricing, credit, PO, receiving, return and AR/AP thresholds remain OPEN; exact allowlists and technical enforcement are not approved.

## Source locator

RMD-58 v1.1 R58-D01–D12; RMD-58 v1.0 §§8–10; source map §4.4.

This page is a navigation summary, not a replacement for its primary RMD audit, FIX addendum or approval record. Where source-native workflow titles or exact page/section locators were not directly recovered, the gap is explicit. No workflow title, threshold, role grant, permission key or technical behavior is inferred.

No SQL/DDL/DML, schema, RLS/Auth, API/backend, application code, deployment or Production change is authorized. Stage 6 remains NOT AUTHORIZED.

 
## CW-10 project-authored logical workflow title and owner index — CAT-02 Wholesale (20 November 2026)

These are project-authored logical titles aligned to the 14-workflow baseline; they are not claimed as source-native verbatim titles.

| ID | Project-authored logical workflow title | Primary owner | Supporting handoff |
|---|---|---|---|
| WF-01 | Customer and Contract Profile | M04 | M02 pricing terms |
| WF-02 | Product Catalog and Tier Pricing | M02 | M04 customer segment |
| WF-03 | Supplier and Procurement Planning | M08 | M16 payable |
| WF-04 | Purchase Order and Approval | M08 | M16 financial control |
| WF-05 | Receiving and Discrepancy Review | M06 | M08 PO source; M18 quality |
| WF-06 | Warehouse Putaway and Bin Custody | M07 | M06 stock ledger |
| WF-07 | Sales Quotation and Order | M03 | M02 price; M04 customer |
| WF-08 | Credit Terms and Limit Review | M16 | M04 customer risk context |
| WF-09 | Picking and Packing | M07 | M06 reservation/allocation |
| WF-10 | Dispatch, Delivery and Proof of Delivery | M19 | M07 custody |
| WF-11 | Return and Claim | M03 | M06 stock return; M16 refund |
| WF-12 | Stock Count and Adjustment | M06 | M07 warehouse custody |
| WF-13 | Invoice, Payment and AR Allocation | M16 | M03 sales source |
| WF-14 | Margin, Cost and Supplier Settlement Review | M16 | M06 cost; M08 supplier |

**Status:** 14/14 logical titles and primary owners proposed as project-authored category index; exact grants and numeric thresholds remain OPEN.
