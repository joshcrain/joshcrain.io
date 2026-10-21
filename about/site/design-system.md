---
title: Design System
metaTitle: Design System
tags: about
description: A reference for the typography, colors, and design tokens used on joshcrain.io.
---

This page documents the shared visual foundations used across the site. The color custom properties live in `_includes/styles.css` and change with the light or dark theme.

## Colors

The color values are comma-separated RGB channels, rather than complete `rgb()` colors. This lets the same token work with or without transparency. The swatches below follow the currently active theme.

| Token | Purpose | Light RGB | Dark RGB | Sample |
| --- | --- | --- | --- | --- |
| `--color-accent` | Links and interactive accents | `114, 96, 18` | `199, 171, 227` | <span style="display:inline-block;width:2rem;height:1.25rem;background:rgba(var(--color-accent),1);vertical-align:middle"></span> |
| `--color-danger` | Error and invalid form states | `192, 24, 35` | `227, 113, 120` | <span style="display:inline-block;width:2rem;height:1.25rem;background:rgba(var(--color-danger),1);vertical-align:middle"></span> |
| `--color-highlight` | Selection and decorative highlights | `220.1925, 186.2052, 34.8075` | `76.5, 38.25, 114.75` | <span style="display:inline-block;width:2rem;height:1.25rem;background:rgba(var(--color-highlight),1);vertical-align:middle"></span> |
| `--color-ink` | Default text and foreground color | `0, 0, 0` | `249, 240, 255` | <span style="display:inline-block;width:2rem;height:1.25rem;background:rgba(var(--color-ink),1);vertical-align:middle"></span> |
| `--color-ink-emphasis` | Emphasized text and chart marks | `51, 25.5, 76.5` | `248.0385, 241.2411, 210.9615` | <span style="display:inline-block;width:2rem;height:1.25rem;background:rgba(var(--color-ink-emphasis),1);vertical-align:middle"></span> |
| `--color-surface` | Main page background and other surfaces | `239, 233, 228` | `10, 10, 25` | <span style="display:inline-block;width:2rem;height:1.25rem;border:1px solid rgba(var(--color-ink),.25);background:rgba(var(--color-surface),1);vertical-align:middle"></span> |

Use the tokens with `rgb()` or `rgba()` depending on whether transparency is needed:

```css
color: rgb(var(--color-ink));
border-color: rgba(var(--color-accent), 0.4);
```

`--color-ink-emphasis` and `--color-highlight` have roles and values distinct from the general ink and accent colors. Choose the token that describes the purpose of the element, and check contrast when combining colors—especially for text.

The browser toolbar `theme-color` is set separately in the document metadata and theme-switching script; it uses complete RGB color values matching the surface colors.

## Typography

The site uses four font stacks for distinct roles. The specimens use the actual custom properties, so they show the font available in the current browser and operating system.

| Role | Token | Specimen |
| --- | --- | --- |
| Body copy | `--fontPrimary` | <span style="font-family:var(--fontPrimary)">The quick brown fox jumps over the lazy dog.</span> |
| Headings | `--fontHeading` | <span style="font-family:var(--fontHeading);font-size:var(--size-6)">The quick brown fox jumps over the lazy dog.</span> |
| Code and data | `--fontMono` | <span style="font-family:var(--fontMono)">const spacing = var(--size-3);</span> |
| Labels and badges | `--fontIndustrial` | <span style="font-family:var(--fontIndustrial);font-size:var(--size-3);letter-spacing:.05em;text-transform:uppercase">Section label · 0123456789</span> |

The body uses the primary serif stack. Headings use DM Serif Display with a generic serif fallback; the font is loaded from the site's bundled WOFF2 file. Monospace text is used for code and tables. The industrial stack is system-dependent and provides a condensed, uppercase treatment for metadata and badges.

## Sizes

Use these tokens for spacing and component dimensions instead of repeating common values. Each sample is a square sized directly with its token, so it shows the value in context.

| Token | Sample |
| --- | --- |
| `--size-0` | <span style="display:inline-block;width:var(--size-0);height:var(--size-0);background:rgba(var(--color-accent),1);vertical-align:middle" aria-hidden="true"></span> |
| `--size-1` | <span style="display:inline-block;width:var(--size-1);height:var(--size-1);background:rgba(var(--color-accent),1);vertical-align:middle" aria-hidden="true"></span> |
| `--size-2` | <span style="display:inline-block;width:var(--size-2);height:var(--size-2);background:rgba(var(--color-accent),1);vertical-align:middle" aria-hidden="true"></span> |
| `--size-3` | <span style="display:inline-block;width:var(--size-3);height:var(--size-3);background:rgba(var(--color-accent),1);vertical-align:middle" aria-hidden="true"></span> |
| `--size-4` | <span style="display:inline-block;width:var(--size-4);height:var(--size-4);background:rgba(var(--color-accent),1);vertical-align:middle" aria-hidden="true"></span> |
| `--size-5` | <span style="display:inline-block;width:var(--size-5);height:var(--size-5);background:rgba(var(--color-accent),1);vertical-align:middle" aria-hidden="true"></span> |
| `--size-6` | <span style="display:inline-block;width:var(--size-6);height:var(--size-6);background:rgba(var(--color-accent),1);vertical-align:middle" aria-hidden="true"></span> |
| `--size-7` | <span style="display:inline-block;width:var(--size-7);height:var(--size-7);background:rgba(var(--color-accent),1);vertical-align:middle" aria-hidden="true"></span> |
| `--size-8` | <span style="display:inline-block;width:var(--size-8);height:var(--size-8);background:rgba(var(--color-accent),1);vertical-align:middle" aria-hidden="true"></span> |
| `--size-9` | <span style="display:inline-block;width:var(--size-9);height:var(--size-9);background:rgba(var(--color-accent),1);vertical-align:middle" aria-hidden="true"></span> |
| `--size-10` | <span style="display:inline-block;width:var(--size-10);height:var(--size-10);background:rgba(var(--color-accent),1);vertical-align:middle" aria-hidden="true"></span> |
| `--size-11` | <span style="display:inline-block;width:var(--size-11);height:var(--size-11);background:rgba(var(--color-accent),1);vertical-align:middle" aria-hidden="true"></span> |
| `--size-12` | <span style="display:inline-block;width:var(--size-12);height:var(--size-12);background:rgba(var(--color-accent),1);vertical-align:middle" aria-hidden="true"></span> |

The fluid sizes grow with the viewport within set bounds. Their samples also use the token directly and will resize with the viewport:

| Token | Sample |
| --- | --- |
| `--size-fluid-3` | <span style="display:inline-block;width:var(--size-fluid-3);height:var(--size-fluid-3);background:rgba(var(--color-accent),1);vertical-align:middle" aria-hidden="true"></span> |
| `--size-fluid-4` | <span style="display:inline-block;width:var(--size-fluid-4);height:var(--size-fluid-4);background:rgba(var(--color-accent),1);vertical-align:middle" aria-hidden="true"></span> |
| `--size-fluid-5` | <span style="display:inline-block;width:var(--size-fluid-5);height:var(--size-fluid-5);background:rgba(var(--color-accent),1);vertical-align:middle" aria-hidden="true"></span> |

For example, use `padding: var(--size-3)` for a standard spacing step, or `font-size: var(--size-fluid-4)` when a dimension should grow with the viewport.

## Borders and radii

Border-width tokens provide a small set of reusable line weights. Each sample uses its token as the top border width:

| Token | Sample |
| --- | --- |
| `--border-size-1` | <span style="display:inline-block;width:var(--size-10);height:var(--size-4);border-top:var(--border-size-1) solid rgba(var(--color-accent),1);vertical-align:middle" aria-hidden="true"></span> |
| `--border-size-2` | <span style="display:inline-block;width:var(--size-10);height:var(--size-4);border-top:var(--border-size-2) solid rgba(var(--color-accent),1);vertical-align:middle" aria-hidden="true"></span> |
| `--border-size-3` | <span style="display:inline-block;width:var(--size-10);height:var(--size-4);border-top:var(--border-size-3) solid rgba(var(--color-accent),1);vertical-align:middle" aria-hidden="true"></span> |

The radius tokens reuse the size scale for small corners and provide a dedicated round value for circular shapes:

| Value | Example usage | Sample |
| --- | --- | --- |
| `var(--size-0)` | Form fields, buttons, badges, inline code, calendar cells, and code blocks | <span style="display:inline-block;width:var(--size-10);height:var(--size-6);border:var(--border-size-2) solid rgba(var(--color-accent),1);border-radius:var(--size-0);background:rgba(var(--color-accent),.12);vertical-align:middle" aria-hidden="true"></span> |
| `var(--size-1)` | Tiles and dialog loading indicator | <span style="display:inline-block;width:var(--size-10);height:var(--size-6);border:var(--border-size-2) solid rgba(var(--color-accent),1);border-radius:var(--size-1);background:rgba(var(--color-accent),.12);vertical-align:middle" aria-hidden="true"></span> |
| `var(--size-2)` | Dialog panels | <span style="display:inline-block;width:var(--size-10);height:var(--size-6);border:var(--border-size-2) solid rgba(var(--color-accent),1);border-radius:var(--size-2);background:rgba(var(--color-accent),.12);vertical-align:middle" aria-hidden="true"></span> |
| `--radius-round` | Circular chart marks and swatches | <span style="display:inline-block;width:var(--size-6);height:var(--size-6);border:var(--border-size-2) solid rgba(var(--color-accent),1);border-radius:var(--radius-round);background:rgba(var(--color-accent),.12);vertical-align:middle" aria-hidden="true"></span> |

Most interface corners use the size scale for a consistent radius. Use `--radius-round` for circular marks.
