# CAT-11 — Hotel / Penginapan

> **Document:** DOC-02 category detail  
> **Status:** DRAFT — SOURCE-ALIGNED RECONSTRUCTED SUMMARY  
> **Mode:** Documentation only • `DB_PUSH_BLOCKED: ACTIVE`

## Source lineage

RMD-68 v1.0 audit + v1.1 conceptual FIX and mapping approval addendum H-01–H-04

## Workflow baseline

**Recorded baseline:** 16-workflow baseline

**Category focus:** Room inventory, reservation, check-in/out, housekeeping, maintenance and folio.

**Workflow detail:** 16-workflow baseline; full source-native title sequence not reproduced in this pass.

## Decision status

RMD-68 conceptual decision baseline FIX. H-01–H-03 mapping FIX. H-04 is an APPROVED decision to retain nine detailed OPEN groups; do not label H-04 itself unapproved/OPEN.

## Residual details and guardrails

Hotel workflows include property/room/guest/shift context. H-04 retains nine unresolved detail groups. Do not infer final permission keys, exact technical access or closure of residual detail.

## Source locator

RMD-68 approval addendum pp.1–2 §§1–5; Erratum v1.1 pp.1–2 §3; source map §4.4.

This page is a navigation summary, not a replacement for its primary RMD audit, FIX addendum or approval record. Where source-native workflow titles or exact page/section locators were not directly recovered, the gap is explicit. No workflow title, threshold, role grant, permission key or technical behavior is inferred.

No SQL/DDL/DML, schema, RLS/Auth, API/backend, application code, deployment or Production change is authorized. Stage 6 remains NOT AUTHORIZED.


## CW-03 workflow title index — Hotel (project-authored)

The following 16 titles are the project-authored canonical logical workflow index, aligned to DOC-06 §21.4. They are design titles, not a claim of verbatim recovery from an external/source-native file.

1. HTL-WF-01 — Property / Building / Unit Master
2. HTL-WF-02 — Room Type / Rate Plan / Restrictions
3. HTL-WF-03 — Availability / Reservation
4. HTL-WF-04 — Booking Lifecycle
5. HTL-WF-05 — Guest Profile / Identity
6. HTL-WF-06 — Pre-arrival / Check-in
7. HTL-WF-07 — Stay / In-house Operations
8. HTL-WF-08 — Housekeeping / Room Readiness
9. HTL-WF-09 — Maintenance / Out-of-order
10. HTL-WF-10 — POS / Guest Charges / Folio
11. HTL-WF-11 — Checkout / Invoice / Payment
12. HTL-WF-12 — Group / Corporate / Agency Booking
13. HTL-WF-13 — Guest Service / Complaint
14. HTL-WF-14 — Staff Shift / Cash Control
15. HTL-WF-15 — Reporting / Audit / Data Retention
16. HTL-WF-16 — Channel / External Integration

Dedicated negative-test design references for the six previously related-only Hotel workflows are CW03-SEC-09 through CW03-SEC-14 as mapped in DOC-02 §17 and DOC-06 §24. All remain DESIGN / NOT EXECUTED.
