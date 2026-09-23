# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are prospective Clarkson University students/members evaluating whether to
join the team, and external observers who encounter the team publicly (competition
judges, SAE officials, alumni, the university itself). Current members are a secondary
audience who may reference subteam pages, but the site is outward-facing first.

## Product Purpose

A public website for the Clarkson Formula Electric Knights, Clarkson University's
Formula SAE Electric team (Potsdam, NY). It represents the team professionally and helps
recruit new members by explaining what the team does and how it's organized.

## Positioning

A young, small team (~10 members) still building itself and its car program. The site's
story is one of growth and ambition rather than an established competition record —
it should read as credible and serious without overstating results the team doesn't yet
have.

## Operating Context

- The team is organized into 12 subteams: High Voltage, Low Voltage, Chassis,
  Drivetrain, Suspension, Vehicle Dynamics, Brakes, Cooling, Ergo, Aerodynamics,
  Composites, Business.
- Subteam pages currently exist as placeholders ("content coming soon") and will be
  filled in over time as each subteam produces real content.
- GitHub org/repo: `clarksonformulaelectric26/website`.

## Capabilities and Constraints

- Plain static HTML/CSS/JS, no framework or build step. `index.html`, `our-car.html`,
  `styles.css`, and `script.js` sit at the project root; subteam pages live in
  `subteams/`, lead bio pages in `leads/`, and these docs in `docs/`.
- Sponsors are recognized on the home page by logo, linked to the sponsor's own site.
  Support levels are reflected only by logo size, never named on the page. No formal
  sponsor-recognition agreement (required sizes, placements, or wording) has been
  confirmed — revisit if the team signs one.
- No university accessibility policy beyond general good practice has been confirmed.
  Revisit if/when the team confirms one.

## Brand Commitments

- Team name: Clarkson Formula Electric Knights.
- Official logo: `images/CFEK_LOGO_Transparent.png` (knight helmet + lightning bolt),
  used as favicon and header mark.
- Official Clarkson University brand colors and usage rules are captured in
  [styling.md](styling.md) (Clarkson Green `#004e42`, Clarkson Gold `#ffcd00`, plus
  secondary/neutral palettes) — treat that file as binding brand authority, not just a
  style suggestion.

## Evidence on Hand

- Real team photo: `images/TeamPicture.jpeg` (used as the homepage hero background).
- Real car photos: `images/Accumulator.jpg`, `images/formulacarglamourshot.png`.
- Real sponsor logos: `images/sponsors/<level>/*` (platinum, gold, silver). The directory
  names are the team's own filing; they are not exposed in the markup or on the page.
- No competition results, testimonials, or press exist yet — future work must not
  fabricate these.

## Product Principles

1. Represent the team as credible and professional despite being small/young — no
   overstated claims or invented achievements.
2. Green/gold brand consistency (per styling.md) across every page, current and future.
3. Recruiting clarity: a prospective member should be able to quickly see the subteams
   and understand what each does.
4. Keep the site simple and maintainable by a small student team (plain HTML/CSS/JS,
   no unnecessary tooling) unless a real need forces added complexity.

## Accessibility & Inclusion

No specific standard confirmed yet beyond general good practice (semantic HTML, color
contrast, alt text). Revisit if the university confirms a required policy.
