# CAT-09 — Laundry

> **Document:** DOC-02 category detail  
> **Status:** DRAFT — SOURCE-ALIGNED RECONSTRUCTED SUMMARY  
> **Mode:** Documentation only • `DB_PUSH_BLOCKED: ACTIVE`

## Source lineage

RMD-65 v1.0 audit + v1.1 R65-D01–D12 conceptual FIX addendum

## Workflow baseline

**Recorded baseline:** WF-01–WF-14

**Category focus:** Order intake, tagging, batch processing, QC, packing, delivery and claims.

**Workflow detail:** 14-workflow category baseline. Exact source-native titles/sequence are not reproduced in this pass; see RMD-65 v1.0 and v1.1.

## Decision status

FIX — conceptual category decision baseline.

## Residual details and guardrails

Item identity, custody, condition, location, batch/processing, inspection/QC, packing, delivery and claims are workflow focus. Detailed turnaround, loss/damage, claim and pricing policies remain OPEN where not separately approved.

## Source locator

RMD-65 v1.0/v1.1; source map §4.4. Exact page/section locators PARTIAL.

This page is a navigation summary, not a replacement for its primary RMD audit, FIX addendum or approval record. Where source-native workflow titles or exact page/section locators were not directly recovered, the gap is explicit. No workflow title, threshold, role grant, permission key or technical behavior is inferred.

No SQL/DDL/DML, schema, RLS/Auth, API/backend, application code, deployment or Production change is authorized. Stage 6 remains NOT AUTHORIZED.


## CW-10 project-authored logical workflow title and owner index — CAT-09 Laundry (20 November 2026)

These are project-authored logical titles aligned to the 14-workflow baseline; they are not claimed as source-native verbatim titles.

| ID | Project-authored logical workflow title | Primary owner | Supporting handoff |
|---|---|---|---|
| WF-01 | Service Catalog and Rate | M02 | M15 processing |
| WF-02 | Customer, Contract and Account | M04 | M16 billing |
| WF-03 | Order Intake and Booking | M05 | M15 processing |
| WF-04 | Item Tagging and Custody | M15 | M07 custody references |
| WF-05 | Sorting and Batch Assignment | M15 | M06 material ledger |
| WF-06 | Processing Work Order | M15 | M17 workforce |
| WF-07 | Chemical and Material Inventory | M06 | M08 procurement |
| WF-08 | Quality and Inspection | M18 | M15 processing |
| WF-09 | Packing and Ready-for-Pickup | M15 | M07 custody |
| WF-10 | Pickup, Delivery and Proof of Delivery | M19 | M15 item state |
| WF-11 | Loss, Damage and Claim | M18 | M15 custody/condition |
| WF-12 | Reprocess and Remake | M15 | M18 quality |
| WF-13 | Invoice and Payment | M16 | M04 customer/account |
| WF-14 | Shift, Throughput and Cost Close | M16 | M17 shift; M15 production |

**Status:** 14/14 logical titles and primary owners project-authored; turnaround, loss/damage and claims thresholds remain OPEN.
