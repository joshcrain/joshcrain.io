---
title: Web Components & Display Contents
metaTitle: 
tags: ['notes', 'css', 'webdev']
description: "The CSS property display: contents; can help layout CSS grids using web components."
date: 2023-06-22
---
Every once in a while I surprise myself with a solution so simple I kick myself for not seeing it sooner. Today was that day. 

About a year ago I delved into the world of web components. Web components are a great way to group functionality (including other components) in a modular and compartmentalized way. Web components have proven an effective and powerful tool but I have also found myself struggling to do basic things. One such problem is that web components must render a host element. Most of the time this is not a problem except when the HTML or CSS layout expects a particular structure. 

For example, if I wanted to output a list of items in a grid using *CSS Grid or Flexbox* the HTML might look something like this:

```html
<grid-items>
	<grid-item>item</grid-item>
	<grid-item>item</grid-item>
	<grid-item>item</grid-item>
</grid-items>
```

And our CSS like this:

```css
grid-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16em, 1fr));
  gap: 1em;
}
```

That works! But what if I want to add another component inside `<grid-items>` that contains another group of `<grid-item>` with specific functionality?

```html
<grid-items>
	<grid-item>item</grid-item>
	<grid-item>item</grid-item>
	<grid-item>item</grid-item>
	<grid-group>
		#shadow-root (open)
		<grid-item>item</grid-item>
		<grid-item>item</grid-item>
		<grid-item>item</grid-item>
	</grid-item>
</grid-items>
```

This is where we run into problems, not with the HTML but with the CSS. CSS Grid and Flexbox are powerful ways to control layout, mostly because we are able to orchestrate the layout of all the direct descendants. But when the items we want to affect are *not* direct descendants, our layout breaks down. As I said before web components must render a parent element, so there seemed like no way around this.

As I thought about this problem again I said to myself ”I wish I didn’t have to render the host element. I wish I could *display the contents*.” 

Display contents... display contents... Why did this ring in my ears? Might there be a way to do this with the CSS `display` property? Turns out there is and it's the keyword property `contents`. [From MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/display#box):

> These elements don't produce a specific box by themselves. They are replaced by their pseudo-box and their child boxes.

For this use case `display: contents` was what I needed. The `<grid-group>` element does not produce its own box so the layout and the items contained in the shadow-root act as direct descendants. In my implementation I utilized the `:not()` pseudo-class to ensure any component that is not `<grid-item>` does not produce a box.

```css
::slotted(:not(grid-item) {
  display: contents;
}
```

I have found Web components to be a great way to manage complex design systems. They have often challenged me to rethink old habits—which is good. Be prepared for change if you wish to make web components part of your front-end toolset. A familiarity with `display: contents` might help!

