# MBA Compensation & Negotiation Tool

**Full-Time MBA Program · David Eccles School of Business**
Version 1.0 · Web tool · Built from `MBA_Comp_Calculator.xlsx`

This document is both the **student user manual** and the **operational guide** for whoever maintains this tool going forward.

---

**▶ Live tool:** **[Comp Negotiation](**https://coryjburk.github.io/comp_negotation/)**

---

## 1. What this tool is

A single-file HTML tool (`mba_comp_negotiation_tool.html`) that walks a student through four stages of a compensation negotiation:

1. **Attestation** — enter and validate market-salary sources
2. **Triangulation** — calculate a defensible base salary target, floor, and stretch
3. **Offer Comparison** — compare an initial offer against a counter-offer on a risk-adjusted, after-tax, and 3-year basis
4. **AI Practice** — rehearse the actual negotiation conversation against a live AI recruiter, comp modeler, and counter-offer critic, then self-score against a rubric

It replaces the source workbook's Excel formulas with live JavaScript — every number recalculates as the student types, with no need to open Excel or Google Sheets.

---

## 2. For students — how to use it

### Step 1 — Attestation (do this first)
- Enter at least a Tier 1 (institutional) source: a dollar figure and a real URL.
- The **Model Status** pill will read **INVALID** until:
  - Tier 1 has a working `http(s)://` link, **and**
  - at least one of Tier 2 or Tier 3 also has a working link, **and**
  - the three weights sum to exactly 100%.
- You cannot get a usable target base salary until this reads **VALID**. This is intentional — it forces you to anchor in real data before the tool will give you a number to negotiate with.
- Choose **Institutional Primary** (Tier 1 only) or **Weighted Triangulated** (all three tiers) as your baseline method.

### Step 2 — Triangulation
- Enter your relevant pre-MBA experience in years. The experience premium is capped (7.5% by default) — you cannot inflate your target by claiming more years than the cap allows.
- Enter your geographic differential from BLS OEWS or BEA Regional Price Parities — **not** a local CPI index; the tool doesn't stop you from using CPI, but the workbook's guidance and the AI prompts will treat that as unverified.
- Your three outputs: **Reference Floor (88%)**, **Triangulated Target**, and **Stretch (110%)**. The floor is a reference point, not an automatic walk-away number — weigh it against total compensation, role quality, and alternatives.

### Step 3 — Offer Comparison
- Fill in the initial offer's terms. Your counter-offer's base salary auto-fills from your Step 2 target — you can't accidentally counter with a number lower than what you triangulated.
- Everything else (signing bonus, bonus %, equity, vesting years, clawback months, tax rate) is independently editable for both sides.
- Read the risk-adjusted numbers, not just the nominal ones — equity and bonus are discounted by their weight (0.50 and 0.70 by default) because they're not guaranteed cash the way base salary is.
- **Vesting caveat:** the 3-year projection vests equity straight-line starting Year 1. If your actual grant has a cliff longer than one year, the Year 1 (and possibly Year 2) equity figures shown will overstate what you'd actually keep if you left early. Adjust your mental model accordingly — the tool does not currently ask for a separate cliff-length input.

### Step 4 — AI Practice
- Three modes, selected by the pill buttons: **Recruiter Roleplay**, **Comp Modeler**, **Counter-Offer Critique**.
- Each conversation is seeded with your live Step 2/3 numbers — the AI recruiter opens with *your* offer inputs, not a generic example.
- Type **END ROLEPLAY** in the Recruiter Roleplay mode to have the AI break character and evaluate you.
- The AI is not a source of truth on compensation law, tax rules, or company policy — verify anything it states against your own research before you rely on it.
- Use **Reset conversation** to start over in the same mode without losing your calculator inputs.

### Step 5 — Rubric
- Score your own transcript (or have a coach/peer do it) across the 10 criteria.
- Scoring **0** on Validated Market Evidence, Institutional Baseline, or Clear Ask automatically caps your final rating at "Developing," regardless of your total — these three are treated as non-negotiable fundamentals.
- Submission requirement for class credit: calculator screenshot + attestation + AI transcript + written reflection.

### What this tool does **not** do
- It does not save your work between sessions — there is no export, print, or local-save function in v1.0 (unlike the Offer Compensation Planner, which has CSV/copy/print and named saved negotiations). If you need a record, take a screenshot or copy your numbers out manually before closing the tab.
- It does not model a signing-bonus/equity **cliff** separately from the vesting period (see Step 3 caveat above).
- It is not tax, legal, or financial advice.

---

## 3. For the tool owner — operational guide

### File structure
Single self-contained HTML file — no build step, no external dependencies beyond the live call to `api.anthropic.com` in Step 4. Everything (markup, CSS, JS) lives in one file for easy hosting on Canvas, GitHub Pages, or any static host.

### Where the defaults live (edit these to update the model)
| What | Where in the file | Notes |
|---|---|---|
| Attestation tier defaults ($, weight) | `state.attest` array | Currently $125K/50%, $128K/30%, $130K/20% — matches the workbook's demo values |
| Experience premium rate/cap, geo differential | `state.expYears`, `premRate`, `premCap`, `geoDiff` | Defaults: 1.5%/yr, 7.5% cap, 5% geo |
| Risk weights (base/signing/bonus/equity) | `state.offer` object, `.weight` fields | Defaults: 1.00 / 0.95 / 0.70 / 0.50, matching the workbook |
| Merit growth assumption | hardcoded `0.03` inside the `threeYear()` function in the recalculation script | Change in one place only — it's not exposed as a UI input in v1.0 |
| AI prompt system messages | `PROMPTS` array, `.system()` functions | Edit the template strings directly; they pull live values from `LAST` (the most recently computed outputs) at send-time |
| Rubric criteria and cap logic | `RUBRIC` array and `updateRubric()` function | The auto-cap currently triggers on indices `[1,2,4]` (Validated Evidence, Institutional Baseline, Clear Ask) — update these indices if you reorder the rubric rows |

### The attestation gate — what "VALID" actually checks
```
tier1Verified && anySecondaryVerified && weightOk && institutionalBaseline > 0
```
"Verified" means the URL field matches `/^https?:\/\/.+/i` — a working link format, not a check that the link resolves or that the content is real. This closes the gap found in the original workbook (where placeholder bracket text like `[Insert report link]` counted as "filled in"), but it's still a format check, not a content check. If a student pastes any working URL regardless of relevance, the gate will pass. Decide whether that's an acceptable tradeoff for a teaching tool or whether you want a stricter check (e.g., a domain allowlist for `.gov`, `.edu`, or specific vendor sites) before wider release.

### The AI Practice tab — deployment note
The `fetch("https://api.anthropic.com/v1/messages", ...)` call in Step 4 works as-is inside Claude.ai (where this tool was built and is currently hosted), because the platform handles authentication transparently. **If this tool is deployed outside Claude.ai** — e.g., embedded directly in Canvas, or hosted as a standalone static page — that fetch call will fail with no API key attached. Before that kind of deployment, you'd need to either:
- stand up a small backend that holds your Anthropic API key and proxies the request, or
- switch Step 4 to display the prompt templates as copy-paste text (the original spec's approach) instead of live chat.

Flag this to whoever owns hosting before assuming Step 4 will work unmodified on Canvas.

### Matching the playbook family conventions
- Footer text and copyright line match [[playbook-footer]] exactly — do not edit ad hoc; update the shared footer text in one place if the standard ever changes.
- Version tag in the top-right of the masthead (`v1.0 · web`) should be bumped on any functional change, following the same versioning convention as the PE/PM/TMAY tools.
- Utah crimson (`#9E1B32`) is used as the accent instead of the PE/PM/TMAY red (`#CC0000`) — see the note in the next section on the design-consistency pass already agreed for the follow-up sequencing work.

### Known open items (carried into the next revision)
1. No cliff-length input separate from vesting years (Step 3 caveat above).
2. No save/export function.
3. Attestation URL check is format-only, not content-verified.
4. Visual system doesn't yet match the PE/PM/TMAY palette/typography — scheduled as part of the sequencing work discussed separately.
5. Data model not yet shared with the Offer Compensation Planner or Compensation Intelligence Framework tools — a student re-enters the same offer numbers in each if they use more than one.

---

_*Developed by Cory Burk, Senior Manager, Program Management · Full-Time MBA Program · David Eccles School of Business.*
*© 2026 University of Utah, David Eccles School of Business. All rights reserved.*_
