# CAT-04 — Jasa / Service Provider

> **Document:** DOC-02 category detail  
> **Status:** DRAFT — SOURCE-ALIGNED RECONSTRUCTED SUMMARY  
> **Mode:** Documentation only • `DB_PUSH_BLOCKED: ACTIVE`

## Source lineage

RMD-60 v1.0 audit + v1.1 R60-D01–D12 conceptual FIX addendum

## Workflow baseline

**Recorded baseline:** WF-01–WF-14

**Category focus:** Quotation, appointment, work order, assignment, execution, QC and billing.

**Workflow detail:** 14-workflow category baseline. Exact source-native titles/sequence are not reproduced in this pass; see RMD-60 v1.0 and v1.1.

## Decision status

FIX — conceptual category decision baseline.

## Residual details and guardrails

Keep quotation/booking, scheduling, assignment, execution, evidence, QC/completion and invoice lifecycle distinct where applicable. Service-specific thresholds, formula/commission, SLA, approval, exact Manager allowlist and technical controls remain OPEN unless separately approved.

## Source locator

RMD-60 v1.0/v1.1; source mapping §4.4. Exact page/section locators PARTIAL.

This page is a navigation summary, not a replacement for its primary RMD audit, FIX addendum or approval record. Where source-native workflow titles or exact page/section locators were not directly recovered, the gap is explicit. No workflow title, threshold, role grant, permission key or technical behavior is inferred.

No SQL/DDL/DML, schema, RLS/Auth, API/backend, application code, deployment or Production change is authorized. Stage 6 remains NOT AUTHORIZED.


## CW-10 project-authored logical workflow title and owner index — CAT-04 Services (20 November 2026)

These are project-authored logical titles aligned to the 14-workflow baseline; they are not claimed as source-native verbatim titles.

| ID | Project-authored logical workflow title | Primary owner | Supporting handoff |
|---|---|---|---|
| WF-01 | Service Catalog and Pricing | M02 | M09 service execution |
| WF-02 | Customer and Case Intake | M04 | M03 quote/order |
| WF-03 | Quotation and Proposal | M03 | M02 price; M04 customer |
| WF-04 | Booking and Appointment | M05 | M17 capacity |
| WF-05 | Work Order Creation and Triage | M09 | M05 booking |
| WF-06 | Staff and Capacity Assignment | M17 | M09 work order |
| WF-07 | Service Execution and Work Log | M09 | M06 material issue |
| WF-08 | Parts and Materials Reservation/Issue | M06 | M08 procurement |
| WF-09 | Quality and Completion Evidence | M18 | M09 service result |
| WF-10 | Customer Acceptance and Sign-off | M04 | M09 completion |
| WF-11 | Invoice and Payment | M16 | M03 order source |
| WF-12 | Change, Cancellation and Refund | M16 | M05 booking; M03 sale |
| WF-13 | SLA, Complaint and Remediation | M09 | M18 quality |
| WF-14 | Service Performance and Profitability Review | M16 | M09 operational data |

**Status:** 14/14 logical titles and primary owners project-authored; service-specific SLA/approval thresholds remain OPEN.
