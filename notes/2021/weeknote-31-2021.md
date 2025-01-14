---
title: Weeknote 31/2021
tags:
  - weeknotes
  - release notes
description: SVG favicons. Viewbox, height, and width refresher. SVG favicons inline with base64 encoding with an example.
date: 2021-07-29
---
- I added a [SVG favicon](https://css-tricks.com/svg-favicons-in-action/) to this site. I needed a refresher on [scaling SVG](https://css-tricks.com/scale-svg/).
- Later updated the favicon reference to use _Data URIs_ to inline the image. The SVG is small and I wanted to remove an HTTP request!

```html
<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 version=%221.1%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 xmlns:svgjs=%22http://svgjs.com/svgjs%22 width=%2250%22 height=%2250%22><svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2250%22 height=%2250%22 role=%22img%22 aria-labelledby=%22svgLogo%22 viewBox=%220 0 50 22%22><title id=%22SvgjsTitle1000%22>Josh Crain</title><circle cx=%2240%22 cy=%225%22 r=%225%22></circle><circle cx=%2240%22 cy=%2217%22 r=%225%22></circle><circle cx=%225%22 cy=%2217%22 r=%225%22></circle><path d=%22M33 0v22c-5.5 0-10-4.9-10-11S27.5 0 33 0zM22 11c0 6.1-4.5 11-10 11V0h10v11z%22></path></svg><style>@media(prefers-color-scheme:light){:root{filter:none;}}@media(prefers-color-scheme:dark){:root{filter:invert(100%);}}</style></svg>">
```