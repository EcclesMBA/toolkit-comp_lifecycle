# MBA Compensation & Negotiation Tool

**Full-Time MBA Program · David Eccles School of Business**
Version 1.2 · Web tool 

**v1.2 changes:** removed all live API calls (no API key is used or required) — AI Practice is now copy-paste prompts run in the student's own AI chat, plus a response log with microphone dictation and a heuristic (keyword-based) scorer; Rubric rescaled to 0–5 per criterion (0–50 total); added a Tracker tab (Step 6) to save practice sessions over time; reworked Step 1 to work with zero sources, removed the pass/fail verification gate, and added a preset institution dropdown.

This document is both the ** user manual** and the **operational guide** for whoever maintains this tool going forward.

---

**▶ Live tool:** **[Comp Negotiation](https://coryjburk.github.io/comp_negotation/)**

---


## 1. What this tool is

A single-file HTML tool (`mba_comp_negotiation_tool.html`) that walks a student through six stages of a compensation negotiation:

1. **Sources** — optionally enter benchmark salary data (works with zero sources)
2. **Triangulation** — calculate a defensible base salary target, floor, and stretch
3. **Offer Comparison** — compare an initial offer against a counter-offer on a risk-adjusted, after-tax, and 3-year basis
4. **AI Practice** — copy prompts into an external AI chat, log your own responses (typed or dictated), and get a heuristic score
5. **Rubric** — score a completed practice session 0–5 per criterion
6. **Tracker** — save a snapshot of each practice session to see progress over time

It replaces the source workbook's Excel formulas with live JavaScript — every number recalculates as the student types, with no need to open Excel or Google Sheets.

---

## 2. For students — how to use it

### Step 1 — Sources (optional)
- Add up to three benchmark sources using the dropdown (Eccles Employment Report, NACE, BLS OEWS, DOL H-1B/LCA, Levels.fyi, Glassdoor, LinkedIn Salary, PayScale, Robert Half, or "Other" with a custom name). A URL field is available but optional — nothing is checked or gated on it.
- **This tool no longer blocks you from getting a target if you have zero sources.** That's a deliberate accountability shift: you can type a baseline directly into "Baseline market salary" and get a target immediately. If you do enter sources, use **"Use average from sources"** to pull their average into that field — it won't overwrite your manual entry automatically, so click the button again after adding or editing a source.
- Nothing here is verified for accuracy. You are responsible for the correctness of any figure or source you cite in an actual negotiation.

### Step 2 — Triangulation
- Enter your relevant pre-MBA experience in years. The experience premium is capped (7.5% by default) — you cannot inflate your target by claiming more years than the cap allows.
- Enter your geographic differential from BLS OEWS or BEA Regional Price Parities — **not** a local CPI index; the tool doesn't stop you from using CPI, but the AI prompts will treat that as unverified if you mention it.
- Your three outputs: **Reference Floor (88%)**, **Triangulated Target**, and **Stretch (110%)**. The floor is a reference point, not an automatic walk-away number — weigh it against total compensation, role quality, and alternatives.

### Step 3 — Offer Comparison
- Fill in the initial offer's terms. Your counter-offer's base salary auto-fills from your Step 2 target — you can't accidentally counter with a number lower than what you triangulated.
- Everything else (signing bonus, bonus %, equity, vesting years, clawback months/trigger/basis, tax rate) is independently editable for both sides.
- Read the risk-adjusted numbers, not just the nominal ones — equity and bonus are discounted by their weight (0.50 and 0.70 by default) because they're not guaranteed cash the way base salary is.
- **Vesting caveat:** the 3-year projection vests equity straight-line starting Year 1. If your actual grant has a cliff longer than one year, the Year 1 (and possibly Year 2) equity figures shown will overstate what you'd actually keep if you left early.

### Step 4 — AI Practice
- **No API key is used by this tool.** Pick a prompt (Recruiter Roleplay, Comp Modeler, or Counter-Offer Critique), hit **Copy prompt**, and paste it into Claude, ChatGPT, or whatever AI assistant you already use — the conversation itself happens outside this tool.
- Log what you actually said in **"Your practice response"** — type it, or click the microphone to dictate (Chrome on desktop has the most reliable support; the button will tell you plainly if your browser doesn't support voice input, and typing always works as a fallback).
- Optionally paste your full external AI transcript into the second box — the scorer below reads both boxes together.
- Click **Score my response** to get a heuristic, keyword-based estimate written into the Step 5 rubric. **This is not an AI judgment of your negotiation skill — it's a simple keyword scan.** Review and adjust every score yourself before treating it as real feedback.

### Step 5 — Rubric
- Score your own transcript (or have a coach/peer do it) 0–5 across the 10 criteria — 50 points total.
- Scoring **1 or below** on Validated Market Evidence, Institutional Baseline, or Clear Ask automatically caps your final rating at "Developing," regardless of your total — these three are treated as non-negotiable fundamentals.
- Submission requirement for class credit: calculator screenshot + attestation (if used) + AI transcript + written reflection.

### Step 6 — Tracker
- Click **Save current session** any time after scoring to log a snapshot (timestamp, target base, counter base, rubric score, level) to this browser's local storage.
- This is a personal practice log, not a submission record — it lives only in the browser you're using and isn't backed up or shared with your coach automatically.

### What this tool does **not** do
- It still has no export/print/download button of its own for the calculator itself (unlike the Offer Compensation Planner, which has CSV/copy/print and named saved negotiations) — the Tracker tab (Step 6) is a lightweight practice log, not a downloadable record.
- It does not model a signing-bonus/equity **cliff** separately from the vesting period (see Step 3 caveat above).
- The heuristic scorer in Step 4 is a keyword scan, not an AI evaluation — it will miss well-phrased answers that don't happen to use its listed keywords, and can be fooled by keyword-stuffing. Treat every auto-filled rubric score as a draft, not a grade.
- Voice dictation depends on the browser's Web Speech API, which Chrome on desktop supports reliably and Safari/Firefox do not consistently support — students on unsupported browsers will see an alert and should type instead.
- It is not tax, legal, or financial advice.

---

## 3.5 — Shared data across the three Eccles compensation tools (new in v1.1)

This tool, the Offer Compensation Planner, and the Compensation Intelligence Framework now share one browser-stored **offer profile** (via `shared/comp-profile.js`). In practice: your triangulated target, floor, stretch, and your initial/counter offer terms (base, signing, bonus %, equity, vesting years, clawback terms, tax rate) are saved automatically as you type, and the Offer Compensation Planner can read the same numbers back — you shouldn't have to retype your offer if you move between tools in the same browser.

**Limits to know:**
- This only works if all three tools are hosted at the same location (e.g. the same Canvas embed or the same GitHub Pages site) with `shared/comp-profile.js` reachable at a relative path from each. It does not sync across devices, browsers, or if you clear site data.
- It is not a substitute for the export function noted above — it's cross-tool continuity within one browser, not a saved record you can hand in.
- This tool still owns and does *not* share your attestation sources — those stay local to this tool, since the Planner and CIF don't have an attestation concept of their own.

---

## 3. For the tool owner — operational guide

### File structure
Single self-contained HTML file — no build step, no external dependencies, and (as of v1.2) no API calls of any kind. Everything (markup, CSS, JS) lives in one file for easy hosting on Canvas, GitHub Pages, or any static host, alongside the optional `shared/comp-profile.js` module described in §3.5.

### Where the defaults live (edit these to update the model)
| What | Where in the file | Notes |
|---|---|---|
| Institution dropdown options | `INSTITUTIONS` array | Add/remove preset source names here; "Other (type below)" always stays last and triggers the custom-name text input |
| Default manual baseline | `#manualBaseline` input's `value` attribute in the HTML | Currently $125,000 |
| Experience premium rate/cap, geo differential | `state.expYears`, `premRate`, `premCap`, `geoDiff` | Defaults: 1.5%/yr, 7.5% cap, 5% geo |
| Risk weights (base/signing/bonus/equity) | `state.offer` object, `.weight` fields | Defaults: 1.00 / 0.95 / 0.70 / 0.50, matching the workbook |
| Merit growth assumption | hardcoded `0.03` inside the `threeYear()` function in the recalculation script | Change in one place only — it's not exposed as a UI input |
| AI prompt templates | `PROMPTS` array, `.system()` functions | Edit the template strings directly; they pull live values from `LAST` (the most recently computed outputs) each time the tab or the calculator updates |
| Heuristic scoring keywords | `SCORE_PATTERNS` array | Index-matched to `RUBRIC` — each entry is a list of regexes checked against the student's logged response text; 3 points per matching pattern, capped at 5 |
| Rubric criteria and cap logic | `RUBRIC` array and `updateRubric()` function | The auto-cap currently triggers when indices `[1,2,4]` (Validated Evidence, Institutional Baseline, Clear Ask) score `1` or below out of 5 — update these indices/threshold if you reorder or rescale the rubric rows |
| Tracker storage key | `TRACKER_KEY` constant (`'mba-comp-tracker-v1'`) | Bump this string if you ever need to invalidate old saved sessions after a schema change |

### The sources model (reworked in v1.2)
Step 1 no longer gates anything. It computes a simple average of whatever sources have a value entered (0 to 3 of them) and displays it — the student must click **"Use average from sources"** to actually pull that number into the baseline field that feeds Step 2, or they can skip sources entirely and type a baseline directly. There is no URL-format check, no weight-sum requirement, and no VALID/INVALID state. This is a deliberate accountability shift requested in v1.2: the tool no longer enforces data quality, it just asks the student to supply a number and trusts them to have checked it. If you want a lighter-touch nudge back toward accountability without a hard gate, consider adding a soft warning (not a block) when zero sources are entered, rather than reintroducing the old gate.

### The heuristic scorer — how it actually works
`heuristicScore(text)` runs the combined text from the response log and the optional pasted transcript against `SCORE_PATTERNS`, one regex list per rubric row, and assigns points per match. This is a plain keyword scan with no understanding of context, tone, or whether the language is actually good negotiation practice — it will score a response highly if it happens to contain the right words, and score a genuinely strong response low if it phrases things differently than the patterns expect. Treat it as a rough starting point for the Rubric tab, not a grade, and expect to tune `SCORE_PATTERNS` after seeing real student responses — the current patterns are a first pass, not validated against actual transcripts.

### Voice input — browser support note
The mic button uses the browser's native `SpeechRecognition` / `webkitSpeechRecognition` API — there is no speech-to-text service call, no key, and no cost. Chrome on desktop supports this reliably; Safari and Firefox have inconsistent or no support as of this writing. The button already checks for API availability and shows a plain alert telling the student to type instead if it's unavailable — no separate detection or fallback UI is needed, but verify this still holds if you revisit browser support later.

### Matching the playbook family conventions
- Footer text and copyright line match [[playbook-footer]] exactly — do not edit ad hoc; update the shared footer text in one place if the standard ever changes.
- Version tag in the top-right of the masthead (`v1.2 · web`) should be bumped on any functional change, following the same versioning convention as the PE/PM/TMAY tools.
- Utah red (`#CC0000`) and EB Garamond/DM Sans, matching the Planner and CIF tools, since v1.1.

### Known open items (carried into the next revision)
1. No cliff-length input separate from vesting years (Step 3 caveat above) — still open.
2. No export/print/download button for the calculator itself — still open.
3. ~~Attestation URL check is format-only, not content-verified~~ — resolved differently in v1.2: the check was removed entirely rather than tightened, per the accountability-shift decision in §3 above.
4. ~~Visual system doesn't match PE/PM/TMAY~~ — resolved in v1.1.
5. Data model partially shared: the shared `comp-profile.js` module carries triangulation outputs and initial/counter offer terms across tools. Still pending: the Offer Compensation Planner needs a matching patch to read/write this shared profile, and the Compensation Intelligence Framework needs the link/handoff button into this tool. Both are next steps in the sequencing effort, paused to make the v1.2 changes in this document.
6. The clawback fields (trigger + repayment basis) are a lighter-weight port of the Planner's full tiered clawback schedule — still no leave-before-N-months tier editor here.
7. **New in v1.2:** the heuristic scorer's `SCORE_PATTERNS` are a first-pass keyword list, not validated against real student transcripts — expect to revise after seeing actual usage.
8. **New in v1.2:** no soft nudge exists yet for zero-source usage (see §3 above) — worth considering if data quality turns out to be a real problem in practice.

---

*Developed by Cory Burk, Senior Manager, Program Management · Full-Time MBA Program · David Eccles School of Business.*
*© 2026 University of Utah, David Eccles School of Business. All rights reserved.*
