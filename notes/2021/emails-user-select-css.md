---
title: Email and the user-select CSS property
tags: ['notes']
description:  
date: 2021-06-01
---
In the last few years the pace of change with CSS has quickened considerably, especially with the [exit of Internet Explorer](https://blogs.windows.com/windowsexperience/2021/05/19/the-future-of-internet-explorer-on-windows-10-is-in-microsoft-edge/). It's an exciting time to build websites. Fewer fallbacks and hacks means I can spend more time building the with the latest spec and looking towards the future. This all holds true, except for one thing—HTML emails. Building emails in 2021 is a lot like building websites in 2005.

All the new options in CSS 

 Copy content of an email and paste it somewhere else. Especially helpful if an email contains a temporary password. Users often select whitespace in the email before or after the password. When the user attempts to login using the pasted password the login fails and the user is not sure why. I had the idea to use a the CSS property `user-select: all;`. When used on a snippet of text the `user-select` property allows the user to select only the text inside the HTML element targeted by the CSS. 
 
 <p class="codepen" data-height="300" data-theme-id="3314" data-default-tab="html,result" data-user="joshcrain" data-slug-hash="LYEoQpw" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS User Select All">
  <span>See the Pen <a href="https://codepen.io/joshcrain/pen/LYEoQpw">
  CSS User Select All</a> by Josh Crain (<a href="https://codepen.io/joshcrain">@joshcrain</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
 
 _However,_ when I tested it in an email it didn't work as I had hoped. In Gmail the style attribute is gone all together. In Yahoo and Outlook.com the style attribute is still present but the CSS property is missing. 

## TL;DR
The CSS property `user-select: all` will work for websites, but not email. Who knows if it ever will be ready, it's still recommended to use tables for layout after all!

### Email Support Guides
- [Campaign Monitor has a guide](https://www.campaignmonitor.com/css/) that covers email clients and CSS properties allowing you to view support with each. The version history shows a last update date of November 2017, which made me think maybe it just hasn't been updated recently. Now I think its just he pace of  
- Gmail provides a list of [supported CSS properties & media queries](https://developers.google.com/gmail/design/reference/supported_css). No surprise `user-select` is not on the list. 