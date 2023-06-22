---
title: Weeknote 22/2023
tags: ['weeknotes']
description: Eleventy 2.0 build failed. Netlify builds using .toml. Gardening.
date: 2023-06-02
---
- I recently updated to Eleventy 2.0 and received an error that `"build.command" failed` when I pushed the changes to Netlify. Vague errors are always fun. With a little research I was able to determine the default node version Netlify provides is not new enough to support the Eleventy upgrade. I found an article by [Dan Urbanowicz](https://danurbanowicz.com/) very helpful to [manually set the node version for Netlify builds](https://danurbanowicz.com/posts/2022/10/19/how-to-manually-set-the-node-version-for-your-netlify-builds/). Initially I set an environmental variable through the UI but I just had a feeling I would forget and lose track of where that was being set. Using the `.toml` file will bring more visibility.
- The hydrangea leafed out [even though I had some concerns](https://joshcrain.io/notes/2023/weeknote-15-2023/). 
- I noticed tomatoes already on the vine. I planted five plants. Two in the ground, three in containers. 