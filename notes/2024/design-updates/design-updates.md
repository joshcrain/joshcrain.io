---
title: Font & Design Updates
tags:
  - notes
  - releaseNotes
description: Updated font stacks, a new custom font. Miscellaneous design updates and the affect on performance.
date: 2024-05-06
---
Web-safe fonts have been an important part of this site’s design. So when I recently discovered [Modern Font Stacks](https://modernfontstacks.com/), a website that groups a prioritized list of font families, I began to rethink what was possible with a limited [performance budget](https://timkadlec.com/remembers/2019-03-07-performance-budgets-that-stick/).
## Web-Safe Fonts
I implemented two new web-safe font stacks. The first is an “[Industrial](https://github.com/system-fonts/modern-font-stacks#industrial)” set that prioritizes Bahnschrift, DIN Alternate, and then Franklin Gothic Medium for metadata and dates. The second is an “[Old Style](https://github.com/system-fonts/modern-font-stacks#old-style)” set that prioritizes Iowan Old Style, Palatino Linotype, and then URW Palladio L. 
## Custom Font
I have long wanted a display font for headings that would compliment the shapes of my logo. It would need to be a custom font with a high x-height and rounded terminals. I settled on [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display/about) based on [Source Serif](https://fonts.adobe.com/fonts/source-serif). Later I may opt for a more premium option, now that I know what I’m looking for. To help with performance I host the file and use the `rel="preload"` attribute to help load the font early in the page lifecycle.
## Miscellaneous 
I made other changes to [prevent widows in post titles](/notes/2024/prevent-widows-in-post-titles/), new SVG dividers, better responsive CSS on the homepage, and converted a host of dumb quotes to smart quotes. I’m pleased with the updates, the first [design changes since 2022](/notes/2022/2022-in-review/). [Lighthouse](https://pagespeed.web.dev/analysis/https-joshcrain-io/5gjpvzirfa?form_factor=mobile) still shows 100s across the board so the site continues to perform well even with a new HTTP request.
## Mobile Performance 
(Slow 4G throttling):
- First Contentful Paint: **1.0 s**
- Largest Contentful Paint: **1.3 s**
- Total Blocking Time: **10 ms**
- Cumulative Layout Shift: **0**
- Speed Index: **1.0 s**

{% storyImage "./notes/2024/design-updates/screenshot-2024-05-06.jpg" "A screenshot of the homepage of this site after the design updates" %}