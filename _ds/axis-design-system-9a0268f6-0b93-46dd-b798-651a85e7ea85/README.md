# Axis Design System

A modern, high-performance, multi-purpose design system for web and mobile applications. Built in the tradition of Linear, Vercel, and Stripe — opinionated where it matters, neutral where it doesn't. Conversion-focused, accessible by default, engineered for clarity over decoration.

> **Note on origin.** No existing brand, codebase, or Figma source was provided. Axis is an original system invented to fulfill the brief: *"a Legendary, Linear/Vercel-style multi-purpose system."* Anywhere a choice was invented rather than imported, it is flagged below. If you'd like Axis re-anchored to an existing product, share the materials (GitHub repo, Figma link, codebase import) and we will rebuild.

---

## Stack

| Layer | Choice |
|---|---|
| UI framework | **React 18** |
| Styling | **Tailwind CSS** (CDN in previews) + CSS custom properties |
| Icons | **Lucide** (via CDN) |
| Type — UI | **Inter** (Google Fonts) |
| Type — Display | **Inter Display** / Inter w/ stylistic sets (Google Fonts) |
| Type — Mono | **JetBrains Mono** (Google Fonts) |
| Spacing grid | **8-pt** with a 4-pt half-step |
| Color model | **OKLCH** for perceptual uniformity |

> **Font substitution flag:** The brief did not specify webfonts. We selected Inter + JetBrains Mono because they are the de-facto pairing for the Linear/Vercel aesthetic and ship from Google Fonts with no licensing friction. Swap in your own by replacing the `--font-*` tokens in `colors_and_type.css`.

---

## Index

| Path | Purpose |
|---|---|
| `README.md` | This file. Voice, visual foundations, iconography. |
| `SKILL.md` | Agent-skill manifest, so this folder can be dropped into Claude Code as a skill. |
| `colors_and_type.css` | The single source of truth for tokens: colors, type, spacing, radii, shadows, motion. |
| `fonts/` | Webfont notes. Inter + JetBrains Mono are linked from Google Fonts CDN; no binary files are bundled. |
| `assets/` | Logo, wordmark, mark, iconography notes. |
| `preview/` | Static HTML cards that populate the Design System tab. |
| `ui_kits/dashboard/` | The flagship UI kit — a Living Documentation Dashboard demonstrating every component in context, plus a complex tables view and an RTL toggle. |

---

## Content Fundamentals

Axis copy is **engineering-grade**. It sounds like the people who built the product also wrote the words. Voice cues from Linear's changelog, Vercel's docs, Stripe's API reference, Arc's release notes.

**Voice principles**

1. **Sentence case everywhere.** `New project`, not `New Project`. Even H1s on marketing pages.
2. **Declarative, not promotional.** `Ship faster`, not `Ship faster than ever!` No exclamation points.
3. **You-oriented for UI; we-oriented only for company stance.** *"You can invite teammates from Settings." "We don't sell your data."*
4. **No adverbs.** Strike `seamlessly`, `effortlessly`, `easily`, `truly`, `simply`, `really`.
5. **Numbers over adjectives.** Not "blazing fast" — "47 ms median response."
6. **No emoji in product UI, marketing, or docs.** Emoji are allowed only in user-generated content (chat, comments). The system itself never speaks emoji.
7. **No hype.** Strike `revolutionary`, `magical`, `unlock`, `next-generation`, `game-changing`.

**Casing & punctuation**

- Sentence case on every label, button, menu item, table header, tab.
- Proper nouns and product names stay capitalized: Axis, Inbox, Roadmap, GitHub.
- Acronyms remain all-caps inline (API, SSO, OAuth, TLS).
- No trailing period on single-sentence UI strings (button text, tooltip, empty state line 1).
- Em dash (—) for asides; never " - " with spaces.
- Oxford commas, always.

**Numbers, units, dates**

- Digits from 1 onward in UI (`1 issue`, `12 members`).
- Units attach with a hair space: `200 ms`, `12 GB`, `8 px`. Currency without space: `$49/mo`.
- Relative time in UI (`2m ago`, `yesterday`); absolute time on hover or in detail views (`May 19, 2026, 14:32`).

**Pronouns**

- **You** — the user, in all product UI and docs.
- **We** — sparingly, only when describing what the product does on the user's behalf or stating company policy.
- **Never I** — Axis is a tool, not a personality.

**Concrete examples**

| Context | ✅ Do | ❌ Don't |
|---|---|---|
| Button | `Create issue` | `+ Create New Issue!` |
| Empty state | `No issues match these filters.` | `Nothing here yet 👀` |
| Error | `Couldn't save. Check your connection.` | `Oops! Something went wrong 😬` |
| Marketing hero | `Built for teams that ship.` | `Empowering organizations to deliver excellence!` |
| Destructive confirm | `Delete 3 issues?` | `Are you SURE you want to permanently delete these 3 issues?` |
| Loading | `Loading…` | `Hang tight, we're working on it!` |
| Success toast | `Changes saved.` | `Awesome! All set 🎉` |

---

## Visual Foundations

### Color
- **OKLCH-based** for perceptual uniformity. All colors in `colors_and_type.css` use `oklch()`.
- A 12-step **neutral** scale with a faint cool cast (hue ≈ 260, very low chroma). Never pure gray.
- A single signature accent — **Axis Iris**, a violet-leaning indigo around `oklch(0.62 0.21 275)`. Used **only** on the primary action, the focus ring, and selection states. Restraint is the point.
- Four **semantic** hues (success / warning / danger / info), all tuned to the same lightness as Iris so they share a visual plane.
- **Dark mode is first-class.** Surfaces stack in layers (`surface-0` → `surface-3`) rather than relying on shadows for elevation.

### Typography
- Inter for UI body and headings up to `text-2xl`.
- Inter Display (or Inter w/ `ss01`, `cv11`) for display sizes `text-3xl` and above.
- JetBrains Mono for code, keyboard shortcuts, tabular numerals in tables, and tag/label microtype.
- **Tracking** is tight on display (`-0.03em` at 48 px+), neutral on body, slightly loose on caption (`+0.01em`).
- **Line-height** is generous on body (1.55) and tight on display (1.05).
- Numbers are **tabular** in tables by default (`font-variant-numeric: tabular-nums`).

### Spacing
- **8-pt grid** with a 4-pt half-step for inline microtype. Allowed values: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128`.
- Inner padding is always a token, never a magic number.
- **Touch targets are 44 px minimum on mobile.** Dense desktop surfaces may use 32 px.

### Backgrounds & atmosphere
- **Flat, layered solids.** No full-bleed photography, no hand-drawn illustration, no AI-image-generated hero art.
- A single ambient gradient is permitted on marketing hero surfaces — a soft Iris→transparent radial in the corner, never the center.
- **Grain is not used.** Texture comes from layered neutrals and shadow, not from noise overlays.
- The body background is `surface-0`. Cards sit on `surface-1`. Modals on `surface-2`. Tooltips, menus, command palette on `surface-3`. Each step up is ≈4% lighter (light mode) or ≈4% lighter on top of dark base.

### Motion
- **Three durations only:** 120 ms (micro — hover, focus), 200 ms (small — popovers, dropdowns), 320 ms (large — page transitions, modal open).
- **One easing:** `cubic-bezier(0.2, 0.8, 0.2, 1)` — a confident ease-out. No bounce, no overshoot, no spring.
- Fades over slides. Slides over flips. **No bounces ever.**
- Reduced-motion users get instant transitions (`prefers-reduced-motion: reduce` is fully honored).

### Hover, press, focus
- **Hover:** background lightens (light mode) / lightens further on dark by ~4%. No color change. Cursor stays default unless it's a link.
- **Press:** background goes one step darker than hover AND the element scales to `0.98` for 80 ms.
- **Focus:** a **2 px Iris ring** with a **2 px offset** in the surface color. Always visible — no `focus:outline-none` without an alternative.
- **Disabled:** 40% opacity, `cursor: not-allowed`. Never just gray text.

### Borders & dividers
- **1 px** hairlines using `border-color: var(--border-subtle)`. Never thicker outside of decorative contexts.
- Dividers between table rows use the same color but at 60% alpha.
- Cards have a single 1 px border AND a soft shadow — both, not either.

### Shadows
A four-stop elevation system, each shadow soft and tinted toward the neutral base hue (never pure black):
- `shadow-xs` — 0 1px 2px / inset for inputs.
- `shadow-sm` — cards at rest.
- `shadow-md` — dropdowns, menus.
- `shadow-lg` — modals, command palette.
- `shadow-xl` — toasts and floating panels.

### Corner radii
- `radius-xs` 4 px — chips, tags.
- `radius-sm` 6 px — inputs, small buttons.
- `radius-md` 8 px — buttons, fields.
- `radius-lg` 12 px — cards.
- `radius-xl` 16 px — modals, panels.
- `radius-full` 9999 px — avatars, pills, switch tracks.

Radii never mix on the same element. A card with a 12 px radius contains buttons with an 8 px radius — not the other way around.

### Transparency & blur
- The **glassmorphic sidebar** uses `backdrop-filter: blur(20px) saturate(140%)` over a `surface-2 / 70% alpha` fill.
- Modal scrims are `rgba(0,0,0,0.6)` in dark mode, `rgba(15,15,20,0.4)` in light.
- Blur is otherwise reserved for the command palette and toast container.

### Cards
- 1 px border (`--border-subtle`) + `shadow-sm` + `radius-lg`.
- Inner padding `24 px` (desktop) / `16 px` (mobile).
- A card never has a colored left-border accent. Status is conveyed by an inline badge.

### Layout rules
- Fixed elements: top navigation (height 56 px) and bottom mobile nav (height 56 + safe-area-inset).
- Sidebars are **resizable** between 240 px and 360 px, persisted to localStorage.
- Content has a **max-width of 1280 px** on marketing surfaces, **fluid** on app surfaces.

---

## Tables

Two patterns, one primitive (`<Table>` in `ui_kits/dashboard/table.jsx`).

### Simple

Used inside cards for read-only summaries. No toolbar, no pagination, no selection. Just rows.

```jsx
<Table
  columns={[
    { key: 'name', label: 'Member' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' },
    { key: 'lastSeen', label: 'Last seen', mono: true, align: 'end' },
  ]}
  rows={users}
  density="comfortable"
/>
```

### Complex

For wide data with many columns. Sticky header + sticky first column let users scroll horizontally without losing context.

```jsx
<Table
  columns={columns}            // 10+ columns is fine
  rows={pageRows}
  density={density}            // 'compact' | 'comfortable' | 'spacious'
  sortKey={sortKey} sortDir={sortDir} onSort={handleSort}
  stickyHeader stickyFirstCol
  selectable
  selected={selected}
  onToggleSelected={toggleOne}
  onToggleAll={toggleAll}
  rowKey={r => r.id}
  emptyState={<EmptyResults query={q} />}
/>
<Pagination page={page} pageSize={6} total={filtered.length} onPage={setPage} />
```

### Column anatomy

| Property | Purpose |
|---|---|
| `key` | Row property to read. |
| `label` | Header text (sentence case). |
| `align` | `'start'` (default) or `'end'` for numerics. |
| `mono` | Tabular monospace cell, for IDs, prices, timestamps. |
| `sticky` | Sticks the column to the inline-start while scrolling. Use on one column only — usually the row identifier. |
| `minWidth` / `width` | Pixels. |
| `sortable` | `false` to disable for this column. |
| `render(value, row, i)` | Custom cell renderer. Pills, tags, avatars all live here. |

### Rules

- **Sentence case** in headers. Always.
- **Tabular numerals** are on by default — `font-variant-numeric: tabular-nums` applies to every table.
- **Numbers right-aligned** (`align: 'end'`); text left-aligned. Status pills and tags are start-aligned, not centered.
- **One sticky column** maximum — the row identifier.
- **Row hover** is a faint Iris tint, never a heavy gray.
- **Empty states must explain** what's missing — never just "No data."
- **Don't collapse tables on mobile.** Scroll them horizontally; column structure is part of the meaning.
- **Bulk actions** replace the search bar in the toolbar when rows are selected. They don't appear in a separate banner.

### Live demo

Open `ui_kits/dashboard/index.html` → **Tables** in the sidebar.

---

## Internationalization & RTL

Axis is built on **CSS logical properties** (`inline-start`, `inline-end`, `margin-inline`, `padding-inline`, etc.) so the entire system mirrors automatically when the document direction flips.

### Activating RTL

Set the direction on the document — typically `<html>`:

```html
<html lang="ar" dir="rtl">
```

For mixed-direction pages, set `dir` on the specific subtree:

```html
<div dir="rtl"> ... arabic content ... </div>
```

### What mirrors automatically

- Layout: sidebars slide from the right, dropdowns anchor to the inline-start, etc.
- Padding, margin, border-radius, all spatial tokens.
- Text alignment defaults to `start`/`end` everywhere.
- Form fields, tables, breadcrumbs, pagination.

### What we mirror explicitly

A few things shouldn't blindly flip — currency symbols, sparkline time-axes, and directional icons. We handle these in `colors_and_type.css` and `shell.css`:

```css
[dir="rtl"] .axis-topbar__crumb > .axis-icon { transform: scaleX(-1); }
[dir="rtl"] .metric-card__spark { transform: scaleX(-1); }   /* time goes right→left */
[dir="rtl"] .axis-pagination .axis-iconbtn svg { transform: scaleX(-1); }
```

For your own icons, add `data-flip-rtl` to ones that should mirror (arrows, chevrons, undo/redo). Leave brand marks, checkmarks, and currency symbols un-flipped.

### Arabic typography

- **Font:** IBM Plex Sans Arabic, loaded alongside Inter from Google Fonts. The font stack puts Latin glyphs in Inter and Arabic glyphs in Plex Arabic without any extra effort.
- **Line-height:** slightly more generous in RTL (`1.65` vs `1.55` for body) — Arabic's vertical extents are taller.
- **Tracking:** slightly looser; tight tracking (`-0.03em`) is reduced to `-0.015em` for display sizes.
- **Numerals:** keep Western Arabic numerals (`1,234`) by default. Use Arabic-Indic numerals (`١,٢٣٤`) only when culturally required — toggle with `font-feature-settings: 'lnum';`.

### Mixed content

Treat any single sentence containing both Arabic and English as **bidirectional**. Wrap inline English in `<bdi>` or `<span dir="ltr">` to prevent punctuation reordering:

```html
<p>اشترك في <span dir="ltr">axis@cloud.dev</span> للتجربة.</p>
```

### Demo

The dashboard (`ui_kits/dashboard/index.html`) has a **direction toggle** in the topbar (the `ع` / `EN` button). Try it — every component, including the complex table with sticky columns, mirrors correctly.

---

## IconographyAxis uses **Lucide** as its icon library. Lucide is open-source, has 1500+ glyphs, ships with a consistent 1.5 px stroke at 24 px, and is available via CDN.

- **Stroke weight:** 1.5 px (Lucide default). Never adjusted.
- **Size scale:** 14 / 16 / 20 / 24 / 32 px. Larger sizes are reserved for empty states.
- **Color:** icons inherit `currentColor`. They never carry a fill outside of brand-specific contexts.
- **Pairing:** icon + label is the default. Icon-only buttons require an `aria-label` and a tooltip.
- **No emoji.** Status is icon + semantic color, never an emoji.
- **No unicode glyphs as icons.** `→` in text is fine. `→` as a button affordance is not — use Lucide's `ArrowRight`.

**Substitution flag:** No icon font was provided, so Axis uses Lucide as a stand-in for what would normally be a brand-specific set. If you have a custom icon system, drop the SVGs into `assets/icons/` and update this section.

**Loading Lucide**

```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
```

Or in React:
```jsx
import { ArrowRight, Check, Search } from 'lucide-react';
```

---

## Mobile & accessibility

- **Touch targets ≥ 44 × 44 px** on every interactive element below the `md` breakpoint.
- **Tap states** mirror desktop press states — no separate mobile treatment.
- **Adaptive layouts:** sidebars collapse to a bottom tab bar below `md` (768 px). Tables become stacked cards below `sm` (640 px).
- **Color contrast** meets WCAG AA at minimum, AAA for body text on default surfaces.
- **Focus order** follows DOM order; no `tabindex > 0`.
- **Reduced motion** is fully honored — durations collapse to 0 ms, transforms become opacity-only.

---

## What's NOT in Axis

A design system is as much about what it forbids as what it provides:

- ❌ Drop shadows on text.
- ❌ Gradients on text (except the wordmark, once, on the marketing hero).
- ❌ Bluish-purple gradient backgrounds.
- ❌ Hand-drawn or 3D illustration.
- ❌ Emoji in product UI.
- ❌ Rounded cards with a colored left-border accent.
- ❌ More than one accent color.
- ❌ Bounces, springs, or playful motion.
- ❌ Title Case anywhere.

The constraint is the design.
