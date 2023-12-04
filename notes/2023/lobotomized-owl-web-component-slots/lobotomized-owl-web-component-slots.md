---
title: The Lobotomized Owl & Web Component Slots
metaTitle: 
tags:
  - notes
  - webdev
  - webComponents
description: The Lobotomized Owl trick does not work for slotted content in web components. What else can be done?
date: 2023-01-05
---
Slots are one of the best features of web components. Slots allow you to define a place in the markup where to place basic HTML or subcomponents. This brings consistency and intentionality to the implementation. Web components can use the shadow DOM which allows the web component to become encapsulated. This prevents the styles from bleeding into other components. The slotted content, however, is not encapsulated and sits in the light DOM. To style the slotted content from the component itself requires a specific approach. 

## Limitations to styling slotted elements 
The [::slotted pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/::slotted) allows the styling of slotted elements from the host component—but there are limitations. It won’t, for example, select a text node placed into a slot; it only targets actual elements. The elements are limited to compound selectors. That means [combinator selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators) like the [Lobotomized Owl Selector](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/) don’t work. 

```css
::slotted(* + *) {
  margin-top: .5rem; /* doesn’t work */
}
```

When I learned this it was a major bummer. I wanted to manage the space between slotted elements in the same way, ideally in the same component stylesheet. A prescriptive approach, where we target each slotted element is possible. But it's a bloated approach and prone to failure. Thus my disappointment in the gap in support for The Lobotomized Owl which utilizes the [universal selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors) to do the heavy lifting. 

Another approach would be to target the component in a separate stylesheet, specifically for the light DOM. But spreading out styles among two stylesheets seemed hacky and counter to components. 

```css
/* some-other-stylesheet.css */

my-component * + * {
  margin-top: .5rem; /* seems hacky */
}
```

## A second look 
The Lobotomized Owl selector uses the [Adjacent sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator) which selects a sibling that follows another. In a list of siblings all are selected except the first. How else could I select all slotted items but *not* the first one. Then it occurred to me the [:not() pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:not) could be helpful. 

```css
::slotted(:not(*:first-of-type)) {
  margin-top: .5rem; /* this works! */
}
```

With it we can select all slotted elements except the first one and apply the desired styling. I like this solution because I can control the space between slotted elements in the component’s stylesheet. I can have one place to manage all styles associated with a component. This keeps all related CSS together in the same place. *Not* bad!