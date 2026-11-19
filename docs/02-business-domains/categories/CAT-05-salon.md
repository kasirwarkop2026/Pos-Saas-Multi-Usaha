# CAT-05 — Salon / Beauty

> **Document:** DOC-02 category detail  
> **Status:** DRAFT — SOURCE-ALIGNED RECONSTRUCTED SUMMARY  
> **Mode:** Documentation only • `DB_PUSH_BLOCKED: ACTIVE`

## Source lineage

RMD-61 v1.0 audit + v1.1 R61-D01–D12 conceptual FIX addendum

## Workflow baseline

**Recorded baseline:** WF-01–WF-14

**Category focus:** Appointment, consultation/consent, treatment, package, product and commission.

**Workflow detail:** 14-workflow category baseline. Exact source-native titles/sequence are not reproduced in this pass; see RMD-61 v1.0 and v1.1.

## Decision status

FIX — conceptual category decision baseline.

## Residual details and guardrails

Sensitive consultation and photo data require purpose/minimum-necessary controls. Consent, retention, credentials, commission/discount/refund thresholds and exact authorization details remain OPEN where not separately approved.

## Source locator

RMD-61 v1.0/v1.1; source mapping §4.4. Exact page/section locators PARTIAL.

This page is a navigation summary, not a replacement for its primary RMD audit, FIX addendum or approval record. Where source-native workflow titles or exact page/section locators were not directly recovered, the gap is explicit. No workflow title, threshold, role grant, permission key or technical behavior is inferred.

No SQL/DDL/DML, schema, RLS/Auth, API/backend, application code, deployment or Production change is authorized. Stage 6 remains NOT AUTHORIZED.


## CW-10 project-authored logical workflow title and owner index — CAT-05 Salon (20 November 2026)

These are project-authored logical titles aligned to the 14-workflow baseline; they are not claimed as source-native verbatim titles.

| ID | Project-authored logical workflow title | Primary owner | Supporting handoff |
|---|---|---|---|
| WF-01 | Service and Product Catalog | M02 | M09 service |
| WF-02 | Customer Profile and Consultation | M04 | M09 consultation record |
| WF-03 | Appointment, Reschedule and No-show | M05 | M17 capacity |
| WF-04 | Staff, Chair and Room Allocation | M17 | M05 booking |
| WF-05 | Service Order and Check-in | M09 | M04 customer |
| WF-06 | Treatment Execution and Service Log | M09 | M18 quality |
| WF-07 | Product Consumption and Stock Issue | M06 | M02 product; M08 procurement |
| WF-08 | Retail Product POS | M03 | M16 payment |
| WF-09 | Discount and Commission Review | M16 | M17 workforce/payroll reference |
| WF-10 | Payment, Tip and Settlement | M16 | M03 sale |
| WF-11 | Cancellation and Refund | M16 | M05 booking; M03 sale |
| WF-12 | Redo, Complaint and Remediation | M09 | M18 quality |
| WF-13 | Hygiene and Quality Inspection | M18 | M09 service |
| WF-14 | Shift and Revenue Close | M16 | M17 shift record |

**Status:** 14/14 logical titles and primary owners project-authored; consultation/photo consent, retention and sensitive-data policy remain OPEN.
