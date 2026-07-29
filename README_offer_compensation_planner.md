# Offer Compensation Planner

**Full-Time MBA Program · David Eccles School of Business**
Version 1.4 · Web tool

A single-file, browser-based tool for modeling a job offer across four years and preparing to negotiate it. Built for graduate business students weighing and countering offers, but usable by anyone.

Everything runs locally in the browser. No account, no server, no data leaves the page.

> **This tool produces estimates for discussion only. It is not financial, tax, or legal advice.** All figures are pre-tax unless you enter a tax rate. Equity figures are illustrative and contingent. Always verify against your written offer letter.

---

## **▶ Live tool:** **[Offer Compensation Planner](https://coryjburk.github.io/toolkit-comp_lifecycle/offer_compensation_planner.html)**

---

## Contents

- [What it does](#what-it-does)
- [Quick start](#quick-start)
- [The two modes](#the-two-modes)
- [How the model is organized: three buckets](#how-the-model-is-organized-three-buckets)
- [Feature guide](#feature-guide)
- [Sending and receiving offers with the Comp Negotiation Tool](#sending-and-receiving-offers-with-the-comp-negotiation-tool)
- [Saving your work](#saving-your-work)
- [Exporting](#exporting)
- [What starts blank (and why)](#what-starts-blank-and-why)
- [Privacy and your data](#privacy-and-your-data)
- [Honest limitations](#honest-limitations)
- [Accessibility](#accessibility)
- [Deploying to GitHub Pages](#deploying-to-github-pages)
- [Browser support](#browser-support)

---

## What it does

- Models base salary, bonus, benefits, and equity over four years.
- Keeps **cash, benefits, and equity separate** so a contingent number is never mistaken for spendable cash.
- Lets you build a **counter-offer** and see the four-year difference live.
- Captures the **non-cash** parts of a negotiation (PTO, remote, title, and so on).
- Records **clawback** and **vesting-retention** terms from your offer.
- **Exchanges offer data** with the companion Comp Negotiation Tool via copy-paste transfer text — no re-typing your numbers into a second tool.
- **Exports** a summary you can copy, download as CSV, or print to PDF.
- **Saves** multiple named negotiations locally so you can compare rounds over time.

---

## Quick start

1. Open the tool and pick a mode: **Startup / Early-Stage Offer** or **Traditional Corporate Offer**.
2. Fill in the fields from your offer letter. Everything starts blank; the model updates as you type.
3. (Optional) Click **Model a counter-offer** to compare your ask against the current offer.
4. (Optional) Flag your **non-cash** asks and record any **clawback / vesting** terms.
5. (Optional, Corporate mode) Bring in an offer you already set up in the Comp Negotiation Tool, or send this one over there — see [Sending and receiving offers](#sending-and-receiving-offers-with-the-comp-negotiation-tool).
6. **Copy**, **download CSV**, or **print/PDF** the summary, and **save** the negotiation from the toolbar for later.

---

## The two modes

**Startup / Early-Stage Offer** — for offers built around phantom equity or Stock Appreciation Rights (SARs), KPI-weighted bonuses, and stipend-style benefits (QSEHRA, phone).

**Traditional Corporate Offer** — for offers built around a target bonus, signing bonus, RSUs with refresh grants, and standard benefits (401(k) match).

Pick the one that matches the offer you actually hold. Each mode is a template, not a comparison — you model one offer at a time.

---

## How the model is organized: three buckets

The tool deliberately keeps three things apart, because they are not interchangeable:

| Bucket | What it is | How reliable |
|---|---|---|
| **Cash** | Salary + bonus (+ signing, corporate) | Pre-tax, but dependable |
| **Benefits** | Estimated annual value of perks | Real value, but often estimated |
| **Equity** | Phantom equity / SARs (startup) or RSUs (corporate) | Contingent — may be worth $0 |

The four-year cash-and-benefits subtotal is shown as its own figure, and **equity is excluded from it** because equity is not guaranteed money. That separation is the point of the tool.

---

## Feature guide

### Base salary and bonus
Enter Year 1 base and an annual growth/escalator rate; the tool compounds both across four years. In startup mode the bonus is **KPI-weighted** (revenue 50%, expenses 25%, margin 25%); in corporate mode it is a **target percentage** of base. Bonuses shown are targets, not guarantees.

### Benefits
- **Startup:** QSEHRA health allowance (tax-free) and phone/comms are standard fields.
- **Corporate:** the **401(k) match** is modeled and counts toward the benefits total. **Employer Health** sits under *For Reference (not in totals)* — it is recorded and saved but deliberately excluded from the model.

### Other benefits (dynamic) — read this before you use it
In corporate mode you can click **+ Add benefit** to add any perk your offer includes (HSA seed, tuition, commuter, wellness stipend, and so on) as a named row with an annual dollar value. Add as many as apply; each appears as its own line and rolls into the benefits total. Nothing appears until you add it, so there are no blank rows.

**A judgment call, on purpose.** Unlike salary or the 401(k) match — which the tool *derives* — the dollar value of an "other" benefit is **your own estimate**. A $5,000 wellness stipend is only worth $5,000 to you if you would actually use it. Garbage in, garbage out. Treat these figures as your valuation, not a fact, and be honest with yourself about which perks you will genuinely use before you let them pad the total.

### Equity

**Startup (phantom equity / SARs).** Because startup equity is a distribution of outcomes, the tool shows a **range**, not a single number:

- A **$0 floor** — the common real outcome if there is no liquidity event or the valuation stays flat.
- **Downside / Expected / Upside** cases from the three valuations you enter.

This value pays out only at a liquidity event, is contingent on the company reaching the valuation, and is taxed as ordinary income when paid. If you enter valuations out of order, the tool warns you and keeps the range consistent.

**Corporate (RSUs).** Initial grant plus stacked annual refreshes, vested on your chosen schedule and modeled **flat at the grant price** (actual value depends on the share price at vest). RSUs are taxed as ordinary income at vest.

### Vesting forfeiture / retention
A separate, editable schedule for **how much equity you keep if you leave early** (months of tenure → % retained). This is distinct from a cash clawback — no money changes hands, you simply keep less of your equity. Left empty, the standard assumption applies: you keep what has vested and forfeit the rest.

### Clawback (cash recovery)
Records the terms under which the company can recover **paid cash** (signing/relocation bonus) if you leave early: editable tiers, the trigger (voluntary only vs. any separation vs. for-cause), and gross vs. net repayment. The tool flags the terms worth pushing back on — for example, a clawback that fires even on a layoff, or a "gross" basis that makes you repay pre-tax dollars you never received.

### Non-cash negotiables
A checklist of the items that are often the easiest wins — PTO, remote/flexible schedule, title, start date, relocation, professional-development budget, review timing, severance, extra equity. Mark each as *Not raising*, *Want to ask*, or *Have it*, with a note. No dollar values; these are captured for your prep and carried into exports.

### Counter-offer
Click **Model a counter-offer** to open a panel pre-filled from your current numbers. Adjust the negotiable levers and see the four-year difference (cash, benefits, equity) side by side, plus a short **ask-priority** note: base salary first (it compounds), then the mode-specific lever, with one-time items like a signing bonus last. In Corporate mode, the counter-offer's vesting schedule, clawback cash/trigger/basis, and tax rate are set **independently** from the initial offer — they don't default to matching it.

### After-tax estimate (optional)
Enter a single blended effective rate to see an estimated after-tax cash figure. This is a **rough budgeting estimate only** — it ignores brackets, state tax, and the higher supplemental withholding on bonuses and equity. It is **not a number to negotiate on**; negotiate on the pre-tax figures.

---

## Sending and receiving offers with the Comp Negotiation Tool

This tool is one of three standalone tools in the Comp Lifecycle Toolkit — the others are the **Comp Negotiation Tool** (target-setting and negotiation practice) and the **Compensation Intelligence Framework** (industry/COL exploration). Each works fully on its own, but Corporate-mode offers can move between this tool and the Comp Negotiation Tool via plain copy-paste text, so you don't have to re-type the same offer twice.

- **Bring In an Offer from the Comp Negotiation Tool** (near the top of Corporate mode): paste the transfer text you copied from that tool's Step 3, then click **Parse & fill corporate fields**. This fills base, signing bonus, bonus %, equity grant, vesting years, clawback trigger/basis, and tax rate — for both the initial offer and the counter, if the counter is present in what you paste.
- **Send This Offer to the Comp Negotiation Tool** (near the bottom of Corporate mode, after the counter-offer panel): generates matching transfer text for you to copy over there.
- **Startup mode can't be exchanged either direction** — the Comp Negotiation Tool has no equivalent for SAR stake, phantom equity, or KPI-weighted bonuses. Use Corporate mode if you need to transfer an offer.
- Nothing sent this way is verified for accuracy — review every filled value before relying on it, same as anything else you enter directly.

---

## Saving your work

- **Autosave.** Your working draft is saved continuously in your browser. The toolbar shows the status.
- **Saved negotiations.** Open **Saved negotiations** in the toolbar to name and save the current negotiation, then load or delete past ones. Each saved entry captures the full state — mode, all inputs, tiers, checklist, other benefits, and counter-offer — and restores everything on load. Useful for comparing rounds or different offers over time.
- **Reset current form** clears the working draft back to blank but **keeps** your saved negotiations.

---

## Exporting

- **Copy summary** — a clean text summary (totals, equity range, counter deltas, non-cash asks) to paste into an email or notes.
- **Download CSV** — every section (cash and benefits by year, four-year totals, equity range, retention, clawback, non-cash asks) for a spreadsheet.
- **Print / PDF** — use your browser's *Print → Save as PDF* for a clean, dated one-page summary (the input panel is hidden automatically).

---

## What starts blank (and why)

Every input starts empty — number fields and dropdowns — so the tool never shows fabricated example numbers you might mistake for real ones. Structural dropdowns (vesting schedules, clawback trigger/basis) start unset too, and where one is required to compute a value, the tool shows a prompt like *"Select a vesting schedule to model this"* instead of silently assuming a default. Fill in what your offer actually says.

---

## Privacy and your data

All data stays in your browser using `localStorage`. Nothing is transmitted to any server; there is no analytics, tracking, or account. Clearing your browser storage (or using another device/browser) removes saved negotiations.

> `localStorage` is blocked inside some embedded/preview sandboxes. If saving appears unavailable, the tool says so and still works — persistence functions normally on a standard GitHub Pages deployment.

---

## Honest limitations

- **Pre-tax by default.** Totals are pre-tax unless you enter a rate, and the after-tax estimate is a single blended rate, not a real tax calculation.
- **Equity is illustrative and contingent.** Startup equity commonly returns $0; corporate RSU value depends on the share price at vest.
- **"Other" benefit values are your estimates**, not derived — see the callout above.
- **Clawback enforceability varies by state**, and some states now restrict repayment clauses. Confirm locally.
- **One offer at a time.** The tool models a single offer per mode; it is not a two-offer side-by-side comparator or a cost-of-living calculator.
- **Startup-mode transfers aren't supported.** The Comp Negotiation Tool has no SAR/phantom-equity/KPI-bonus model to receive them.
- **Not advice.** This is a modeling and preparation aid, not financial, tax, or legal advice.

---

## Accessibility

Form inputs are programmatically associated with their labels, dynamic result updates are announced through a polite live region, and the mode tabs and expandable panels expose their state to assistive technology. Numeric deltas use both color and a sign so they are not conveyed by color alone.

---

## Deploying to GitHub Pages

1. Add `offer_compensation_planner.html` (and this `README.md`) to your repository.
2. In the repository, go to **Settings → Pages** and set the source to your default branch (root).
3. After Pages builds, open `https://coryjburk.github.io/<REPO-NAME>/offer_compensation_planner.html`.

> Confirm the username (`coryjburk`) and the final Pages URL before sharing the link. This tool is currently deployed alongside its companion tools at `toolkit-comp_lifecycle`.

---

## Browser support

Any current desktop or mobile browser (Chrome, Edge, Firefox, Safari). No build step, no dependencies, no internet connection required after the page loads — it is one self-contained HTML file.

---

_Developed by Cory Burk, Senior Manager, Program Management · Full-Time MBA Program · David Eccles School of Business.
© 2026 University of Utah, David Eccles School of Business. All rights reserved._
