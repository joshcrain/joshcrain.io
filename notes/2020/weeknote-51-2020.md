---
pageTitle: Weeknote 51/2020
tags: ['weeknotes']
metaDescription: Lazy loading images, tap targets, minification. 
date: 2020-12-19
---
* Last week was filled with anticipation and anxiety. For two days all I could do was listen, paralyzed to do anything else.
* Appeared as [#154 on Speedlify](https://www.11ty.dev/speedlify/#site-953e66da), so …
* Made CSS changes to _tap targets_ in the navigation. The height is set to a minimum of 48px, per Lighthouse’s recommendations. 
* Added [LazyImages plugin for 11ty](https://www.npmjs.com/package/eleventy-plugin-lazyimages#upgrade-notes) to improve performance. Modified the plugin to inline the JavaScript and reduce an HTTP request.
* Added minification for JavaScript.