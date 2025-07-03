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
date: 2025-06-21
---
{% storyImage "./portfolio/product-design/blocs-pattern-library/blocs-pattern-library.png" "Prototyping Platform" %}

## Summary

To support a growing product, expanding team, and maturing front-end architecture at AgencyBloc, I created the **Blocs Pattern Library** — a reusable, standards-based design system built using Web Components and documented through Storybook. Alongside this, I maintain a parallel **interactive prototype site** that helps teams visualize user flows, test ideas, and reduce ambiguity during planning and implementation.

Together, these systems have reduced inconsistencies, increased confidence in handoffs, and helped the team move faster by providing a shared source of truth.

---

## The Challenge

As AgencyBloc’s platform and team grew, I noticed a pattern:

- UI implementations were drifting in style and behavior.
- Reusable solutions were being rebuilt from scratch across features.
- Accessibility efforts were inconsistent.
- And even with the best intentions, teams often had very different ideas of what “done” looked like.

At a certain scale, **good intentions aren’t enough to maintain consistency**. We needed shared patterns and clearer communication — not just between designers and developers, but across PMs, QA, support, and leadership.

I had seen similar problems during my time at Spinutech, where I built a collection of front-end code patterns to speed up CMS and ecommerce development. At AgencyBloc, I knew the solution would need to evolve.

---

## My Role

I’ve led the Blocs initiative solo for several years, with cross-functional support to integrate it into our workflow and CI/CD processes.

### What I built:

- **StencilJS-based Web Components** used across the product
- A **StorybookJS site** that auto-generates documentation pages from component source code and metadata
- **Custom documentation** for design decisions, accessibility guidance, and usage examples
- An **Eleventy-based interactive prototype site** for flow diagrams, in-progress features, and exploratory UI work
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

The **Blocs Pattern Library** houses every front-end component we use in the application — buttons, inputs, alerts, modals, tables, etc. Components are:

- **Framework-agnostic** (via Web Components)
- **Accessible by default**
- **Well-documented** with live examples, props, and usage guidelines

Teams reference the Storybook site when building new features or reviewing UI changes. For more complex flows or early-stage ideas, the **prototype site** provides an interactive, clickable simulation of how users will experience the interface — without needing full implementation in the app.

This site is also used:

- To **guide PMs and devs** during early planning
- To **test interactions** or validate designs before handoff
- To **run usability tests** with real users
- To **deliver clearer requirements** to engineers

Both systems work in tandem: one for reusable components, the other for zoomed-out flows and conceptual design.

---

## Impact

- **Increased UI consistency** across the product
- **Faster implementation** by devs and fewer back-and-forths
- **Improved accessibility** with standardized, enforced patterns
- **Clearer collaboration** among PMs, designers, and engineers
- **Shared language** for visual design and interaction standards
- **Fewer surprises** during QA and fewer regressions over time

Importantly, the library and prototype site provide **a central place for clarity**. When words fail or interpretations diverge, I can point teams to a shared example. This helps resolve misalignment before it becomes rework.

---

## Reflection

Design systems are never “done.” I iterate regularly based on team feedback, usability issues, or new feature demands. Sometimes that means updating a component to match real usage. Other times, it’s clarifying documentation or improving how prototypes communicate intent.

**Systems thinking, communication, and practical collaboration** have all been strengthened through this work. I’ve learned that building the thing is only half the job — maintaining trust in it is just as important.

Even when others don’t naturally find what they need, I’m able to offer a dependable place to start. That reliability is what makes these tools powerful.