---
title: Weeknote 35/2021
tags: ['weeknotes']
description: Drop caps and the mystery of the missing runs. 
date: 2021-08-26
---
- Started using [::first-letter](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter) to target drop caps instead of specifying them individually with a ```<span>```.
- I had struggled to understand why some of my running activities were missing from my running log. I explored the possibility that the JSON feed was limited to fewer activities that I had first thought. I looked into filtering activities by year to try to get fewer activities. In the end the reason for the missing activities was they were not set to public. And since the JSON feed is of public activities that's why they were missing.