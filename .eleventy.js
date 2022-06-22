const CleanCSS = require("clean-css");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const moment = require("moment");
const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
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
    return parseFloat(miles/1609).toFixed(2);
  });

  eleventyConfig.addPassthroughCopy("images"), function () {
  // You can return your Config object (optional).
  return {
    dir: {
      input: "images",
      output: "_site/images"
    }
  };
  };

  eleventyConfig.addPassthroughCopy("android-chrome-*.png");
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("site.webmanifest");
  eleventyConfig.addPassthroughCopy("google88f9e8b0497a35bd.html");
  eleventyConfig.addPassthroughCopy("notes/*/*/*.jpg");
  eleventyConfig.addPassthroughCopy("notes/*/*/*.png");
  eleventyConfig.addPassthroughCopy("notes/*/*/*.gif");

  // responsive images
    // works also with addLiquidShortcode or addJavaScriptFunction
  eleventyConfig.addLiquidShortcode("responsiveimage", async function(src, alt, sizes = "100vw") {
    if(alt === undefined) {
      // You bet we throw an error on missing alt (alt="" works okay)
      throw new Error(`Missing \`alt\` on Image from: ${src}`);
    }

    let metadata = await Image(src, {
      widths: [218, 438, 686, 750],
      formats: ['webp', 'jpeg'],
      outputDir: "./_site/img/",
    });

    let lowestSrc = metadata["jpeg"][1];
    let mediumSrc = metadata["jpeg"][2];
    let highResJpeg = metadata["jpeg"][3];
    let lowReswebp = metadata["webp"][1];
    let mediumReswebp = metadata["webp"][2];
    let highReswebp = metadata["webp"][3];

    const source = `<source type="image/webp" media="(max-width: 480px)" srcset="${lowReswebp.url}" >
                    <source type="image/webp" media="(max-width: 768px)" srcset="${mediumReswebp.url}" >                
                    <source type="image/webp" media="(min-width: 769px)" srcset="${highReswebp.url}" >
                    <source type="image/jpeg" media="(max-width: 480px)" srcset="${lowestSrc.url}" >
                    <source type="image/jpeg" media="(max-width: 768px)" srcset="${mediumSrc.url}" >
                    <source type="image/jpeg" media="(min-width: 769px)" srcset="${highResJpeg.url}" >`;

                    const img = `<img 
                    loading="lazy" 
                    alt="${alt}" 
                    width="${highResJpeg.width}"
                    height="${highResJpeg.height}"
                    src="${lowestSrc.url}">`;
    
                    return `<picture>${source}${img}</picture>`;
  });

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
};