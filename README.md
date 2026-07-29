# Comp Lifecycle Toolkit

**Full-Time MBA Program · David Eccles School of Business**
Version 1.0 · Three-tool web toolkit

Three standalone tools covering the full arc of a compensation decision: **ID the industry → Negotiate the target → Model the offer.** Each tool works fully on its own; together they cover a compensation decision start to finish.

This document is the **toolkit-level overview and operational guide**. Each individual tool has its own dedicated README with full usage instructions - this document doesn't repeat those in depth, it explains how the three fit together and how to maintain the toolkit as a whole.

---

**▶ Live toolkit hub:** **[Comp Lifecycle Toolkit](https://coryjburk.github.io/toolkit-comp_lifecycle/)**

---

## 1. The three tools, in order

| Step | Tool | Answers | Doc |
|---|---|---|---|
| 1. ID | **Compensation Intelligence Framework** | Which industry/role fits my goals, and roughly what does it pay? | `README_compensation-intelligence-framework-vc.md` |
| 2. Negotiate | **Comp Negotiation Tool** | What should I ask for, and can I practice saying it? | `README_comp_negotiation_tool.md` |
| 3. Offer | **Offer Compensation Planner** | What is this specific offer actually worth? | `README_offer_compensation_planner.md` |

Each tool is a single self-contained HTML file — no build step, no server, no account. Open `index.html` for the toolkit hub page linking all three.

## 2. How the tools connect

The three tools are **intentionally standalone** — none depends on another being open, hosted together, or even existing. Where they do connect:

- **Compensation Intelligence Framework → Comp Negotiation Tool:** a short advisory note (industry pick + rough TCV estimate) you copy and paste in as context. Not parsed — it isn't offer-shaped data, it's a reference point.
- **Comp Negotiation Tool ⇄ Offer Compensation Planner:** structured **transfer text** — a labeled block of offer terms (base, signing, bonus %, equity, vesting, clawback, tax rate) you copy from one tool's "Send This Offer to..." box and paste into the other's "Bring In an Offer from..." box, which auto-fills the matching fields. Works in both directions, Corporate mode only (the Planner's Startup mode has no equivalent on the other side).

There is also an **invisible, optional convenience**: if all three tools happen to be hosted at the same address and opened in the same browser, a shared `shared/comp-profile.js` module auto-fills some fields without any copy-paste. Treat this as a bonus, never a requirement — the transfer-text boxes are the guaranteed mechanism and work regardless of hosting setup, browser, or device.

## 3. Teaching sequence

Recommended order for introducing this to students: **ID → Negotiate → Offer**, matching the table above. Two standalone/teaching editions also exist, stripped of the cross-tool transfer-text feature, for teaching each tool's mechanics in isolation before showing how the full toolkit connects:

- `mba_comp_negotiation_tool_standalone.html` + `README_comp_negotiation_tool_standalone.md`
- `offer_compensation_planner_standalone.html` (no dedicated README yet — see §5)

These are separate files from the live toolkit tools and are **not** kept in version lockstep with them — see each standalone README's own "keeping in sync" note.

---

## 4. Operational guide

### Repo structure
```
/
├── index.html                                    ← toolkit hub page, links to all three tools
├── compensation_intelligence_framework.html       ← Tool 1 (ID)
├── mba_comp_negotiation_tool.html                 ← Tool 2 (Negotiate) — filename predates the v1.8 display-name change
├── offer_compensation_planner.html                ← Tool 3 (Offer)
├── shared/
│   └── comp-profile.js                           ← optional cross-tool auto-fill module
├── README.md                                      ← this file (toolkit-level)
├── README_comp_negotiation_tool.md                ← Tool 2's dedicated manual
├── README_offer_compensation_planner.md           ← Tool 3's dedicated manual
├── mba_comp_negotiation_tool_standalone.html       ← teaching edition of Tool 2
└── README_comp_negotiation_tool_standalone.md      ← its manual
```

### Naming conventions
- **Display names vs. filenames deliberately diverge in places.** The Comp Negotiation Tool's file is still `mba_comp_negotiation_tool.html` even though its on-page title reads "Comp Negotiation Tool" — renaming the file would break every existing link (this README, the combined manuals, the hub page), so only display text was changed. Don't assume filename and display name always match.
- **Each tool's dedicated README is named `README_<tool>.md`**, except this toolkit-level one, which occupies the plain `README.md` slot so GitHub displays it as the repo's front page.
- **Standalone/teaching editions** are named `<tool-file>_standalone.html` with a matching `README_<tool>_standalone.md`.

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
1. **Compensation Intelligence Framework (Tool 1) has no dedicated README yet** — it's the least-reviewed of the three; a deeper pass was deferred pending testing feedback on the other two.
2. **Offer Compensation Planner's standalone/teaching edition has no dedicated README yet** — exists as an HTML file only (see §3).
3. **No version-number tracking at the toolkit level until now** — each tool's own README tracks its own version independently; this document introduces v1.0 as the toolkit-level baseline going forward.
4. This document doesn't duplicate any individual tool's step-by-step usage instructions — see each tool's own README for that.

---

*Developed by Cory Burk, Senior Manager, Program Management · Full-Time MBA Program · David Eccles School of Business.*
*© 2026 University of Utah, David Eccles School of Business. All rights reserved.*
