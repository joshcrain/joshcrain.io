---
title: 'Building the Blocs Pattern Library & Interactive Design System'
tags:
  - caseStudy
  - productDesign
description: To support a growing product, expanding team, and maturing front-end architecture at AgencyBloc, I created the Blocs Pattern Library.
image: portfolio/product-design/blocs-pattern-library/blocs-pattern-library-square.png
alt: Blocs Pattern Library Screenshot
medium: Product
year: 2023-Current
date: 2026-05-12
---
{% storyImage "./portfolio/product-design/blocs-pattern-library/blocs-pattern-library.png" "Prototyping Platform" %}

## Summary

To support a growing product, expanding team, and maturing front-end architecture at AgencyBloc, I built two connected systems: **ab-components** — a Stencil-based Web Components library documented through Storybook — and **Blocs**, a high-fidelity interactive prototype environment that assembles realistic product pages using those components.

Together they form more than a design system. Alongside the components and documentation, I built a structured review process — executable conventions and slash commands that any contributor or AI-assisted workflow can follow without a briefing. The goal was a system that maintains its own quality standards, not one that depends on a single person to enforce them.

---

## The Challenge

As AgencyBloc’s platform and team grew, I noticed a pattern:

- UI implementations were drifting in style and behavior.
- Reusable solutions were being rebuilt from scratch across features.
- Accessibility efforts were inconsistent.
- And even with the best intentions, teams often had very different ideas of what “done” looked like.

At a certain scale, **good intentions aren’t enough to maintain consistency**. We needed shared patterns and clearer communication — not just between designers and developers, but across PMs, QA, support, and leadership.

That problem has since taken on a new dimension. AI-assisted tools like Magic Patterns and Figma Make can generate plausible-looking UI quickly — but the output isn’t connected to the component library. The same drift that happened when developers built from scratch now happens when prototypes built outside the system become the product direction by default. The design system has to answer not just “how do we keep humans consistent” but “how do we keep AI-accelerated development connected to the real system.”

I had seen the original problem during my time at Spinutech, where I built a collection of front-end code patterns to speed up CMS and ecommerce development. At AgencyBloc, I knew the solution would need to keep evolving.

---

## My Role

I’ve led the Blocs initiative solo for several years, with cross-functional support to integrate it into our workflow and CI/CD processes.

### What I built:

- **ab-components** — a StencilJS-based Web Components library used across the product
- A **StorybookJS site** that auto-generates documentation from component source code, with usage guidance, decision rules, and anti-patterns authored alongside each component
- **Blocs** — an Eleventy-based interactive prototype environment that assembles realistic product pages using ab-components markup, used for flow validation, usability testing, and engineering handoff
- A **structured review process** — executable slash commands (`/review-component`, `/review-accessibility`, `/audit-stories`, `/audit-tests`) and a shared conventions file that any contributor or AI-assisted workflow can run without additional guidance
- CI/CD pipelines (with help from devops) to deploy and maintain both Storybook and prototype sites internally

---

## Technical Stack

- **StencilJS** for building fully accessible, reusable Web Components
- **StorybookJS** for automated documentation and live component previews
- **Eleventy** static site generator for interactive prototypes and concept flows
- **Bitbucket Pipelines** for CI/CD
- Custom build tools and templating (Nunjucks, Handlebars) where needed

---

## How It Works

**ab-components** houses every front-end component used in the application — buttons, inputs, alerts, modals, tables, and more. Components are:

- **Framework-agnostic** (via Web Components)
- **Accessible by default**
- **Documented at three layers**: API contracts in the component source, usage guidance and decision rules in Storybook stories, and real-world composition examples in Blocs

**Blocs** is a parallel environment built entirely with ab-components using Nunjucks templates. It assembles realistic product pages — full record views, navigation, forms, modals — in the context they'll actually appear in. This closes the gap between component-level documentation and product-level design: rather than prototyping in a tool that approximates the design system, Blocs prototypes *are* the design system.

Blocs is used to:

- **Guide PMs and engineers** during early planning with realistic, clickable flows
- **Validate designs** before handoff without a full engineering build
- **Run usability tests** with real users against production-quality UI
- **Cross-reference Storybook stories** — surfacing component compositions that documentation alone wouldn't reveal

**The review process** is a third layer. Each component passes through a structured review: accessibility is checked against a defined checklist, stories are audited for documentation quality and completeness, tests are reviewed for coverage, and all three are cross-referenced against real usage in Blocs. This is encoded in executable slash commands so the same standard applies whether a human or an AI-assisted workflow is doing the review.

---

## Impact

- **UI consistency that holds under pressure** — components enforce visual and behavioral standards at the code level, not through convention or good intentions
- **Review quality that doesn't depend on availability** — the slash command review process catches accessibility issues, documentation gaps, and API mismatches that would otherwise require manual checking across multiple files; any contributor gets the same standard on day one
- **Prototypes connected to the real system** — Blocs compositions use actual ab-components markup, so what's validated in a usability test reflects what engineers will build, not an approximation
- **A check on AI-accelerated development** — when AI-generated prototypes are used for ideation, Blocs provides a clear handoff point back to the component system before work proceeds
- **Shared language across disciplines** — when interpretations diverge, there's a concrete, clickable example to anchor the conversation; misalignment gets resolved before it becomes rework

---

## Reflection

Design systems are never “done.” I iterate regularly based on team feedback, usability issues, or new feature demands. Sometimes that means updating a component to match real usage. Other times it’s clarifying documentation, improving the review process, or adding a new story that reflects how a component is actually being composed in production.

**Systems thinking, communication, and practical collaboration** have all been strengthened through this work. But the most important thing I’ve learned is that the goal isn’t a system I can point people to — it’s a system that works without me pointing. When the conventions are clear enough that a new contributor picks them up from the files, when the review process runs the same way regardless of who’s doing the review, when a prototype answers the question before it gets asked — that’s when the work is actually doing its job.