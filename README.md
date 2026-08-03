# Comp Lifecycle Toolkit

**Full-Time MBA Program · David Eccles School of Business**
Version 1.3 · Three-tool web toolkit

Three standalone tools covering the full arc ('odyssey') of a compensation decision - **ID the industry → Negotiate the target → Model the offer.** Each tool works fully on its own; together they cover a compensation decision start to finish.

This document is the **toolkit-level overview and operational guide**. Each individual tool has its own dedicated README with full usage instructions — this document doesn't repeat those in depth; it explains how the three fit together and how to maintain the toolkit as a whole.

---
 
**▶ Live toolkit hub:** **[Comp Lifecycle Toolkit](https://coryjburk.github.io/toolkit-comp_lifecycle/)**
 
**▶ Kickoff presentation:** **[Comp Lifecycle Toolkit - Kick Off.pptx](https://coryjburk.github.io/toolkit-comp_lifecycle/Comp%20Lifecycle%20Toolkit%20-%20Kick%20Off.pptx)**
 
---

## The Compensation 'Odyssey'

Practice alone first, then connect the dots. This is training before trial...

The three standalones are each a solo "workout" for one skill:
- "ID" (*Compensation Intelligence Framework*): figure out which industries/roles fit you and roughly what they pay.
- "Negotiate" (*Comp Negotiation Tool*): turn that into a real number, then practice actually saying it out loud.
- "Offer" (*Offer Compensation Planner*): once an offer's on the table, model exactly what it's worth.

Use each one by itself, to practice, until it becomes known and natural.

Then the toolkit shows you they're one story, not three ("3-in-1").
- Same three tools
- Same order
- Now connected

A note from "ID" carries into "Negotiate", and a completed negotiation carries into "Offer".

You are not starting from scratch three times, you are walking one path from "what should I even go after" to "here's exactly what this offer is worth and what I should ask for instead."

*Learn each step alone, then walk the whole path together — ID → Negotiate → Offer.*

*"You 'Odyssey' deez tools!!!"*

---

## 1. The three tools, in order

| Step | Tool | Answers | Doc |
|---|---|---|---|
| 1. ID | **Compensation Intelligence Framework** | Which industry/role fits my goals, and roughly what does it pay? | `README_compensation_intelligence_framework.md` |
| 2. Negotiate | **Comp Negotiation Tool** | What should I ask for, and can I practice saying it? | `README_comp_negotiation_tool.md` |
| 3. Offer | **Offer Compensation Planner** | What is this specific offer actually worth? | `README_offer_compensation_planner.md` |

Each tool is a single self-contained HTML file — no build step, no server, no account. Open `index.html` for the toolkit hub page linking all three.

## 2. How the tools connect

The three tools are **intentionally standalone** — none depends on another being open, hosted together, or even existing. Where they do connect:

- **Compensation Intelligence Framework → Comp Negotiation Tool:** a short advisory note (industry pick + rough TCV estimate) you copy and paste in as context. Not parsed — it isn't offer-shaped data, it's a reference point.
- **Comp Negotiation Tool ⇄ Offer Compensation Planner:** structured **transfer text** — a labeled block of offer terms (base, signing, bonus %, equity, vesting) you copy from one tool's "Send This Offer to..." box and paste into the other's "Bring In an Offer from..." box, which auto-fills the matching fields. Works in both directions, Corporate mode only (the Planner's Startup mode has no equivalent on the other side). Clawback and tax rate were removed from the Comp Negotiation Tool as low-value noise, so they're no longer part of this transfer text on that side — the Offer Compensation Planner still models both on its own.

There is also an **invisible, optional convenience**: if all three tools happen to be hosted at the same address and opened in the same browser, a shared `shared/comp-profile.js` module auto-fills some fields without any copy-paste. Treat this as a bonus, never a requirement — the transfer-text boxes are the guaranteed mechanism and work regardless of hosting setup, browser, or device.

## 3. Teaching sequence

Recommended order for introducing this to students: **ID → Negotiate → Offer**, matching the table above.

**An even lighter entry point exists first:** `quick_negotiation_practice.html` is a bare, zero-setup practice rep (pick a scenario, respond, get one piece of feedback, no sources, no rubric). It links out to the full Comp Negotiation Tool for anyone who wants more depth. A copy of this file needs to sit alongside whichever tool links to it, since the link between them is relative — both this repo's `mba_comp_negotiation_tool.html` and `index.html`, and the separately-hosted standalone Comp Negotiation Tool, link to it and each need their own copy.

**Standalone/teaching editions exist for each tool, stripped of the cross-tool transfer-text feature — but they live in entirely separate GitHub repos, not inside this one:**

| Tool | Standalone repo |
|---|---|
| Compensation Intelligence Framework | a separately-owned repo maintained independently by CJ's team (see `README_compensation_intelligence_framework.md` §0) |
| Comp Negotiation Tool | `comp-negotiation-tool` |
| Offer Compensation Planner | `comp_calculator` |

These are **not** kept in version lockstep with the toolkit-integrated tools in this repo — see each standalone README's own "keeping in sync" note. Do not assume a fix made here has propagated to any of them.

---

## 4. Operational guide

### Repo structure
This repo (`toolkit-comp_lifecycle`) contains only the toolkit-integrated tools — the standalone editions are separate repos, see §3.
```
/
├── index.html                                    ← toolkit hub page, links to all three tools
├── compensation_intelligence_framework.html       ← Tool 1 (ID)
├── mba_comp_negotiation_tool.html                 ← Tool 2 (Negotiate) — filename predates the v1.8 display-name change
├── offer_compensation_planner.html                ← Tool 3 (Offer)
├── quick_negotiation_practice.html                ← lightweight entry point, linked from index.html and Tool 2
├── shared/
│   └── comp-profile.js                           ← optional cross-tool auto-fill module
├── README.md                                      ← this file (toolkit-level)
├── README_comp_negotiation_tool.md                ← Tool 2's dedicated manual
├── README_compensation_intelligence_framework.md  ← Tool 1's dedicated manual (fork disclosure in §0)
└── README_offer_compensation_planner.md           ← Tool 3's dedicated manual
```

### Naming conventions
- **Display names vs. filenames deliberately diverge in places.** The Comp Negotiation Tool's file is still `mba_comp_negotiation_tool.html` even though its on-page title reads "Comp Negotiation Tool" — renaming the file would break every existing link (this README, the combined manuals, the hub page), so only display text was changed. Don't assume filename and display name always match.
- **Each tool's dedicated README is named `README_<tool>.md`**, except this toolkit-level one, which occupies the plain `README.md` slot so GitHub displays it as the repo's front page.
- **Standalone/teaching editions live in their own separate repos** (see §3), not as additional files in this one — don't expect to find `*_standalone.html` files here.

### Branding history
- Originally "Compensation Toolkit," renamed to **"Comp Lifecycle Toolkit"** for consistency and to signal the ID → Negotiate → Offer sequence explicitly (a student's compensation cycle recurs across their career — explore, negotiate, evaluate, repeat at the next job).
- The GitHub repo itself was renamed twice to track this: `wip-comp_negotiation` → `toolkit-comp_negotiation` → `toolkit-comp_lifecycle`. GitHub does **not** auto-redirect a Pages site's old URL to a new one on rename — any link to a prior URL will 404. Treat future renames as a real cost, not a free edit.

### Combined manuals
`Comp_Lifecycle_Toolkit_Manual.pdf` and `.docx` are standalone reference documents (not repo files) covering all three tools' usage and the handoff mechanics in one place — built for handing out directly, e.g. to faculty or new coaches, rather than for GitHub.

### Deploying / hosting
1. All files above go in the same repo, `shared/comp-profile.js` at the exact relative path shown.
2. **Settings → Pages** → deploy from `main`, root.
3. The three tools' transfer-text handoff works regardless of deployment details; the optional shared-profile auto-fill only works if all three are hosted together as shown here.

### Known gaps
1. ~~Compensation Intelligence Framework (Tool 1) has no dedicated README yet~~ — resolved: see `README_compensation_intelligence_framework.md`. **Important:** this toolkit's CIF copy is a fork of a separately-owned, separately-hosted standalone tool that CJ's team maintains independently (its own repo, its own versioning, its own data-refresh cadence). The toolkit copy has one addition — a handoff card to the Comp Negotiation Tool — and is not automatically updated when the standalone original changes. See §0 of its README before assuming the two are interchangeable or in sync.
2. **Offer Compensation Planner's standalone/teaching edition has no dedicated README yet** — exists as an HTML file only (see §3).
3. **No version-number tracking at the toolkit level until now** — each tool's own README tracks its own version independently; this document introduces v1.0 as the toolkit-level baseline going forward.
4. This document doesn't duplicate any individual tool's step-by-step usage instructions — see each tool's own README for that.

---

**v1.3 changes:** added "The Compensation 'Odyssey'" section (with its closing joke) right after the hub link, matching its placement in the combined Word/PDF manual — the two toolkit-level documents now carry the same intro content, not just the same tool descriptions.

**v1.2 changes:** removed stale clawback/tax-rate mentions from §2 (both were cut from the Comp Negotiation Tool); added `quick_negotiation_practice.html` to the repo structure and teaching sequence; corrected the repo structure diagram, which incorrectly implied the standalone/teaching editions live as extra files in this repo — they're actually in entirely separate repos, now listed explicitly in §3.

**v1.1 changes:** filled the Compensation Intelligence Framework README gap flagged in v1.0 — added `README_compensation_intelligence_framework.md` and updated §4's known-gaps entry to explain that this toolkit's CIF copy is a fork of a separately-owned standalone tool, not a synced copy of it.


---

*Developed by Cory Burk, Senior Manager, Program Management · Full-Time MBA Program · David Eccles School of Business.*
*© 2026 University of Utah, David Eccles School of Business. All rights reserved.*
