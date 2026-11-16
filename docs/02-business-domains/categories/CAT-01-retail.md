# CAT-01 — Retail / Toko

> **Document:** DOC-02 category detail  
> **Status:** DRAFT — SOURCE-ALIGNED RECONSTRUCTED SUMMARY  
> **Mode:** Documentation only • `DB_PUSH_BLOCKED: ACTIVE`

## Source lineage

RMD-57 v1.0 audit + v1.1 R57-D01–D12 conceptual FIX addendum

## Workflow baseline

**Recorded baseline:** WF-01–WF-12

**Category focus:** Retail goods, POS/payment, purchasing, receiving, stock, returns and cashier/register operations.

**Workflow detail:** RMD-57 v1.0 directly sampled: WF-01 Product/Catalog; WF-02 Supplier/Purchasing; WF-03 Receiving; WF-04 Placement/Transfer; WF-05 POS/Payment; WF-06 Discount/Override; WF-07 Void/Return/Refund; WF-08 Stock Count/Adjustment; WF-09 Register Close/Cash Reconciliation; WF-10 Customer/CRM; WF-11 Reporting/Audit; WF-12 Procurement/Inventory Cost Review.

## Decision status

FIX — conceptual category/workflow baseline. Manager/role/module recommendations in the review draft were initially pending; later cumulative category decision lineage records conceptual FIX. Do not infer thresholds or technical grants.

## Residual details and guardrails

Discount/refund/stock/PO/cash thresholds remain OPEN. Exact permission keys, schema, RLS and backend enforcement remain OPEN/NOT READY. Cashier remains register/outlet scoped; Manager does not self-escalate; Finance SoD remains separated.

## Source locator

RMD-57 v1.0 §2 and §10; RMD-57 v1.1 R57-D01–D12 (source map §4.4).

This page is a navigation summary, not a replacement for its primary RMD audit, FIX addendum or approval record. Where source-native workflow titles or exact page/section locators were not directly recovered, the gap is explicit. No workflow title, threshold, role grant, permission key or technical behavior is inferred.

No SQL/DDL/DML, schema, RLS/Auth, API/backend, application code, deployment or Production change is authorized. Stage 6 remains NOT AUTHORIZED.
