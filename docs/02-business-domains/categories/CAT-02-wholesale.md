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
