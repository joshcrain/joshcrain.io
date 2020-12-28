const CleanCSS = require("clean-css");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const moment = require("moment");
const Image = require("@11ty/eleventy-img");
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
  });

  // responsive images
    // works also with addLiquidShortcode or addJavaScriptFunction
  eleventyConfig.addNunjucksAsyncShortcode("responsiveimage", async function(src, alt, sizes = "100vw") {
    if(alt === undefined) {
      // You bet we throw an error on missing alt (alt="" works okay)
      throw new Error(`Missing \`alt\` on Image from: ${src}`);
    }

    let metadata = await Image(src, {
      widths: [300, 600],
      formats: ['webp', 'jpeg'],
      outputDir: "./_site/img/",
    });

    let lowestSrc = metadata["jpeg"][0];
    let highResJpeg = metadata["jpeg"][1];
    let lowReswebp = metadata["webp"][0];
    let highReswebp = metadata["webp"][1];

    const source = `<source type="image/webp" media="(max-width: 629px)" srcset="${lowReswebp.url}" >
                    <source type="image/webp" media="(min-width: 630px)" srcset="${highReswebp.url}" >
                    <source type="image/jpeg" media="(max-width: 529px)" srcset="${lowestSrc.url}" >
                    <source type="image/jpeg" media="(min-width: 630px)" srcset="${highResJpeg.url}" >`;

                    const img = `<img 
                    loading="lazy" 
                    alt="${alt}" 
                    width="${highResJpeg.width}"
                    height="${highResJpeg.height}"
                    src="${lowestSrc.url}">`;
    
        return `<picture>${source}${img}</picture>`;
  });

  // lazy images
  eleventyConfig.addPlugin(lazyImagesPlugin, {
    transformImgPath: (imgPath) => imgPath.replace('/images/', './_site/images/'),
    appendInitScript: false
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