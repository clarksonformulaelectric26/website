---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["high-voltage.html","low-voltage.html","chassis.html","drivetrain.html","suspension.html","vehicle-dynamics.html","brakes.html","cooling.html","ergonomics.html","aerodynamics.html","composites.html","business.html","styles.css"]
---

## Scope

Home page (`index.html`), Persuade mode: recruits prospective members and represents the
team publicly (judges, sponsors, alumni). Extends to the shared header/footer chrome and
subteam-card component reused by every subteam page.

## Direction contract

**THESIS:** The page reads as a working engineering document riveted to a warning
placard — a real spec sheet with a hazard tag bolted on — refusing the generic dark
SaaS-gradient-hero-over-glass-cards arrangement this category defaults to.

**OWN-WORLD:** Ground is near-black steel/chassis dark (not a flat dark neutral);
Clarkson green carries structural panels and dividers; Clarkson gold is promoted to a
real hazard-stripe accent (diagonal black/gold stripe bands, corner tags, rivet-bolt
dots) doing 30%+ of visual work, not a hover tint. Blueprint white/pale-gold ruled
lines, corner registration crosshairs, dimension leader-lines with arrows, and a real
drafting title block (sheet no., scale, rev) frame the hero photo. Type: Oswald
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
riveted placard, a drafting title block (bottom corner) carrying team name/logo styled
as DWG NO./SCALE/REV fields, bold stenciled headline overlaid on the photo, one
dimension leader-line annotating a real part of the photo (e.g. pointing at the car).
Primary path (scroll cue) sits inside this frame, not floating generically.

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

## Unresolved decisions

- Subteam-card "spec plate" treatment and hero title-block content apply site-wide as
  the header/footer chrome is shared; subteam interior pages stay placeholder content
  but should inherit the shared header/footer once this lands.
- No new imagery is generated (no image-gen tool available); the hazard/blueprint
  framing is built entirely from CSS/SVG line-art plus the existing real photo asset.
