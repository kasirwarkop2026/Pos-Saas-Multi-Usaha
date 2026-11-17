# DOC-08 — ST5-11.40 Authorization CVS Crosswalk Correction

**Project:** POS SaaS Multi-Usaha v3.0  
**Source:** DOC-08 v1.5 reconstructed working master, ST5-11.40 accepted correction package  
**Date:** 18 November 2026  
**Status:** Append-only documentation correction; DOC-08 remains NOT CANONICAL / NOT FINAL / ACCEPTANCE NOT MET.

## 1. Purpose and control

This supplemental document records the controlling prospective correction for the authorization CVS crosswalk. It preserves historical source tables and does not replace DOC-08 v1.5 or any primary decision source. Where earlier O/CR/Q CVS associations conflict with this correction, this correction governs prospective cross-reference use only.

No DOC-09 or DOC-10 content or status is changed. No dependency is closed. No decision status is promoted. This is not approval of a complete authorization matrix or implementation.

## 2. Corrected summary decision crosswalk

| Decision family | DOC-08 status | DOC-09 dependencies retained | CVS relationship | Controlling interpretation |
|---|---|---|---|---|
| O-01–O-12 | Conceptual FIX | AUTH-OPEN-11–22; AUTH-OPEN-23–27 | CVS-016 (general context only) | CVS-015 is not assigned to O-01–O-12. CVS-016 describes the general permission catalogue/matrix conflict; it is not primary approval evidence. |
| CR-01–CR-10 | Conceptual FIX | AUTH-OPEN-01–10; RMD-OPEN-06/12/13; XDOM-OPEN-01–06/10 | CVS-015 (direct); CVS-016 (general context only) | CVS-015 is the direct conflict entry for CR-01–CR-10. CVS-014, CVS-017 and CVS-039 are not direct CR conflict locators. |
| Q-01–Q-06 | Conceptual FIX | AUTH-OPEN-01–10; RMD-OPEN-06/12/13; XDOM-OPEN-01–06/10 | CVS-014 (direct); CVS-016 (general context only) | CVS-014 is the direct conflict entry for Q-01–Q-06. CVS-015, CVS-017 and CVS-039 are not direct Q conflict locators. |

## 3. Corrected primary locator crosswalk

| Decision family | Primary source identity | Primary decision locator | DOC-09 dependency locator | Direct CVS locator | Verification boundary |
|---|---|---|---|---|---|
| O-01–O-12 | `Keputusan_FIX_Otorisasi_POS_SaaS_O01-O12_v1.0.docx` | O-01 through O-12 decision rows; exact page/paragraph per row remains unnormalized | AUTH-OPEN-11–22; AUTH-OPEN-23–27 | CVS-016 (general context only) | Primary source identified; CVS-016 is not approval evidence and does not close technical dependencies. |
| CR-01–CR-10 | `Cross_Category_Role_Module_Capability_Matrix_Decision_Addendum_v1.2.docx` | CR-01 through CR-10 decision rows; exact page/paragraph per row remains unnormalized | AUTH-OPEN-01–10; RMD-OPEN-06/12/13; XDOM-OPEN-01–06/10 | CVS-015 | Conceptual FIX only; stable permission keys, full matrix, scope, SoD, data-purpose, approval and tests remain open. |
| Q-01–Q-06 | `Cross_Category_Role_Module_Capability_Matrix_Q01-Q06_Decision_Addendum_v1.3.docx` | Q-01 through Q-06 decision rows; exact page/paragraph per row remains unnormalized | AUTH-OPEN-01–10; RMD-OPEN-06/12/13; XDOM-OPEN-01–06/10 | CVS-014 | Conceptual FIX only; no whole-matrix finalization, grants, implementation or test execution is implied. |

## 4. CVS scope restrictions

- **CVS-014:** direct conflict/supersession reference for Q-01–Q-06 only.
- **CVS-015:** direct conflict/supersession reference for CR-01–CR-10 only.
- **CVS-016:** general permission catalogue, capability/action, scope, SoD and page-permission matrix context. It is not a primary decision source and must not be represented as approval of a complete matrix.
- **CVS-017:** Education/Hotel-specific relationship (E-01–E-03 and H-01–H-03 conceptual FIX; E-04 and H-04 remain OPEN). It is not a general CR/Q locator.
- **CVS-039:** REC-05/REC-06 authorization/workflow evidence context. It is not primary approval evidence for O/CR/Q and does not close their dependencies.

## 5. Dependency and status preservation

All DOC-09 dependencies listed above remain OPEN/REVIEW/TODO/NOT VERIFIED according to their existing individual register status. No dependency is closed by this crosswalk correction. O/CR/Q remain conceptual FIX only.

No stable permission keys, grants, final capability/action matrix, scope resolver, SoD implementation, API/RLS enforcement, negative tests or Production state is approved or verified by this correction.

## 6. Historical preservation and change boundary

DOC-08 historical summary and locator rows (including the earlier combined CR/Q row and the former O CVS association) are not deleted or overwritten. This supplemental correction supplies the controlling prospective mapping.

DOC-09 v0.2 and DOC-10 v0.2 are unchanged. No source decision document or Library archive file is modified. The DOCX archive source is not uploaded to GitHub; this file is a focused Markdown publication of the accepted correction package only.

**Governance:** READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`. No database, schema, RLS/Auth, API/backend, source code, CI workflow, Vercel, deployment or Production change is included. Stage 5 blanket migration and Stage 6 remain NOT AUTHORIZED.

## 7. Provenance

Prepared from DOC-08 v1.5 working-copy addendum §43 and its accepted correction package (ST5-11.38 / ST5-11.39). This publication does not make DOC-08 canonical or final, and does not close DOC-08 acceptance blockers.
