---
title: Notes on a Modern CSS Reset
metaTitle: 
tags: ['notes', 'webdev', 'css']
description: I have carted around the same CSS reset for years. A discussion on social media prompted me to find my modern CSS reset. 
date: 2022-01-26
---
When I started work on this site I made a conscious effort to avoid any carryovers from previous projects or work. I wanted a fresh start. I wanted to work _with_ the browser defaults as much as possible which meant no frameworks, _or resets_. The goal was to only write code for what was needed. While liberating, over time I’ve seen some redundancy in code that would be prevented with minimal resets. 

Recently, I noticed conversation on social media around the idea of a modern CSS reset. [Josh Comeau](https://www.joshwcomeau.com/) wrote [an article](https://www.joshwcomeau.com/css/custom-css-reset/) that took an interesting look at something fairly mundane, which is something he does quite well. It seemed like a good opportunity to take a fresh look at something that, honestly, I’d lost sight of over the years.

Back when I first started working with CSS there was far less alignment among browser vendors. A CSS reset became essential to reign in (though not eliminate) the madness self-defined standards. Since then we have seen rise of web standards and a much greater alignment among browser makers. It has made me wonder, if browser alignment is the goal with resets are they really necessary anymore? Should we create a reset so `:focus` styles look the same for all browsers that visit my site? Should we value being part of a consistent user experience between many sites where the user has some say? 

We _do_ need a way to lessen the lift and make the work more intuitive. This is where I have normalized the code from the start with how I _wish_ browsers deal with a particular element. Whether we “normalize” (fixing implementation of different browsers) or “reset,” (remove browser styling) what we really want is a better starting point.

## Box-sizing
[CSS is awesome](https://css-tricks.com/css-is-in-fact-awesome/) but sometimes not all that intuitive. The box-sizing model must be one of the most confusing concepts for anyone new to CSS, I know it was for me. To make heights and widths more intuitive is a must have. 

https://css-tricks.com/notes-on-josh-comeaus-custom-css-reset/
https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
https://css-tricks.com/an-interview-with-elad-shechter-on-the-new-css-reset/



```css
/* 1. Use a more-intuitive box-sizing model. */

*, *::before, *::after {
 box-sizing: border-box;
}
```

## Default Margins
```css
/* 2. Remove default margin */

* {
 margin: 0;
}
```

## Percentage based height
```css
/* 3. Allow percentage-based heights */

html, body {
 height: 100%;
}
```

## Typography
```css
/* Typographic tweaks!

 4. Add accessible line-height
 5. Improve text rendering/speed

*/

body {
 line-height: 1.5;
 -webkit-font-smoothing: antialiased; /* MacOS Chrome and Safari */
 text-rendering: optimizeSpeed;
}
```

Inputs and Buttons
```css
/* 7. Remove built-in form typography styles */

input, button, textarea, select {
 font: inherit;
}
```

## Media/images
Display block  fixes the margins and gaps around an image. Images often appear like a paragraph, a element of layout. 

The only thing I don't about display block is that you can't always center an image. Some CMS's apply text-align: center; if the image is smaller than the text area the image doesn't look centered this is because the image and the bounding box are different widths (not really). media elements like `<img>` are special: they're known as _replaced elements_

```css
/* 6. Improve media defaults */

img, picture, video, canvas, svg {
 display: block;
 max-width: 100%;
}
```

Smooth scrolling
```css
html:focus-within {
  scroll-behavior: smooth;
}
```

Reduced motion
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```


Links
```css
nav a {
  text-decoration:none;
}
:not(nav) a {
  text-decoration-skip-ink: auto;
}
```

Tables
```css
table {
  border-spacing: 0;
}
```