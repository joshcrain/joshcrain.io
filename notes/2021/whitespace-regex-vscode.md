---
title: Find Whitespace in VSCode
tags: ['notes', 'webdev']
description: Something I learned about whitespace (and new line character) regex search in VSCode.
date: 2021-04-14
---
I am a little dangerous when it comes to regular expressions (or very dangerous depending on how you look at it). I've used online tools like [this](https://regex101.com/) and [this](https://regexr.com/) to help me learn and troubleshoot regex patterns. But the other day I found myself more lost than usual when I attempted to find whitespace _and/or_ new line characters. I wanted to find and replace a series of HTML tags that were not unique, except as a group. Though the group was unique there was still a lot of variability of whitespace  between the tags. 

## Whitespace _and_ new line regex in VSCode
The tools I mentioned suggested I use `\s` to target whitespace _and_ new line characters—which is exactly what I needed. But when I tested it in VSCode I could not get the results I expected and there were also no errors. Through much trial and error and searching I learned  `\s` does _not_ target new line characters in VSCode (though it does in other systems)—thanks to an article from [Rémi Sharrock](https://remisharrock.fr/post/regex-search-and-replace-visual-studio-code/). To target new line characters I needed to also use `\r`. 
 - Any single whitespace or new line character: `[\s\r]`
 - Any group of whitespace or new line character: `(\s*\r*\s*)`

I used the latter to target the unique HTML tags and effectively ignore the varying whitespace. My searched looked something like this:
``` javascript
</section>(\s*\r*\s*)</main>(\s*\r*\s*)</div>
```