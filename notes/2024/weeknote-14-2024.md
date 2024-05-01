---
title: Weeknote 14/2024
tags:
  - weeknotes
  - eleventy
  - releaseNotes
description: Weekly notes for week 14/2024.
date: 2024-04-03
---
- I made some updates to the [running](/running/) section of this site. I have managed the running data manually in a single JSON file. The file has started to get too large so I decided to break it up by year, since past years will never change. This worked out just fine except Eleventy pagination needs a single data source to output pages for each running activity. I was able to utilize [custom collections](/docs/collections/#advanced-custom-filtering-and-sorting) to concatenate multiple sources. Additionally, I was able to filter out non-running activities more cleanly (and accurately) than I was before. It turns out my total count was off by 57.
- Added a page to list out [all tags](/tags/) on this website using an article by Jordan Kohl to [add a tag list with count to Eleventy.js](https://simpixelated.com/adding-tag-list-with-post-count-to-eleventy-js/). 