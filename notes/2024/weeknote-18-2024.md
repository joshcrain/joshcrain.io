---
title: Weeknote 18/2024
tags: ['weeknotes', 'releaseNotes']
description: Weekly notes for week 18/2024.
date: 2024-05-02
---
## Release Notes
- The font previously used for everything was _[ui-serif](https://caniuse.com/extended-system-fonts)/Palatino_. It has been updated.
- Headings use [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display/about). 
- Two other new fonts use what I learned from [Modern Font Stacks](https://modernfontstacks.com/). 
- Font families are defined using CSS custom properties for ease of updates.
- CSS fixes for the homepage to more gracefully handle medium viewport sizes. 
- Added an SVG to create a wavy line for section breaks. This adds a little more weight to the page (I used a CSS border previously) but I’m pleased with how the layout feels more organic.
## Other
- The [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) is [support across browsers](https://caniuse.com/mdn-api_htmlelement_popover), though the Anchor Position API is [not as well supported](https://caniuse.com/css-anchor-positioning). Without positioning, popovers do not have any relational context.  