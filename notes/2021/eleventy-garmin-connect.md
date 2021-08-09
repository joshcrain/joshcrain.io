---
title: A Running Log - Garmin Connect and Eleventy
tags: ['notes','running','eleventy']
description: Use Eleventy to log Garmin Connect activities on a website and automate the process with Zapier and Netlify. 
date: 2021-08-09
---
I like to run. I used to do it a lot more in my younger days when I ran competitively. During that time I tracked my runs in a log book and learned a lot about how to train. Get It helped me understand the cumulative effects of training had on my body. In those days GPS wasn't really an option, if I wanted to measure a distance I needed to drive the route and check the car’s odometer.

Christmas of 2019 I was given my first smart watch, a Garmin Forerunner 45. This was exciting for me because I would be able to track data associated with exercise—and even the rest in between. I downloaded the app, created a [Garmin Connect](https://connect.garmin.com/) account, and began using my new watch. 

Around the same time I was learning a lot about [Eleventy](https://www.11ty.dev) and how to generate static websites (like this one). It occurred to me my running activities might be a data source I could use for a website. Publishing my Garmin Connect activities as a _new_ type of running log sounded like a fun side project but I didn't really know where to begin.

## Garmin Connect data
Garmin provides a publicly accessible JSON feed of your data. I have no idea what this is for, except perhaps, a preview for developers. The path for everyone is the same with the exception of the user ID, which is in the URL of your Garmin Connect profile.

If your Garmin Connect profile looks like this:  
- https://connect.garmin.com/modern/profile/[YOUR-GARMIN-CONNECT-ID]

Your JSON feed looks like this:
- https://connect.garmin.com/proxy/activitylist-service/activities/[YOUR-GARMIN-CONNECT-ID]?limit=100

## Eleventy is here to help
Aside from generating HTML Eleventy can utilize data and not just what is hosted on your site. This realization was a game changer and allowed me to do exactly what I wanted to do. 

### Get the data 
The data is fetched using a global JavaScript data file at \_data/running.js and only as often as your build runs. 

Install new dependency: 
- npm install node-fetch --save-dev
- Read more about [node-fetch](https://www.npmjs.com/package/node-fetch)

File name:  \_data/running.js
```javascript
const fetch = require("node-fetch");
module.exports = async function() {
    console.log( "Fetching Garmin Connect Data…" );
  // GitHub API: Garmin Connect public activity list JSON feed
    return fetch("https://connect.garmin.com/proxy/activitylist-service/activities/[YOUR-GARMIN-CONNECT-ID]?limit=100")
        .then(res => res.json()) // node-fetch option to transform to json
        .then(json => {
        // return the data
        return {
            garmin: json
        };
    });
};
```

### Format dates and time
Moment helps us create [filters](https://www.11ty.dev/docs/filters/) to format dates and times.  Custom filters also helps us to convert distances to miles. 

Install new dependency: 
- npm install node i moment
- Read more about [Moment.js](https://momentjs.com)

File name:  .eleventy.js
```javascript 
const moment = require("moment");
module.exports = function(eleventyConfig) {
  // duration filter
  eleventyConfig.addNunjucksFilter("duration", function (duration, format) {
    return moment('1900-01-01 00:00:00').seconds(duration).format(format);
  });
  // date filter
  eleventyConfig.addNunjucksFilter("date", function (date, format) {
    return moment(date).format(format);
  });
  // miles filter
  eleventyConfig.addNunjucksFilter("miles", function (miles) {
    return parseFloat(miles/1609).toFixed(2);
  });
};
```

Now in your Liquid or Nunjucks template you can output the Garmin Connect data with:

Syntax: Liquid, Nunjucks
``` html
 {% raw %}{{ item.distance | miles }} miles in {{ item.duration | duration("mm:ss") }} on {{ item.startTimeLocal | date("M/D/Y") }} at {{ item.startTimeLocal | date("h:mm A")}}.{% endraw %}
```
which outputs:

3.00 miles in 20:00 on 8/10/2021 at 12:00 PM.

## Automatically deploy with Netlify
Why not try to automate all this? My site deploys to [Netlify](https://www.netlify.com) when I make commits and push changes to Github through [continuous deployment](https://www.netlify.com/blog/2015/09/17/continuous-deployment/). [Zapier](https://zapier.com/) is perfect for Rube Goldberg implementations—and Netlify has an integration. 

I want to trigger deploys as little as possible because I'm not sure what request limits Garmin may have for the JSON feed. Ideally builds only trigger when an activity has been completed so we don’t exceed any limits and we see the activity published right away. 

Garmin Connect doesn't have a Zapier integration but Strava does. [Strava](https://www.strava.com) integrates with fitness trackers (like Garmin) to view and track activities. I downloaded the Strava app, created an account, and connected my Garmin account. Then I created a Zapier account and created a Zap with Strava and Netlify. When a new activity is logged in Strava, Zapier triggers an action to start a Netlify deploy. The automation looks like this:
1. Go for a run with my Garmin watch
2. The activity is logged in Garmin Connect 
3. Strava logs the activity too
4. Zapier triggers a Netlfiy build 
5. Eleventy fetches the JSON data and builds the site
6. Netlify deploys the site

That's it!
 
 Want to see more? Take a look: 
- [My Running Log](/about/running/) 
- [Eleventy/Garmin Connect](https://github.com/joshcrain/eleventy-garmin-connect) on Github

