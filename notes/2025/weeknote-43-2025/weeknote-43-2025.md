---
title: Weeknote 43/2025
tags:
  - weeknotes
description: Weekly notes for week 43/2025.
date: 2025-10-23
---
- Three years ago I created a [self portrait SVG](/notes/2022/svg-self-portrait/) illustration in Adobe Illustrator. I am pleased with how it turned out but the size, the file size, has bothered me. I reduced it initially from 39 KB to 17 KB, but it still seemed big. It's used on the homepage of this website otherwise I wouldn't care so much. There, every byte counts. This week I inspected the source code and had the same thought. Why are there so many points in the `<path>`? I opened the file in Illustrator and found there is a very quick way to simplify, which had an impact to the size of the SVG. As I did before, I used SVGO to remove the extra markup Illustrator adds and then, by hand, made updates to make it more accessible. Now the illustration is 8 KB. 