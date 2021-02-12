---
pageTitle: Becoming a front-end master
tags: ['notes','webdev']
metaDescription: Chris’ readings and exercises to guide me towards front-end mastery. 
date: 2020-03-16
---

<span class="dropcap">R</span>ecently, I encountered [an article](https://css-tricks.com/become-a-front-end-master-in-2020-with-these-10-project-ideas/) last November from Chris Coyer which was very helpful. This last year has been really rough for a number of reasons. I haven’t felt like myself, much less a _front-end master_. Chris’ article prompted me to explore some new things in the free moments I have and practice my skills in small but meaningful ways. In the following weeks and months I followed the recommendations—and I’ve learned a lot. 

##  Try out a static site generator
Check. This site uses [Eleventy](https://www.11ty.io) for static site generation. Changes are tracked with Git and pushed to [a Github repo](https://github.com/joshcrain/eleventy-intro) using command line. The site is deployed automatically by Netlify using [continuous deployment](https://docs.netlify.com/site-deploys/create-deploys/#deploy-with-git). 

## Read a bit about Serverless
This _was_ an area where needed to do some [reading](https://serverless.css-tricks.com/about/). With so many [services](https://serverless.css-tricks.com/services/major) out there, there’s a lot to follow. Often the best way to get started is to build something. The next challenge was helpful.

## Build a beautiful form in HTML/CSS
I spent some time to learn [all about form validation](https://css-tricks.com/form-validation-part-1-constraint-validation-html/) and see how much can be done in just HTML, then HTML _plus_ some CSS, then with some vanilla JavaScript. I cannot get over how easy it was to implement a form with [Netlify forms](https://docs.netlify.com/forms/setup/). Take a look and [say hello](/say-hello/).

## Install the Axe accessibility plugin for DevTools

### Landmarks must have an accessible name
Landmarks (i.e. `<main>`, `<header>`, `<nav>`, etc.) need to have a unique role or label. In addition, it was also a good time to review [how to section your HTML](https://css-tricks.com/how-to-section-your-html/) (I had an `<aside>` inside the `<article>`).

### Alternative text should not be repeated as text
This can be a more annoying one to achieve when working with a CMS or templated build. Especially when the image is used as navigation. It’s easy to just reuse the label for the page name instead of a creating a new value for the ALT attribute.

## Spin up a copy of Fractal
This _has_ helped me think about how I would build a front-end as components. Fractal isn’t tied to a specific framework, which I really like. I have experimented with React and ... for this purpose in my day job, but I’m not ready make a decision. Fractal gives me a chance to build and document a strategy ahead of time without any commitment. 

It was helpful to see how others have structured their Pattern Libraries in Fractal.  [Perch Pattern Library](http://patterns.perchcms.com/) and [Bits for 24 Ways](http://bits.24ways.org/) are a few good examples. 

## Implement an SVG icon system
Icon fonts are so easy to implement, but also have [some negatives](https://css-tricks.com/icon-fonts-vs-svg/). Inline SVGs are a great approach especially if the icons are used in the build template. Chris’ book, [Practical SVG](https://abookapart.com/products/practical-svg) introduced me to a lot more than I knew existed about SVG for web. 

This site is all about simplicity so it uses in-lined SVG—[a pretty good icon system](https://css-tricks.com/pretty-good-svg-icon-system/). For the larger application I work on, [maybe something like this](https://css-tricks.com/creating-svg-icon-system-react/). For a large application, icon fonts are still somewhat appealing because of the ease of caching. 

## Implement a service worker
Read [a book about them](https://abookapart.com/products/going-offline). Do something  [very small](https://simpleoffline.website/). Check out  [a framework](https://developers.google.com/web/tools/workbox) centered around them. Service workers install the front-end of _this site_ directly on your device after the first visit. In practice, a service worker can offer great performance benefits that go beyond traditional caching.
