---
title: 'A Prototyping Platform That Shapes Product Strategy'
tags:
  - caseStudy
  - productDesign
description: I created and maintain a custom interactive prototype site that enables rapid, high-fidelity simulation of in-development features at AgencyBloc.
image: portfolio/product-design/prototyping-platform/prototyping-platform.jpg
alt: Prototyping Platform
medium: Product
year: 2012-Current
date: 2026-05-12
---
{% storyImage "./portfolio/product-design/prototyping-platform/prototyping-platform.jpg" "Prototyping Platform" %}

## Summary

I created and maintain a custom **interactive prototype site** that enables rapid, high-fidelity simulation of in-development features at AgencyBloc. What began as a workaround for front-end handoff misalignment has become a central part of our UX process, stakeholder communication, usability research, and design advocacy. The site helps answer two fundamental questions at once:

> What are we building?
> And how will we build it?

Its defining characteristic is that it's built with **real components** — the same ab-components Web Components used in the production application. That's not a small distinction. Prototypes built with real components carry real constraints: actual accessibility behavior, real responsive breakpoints, actual slot and prop limitations. AI-assisted tools like Magic Patterns or Figma Make can produce polished-looking UI quickly, but the output approximates the design system rather than running on it. When you test a prototype here, you're testing something structurally identical to what engineers will build.

That fidelity is also what makes the platform useful for shaping product direction — not just validating it. When a proposed design direction needs to be evaluated or redirected, there's something concrete and credible to work from.
---

## The Problem

In the early years of our product, handoff from design to development meant handing off a picture. This led to ambiguity in scope, inconsistent builds, delayed feedback loops, and no shared way to preview behavior across devices or breakpoints. We needed a tool where both the "what" and the "how" of a feature could be worked out — and tested — before reaching production.

That original problem has a newer form. AI-assisted design tools can now produce high-fidelity prototypes quickly from a prompt. But output that looks production-ready can still bypass the component library entirely — introducing the same inconsistency and false confidence that handoff pictures did, just faster and at higher fidelity. A prototype that *looks* like the product but isn't built with its components can't tell you whether the design is actually buildable, accessible, or consistent with adjacent features.
---

## My Role

My role has been designer and design engineer — I've owned this initiative from the beginning, starting with simple server-side includes and evolving the toolset as the product matured. The current platform is built on **Eleventy**, which lets me:

- Use local data sources to mock user types, feature states, and UI conditions
- Integrate with **ab-components** Web Components, making the prototype a true representation of production UI — not an approximation
- Quickly publish and maintain multiple branches or versions for different features or teams
- Deploy and maintain pipelines to publish sites to S3
---

## How It’s Used

Today, the site serves as a living, collaborative space used continuously across the company:

- **Exploratory UX & UI Concepts** — trying new interface patterns and microinteractions using real components, so exploration stays connected to what’s actually buildable
- **New Feature Prototyping** — designing in-browser experiences for PMs and engineers before full implementation begins
- **Design Advocacy** — providing a concrete, credible artifact to evaluate proposed directions, redirect PM-built prototypes, or demonstrate alternatives when a design decision needs to be revisited
- **Internal Stakeholder Demos** — giving leadership and cross-functional teams a clear, clickable preview of what’s coming
- **Client Usability Testing** — sharing links that run in any browser or device, simulating the real product at production fidelity
- **Developer Handoff** — providing interaction-ready UI and mock data with component-based structure, reducing the gap between design intent and engineering interpretation

Its power is not just in fidelity, but in **accessibility**: it runs where users run — in the browser, in their context, at their viewport size.
---

## Real-World Impact: Sales Pipeline Usability Study

The Sales Pipeline feature is a clear example of what the platform makes possible — and what it prevents.

Rather than discovering problems during QA or after launch, we ran a usability study against a live prototype before engineering picked up the work. Shared with customers as a clickable simulation built on real components, it surfaced structural UX issues that a design review alone wouldn't have caught:

- **Unclear setup flow** between Sales Teams and Pipelines
- **Difficulty adding users** from various admin views
- **Confusion about the purpose** of features like security groups, win probability, and stage aging
- **Unexpected empty states and missing feedback** (e.g., draft pipelines not appearing in dropdowns)
- **Navigation disconnects** between Sales Pipeline and Opportunity views
- **Ambiguity in naming conventions**, UI language, and visibility logic

These weren't cosmetic issues — they were structural. Finding them in prototype review, not production, meant they could be addressed before they became engineering rework. The prototype also gave the team a shared reference for the fixes: not a description of what should change, but a working example of what it should become.
---

## Results & Reflection

The platform delivers specific, repeatable outcomes:

- **Structural problems caught before engineering** — setup flows, navigation logic, empty states, and naming issues surface in prototype review rather than QA or post-launch
- **A credible artifact for design advocacy** — concrete enough to redirect a proposed direction, evaluate a PM-built prototype, or demonstrate an alternative before a decision is locked in
- **Reduced interpretation gaps at handoff** — engineers receive component-based markup that already reflects production-quality UI; the "did we build it right?" question gets answered earlier
- **Usability studies at production fidelity** — participants interact with real components, real responsive behavior, and real accessibility patterns — not an approximation
- **A check on AI-accelerated development** — when AI-generated prototypes are used for ideation, the platform provides a clear handoff point back to the real component system before direction is committed

The title of this piece says the platform shapes product strategy. That's a specific claim. It earns it not by influencing roadmaps directly, but by giving design something concrete to work from at the moments when direction is still being decided — before commitments are made, before engineering starts, and before testing assumptions becomes testing rework.

> "One of the biggest misconceptions is that just because it looks polished, it's final. But this tool is often where conversations begin, not end."

The prototype site is a quiet engine behind that momentum — and the reason "we'll figure it out in development" happens less often.