# CAT-08 — Apotek / Toko Kesehatan

> **Document:** DOC-02 category detail  
> **Status:** DRAFT — SOURCE-ALIGNED RECONSTRUCTED SUMMARY  
> **Mode:** Documentation only • `DB_PUSH_BLOCKED: ACTIVE`

## Source lineage

RMD-64 v1.0 audit + v1.1 R64-D01–D12 conceptual FIX addendum

## Workflow baseline

**Recorded baseline:** WF-01–WF-14

**Category focus:** Prescription, professional review, dispensing, batch/expiry, quarantine and recall.

**Workflow detail:** 14-workflow category baseline. Exact source-native titles/sequence are not reproduced in this pass; see RMD-64 v1.0 and v1.1.

## Decision status

FIX — conceptual category baseline; regulated/professional workflows NOT ELIGIBLE / NOT READY pending applicable gates.

## Residual details and guardrails

Prescription and professional review/dispensing are not enabled by category classification alone. Credential, jurisdiction, regulatory/compliance, batch/expiry, quarantine and recall controls require evidence and separate readiness approval. Do not treat the conceptual FIX as operational eligibility.

## Source locator

RMD-64 v1.0/v1.1; consolidation v1.0 pp.1–2; source map §4.4. Exact gate evidence remains OPEN.

This page is a navigation summary, not a replacement for its primary RMD audit, FIX addendum or approval record. Where source-native workflow titles or exact page/section locators were not directly recovered, the gap is explicit. No workflow title, threshold, role grant, permission key or technical behavior is inferred.

No SQL/DDL/DML, schema, RLS/Auth, API/backend, application code, deployment or Production change is authorized. Stage 6 remains NOT AUTHORIZED.


## CW-10 project-authored logical workflow title and owner index — CAT-08 Pharmacy (20 November 2026)

These are project-authored logical titles aligned to the 14-workflow conceptual baseline; they are not claimed as source-native verbatim titles. Every regulated/professional action remains NOT ELIGIBLE / NOT READY until credential, jurisdiction and compliance gates are evidenced and separately approved.

| ID | Project-authored logical workflow title | Primary owner | Supporting handoff |
|---|---|---|---|
| WF-01 | Product/Drug Master and Classification | M02 | M14 regulated product rules |
| WF-02 | Supplier and Procurement | M08 | M16 payable |
| WF-03 | Receiving, Batch and Expiry Control | M06 | M14 regulated stock |
| WF-04 | Credential, License and Authority Verification | M18 | M14 dispensing eligibility |
| WF-05 | Prescription Intake | M14 | M04 patient/customer identity |
| WF-06 | Pharmacist Review and Clinical Validation | M14 | M18 compliance evidence |
| WF-07 | Dispensing, Labeling and Fulfillment | M14 | M06 stock movement; M03 sale |
| WF-08 | POS Sale and Payment | M03 | M16 payment |
| WF-09 | Return, Recall and Quarantine | M14 | M06 stock; M18 quality |
| WF-10 | Stock Count and Adjustment | M06 | M14 regulated controls |
| WF-11 | Controlled Product Custody | M07 | M14 regulated product decision |
| WF-12 | Insurance and Third-party Claim | M16 | M14 dispensing evidence |
| WF-13 | Expiry and Recall Monitoring | M14 | M06 batch/expiry data |
| WF-14 | Regulatory and Audit Reporting | M18 | M14 clinical/dispensing source |

**Status:** 14/14 logical titles and primary owners project-authored. No prescription, professional dispensing, controlled-product or regulated workflow may activate from category classification alone.
