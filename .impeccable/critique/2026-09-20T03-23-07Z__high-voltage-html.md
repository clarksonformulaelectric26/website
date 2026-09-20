---
target: high-voltage.html
total_score: 22
max_score: 28
na_heuristics: 5,7,10
p0_count: 0
p1_count: 2
target_identity: "file:C:\\Users\\mattw\\managed_fsae_code\\website\\high-voltage.html"
target_fingerprint: "sha256:7c4cd89241bb48273d9eb697794c9c544516d05e543e1d2709df40fbe144824a"
target_path: "C:\\Users\\mattw\\managed_fsae_code\\website\\high-voltage.html"
timestamp: 2026-09-20T03-23-07Z
slug: high-voltage-html
closed: true
---
## High Voltage Page — Design Critique

**Method: dual-agent** (A: independent design-review sub-agent · B: independent detector + browser-evidence sub-agent)

### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | Rev-tags are a good status signal; docked for the focus-loss bug in #9 |
| 2 | Match System / Real World | 4/4 | Real part numbers, real footage, real photography |
| 3 | User Control and Freedom | 3/4 | Clear escape routes exist, but no in-page jump links on a 6-section page |
| 4 | Consistency and Standards | 4/4 | Spec-sheet/media-plate/rev-tag/fig-number used identically throughout |
| 5 | Error Prevention | n/a | Static Persuade page, no forms/destructive actions |
| 6 | Recognition Rather Than Recall | 4/4 | Spec values always visible; Fig. NN keeps image/caption correlation trivial |
| 7 | Flexibility and Efficiency | n/a | No meaningful power-user path on a short recruiting page |
| 8 | Aesthetic and Minimalist Design | 3/4 | Disciplined; docked for Fig. 03's disproportionate height |
| 9 | Error Recovery | 1/4 | Failed image load collapses to an unstyled 38px sliver, no fallback box |
| 10 | Help and Documentation | n/a | Captions/spec labels already serve as documentation |
| **Total** | | **22/28** | **Good (79%)** |

### Design Specificity Verdict

Design review: clears the bar decisively — exact cell part numbers, exact architecture strings, a real Ansys 2026 R1 thermal sim, a real YouTube test clip, six unstaged workshop photos make DESIGN.md's "real spec sheet, not marketing template" north star concrete. Only the shared header/hero/footer chrome is generic (reasonable, reused across 11 still-blank pages).

Deterministic scan: 2 advisory findings from `impeccable detect --json high-voltage.html`, both confirmed false positives — `--line-soft` is a documented named token, and `repeating-stripes-gradient` is unused shared `.hazard-tag` CSS not present in this page's markup. The live overlay pass surfaced a known/already-accepted `.logo` uppercase flag plus an unexplained "cyan gradient" flag that matches nothing in the palette (treated as overlay noise). Net: no real deterministic violations on this page.

### Overall Impression

The strongest page on the site so far — real specs, real failure-mode simulation, real test footage, styled with discipline. The gap is purpose, not craft: for a recruiting site, the page builds credibility and then has no ask. The other two real issues are accessibility bugs that will replicate across the next 11 subteam pages if not fixed at the shared-component level now.

### What's Working

1. The dueling spec sheets are the design system doing its job — a genuine engineering before/after, not decoration.
2. The photography reinforces the visual language instead of fighting it.
3. The Fig. 01-06 captioning convention reads like an actual lab report, serving "credible without overstating" with zero fabricated claims.

### Priority Issues

[P1] No recruiting call-to-action anywhere on the page.
Why it matters: PRODUCT.md's stated purpose is recruiting; this is the most evidence-rich, most shareable page on the site and converts zero interest into a next step.
Fix: add a lightweight CTA near .back-link reusing the existing gold-chip/mono-label language.
Suggested command: /impeccable clarify

[P1] Keyboard focus is lost on the YouTube embed with zero visible indication.
Why it matters: verified via Tab order + computed styles — focus jumps ~1300px down the page with no auto-scroll and no visible outline (outline-style: none on the iframe). Will repeat on every future embedded-video page.
Fix: force scroll-into-view on iframe focus; add a .media-embed:focus-within visible treatment.
Suggested command: /impeccable audit

[P2] Broken-image edge case has no graceful fallback.
Why it matters: .media-plate img has no reserved aspect-ratio (unlike .media-grid's, which sets 4/5); a verified simulated 404 collapsed the figure to a 38px unstyled sliver.
Fix: give .media-plate img a default aspect-ratio (16/9).
Suggested command: /impeccable harden

[P2] Comparing 2026 vs 2025 specs is a working-memory burden.
Why it matters: the Motor Controller section and Fig. 03's oversized photo separate the two spec sheets, forcing back-and-forth scrolling to compare four numbers.
Fix: compact comparison strip, or reduce the visual distance between the two spec sheets.
Suggested command: /impeccable layout

[P3] Fig. 03 (motor-controller photo) is uncropped and disproportionately tall.
Why it matters: verified at 794x1059px, roughly 2x any other figure, breaking the plate rhythm.
Fix: apply the same object-fit:cover + fixed-aspect-ratio treatment used in .media-grid.
Suggested command: /impeccable layout

### Persona Red Flags

Jordan (confused first-timer): zero wayfinding beyond logo + one nav link; a direct link to this page gives no context for "HV . 01" or the spec-plate convention.

Sam (accessibility-dependent): the confirmed focus-loss bug is a tested failure, not hypothetical; compounded by the broken-image fallback gap.

Casey (distracted mobile user): fixed header consumes ~16% of a 375px viewport through a content-dense scroll; Fig. 03's oversized photo adds to one-handed scroll fatigue.

### Minor Observations

- rev-tag modifiers differ by both color and text, not color alone -- an accessibility win.
- Intro paragraph has no heading of its own, relying on the hero H1.
- No Open Graph/meta-description tags for external sharing.

### Questions to Consider

1. Should the homepage signal which subteams are actually built out, given the contrast with 11 placeholder pages?
2. Was the missing recruiting CTA deliberate (subteam pages stay documentary) or a gap to fix once before it propagates?
3. Does the real photography (Ansys render, workshop photos) need a light unifying treatment to feel curated into the hazard/blueprint world?
