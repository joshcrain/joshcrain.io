const CleanCSS = require("clean-css");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const moment = require("moment");
const htmlmin = require("html-minifier");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
//onst { refreshAccessToken, fetchStravaActivities } = require('./strava');

const eleventyImagePlugin = require("@11ty/eleventy-img");



module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addTransform("htmlmin", function(content) {
    // Prior to Eleventy 2.0: use this.outputPath instead
    if( this.page.outputPath && this.page.outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });
  
  // clean css
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // rss filter
  eleventyConfig.addPlugin(pluginRss);

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
    return parseFloat(miles/1609.344).toFixed(2);
  });

  // two decimal places filter
  eleventyConfig.addNunjucksFilter("decimal", function (decimal) {
    return parseFloat(decimal).toFixed(2);
  });

  // two decimal places filter
  eleventyConfig.addNunjucksFilter("divide100", function (divide100) {
    return parseFloat(divide100/100).toFixed(2);
  });

  // meters/second to mph
  eleventyConfig.addNunjucksFilter("mph", function (mph) {
    return parseFloat(mph*2.2369369).toFixed(2);
  });

  // heart rate filter to handle both numeric and object formats
  eleventyConfig.addNunjucksFilter("heartRate", function (hr) {
    if (!hr) return '';
    if (typeof hr === 'object' && hr.parsedValue) {
      return hr.parsedValue;
    }
    return hr;
  });

  // vO2Max filter to handle both numeric and object formats
  eleventyConfig.addNunjucksFilter("vO2Max", function (vO2Max) {
    if (!vO2Max) return '';
    if (typeof vO2Max === 'object' && vO2Max.parsedValue) {
      return vO2Max.parsedValue;
    }
    return vO2Max;
  });

  // calories filter to handle both numeric and object formats
  eleventyConfig.addNunjucksFilter("calories", function (calories) {
    if (!calories) return '';
    if (typeof calories === 'object' && calories.parsedValue) {
      return calories.parsedValue;
    }
    return calories;
  });

  eleventyConfig.addNunjucksFilter("replaceAmpersand", function(value) {
    if (!value) return value; // Return if value is falsy
    // Replace ampersands (& or &amp;) with <span>&amp;</span>
    return value.replace(/&amp;|&/g, "<span class='amp'>&amp;</span>");
  });



  
  
  eleventyConfig.addPassthroughCopy("android-chrome-*.png");
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("favicon-*.png");
  eleventyConfig.addPassthroughCopy("site.webmanifest");
  eleventyConfig.addPassthroughCopy("google88f9e8b0497a35bd.html");
  eleventyConfig.addPassthroughCopy("*.txt");
  eleventyConfig.addPassthroughCopy("*.xsl");
  eleventyConfig.addPassthroughCopy("*.svg");
  eleventyConfig.addPassthroughCopy("**/*.svg");
  eleventyConfig.addPassthroughCopy("fonts/");
  

  // minify js
  const { minify } = require("terser");
  eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
    code,
    callback
  ) {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {
      console.error("Terser error: ", err);
      // Fail gracefully.
      callback(null, code);
    }
  });

  eleventyConfig.addShortcode("storyImage", async function(src, alt) {
		let metadata = await eleventyImagePlugin(src, {
			widths: [480, 768],
			formats: ["avif", "jpeg"],
      outputDir: "./_site/img/",
      sharpAvifOptions: {
        quality: 85
      },
      //useCache: false
		});

		let imageAttributes = {
			alt,
			sizes: "(min-width: 30em) 50vw, 100vw",
			loading: "lazy",
			decoding: "async",
		};

		return eleventyImagePlugin.generateHTML(metadata, imageAttributes);
	});

  eleventyConfig.addShortcode("gridImage", async function(src, alt) {
		let metadata = await eleventyImagePlugin(src, {
			widths: [480],
			formats: ["avif", "jpeg"],
      outputDir: "./_site/img/",
      sharpAvifOptions: {
        quality: 65
      }
		});

		let imageAttributes = {
			alt,
			//sizes: "(min-width: 30em) 50vw, 100vw",
			loading: "lazy",
			decoding: "async",
		};

		return eleventyImagePlugin.generateHTML(metadata, imageAttributes);
	});

  eleventyConfig.addShortcode("storyImageAnimated", async function(src, alt) {
		let metadata = await eleventyImagePlugin(src, {
			widths: [480],
      outputDir: "./_site/img/",
      formats: ["webp", "gif"],
      sharpOptions: {
        animated: true,
      },
		});

		let imageAttributes = {
			alt,
			sizes: "(min-width: 30em) 50vw, 100vw",
			loading: "lazy",
			decoding: "async",
		};

		return eleventyImagePlugin.generateHTML(metadata, imageAttributes);
	});


  // Combine running.activityList and running2023.activityList
  eleventyConfig.addCollection("combinedActivityList", function(_) { 
    const runningActivities = require("./_data/running.json");
    const running2020Activities = require("./_data/running2020.json");
    const running2021Activities = require("./_data/running2021.json");
    const running2022Activities = require("./_data/running2022.json");
    const running2023Activities = require("./_data/running2023.json");
    const running2024Activities = require("./_data/running2024.json");
    const combinedActivities = runningActivities.activityList.concat(running2024Activities.activityList).concat(running2023Activities.activityList).concat(running2022Activities.activityList).concat(running2021Activities.activityList).concat(running2020Activities.activityList);

    const filteredActivities = combinedActivities.filter(item => item.sportTypeId == "1");
    return filteredActivities;
  });

eleventyConfig.addCollection("2024ActivityList", function(_) { 
  const runningActivities = require("./_data/running2024.json");

  const filteredActivities = runningActivities.activityList.filter(item => item.sportTypeId == "1");
  return filteredActivities;
});

eleventyConfig.addCollection("2023ActivityList", function(_) { 
  const runningActivities = require("./_data/running2023.json");

  const filteredActivities = runningActivities.activityList.filter(item => item.sportTypeId == "1");
  return filteredActivities;
});
    
eleventyConfig.addCollection("2022ActivityList", function(_) { 
  const runningActivities = require("./_data/running2022.json");

  const filteredActivities = runningActivities.activityList.filter(item => item.sportTypeId == "1");
  return filteredActivities;
});

eleventyConfig.addCollection("2021ActivityList", function(_) { 
  const runningActivities = require("./_data/running2021.json");

  const filteredActivities = runningActivities.activityList.filter(item => item.sportTypeId == "1");
  return filteredActivities;
});
    

eleventyConfig.addCollection("2020ActivityList", function(_) { 
  const runningActivities = require("./_data/running2020.json");

  const filteredActivities = runningActivities.activityList.filter(item => item.sportTypeId == "1");
  return filteredActivities;
});

eleventyConfig.addCollection("tagList", collections => {
  const tags = collections
    .getAll()
    .reduce((tags, item) => tags.concat(item.data.tags), [])
    .filter(tag => !!tag && !["notes", "all"].includes(tag))
    .sort()
  return Array.from(new Set(tags)).map(tag => ({
    title: tag,
    count: collections.getFilteredByTag(tag).length,
  }))
})


eleventyConfig.addFilter("runsWithDescription", function(array) {
  return array.filter(item => item.description);

});


    // Add Eleventy setup here
  
    /*
    eleventyConfig.addCollection('stravaActivities', async function(collection) {
      await refreshAccessToken();
      return fetchStravaActivities();
    });
*/

};