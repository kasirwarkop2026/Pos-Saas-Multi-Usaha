# CAT-07 — Rental / Penyewaan

> **Document:** DOC-02 category detail  
> **Status:** DRAFT — SOURCE-ALIGNED RECONSTRUCTED SUMMARY  
> **Mode:** Documentation only • `DB_PUSH_BLOCKED: ACTIVE`

## Source lineage

RMD-63 v1.0 audit + v1.1 R63-D01–D12 conceptual FIX addendum

## Workflow baseline

**Recorded baseline:** WF-01–WF-14

**Category focus:** Asset identity, reservation, contract, handover, return, inspection and maintenance.

**Workflow detail:** 14-workflow category baseline. Exact source-native titles/sequence are not reproduced in this pass; see RMD-63 v1.0 and v1.1.

## Decision status

FIX — conceptual category decision baseline.

## Residual details and guardrails

Asset identity, availability/reservation, contract, handover/return, inspection/condition and maintenance are distinct lifecycle concerns. Deposit, damage, late-return, maintenance and operational-readiness thresholds remain OPEN unless separately decided.

## Source locator

RMD-63 v1.0/v1.1; source mapping §4.4. Exact page/section locators PARTIAL.

This page is a navigation summary, not a replacement for its primary RMD audit, FIX addendum or approval record. Where source-native workflow titles or exact page/section locators were not directly recovered, the gap is explicit. No workflow title, threshold, role grant, permission key or technical behavior is inferred.

No SQL/DDL/DML, schema, RLS/Auth, API/backend, application code, deployment or Production change is authorized. Stage 6 remains NOT AUTHORIZED.


## CW-10 project-authored logical workflow title and owner index — CAT-07 Rental (20 November 2026)

These are project-authored logical titles aligned to the 14-workflow baseline; they are not claimed as source-native verbatim titles.

| ID | Project-authored logical workflow title | Primary owner | Supporting handoff |
|---|---|---|---|
| WF-01 | Asset and Rental Rate Catalog | M02 | M11 asset identity |
| WF-02 | Availability and Reservation | M05 | M11 capacity |
| WF-03 | Quotation and Rental Contract | M03 | M05 booking |
| WF-04 | Customer and Identity Verification | M04 | M18 review where required |
| WF-05 | Asset Allocation and Capacity Planning | M11 | M17 assignment |
| WF-06 | Handover and Dispatch | M07 | M11 asset; M19 delivery where external |
| WF-07 | Usage, Extension and Return Scheduling | M11 | M05 reservation |
| WF-08 | Return and Condition Inspection | M11 | M18 inspection |
| WF-09 | Damage, Loss and Claim | M18 | M11 asset state; M16 charge |
| WF-10 | Deposit, Invoice and Payment | M16 | M03 contract source |
| WF-11 | Maintenance and Repair Work Order | M20 | M11 asset |
| WF-12 | Asset Availability and Reconditioning | M11 | M20 maintenance |
| WF-13 | Late Fee and Settlement | M16 | M11 return/usage |
| WF-14 | Utilization and Compliance Reporting | M18 | M11 asset data; M16 financial data |

**Status:** 14/14 logical titles and primary owners project-authored; deposit, damage, late-return and maintenance thresholds remain OPEN.
