const CleanCSS = require("clean-css");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const moment = require("moment");
const htmlmin = require("html-minifier");

const eleventyImagePlugin = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {

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
  

  eleventyConfig.addPassthroughCopy("android-chrome-*.png");
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("site.webmanifest");
  eleventyConfig.addPassthroughCopy("google88f9e8b0497a35bd.html");
  

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



};