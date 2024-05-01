---
title: Prevent Widows in Post Titles with CSS
tags:
  - notes
  - css
description: How to fix widows for long post titles using CSS only because it’s 2024.
date: 2024-04-24
---
In typographic terms, a widow is a very short line of text—usually one word, that concludes a paragraph or column. When a widow appears in a post title it feels especially awkward and unbalanced. This has been a source of annoyance for me because there was [no way to address widows without javascript](https://css-tricks.com/preventing-widows-in-post-titles/). It wasn’t until I reworked the typography on this site I learned something could be done about it. 

{% storyImage "./notes/2024/prevent-widows-in-post-titles/widow.jpg" "A post title with one word on last line" %}
## Balance
The CSS property `text-wrap` adds typographic improvements for more balanced line lengths. So it’s ideal for multi-line headings, especially those that are centered.

```css
h1 { text-wrap: balance; }
```

At the time of writing _balance_ is [supported by all major browsers](https://caniuse.com/?search=text-wrap%3A%20balance) except Safari (but they are close).

## Pretty
Shortly after writing this post I learned there is another update to `text-wrap` that might be more appropriate for some. _Balance_ breaks multiple lines of text into an even distribution of words per line. _Pretty_ optimizes typography, including keeping the number of widows/orphans to a minimum. It seems more appropriate for a rag right titles or those that appear in a column.

```css
h1 { text-wrap: pretty; }
```
At this time _pretty_ is only [supported by Chrome and Opera](https://caniuse.com/?search=text-wrap%3A%20balance).
