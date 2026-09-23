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
  sponsor-logo:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    padding: "0.55rem"
  sponsor-logo-hover:
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

**Character:** A condensed, stenciled industrial display face over a workhorse signage-lineage body sans, with a mono reserved strictly for the things a real technical drawing sets in monospace — spec codes, dimension labels, figure numbers, sponsor-name lines.

### Hierarchy
- **Display** (600, `clamp(2rem, 5vw, 3.75rem)`, 1.1 line-height, uppercase): the hero H1 and subteam-page H1s. Always uppercase, always Oswald.
- **Headline** (600, `2rem`, uppercase): section headings ("Our Subteams") and card titles ("High Voltage").
- **Body** (400, `1rem`–`1.2rem`, 1.5 line-height): hero paragraph and placeholder copy. Sentence case — body text is never set uppercase regardless of the mono/label temptation.
- **Label** (600, `0.72–0.78rem`, uppercase, 0.05–0.1em tracking): nav links, spec-code chips, figure numbers, footer. This is the one place uppercase is earned — short functional labels, never full sentences.
- **Caption / credit** (400–500, `0.72–0.78rem`, sentence case, mono): figure captions under a media plate and sponsor names under a logo. Mono because a drawing sets its figure and part callouts in mono — but sentence case and mixed case, since a caption is a sentence and a sponsor name is a proper noun set the way its owner sets it (`rapidHarness`, `SOLIDWORKS`).

### Named Rules
**The Sentence-Case Body Rule.** Any text long enough to be a sentence (hero copy, placeholder paragraphs) stays in sentence case even when set in the mono label font. Uppercase is reserved for labels under roughly a phrase in length.

## Layout

Single-column, full-bleed hero pinned behind the scrolling page (`position: fixed` hero + `margin-top: 100vh` content), with the hero's background-to-ink opacity crossfading over the first viewport height as the user scrolls — the hero never abruptly cuts away.

The hero is framed like a technical drawing sheet: a ruled border inset 28px from the viewport edge, with a registration crosshair mark at each of its four corners. The hero carries only the headline and the scroll cue — nothing is anchored in its corners, so the team photo behind it is read as a photograph rather than as a plate with things bolted to it.

Below the hero the home page runs four sections, each capped at 1200px and separated by a hairline rule: **Our Car**, **Our Subteams**, **Subteam Leads**, **Sponsors**.

The page then closes on a **Contact / Join** pair. The two share one hairline (it sits on `.contact-section`, and `.join-section` has none) and no rule runs between them, because they are one closing "get in touch" block read in order of commitment — mail a question, or sign up. Contact is the quieter half by construction: a ruled button above the filled one, so the eye still lands on Join.

*Our Car* is a two-column grid (`minmax(0, 42%)` photo / `minmax(0, 1fr)` copy, 2.5rem gap) centered inside a narrower 940px track so the copy lands near the site's ~60ch measure. The photo is a 3:4 portrait, so it is set beside the copy rather than run full-bleed — a full-width band would either crop the car out or swallow the viewport. Under 860px it stacks, and the photo clamps to 22rem and centers with `justify-self` (not auto margins, which a stretched grid item resolves to 0).

*Our Subteams* renders as a responsive card grid (`repeat(auto-fill, minmax(240px, 1fr))`, 1.5rem gap) — one "spec plate" per subteam, each stamped with a two-letter/two-digit spec code (e.g. `HV·01`) in its top-left corner.

*Leadership* runs two rows: the team officers, then the subteam leads below. Every lead card is the same size — unlike the sponsor wall, rank here is carried by position and by the role line, not by scale. Each row is a centered grid of fixed tracks (`repeat(auto-fit, 210px)`, 1.75rem gap) — `auto-fit` rather than `auto-fill` so the empty tracks collapse and `justify-content: center` has free space to work with, which keeps a partly-filled row deliberate instead of stranding one card at the left edge. Each card links to a lead detail page laid out portrait-left / bio-right on the same 940px measure as Our Car, stacking under 760px.

*Sponsors* is a centered, bottom-aligned flex wrap rather than a grid: logo footprints come in three widths and rows are allowed to mix them and wrap where they land. The mixing is deliberate — a size-sorted grid of rows would draw the support levels back onto the page, which is exactly what the sizes alone are meant to convey.

## Elevation & Depth

Flat by default. Depth comes from ruled lines, corner crosshairs/rivet-dots, and border-color shifts on hover — not shadows or glass. There is no `box-shadow` anywhere in the system: the one that existed sat under the hero's hazard-tag ribbon, which has since been removed, and nothing has earned one back.

The one other soft effect is the **sponsor halo** — stacked zero-offset `drop-shadow()` filters on sponsor logos. It is not elevation: the offsets are zero, so nothing is lifted off the page, and because `drop-shadow` traces a PNG's alpha channel the light follows the letterforms rather than a rectangle. See the Sponsor Logo component for why it is earned.

### Named Rules
**The Flat Plate Rule.** Cards, panels, and media plates sit flush with their background at rest — no ambient shadow. The only motion is a hairline border brightening to gold and a slight lift (`translateY(-4px)`, or `-3px` for a sponsor) on hover.

**The Backlight-Not-Box Rule.** When a foreign asset (a sponsor's logo) is too dark to survive on Chassis Ink, light it from behind with alpha-tracing `drop-shadow` passes — never box it on a white plate. A white rectangle would put a non-system surface on the page and flatten every sponsor's mark into the same card; the halo keeps each mark's own artwork and transparency intact.

## Shapes

Hard, drafted corners everywhere — no `border-radius` on cards, panels, media plates, or buttons. The one exception is the spec-code chip's bottom-right corner (3px), a small nod to a stamped label rather than a drawn one. Rivet-dot corners (four small radial-gradient dots per card) and crosshair registration marks (an SVG circle + crosshair) are the system's recurring "authored hardware" motif, standing in for the rounded-corner-plus-shadow language a generic card would reach for.

## Components

### Buttons (`.back-link`, `.cta-link`)
- **Shape:** rectangular, no radius; a single hairline border (`--line-strong`) at rest.
- **Style:** uppercase mono label, `0.8rem`, 0.05em tracking. One treatment, two uses: `.back-link` is centered at the end of a page (`margin: 3rem auto`), `.cta-link` sits inline under a paragraph (`margin-top: 1.6rem`) — e.g. the "Learn More →" link out of the Our Car section. Only the margin differs; another secondary button should extend this pair rather than invent a new look.
- **Hover / Focus:** border and text both shift to Hazard Gold; `:focus-visible` gets a 2px gold outline offset 3px (site-wide, not button-specific).

### Primary Button (`.join-toggle`)
The system's one *filled* button, and deliberately the only one: every other button is ruled precisely so that this — the single place a visitor is asked to act — is the thing that shouts. A flat Hazard Gold fill with Hazard Black label, mono uppercase at `1.05rem` / 0.09em with generous padding, sized a clear step above the ruled pair.

It stays inside the Hazard Accent Rule by shouting the way the rest of the site does: flat gold, the same device as a hovered spec code and the copy confirmation chip — never a gradient, tint or glow (the Flat Plate Rule still holds; the only motion is the lift).

- **Hover:** inverts to a transparent fill with gold border and gold label, plus `translateY(-3px)` — the spec-plate hover run in reverse.
- **Open state:** holds that inverted state, so the button only shouts while the panel behind it is still closed.

A second filled button anywhere on the site would spend what makes this one work.

### Contact Copy Link (`.contact-email`)
The team address in the Contact band, marked up as a real `mailto:` link and extending the ruled `.cta-link` treatment rather than inventing a look — written as `.cta-link.contact-email` so it outranks the shared rule on specificity instead of source order.

Three deliberate departures from that base: the address keeps its own lowercase (like a sponsor name or a caption, it is data quoted verbatim, not a label the page gets to shout), it is set at `0.95rem` rather than `0.8rem` so it can be read off the screen and typed by hand, and it carries a small stroked copy glyph at 0.75 opacity that goes solid on hover.

- **Behaviour:** `script.js` intercepts the click and copies the address instead of opening a mail client. With JavaScript off the `mailto:` simply works. The copy glyph is the entire affordance — no instruction line runs under the button, because the border and the glyph already say "control, and it copies."
- **Confirmation:** a flat gold-on-hazard-black chip — the spec-code stamp device, not a floating notification surface — fading in inside its own reserved strip (`.contact-note`, `min-height: 1.5rem`) so it can never nudge the Join button below. The chip's text is written in by script rather than pre-rendered, so its `role="status"` region is actually announced.
- **Failure:** if the clipboard is unreachable (a non-secure context with no `execCommand` left), the script selects the address in place and the chip says so instead of claiming a copy that did not happen.

### Social Marks (`.contact-social`)
Instagram and LinkedIn sit to the right of the address as square siblings of it — the same ruled border and gold hover, padding dropped so the mark centers in a box whose height the address button sets (`.contact-row` is `align-items: stretch`; a `min-height` keeps them square if the row wraps). They are grouped in `.contact-social-group` so the pair wraps under the address together rather than one mark dropping alone.

Both marks are **drawn from primitives** — a rounded rect, a circle, a filled dot, two strokes and an arc — rather than pasted in as official brand paths. The official LinkedIn glyph is solid and Instagram's is an outline; dropping both in would put one filled foreign glyph and one outlined one on the ink ground, next to a site whose every other icon (chevron, crosshairs, copy glyph) is a 1.7px stroke. Drawn this way they stroke like the rest of the system and still read instantly. Each link carries an `aria-label`, since there is no text in the button.

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
- Nav links: uppercase mono, gold on hover with a matching underline. The same five links — Our Car, Subteams, Leadership, Sponsors, Contact Us — appear in page order on **every** page; interior pages point at `index.html#…` rather than dropping links. Contact Us is last because it points at the closing Contact/Join pair, and landing on `#contact` puts the Join button in view directly below it — so the nav carries both asks with one link, and carries the quieter one as its label. It is styled like its four neighbours rather than being promoted: the gold in the header is the hover state, and the shouting is the button's job. Above 768px the nav is a flex row with a gap (not per-link margins), right-aligned opposite the wordmark.
- Phone menu (`.nav-menu`, ≤768px): the five links collapse behind a three-rule toggle at the header's right edge. Below that width the wordmark wraps to two lines and the nav to a second row, which stacked into a 130px header — a fifth of a phone screen spent on navigation before any of the page showed; the toggle brings it back to 78px. Open, it drops the links as full-width right-aligned rows (44px tall, the usual thumb-target floor) under a hairline, and the three rules fold into a cross.
- The toggle is a `<details>` whose `[open]` reveals the nav *beside* it (`.nav-menu[open] ~ nav`) rather than content inside it — so the menu needs no JavaScript, which matters because 18 of the site's 22 pages don't load `script.js`, and so the same links can still be a plain row above the breakpoint. Where the script does load, it closes the menu after a link (the home page's links are same-page jumps, which would otherwise leave the panel sitting over the section it just scrolled to) and on Escape. The header takes its solid Clarkson Green for as long as the menu is open, since over the hero the links would otherwise sit on the team photo.
- Jump targets: every section the nav points at carries `scroll-margin-top: 5rem`, so a jump clears the fixed header — which is roughly double height on a phone, where the links wrap to two rows — rather than parking the heading behind it. `script.js` also re-runs the jump on load for a page *opened* at a fragment (`index.html#contact` from an interior page's nav): the site's `scroll-behavior: smooth` makes the browser animate that first scroll, and the animation dies when the page's images shift the layout under it, so without the re-run an arriving visitor lands at the top.

### Hazard Tag (removed)
A diagonal gold ribbon with black stripe trim, rotated 45° into the hero's top-right corner, carrying a mono "Caution — High Voltage" label. Removed: it sat across the team photograph, and a tag bolted over a picture of the people on the team was the one place the drawing-sheet metaphor was applied to something that isn't a drawing. Gold now enters the page for the first time on the headline's accent words.

With it went the system's only repeating-stripe texture and its only `box-shadow`. Don't reintroduce either without the same justification the ribbon had — that the stripe pattern *is* its referent, and that the object genuinely reads as bolted on.

### Lead Card
A spec plate for a person: same Panel ground, hairline border, rivet-dot corners, gold-on-black spec code — the subteam abbreviations that lead owns (`DT`, `HV·LV`, `SU·VD·AE`), reusing the codes stamped on the subteam plates so a chip says which plates are theirs — and gold-border-plus-`translateY(-4px)` hover as the subteam card. Two things differ, both because the subject is a person rather than a part:
- **Portrait proportion.** The image well is 4:5, not the subteam card's 16:9 — a head-and-shoulders frame, and a visible signal that these are a different kind of card from the plates above them.
- **A stacked caption.** The lead's name in Oswald uppercase, with their subteam under it as a mono spec label (`.lead-subteam`, muted → gold on hover). The subteam is the lead's assignment, not their title, so it is set as a label rather than a second heading. Officers add a `.lead-role` line between the two (Captain, Chief Engineer) in warm white — the stronger of the two label lines without spending gold on it, since the gold here is the spec-code chip and it stays rare.
- **A reserved caption height.** `.lead-caption` carries `min-height: 8rem`, sized to the tallest case (name + role + a subteam wrapping to two lines). Grid stretch only equalizes cards within one row, and the officers are a row of their own, so without it a card without a role line would come up short against the row above.

Photos that don't exist yet use the same dot-grid "Photo Pending" plate the subteam cards use, at 4:5. The detail page repeats the portrait in a media plate on the left with the bio on the right.

### Media Plate (figure)
Every real photograph on the site is mounted as a figure, not dropped in loose: a Panel-backed `<figure>` with a hairline border and the same four rivet-dot corners as a spec plate, the image flush to its edges, and a mono `<figcaption>` below a hairline rule. The caption opens with a gold `Fig. NN` number (`.fig-number`) and then reads as a sentence. Variants: `--crop` locks a 16:9 band via `object-fit: cover` (with `.crop-upper` / `.crop-mid` to shift the band per photo), `--cutout` for a subject on a drafted field. Used for the home page's car glamour shot and throughout the subteam pages.

### Sponsor Logo (signature component)
A sponsor is a link stacking an invisible 3:2 frame over a mono name line. Three things carry the whole component:

- **Size is the only ranking.** Plate width — `--lg` `clamp(9rem, 21vw, 16.25rem)`, `--md` `clamp(7.25rem, 16vw, 12.5rem)`, `--sm` `clamp(6rem, 13vw, 10.25rem)` — is the sole signal of support level. The levels are never named on the page, and the classes are written as sizes rather than as tier names so the markup doesn't leak them either.
- **The frame is invisible.** `.sponsor-mark` draws nothing; it only reserves each logo the same 3:2 footprint (with `min-height: 0`, since a column flex item's content-based minimum otherwise lets a tall logo override the aspect ratio). The image is sized to the frame's content box and letterboxed with `object-fit: contain` — left at its intrinsic size, a tall logo still forces a container taller than its own row.
- **The halo.** Every sponsor mark is dark artwork — near-black wordmarks, deep red, navy — so on Chassis Ink each is lit from behind rather than boxed. Three stacked zero-offset `drop-shadow()` passes do different jobs: a tight 1px opaque pass cuts the edge, a 3px mid pass carries the glow, a 12px faint pass keeps it from reading as a hard sticker outline. The light is Warm Plate White (`#f3f0e6`), never pure white.

**Hover:** the outermost halo pass warms to Hazard Gold (`rgba(255,205,0,0.45)`), the name goes gold, and the whole unit lifts `translateY(-3px)` — the same move the spec plates and the back link make. Names are held at `min-height: 2.7em` (two lines) so a wrapping name can't shove its own logo up out of the row's shelf line.

## Do's and Don'ts

### Do:
- **Do** keep gold's use rare and load-bearing (ribbon, spec codes, hover, one emphasized headline word) — its rarity is what makes it read as a hazard color rather than a brand tint.
- **Do** use Oswald uppercase for anything that is a label or a heading; use Barlow sentence-case for anything a visitor reads as a sentence.
- **Do** keep new components square-cornered and line-drawn (rivets, crosshairs, hairline borders) rather than reaching for radius + shadow.
- **Do** reuse the spec-code convention (`XX·NN`) for any new numbered/tagged item; it's the system's naming device for "this is a real, catalogued part of the build."
- **Do** mount every real photograph in a media plate with a numbered `Fig. NN` caption — a photo is evidence in this world, and evidence is captioned.
- **Do** let foreign artwork (sponsor logos) keep its own colors and transparency; size and a backlight are the only things the system is allowed to impose on it.

### Don't:
- **Don't** add glass/blur panels or soft glowing shadows — this world is flat and ruled, not glassy. The sponsor halo is the one exception and stays scoped to sponsor logos: it has zero offset (so it is backlight, not elevation) and exists only because foreign dark artwork can't be recolored to suit the ground.
- **Don't** put sponsor logos on white plates or name the support levels in the markup or on the page — plate width is the entire ranking device.
- **Don't** introduce a third dark neutral for backgrounds; every dark surface is Chassis Ink, Panel, Panel Raised, or one of the two Clarkson greens.
- **Don't** set long-form body copy in uppercase, even in the mono label font — reserve uppercase for short labels and headings (the logo wordmark is the one deliberate exception).
- **Don't** use repeating-stripe gradients as generic surface decoration; the diagonal hazard-stripe trim is earned specifically because it depicts real hazard tape, not because stripes look technical.
