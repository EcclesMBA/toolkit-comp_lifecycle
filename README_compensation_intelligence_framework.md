# Compensation Intelligence Framework — Comp Lifecycle Toolkit Edition

**Full-Time MBA Program · David Eccles School of Business**
Comp Lifecycle Toolkit Edition v1.0 · Web tool

This is **Step 1 (ID)** of the Comp Lifecycle Toolkit — a fork of a separately-owned, separately-hosted standalone tool, with one feature added for toolkit integration. Read this section before anything else below.

---

**▶ Live tool (toolkit edition):** part of the Comp Lifecycle Toolkit hub — see `index.html`.

---

## 0. This is a fork — not the same tool as the standalone edition

**CJ's team owns and maintains the original, independent Compensation Intelligence Framework**, hosted separately at its own repo and versioned on its own schedule (currently v3.0, with its own excellent README covering data provenance, the five tools in detail, and a maintenance cadence tied to recruiting cycles).

This toolkit edition is a **fork of that v3.0 build**, with exactly one addition: a "Continue to the Comp Negotiation Tool" handoff card on the Total Comp tab, so a student moving through the toolkit's ID → Negotiate → Offer sequence can carry a rough industry/TCV note forward into Step 2 without retyping it.

**What this means operationally:**
- **This fork is not automatically updated when the standalone original changes.** If CJ's team refreshes industry data, skill premiums, or COL indices in the standalone version (per its own "review before each recruiting cycle" commitment), that update does **not** propagate here automatically. Porting it is a deliberate choice each cycle, not an assumption.
- **This fork's version number is toolkit-local** ("Toolkit Edition v1.0"), deliberately not continuing the standalone's v1.0 → v3.0 lineage, so nobody mistakes this for the next official CIF release.
- **The standalone original's README carries a note pointing here**, so anyone who finds one copy knows the other exists and what the one difference is.
- If the two drift far enough that this fork feels stale relative to the standalone, that's a signal to either port a refresh or reconsider whether forking was still the right call — not something to let happen silently.

---

## 1. What this tool is

A single-file HTML application bundling five tools for compensation strategy:

| Tool | What it answers |
|---|---|
| **Total Comp Calculator** | What is this offer actually worth beyond base salary? |
| **Cost-of-Living Normalizer** | Which offer wins after adjusting for city cost and taxes? |
| **Industry Heatmap** | How do industries compare on comp, growth, AI resilience, equity, and work-life? |
| **Offer Scorecard** | Which of two offers is the stronger long-term strategic choice? |
| **Skill Premium Index** | Which skills should I build to raise my market value? |

Plus a coach-facing sidebar (session notes, strategic quick reference, print/PDF export) and, in this edition only, the handoff card described above.

## 2. Read this first: data provenance

**The numeric values in this tool are editorial estimates, not a live or verified dataset** — inherited unchanged from the standalone original. Industry scores, skill premiums, salary ranges, and COL indices are directional teaching aids synthesized from general market knowledge, not pulled from any API or named dataset. The tool does not connect to Levels.fyi, Glassdoor, GMAC, NACE, the H1B database, or any live source — those are listed as **sources students should consult directly**.

Treat outputs as a way to *frame* a compensation conversation, not evidence of what a role actually pays. Students should verify any number against a primary source before acting on it.

## 3. For students — how to use it

1. **Total Comp tab**: enter a hypothetical or real offer to see its True Compensation Value (TCV) — base + bonus + equity + amortized sign-on + retirement match + benefits, adjusted for a brand-tier multiplier.
2. **COL Normalizer**: compare two offers in different cities on purchasing-power and rough after-tax terms.
3. **Industry Heatmap**: filter by dimension (comp, growth, AI resilience, equity, work-life) and click a cell for sample roles and ranges.
4. **Offer Scorecard**: rate two offers 1–5 across eight weighted dimensions for a structured accept/decline/negotiate verdict.
5. **Skill Premium Index**: filter by category to prioritize upskilling.
6. **Continue to the Comp Negotiation Tool** (Total Comp tab, toolkit edition only): copy the generated note and paste it into that tool's Step 1 as context when setting your own baseline — it is not a verified benchmark on its own, and nothing here auto-fills anything downstream.

### What this tool does not do
- It is not a live or verified data source — see §2.
- Coach session notes save to `sessionStorage` only — this browser tab, this session. Not synced, not a record-keeping system.
- The handoff note in §1 is advisory text only; the Comp Negotiation Tool cannot parse structured fields out of it, since this tool has no offer-shaped data to send.
- It is not financial, tax, or legal advice.

## 4. For the tool owner — operational guide

### File structure
Single self-contained HTML file, no build step, no server calls beyond two optional CDN assets (Tabler icon font, Google Fonts) that degrade gracefully if unavailable.

### What's different from the standalone original
Only the handoff card (HTML + its `copyHandoffNote()`/`calcTCV()` wiring on the Total Comp tab) and the version badge/footer text. Everything else — `colData`, `industries`, `skills`, `scoreDims`, all five tools' logic — is untouched from the v3.0 fork point.

### Where the defaults live
Same as the standalone original — all editable values live in labeled JavaScript arrays near the bottom of the file: `colData` (city COL/tax), `industries` (the 10 industry objects), `skills` (premium scores), `scoreDims` (scorecard weights).

### Maintenance
This fork does not have its own data-refresh cadence — it inherits whatever vintage it was forked at (v3.0) until someone deliberately decides to port a refresh from the standalone original. See §0 for why that's not automatic.

### Known open items
1. No data refresh has been ported from the standalone original since the fork point — currently at v3.0's data vintage.
2. No version-lockstep mechanism exists between this fork and the standalone — see §0.
3. Same limitations as the standalone original apply throughout (editorial scores, top-marginal-rate-only tax approximation, brand multiplier as a judgment lever not a market measurement).

---

*Developed by Cory Burk, Senior Manager, Program Management · Full-Time MBA Program · David Eccles School of Business.*
*© 2026 University of Utah, David Eccles School of Business. All rights reserved.*
