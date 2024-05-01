---
title: Weeknote 17/2021
tags: ['weeknotes']
description: Current state of Javascript, charts to understand your own discipline, breaking points, more whitespace madness, running break, a new(ish) smoker. 
date: 2021-04-21
---
- Thinking again about [current state of Javascript](https://css-tricks.com/state-of-javascript-2020/). So much is changing for the front-end, the article and corresponding chart been a handy way to view the landscape. It’s a little ridiculous I need to reference a chart to understand what’s going on in my own discipline, which is why [others are reaching a breaking point](https://css-tricks.com/front-end-dissatisfaction-and-backing-off/). 
- More whitespace madness. I ran into some weird spacing on a few webpages after converting pages from .Net to Nunjucks. I inspected the source and tinkered around until finally I noticed a pink dot in Firefox that looked like it represented a character of some sort. In Chrome it appeared as a hex value. It’s apparently the Unicode character 'ZERO WIDTH NO-BREAK SPACE' (U+FEFF). [Why is &#65279; appearing in my HTML?](https://stackoverflow.com/questions/9691771/why-is-65279-appearing-in-my-html) I asked myself. I tried to update encoding, but it was already saved without BOM ([Byte order mark](https://en.wikipedia.org/wiki/Byte_order_mark)) but nothing. The only way I found to fix it was to create a new file. 
- Running (and the Drake Relays) took a backseat to unforeseen circumstances.
- Bought a used, but loved, Weber Smokey Mountain Cooker Smoker 18" for $50. I'm excited to give it a try. 
