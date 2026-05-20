---
title: 'Case Study: Whole Foods Holiday Meal Ordering'
tags: ['webDesign']
image: portfolio/web-design/whole-foods-market/1024x768-wfm-cart-square.png
alt: Whole Foods Market holiday meal ordering cart interface
description: Responsive front-end development for Whole Foods Market's holiday meal ordering experience, including in-store kiosk support and a custom pre-CSS Grid responsive layout.
medium: Website
year: 2014
date: 2024-02-08
---
{% storyImage 'portfolio/web-design/whole-foods-market/1024x768-wfm-cart-square.png', 'Shop Whole Foods Market Cart Screenshot' %}

**Role:** Front-End Developer & Design Consultant
**Tools:** HTML, CSS, JS/jQuery, Common Patterns Design System
**Scope:** Responsive interface development, custom grid system, design adaptation

Whole Foods needed a standalone ordering experience for holiday meals — separate from their main marketing site but visually consistent with the brand. It had to work reliably across desktop, tablet, and in-store kiosks through Thanksgiving and Christmas.

I came in after scope was set, working from provided mocks without access to the original design files or source code. Rather than retrofitting the existing codebase, I rebuilt the site shell from scratch — moving to a fluid, percentage-based layout that simplified the CSS and improved responsiveness across breakpoints. The rebuild was faster than patching would have been.

The most technically interesting problem was the product grid. CSS Grid wasn’t reliably supported yet, so I built a hybrid CSS and JavaScript layout engine that calculated positions dynamically based on viewport width. It’s a problem that would take an afternoon today. At the time it required real problem-solving.

I built on **Common Patterns** — my internal design system — for accessibility foundations and reusable components, then customized on top for the Whole Foods brand.

The site ran through two holiday ordering seasons across web and kiosk. Midway through the project the client shared a third-party usability study. Watching real users navigate something I’d built — where they got confused, what they ignored, what worked — was different from any internal review. That experience changed how I evaluate UX clarity, and it’s stayed with me.


