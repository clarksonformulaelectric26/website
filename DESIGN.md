---
name: Clarkson Formula Electric Knights
description: A student Formula SAE Electric team's site, styled as a hazard-taped engineering blueprint
colors:
  clarkson-green: "#004e42"
  clarkson-green-dark: "#00332b"
  clarkson-gold: "#ffcd00"
  ink: "#0a0f0c"
  panel: "#101c17"
  panel-raised: "#142620"
  text: "#f3f0e6"
  text-muted: "#b3c7b9"
  hazard-black: "#050505"
typography:
  display:
    fontFamily: "Oswald, \"Arial Narrow\", sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "0.01em"
  body:
    fontFamily: "Barlow, \"Segoe UI\", system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "\"IBM Plex Mono\", Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.08em"
spacing:
  sm: "8px"
  md: "16px"
  lg: "28px"
  xl: "44px"
components:
  card-subteam:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
    padding: "0"
  card-subteam-hover:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.clarkson-gold}"
  button-back:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    padding: "0.6rem 1.2rem"
  button-back-hover:
    backgroundColor: "transparent"
    textColor: "{colors.clarkson-gold}"
---

# Design System: Clarkson Formula Electric Knights

## Overview

**Creative North Star: "The Hazard-Taped Blueprint"**

The site reads as a working engineering document that got a warning placard bolted onto
it — a real spec sheet, not a marketing template. It refuses the generic dark
SaaS-gradient-hero-over-glass-cards arrangement that AI-generated interfaces default to
by borrowing its material world from two real things a Formula SAE Electric team
actually handles: OSHA-style high-voltage warning signage and technical blueprint
drafting. Ground is near-black chassis ink, not a flat neutral; Clarkson green carries
structural bands; Clarkson gold is promoted to a real hazard-stripe accent doing visible
work (ribbon tags, spec codes, hover states) rather than a soft hover tint.

The system is deliberately flat and line-drawn rather than soft and glassy: ruled
borders, corner registration crosshairs, rivet-dot corners, and diagonal hazard-tape
trim carry the texture that gradients and blur would otherwise be reached for. Nothing
is rounded except one small chip corner; everything else meets at a hard, drafted edge.

**Key Characteristics:**
- Near-black chassis-dark ground with the two Clarkson greens doing structural work, gold reserved for real hazard/accent duty.
- Flat, line-drawn depth (ruled borders, crosshairs, rivets) — no glass, no soft shadows standing in for structure.
- Condensed stenciled display type (Oswald) paired with a signage-lineage body face (Barlow) and a narrowly-scoped mono (IBM Plex Mono) for spec/dimension labels only.
- Every subteam is a numbered "spec plate," not a generic icon card.

## Colors

Near-black and the two Clarkson greens form the ground; gold is the one color allowed to shout.

### Primary
- **Clarkson Green** (`#004e42`): the lighter of the two brand greens. Carries the header bar once scrolled solid, and the top of every hero-gradient band (subteam-page hero, footer transitions).
- **Clarkson Green Dark** (`#00332b`): the deeper brand green. Used at the bottom of hero-gradient bands, distinct from the near-black ink background it fades into.

### Secondary
- **Hazard Gold** (`#ffcd00`): the system's one accent, and it is used like real hazard tape — diagonal ribbon tags, spec-code chips, headline emphasis words, hover borders/text. Never a gradient, never a soft tint; always a flat, confident fill or stroke.

### Neutral
- **Chassis Ink** (`#0a0f0c`): the page's base background — near-black with a faint green cast, not a flat gray-black.
- **Panel** (`#101c17`): subteam "spec plate" card surfaces, one step up from ink.
- **Panel Raised** (`#142620`): the dot-grid placeholder plate inside each card, one step up from Panel.
- **Warm Plate White** (`#f3f0e6`): primary text — a warm off-white (like aged paper/a photographic print), never pure `#fff`.
- **Signal Sage** (`#b3c7b9`): secondary/muted text — green-tinted, never neutral gray, so it stays inside the world's hue family. Meets 4.5:1 on both Chassis Ink and Clarkson Green.
- **Hazard Black** (`#050505`): the black half of every hazard-stripe pairing (ribbon trim, spec-code text on hover).

### Named Rules
**The Two-Green Rule.** Structural bands (the solid header, footer border, subteam-page hero gradient) use only Clarkson Green and Clarkson Green Dark — never a third arbitrary dark neutral invented for convenience.

**The Hazard Accent Rule.** Gold only appears as a real hazard/accent device — a ribbon, a spec-code chip, a hover state, an emphasized word — never as a decorative gradient or a low-opacity tint standing in for "brand color."

## Typography

**Display Font:** Oswald (with Arial Narrow, sans-serif fallback)
**Body Font:** Barlow (with Segoe UI, system-ui fallback)
**Label/Mono Font:** IBM Plex Mono (with Consolas fallback)

**Character:** A condensed, stenciled industrial display face over a workhorse signage-lineage body sans, with a mono reserved strictly for the things a real technical drawing sets in monospace — spec codes, dimension labels, drafting title-block fields.

### Hierarchy
- **Display** (600, `clamp(2rem, 5vw, 3.75rem)`, 1.1 line-height, uppercase): the hero H1 and subteam-page H1s. Always uppercase, always Oswald.
- **Headline** (600, `2rem`, uppercase): section headings ("Our Subteams") and card titles ("High Voltage").
- **Body** (400, `1rem`–`1.2rem`, 1.5 line-height): hero paragraph and placeholder copy. Sentence case — body text is never set uppercase regardless of the mono/label temptation.
- **Label** (600, `0.72–0.78rem`, uppercase, 0.05–0.1em tracking): nav links, spec-code chips, the drafting title block, footer. This is the one place uppercase is earned — short functional labels, never full sentences.

### Named Rules
**The Sentence-Case Body Rule.** Any text long enough to be a sentence (hero copy, placeholder paragraphs) stays in sentence case even when set in the mono label font. Uppercase is reserved for labels under roughly a phrase in length.

## Layout

Single-column, full-bleed hero pinned behind the scrolling page (`position: fixed` hero + `margin-top: 100vh` content), with the hero's background-to-ink opacity crossfading over the first viewport height as the user scrolls — the hero never abruptly cuts away.

The hero is framed like a technical drawing sheet: a ruled border inset 28px from the viewport edge, with a registration crosshair mark at each of its four corners. A drafting title block (Title / Sheet / Scale / Location) anchors the bottom-left corner; it is hidden below 720px width rather than cramped.

Below the hero, subteams render as a responsive card grid (`repeat(auto-fill, minmax(240px, 1fr))`, 1.5rem gap) — one "spec plate" per subteam, each stamped with a two-letter/two-digit spec code (e.g. `HV·01`) in its top-left corner.

## Elevation & Depth

Flat by default. Depth comes from ruled lines, corner crosshairs/rivet-dots, and border-color shifts on hover — not shadows or glass. The only true `box-shadow` in the system is a soft, blurred drop shadow under the diagonal hazard-tag ribbon (`0 6px 18px rgba(0,0,0,0.45)`), justified because the ribbon reads as a physically bolted-on object; nothing else casts a shadow.

### Named Rules
**The Flat Plate Rule.** Cards, panels, and the title block sit flush with their background at rest — no ambient shadow. The only motion is a hairline border brightening to gold and a slight lift (`translateY(-4px)`) on hover.

## Shapes

Hard, drafted corners everywhere — no `border-radius` on cards, panels, the title block, or buttons. The one exception is the spec-code chip's bottom-right corner (3px), a small nod to a stamped label rather than a drawn one. Rivet-dot corners (four small radial-gradient dots per card) and crosshair registration marks (an SVG circle + crosshair) are the system's recurring "authored hardware" motif, standing in for the rounded-corner-plus-shadow language a generic card would reach for.

## Components

### Buttons (Back link)
- **Shape:** rectangular, no radius; a single hairline border (`--line-strong`) at rest.
- **Style:** uppercase mono label, `0.8rem`, 0.05em tracking.
- **Hover / Focus:** border and text both shift to Hazard Gold; `:focus-visible` gets a 2px gold outline offset 3px (site-wide, not button-specific).

### Cards (Spec Plates)
- **Corner Style:** square; four faint rivet-dots (radial-gradient) mark the corners instead of a radius.
- **Background:** Panel (`#101c17`), with a Panel Raised (`#142620`) dot-grid plate for the pending photo area.
- **Shadow Strategy:** none at rest; see Elevation.
- **Border:** 1px hairline (`--line-soft`), brightening to Hazard Gold on hover.
- **Signature detail:** a gold-on-black spec-code chip (`HV·01`) pinned to the top-left corner; on hover it inverts to gold background / black text.
- **Motion:** cards start faded/offset (`opacity: 0`, `translateY(18px)`) and settle into place as they reach the viewport, staggered ~30ms apart; this only ever runs once per card.

### Navigation (Header)
- Fixed, transparent-over-hero gradient at rest; becomes a solid Clarkson Green bar with a hairline bottom border once the user scrolls past the hero.
- Logo: the real team crest image + the team name set in uppercase Oswald — the one uppercase "body-length" text the system deliberately keeps, as a wordmark, not a sentence.
- Nav links: uppercase mono, gold on hover with a matching underline.

### Hazard Tag (signature component)
A diagonal ribbon (rotated 45°) fixed to the hero's top-right corner, gold fill with a repeating black-stripe trim top and bottom (the system's one deliberate use of repeating-stripe texture — because here the stripe pattern *is* the referent, hazard tape, not decoration standing in for it). Carries a short mono caution label. Present only on the home hero.

### Title Block (signature component)
A small bottom-left panel over the hero photo, styled like a real drafting sheet's title block: a 4-column definition list (Title / Sheet / Scale / Location) in uppercase mono, gold labels over warm-white values, on a near-opaque ink backing (no blur). Hidden under 720px rather than shrunk illegibly.

## Do's and Don'ts

### Do:
- **Do** keep gold's use rare and load-bearing (ribbon, spec codes, hover, one emphasized headline word) — its rarity is what makes it read as a hazard color rather than a brand tint.
- **Do** use Oswald uppercase for anything that is a label or a heading; use Barlow sentence-case for anything a visitor reads as a sentence.
- **Do** keep new components square-cornered and line-drawn (rivets, crosshairs, hairline borders) rather than reaching for radius + shadow.
- **Do** reuse the spec-code convention (`XX·NN`) for any new numbered/tagged item; it's the system's naming device for "this is a real, catalogued part of the build."

### Don't:
- **Don't** add glass/blur panels or soft glowing shadows — this world is flat and ruled, not glassy.
- **Don't** introduce a third dark neutral for backgrounds; every dark surface is Chassis Ink, Panel, Panel Raised, or one of the two Clarkson greens.
- **Don't** set long-form body copy in uppercase, even in the mono label font — reserve uppercase for short labels and headings (the logo wordmark is the one deliberate exception).
- **Don't** use repeating-stripe gradients as generic surface decoration; the diagonal hazard-stripe trim is earned specifically because it depicts real hazard tape, not because stripes look technical.
