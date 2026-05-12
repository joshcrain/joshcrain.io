---
title: 'Building a Design System Before “Design Systems” Were a Thing'
tags:
  - caseStudy
  - productDesign
description: While working as a UX designer and front-end developer at Spinutech, I created an internal front-end pattern library that helped align designers and developers across dozens of custom client websites.
image: portfolio/product-design/first-design-system/common-patterns.png
alt: Common Patterns Logo
medium: Product
year: 2012-2017
date: 2017-06-21
---
{% storyImage "./portfolio/product-design/first-design-system/common-patterns.png" "Common Patterns Logo" %}

**Role:** UX Designer & Front-End Developer  
**Company:** Spinutech  
**Years Active:** 2005 – 2016

## Summary

While working as a UX designer and front-end developer at Spinutech, I created an internal front-end pattern library that standardized HTML, CSS, and JavaScript components across dozens of custom client websites — responsive marketing sites, ecommerce platforms, and intranets spanning industries from grocery retail to agricultural equipment.

This wasn't a response to an industry trend. The term "design system" wasn't in common use yet. It was a response to a real problem: inconsistent builds, repeated work, and the friction of translating design intent into production code across a team with no shared starting point. The solution I built then is recognizably the same approach I've refined over the fifteen years since.
---

## The Problem

The core motivation was simple: I was spending too much time rebuilding the same things, and not enough time solving design problems. Projects moved quickly, and the gap between a static design comp and browser-ready code was filled differently every time — by different developers, with different markup, different accessibility practices, and different interpretations of what the design intended.

That inconsistency compounded:

- Handoff friction between design and development on every project
- Brittle or redundant markup across the portfolio
- Accessibility practices that varied by who happened to build the feature
- No shared baseline, which meant no shared standard for what "done" looked like

The pattern library was the answer to all of it — and the starting point for how I think about design systems today.
---

## My Solution: A Shared Pattern Library

I created and maintained a standalone front-end pattern library:

- A centralized site of reusable, documented HTML/CSS/JS components — not snippets, but a shared starting point for every project
- Responsive, accessible patterns for common UI needs
- Support for metadata standards (Open Graph protocol, semantic structure)
- Contributions from designers and developers across the team
- A name and identity for the project — because giving internal infrastructure a real presence is how you get adoption

It became the shared foundation for design and development, significantly reducing time-to-browser while preserving fidelity to the original design intent.
---

## Key Outcomes

- **1–2 days from design comp to browser-ready build** — the most direct measure of what the pattern library made possible
- **Consistent outputs regardless of who built it** — the shared starting point meant quality didn't vary by team member or project
- **Accessibility and semantic structure as defaults**, not afterthoughts applied at the end
- **More time for higher-level design work** — implementation overhead dropped enough to shift focus toward UX thinking and client collaboration
- **A template for what came next** — the same principles behind this library are what ab-components, Blocs, and the review process at AgencyBloc are built on
---

## Notable Clients

The pattern library had to hold up across clients with very different visual languages, technical constraints, and organizational expectations. That it did — consistently — was the real proof of the approach.

- **Hy-Vee**: Worked closely with their internal design team, implementing front-end code that honored an established visual language while improving structure and responsiveness across a large, high-traffic site
- **Electrolux, Firestone Ag, Whole Foods, Des Moines Airport**: Led full design and front-end efforts across projects in retail, agriculture, food, and public infrastructure — presenting directly to stakeholders, gathering feedback, and iterating toward launch

The range mattered. A pattern library that only works for one context isn't a system — it's a template.
---

## What I Learned

The practical skills — building under constraints, communicating across disciplines, advocating for code quality and accessibility — all came from this work. But the more lasting thing was learning to trust the instinct that led to it: that consistency is an architectural problem, not a discipline problem, and that the right answer is infrastructure rather than effort.

That instinct is what led to ab-components and Blocs at AgencyBloc — a Stencil-based Web Components library, a prototype environment built on real components, and a structured review process designed to hold quality standards without depending on a single person to enforce them. The tools are different. The approach is the same one that started here.