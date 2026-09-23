---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["high-voltage.html","low-voltage.html","chassis.html","drivetrain.html","suspension.html","vehicle-dynamics.html","brakes.html","cooling.html","ergonomics.html","aerodynamics.html","composites.html","business.html","styles.css"]
---

## Scope

Home page (`index.html`), Persuade mode: recruits prospective members and represents the
team publicly (judges, sponsors, alumni). Covers the hero, the Our Car section, the
subteam grid, and the sponsor wall, and extends to the shared header/footer chrome and
the subteam-card and media-plate components reused by every subteam page.

## Direction contract

**THESIS:** The page reads as a working engineering document riveted to a warning
placard — a real spec sheet with a hazard tag bolted on — refusing the generic dark
SaaS-gradient-hero-over-glass-cards arrangement this category defaults to.

**OWN-WORLD:** Ground is near-black steel/chassis dark (not a flat dark neutral);
Clarkson green carries structural panels and dividers; Clarkson gold is promoted to a
real hazard-stripe accent (diagonal black/gold stripe bands, corner tags, rivet-bolt
dots) doing 30%+ of visual work, not a hover tint. Blueprint white/pale-gold ruled
lines, corner registration crosshairs, and dimension leader-lines with arrows frame the
hero photo, and real photographs are mounted as numbered figure plates. Type: Oswald
(condensed, bold caps) for stenciled headlines; Barlow for body/UI text (shares
Oswald's industrial-signage lineage); IBM Plex Mono reserved narrowly for
dimension/spec-code labels (the family IBM engineered for technical documentation —
used here for exactly that function, not decoration).

**STORY:** A visitor understands in one viewport that this is a real, hands-on student
engineering team (not a template) building an electric race car from scratch; they see
the 12 subteams as labeled spec plates and can act (open a subteam, or read "recruit"
framing) without hunting.

**FIRST VIEWPORT:** Full-bleed team photo as a "drawing sheet": thin ruled border with
corner crosshairs, a diagonal black/gold hazard-stripe band crossing one corner like a
riveted placard, and a bold stenciled headline overlaid on the photo. The lower corners
stay clear of panels so the team's faces are not covered. Primary path (scroll cue) sits
inside this frame, not floating generically.

**FORM:** Grounded direction "Hazard & Blueprint" (OSHA-style high-voltage warning
signage fused with technical blueprint drafting) — user-selected via the structured
question tool over the assigned/pick/challenger set from `concept-seed --scope
direction --mode persuade` (seed key `483725be`); this was card 2 of that round (my
own top-ranked grounded candidate, presented as IMPECCABLE'S PICK), chosen over the
seed's assigned build (an instrumentation/nixie-tube-counter world that won its
fused weighing against my original assigned candidate on both audience-identification
and product-clarity axes, per that round's verdict) and over the plain "clean modern"
standing exit. Code-led (no image generation available this session).

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish
review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Since the original build

- The drafting title block (Title / Sheet / Scale / Location, hero bottom-left) has been
  removed from the hero, its CSS deleted, and its component entry retired from DESIGN.md
  and `design.json`. It covered the team photo; do not reintroduce it. The `720px`
  title-block-hide breakpoint went with it.
- An **Our Car** section now sits between the hero and the subteam grid: the glamour shot
  in a media plate beside copy framing the car as the team's first competition entry and
  current testing platform. The hero scroll cue points at it, and a `.cta-link`
  ("Learn More") under the copy leads to `our-car.html` — a placeholder page on the
  subteam-page chrome, under construction until the car breakdown is written.
- A **Leadership** section sits between the subteam grid and the sponsors: centered grids
  of portrait lead cards, each linking to its own `lead-<first>-<last>.html` page with the
  portrait left and a bio right. Two rows of same-size cards — officers first (Isabelle
  Wells, chief engineer/captain/electrical lead; Ryan Withers, co-captain/chassis lead),
  then the subteam leads (Matt Whispell, secretary/electrical; Greyson Howard, suspension,
  vehicle dynamics and aerodynamics). Headshots live in `images/subteam_leads/`; every
  lead has one, and all four bios are still under construction. Each grid centers a
  partly-filled row and fills out as more leads are photographed and written up.
- A **Sponsors** wall closes the page. The header nav carries all four sections in page
  order (Our Car / Subteams / Leadership / Sponsors) and is now identical on every page
  in the site, with interior pages linking to `index.html#…`. The leads section's anchor
  is `#leadership`. Sponsor logos are ranked by plate width alone — the
  support levels are never named on the page or in class names — and each dark logo is
  backlit by alpha-tracing `drop-shadow` halo passes rather than boxed on a white plate.
  See the Sponsor Logo component and the Backlight-Not-Box Rule in DESIGN.md.

## Unresolved decisions

- Subteam-card "spec plate" and media-plate treatments apply site-wide as the
  header/footer chrome is shared; subteam interior pages are being filled in over time
  and inherit the shared header/footer.
- No new imagery is generated (no image-gen tool available); the hazard/blueprint
  framing is built entirely from CSS/SVG line-art plus the real photo assets. Sponsor
  logos are the sponsors' own artwork and are never recolored.
