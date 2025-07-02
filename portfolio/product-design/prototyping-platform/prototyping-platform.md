---
title: 'A Prototyping Platform That Shapes Product Strategy'
tags:
  - caseStudy
  - portfolio
description: I created and maintain a custom interactive prototype site that enables rapid, high-fidelity simulation of in-development features at AgencyBloc.
image: portfolio/product-design/prototyping-platform/prototyping-platform.jpg
alt: Prototyping Platform
medium: Product
year: 2012-Current
date: 2025-06-21
---
{% storyImage "./portfolio/product-design/prototyping-platform/prototyping-platform.jpg" "Prototyping Platform" %}

## Summary

I created and maintain a custom **interactive prototype site** that enables rapid, high-fidelity simulation of in-development features at AgencyBloc. What began as a workaround for front-end handoff misalignment evolved into a central part of our **UX process, stakeholder communication, usability research**, and **design validation**. The site helps answer two fundamental questions at once:

> What are we building?  
> And how will we build it?

It allows us to explore interface concepts, test usability, share ideas internally, and hand off interaction-ready code to developers — all in a form that’s fast, flexible, and already running in the browser.

---

## The Problem

In the early years of our product, handoff from design to development often meant handing off a picture — whether from Photoshop or another image editing application. This led to:

- Ambiguity in scope and intent
- Inconsistent or conflicting builds
- Delayed feedback loops during implementation
- No shared way to preview behavior across devices or breakpoints

At the same time, we lacked a safe space to **explore ideas** without committing to the cost of full app development. We needed a tool where both the “what” and the “how” of a feature could be worked out — and tested — before reaching production.

---

## My Role

My role has been _designer and design engineer_. I have **owned this initiative from the beginning**, starting with simple .NET server-side includes and evolving the toolset over time. Around five years ago, I migrated the prototype site to **Eleventy**, allowing me to:

- Use local data sources to mock user types, feature states, and UI conditions
- Integrate with our **Blocs Web Components**, making the prototype a true representation of our production UI
- Quickly publish and maintain multiple branches or versions for different features or teams
- Dev-Ops for creating and maintaining pipelines to publish sites to S3.

It’s modular, fast to update, and deeply aligned with our design system.

---

## How It’s Used

Today, the site serves as a living, collaborative space that’s used continuously across the company. Some of its primary roles include:

- **Exploratory UX & UI Concepts** – Trying new interface patterns and microinteractions
- **New Feature Prototyping** – Designing in-browser experiences for PMs and engineers
- **Internal Stakeholder Demos** – Giving execs and cross-functional teams a clear preview of what’s coming
- **Client Usability Testing** – Sharing links that work in any browser or device, simulating the real product
- **QA & Ticket Support** – Capturing and annotating screenshots, clarifying functionality, and generating test scenarios
- **Developer Handoff** – Providing interaction-ready UI and mock data, with component-based structure

Its power is not just in fidelity, but in **accessibility**: it runs where users run — in the browser, in their context, at their viewport size.

---

## Real-World Impact: Sales Pipeline Usability Study

When we introduced a new Sales Pipeline feature, the prototype site became the foundation for our usability testing. Shared with customers as a live, clickable simulation, it revealed critical UX issues long before code hit production. Key findings included:

- **Unclear setup flow** between Sales Teams and Pipelines
- **Difficulty adding users** from various admin views
- **Confusion about the purpose** of features like security groups, win probability, and stage aging
- **Unexpected empty states and missing feedback** (e.g., draft pipelines not appearing in dropdowns)
- **Navigation disconnects** between Sales Pipeline and Opportunity views
- **Ambiguity in naming conventions**, UI language, and visibility logic

These findings directly shaped refinements to the experience, clarified documentation, and strengthened the onboarding flow — all before the feature shipped.

---

## Results & Reflection

While the prototype site has existed in some form since our earliest days, its current form delivers **repeatable, meaningful outcomes**:

- Enables **shared understanding** across product, design, engineering, and leadership
- Shortens iteration cycles by surfacing friction points early
- Strengthens stakeholder and client **buy-in through clarity**
- Enhances accessibility, testing, and responsive behavior validation
- Feeds into the Blocs system, reinforcing modular and scalable UI thinking

It also creates a **culture of collaboration**. It brings ideas into the open, gives teams something tangible to discuss, and makes space for testing — not assuming.

> “One of the biggest misconceptions is that just because it looks polished, it’s final. But this tool is often where conversations begin, not end.”

Success isn’t just about how quickly we can ship. It’s about how confidently we move forward — and how many people are aligned behind the same understanding. The prototype site is a quiet engine behind that momentum.