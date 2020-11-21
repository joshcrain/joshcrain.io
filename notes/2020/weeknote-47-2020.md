---
pageTitle:  Weeknote 47/2020
tags: ['weeknotes']
metaDescription: COVID cases on the rise, Phillip Marlowe, CSS minification, and miscellaneous improvements to this site. 
date: 2020-08-15
---
* Monday evening Governor Kim Reynolds announced new restrictions to help curb the spread of COVID-19. Infections have doubled in the last month. 
* It has been difficult for most people to know what the right thing is to do. I don’t think enough people will isolate during Thanksgiving or Christmas and things will continue to get worse. We’ve begun talking about what we might need to do in the event there are abrupt closings and we _all_ need to be home for an extended period of time. 
* The [COVID-19 Event Risk Assessment Planning Tool](https://covid19risk.biosci.gatech.edu/) estimates how likely it is for a Covid-positive person to be at a gathering of X people.
* Chuck Grassley missed his first vote on the Senate floor in 27 years thanks to a coronavirus exposure. Later in the day he tested positive. 
* This week I began reading _The Big Sleep_ by Raymond Chandler, which has been a lot of fun. I was already familiar with the Phillip Marlowe character from the old radio programs which I listened to on internet radio before there was much going on with podcasts. The book, by comparison, is dark, gritty—not the hokey stuff from the radio.
* Added CSS minification to this site with [CleanCSS](https://www.npmjs.com/package/clean-css). We’ll see if there are any improvements to [performance](https://speedlify-joshcrain.netlify.app). 
* Converted the layout template for this site from [Liquid](https://shopify.github.io/liquid/) to [Nunjucks](https://mozilla.github.io/nunjucks/). It wasn’t all that difficult since the syntax is similar. 
* The hang up was how to use `date` in the Nunjucks template, since Eleventy performs no transformation on this front matter value. The filter syntax was not recognized in Nunjucks and I would receive an error at build. The solution was to install [Moment.js](https://momentjs.com/). The filter syntax is slightly different than elsewhere—but it’s fixed!
* Updated the RSS feed. Removed the email atom. For some reason it wouldn’t [validate](https://validator.w3.org/feed/), I have no idea why.  