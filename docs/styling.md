# Styling Guide

This document is the single source of truth for visual styling on the Clarkson Formula
Electric Knights website. Agents and contributors should follow it when adding pages or
components, and extend it (don't fork it) when new patterns are introduced.

Source: Clarkson University brand guidelines (`CU_brand colors.pdf`, "The Clarkson Brand" p.18).

## Colors

### Core colors

Everything on the site should be dominated by these two. Green is the base, gold is the accent.

| Name            | Hex       | RGB             | CMYK           | PMS      | CSS variable      |
|-----------------|-----------|-----------------|----------------|----------|-------------------|
| Clarkson Green  | `#004e42` | 0 / 78 / 66     | 92/25/70/68    | PMS 3305 | `--clarkson-green` |
| Clarkson Gold   | `#ffcd00` | 255 / 205 / 0   | 0/14/100/0     | PMS 116  | `--clarkson-gold`  |

### Secondary colors — Bold

Use sparingly, for vibrancy/emphasis (undergrad-facing content).

| Name        | Hex       | RGB             | PMS     | CSS variable        |
|-------------|-----------|-----------------|---------|---------------------|
| Bold Olive  | `#7a9a01` | 122 / 154 / 1   | PMS 377 | `--bold-olive`       |
| Bold Red    | `#cf4520` | 207 / 69 / 32   | PMS 173 | `--bold-red`         |
| Bold Blue   | `#418fde` | 65 / 143 / 222  | PMS 279 | `--bold-blue`        |
| Bold Navy   | `#002d72` | 0 / 45 / 114    | PMS 288 | `--bold-navy`        |

### Secondary colors — Mature

Softer palette; use sparingly for alumni/professional-facing content. Not expected to see
much use on this team site, but kept here for completeness.

| Name          | Hex       | RGB             | PMS      | CSS variable          |
|---------------|-----------|-----------------|----------|-----------------------|
| Mature Olive  | `#a2a569` | 162 / 165 / 105 | PMS 5777 | `--mature-olive`       |
| Mature Amber  | `#c6893f` | 198 / 137 / 63  | PMS 7510 | `--mature-amber`       |
| Mature Blue   | `#7bafd4` | 123 / 175 / 212 | PMS 542  | `--mature-blue`        |
| Mature Navy   | `#005587` | 0 / 85 / 135    | PMS 7692 | `--mature-navy`        |

### Neutral colors

Use tints (30%/50%/75%) of these to expand the neutral palette when needed (e.g. for
borders, muted text, dividers).

| Name          | Hex       | RGB             | PMS             | CSS variable      |
|---------------|-----------|-----------------|-----------------|-------------------|
| Warm Gray 1   | `#d7d2cb` | 215 / 210 / 203 | PMS Warm Gray 1  | `--warm-gray-1`   |
| Warm Gray 6   | `#a59c94` | 165 / 156 / 148 | PMS Warm Gray 6  | `--warm-gray-6`   |
| Warm Gray 11  | `#6e6259` | 110 / 98 / 89   | PMS Warm Gray 11 | `--warm-gray-11`  |

### Usage rules

- Green is the base, gold is the accent, white is treated as a third primary color —
  leave generous white/negative space rather than filling it with secondary colors.
- Secondary (bold/mature) and neutral colors are for accents and support only — never let
  them replace green/gold as the dominant color of a page.
- Don't invent new brand colors. If a design need isn't covered by this palette, raise it
  before adding an arbitrary hex value.
- All colors above are implemented as CSS custom properties in [`styles.css`](styles.css)
  (`:root`). Reference the variable, not a hardcoded hex, when styling new components.
- Current site implementation: page backgrounds (`--bg`) use the darker Clarkson green
  (`--clarkson-green-dark`), while the header bar (`--bg-deep`, via `.site-header.solid`)
  uses the lighter Clarkson green (`--clarkson-green`) so it reads as a distinct band
  above the page. The same `--bg-deep` → `--bg` pairing drives the subteam-page hero
  gradient, keeping it visually consistent with the header. `--clarkson-gold` is the
  main secondary/accent color — link hovers, card borders, and buttons all key off gold.
  Text is white/near-white (`--text`, `--text-muted`) for contrast against the green.
  New components should follow this same pattern rather than introducing neutral grays.

## Typography

_Not yet specified in the brand PDF provided. Placeholder — update this section if/when
official Clarkson typography guidance (fonts, weights, sizing scale) is provided._

Current implementation uses the system UI font stack (`Segoe UI`, system-ui, Roboto, etc.)
as a neutral, no-dependency default.

## Logo / Crest

The team logo (knight helmet + lightning bolt, green/gold/black on a transparent
background) lives at [`images/CFEK_LOGO_Transparent.png`](images/CFEK_LOGO_Transparent.png)
and is the canonical mark for this site. Use it, not text or emoji, wherever a compact
team mark is needed.

- **Favicon**: every page's `<head>` includes
  `<link rel="icon" type="image/png" href="images/CFEK_LOGO_Transparent.png" />`.
- **Header logo**: the site header renders it via `<img class="logo-icon" ...>` next to
  the wordmark (see `.logo-icon` in `styles.css`, currently `height: 2rem`).
- Don't recolor, distort, or add effects to the logo — use it as-is on dark backgrounds
  (it's designed for transparency).

_No formal clear-space/minimum-size spec provided yet — update this section if official
logo usage guidance arrives._

## Layout & spacing

_No formal spec yet. Current conventions used across the site:_

- Max content width: `1200px`, centered.
- Section padding: `4rem`–`6rem` vertical, `2rem` horizontal (reduce on mobile).
- Card grid: `repeat(auto-fill, minmax(240px, 1fr))` with `1.5rem` gaps.

## How to extend this document

When new brand guidance arrives (typography, logo usage, imagery style, iconography,
motion/animation rules, etc.), add a new section here following the same table/format
style, and update the corresponding CSS variables/implementation to match. Keep this file
and `styles.css` in sync — this file is the spec, `styles.css` is the implementation.
