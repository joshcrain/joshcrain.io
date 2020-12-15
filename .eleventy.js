const CleanCSS = require("clean-css");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const moment = require("moment");
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');

module.exports = function(eleventyConfig) {
  // clean css
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // rss filter
  eleventyConfig.addPlugin(pluginRss);

  // date filter
  eleventyConfig.addNunjucksFilter("date", function (date, format) {
  return moment(date).format(format);
  
  // lazy images
  eleventyConfig.addPlugin(lazyImagesPlugin);
});
};
