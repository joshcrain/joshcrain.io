const CleanCSS = require("clean-css");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const moment = require("moment");
const htmlmin = require("html-minifier");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
//onst { refreshAccessToken, fetchStravaActivities } = require('./strava');

const eleventyImagePlugin = require("@11ty/eleventy-img");

// Add canvas imports for social image generation
const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage, registerFont } = require('canvas');

// Function to create social images for articles
const createSocialImageForArticle = (input, output) =>
  new Promise(async (resolve, reject) => {
    try {
      // read data from input file
      const data = fs.readFileSync(input, {
        encoding: 'utf-8',
      });

      // get title from file data - handle both "title:" and "title :" formats
      const titleMatch = data.match(/title:\s*(.+)/);
      if (!titleMatch) {
        return resolve();
      }
      
      const title = titleMatch[1].trim();

      // Extract date from front matter or file path
      let dateString = '';
      const dateMatch = data.match(/date:\s*(.+)/);
      if (dateMatch) {
        // Use date from front matter
        const dateValue = dateMatch[1].trim();
        const date = new Date(dateValue);
        dateString = date.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
      } else {
        // Extract date from file path (e.g., /2024/weeknote-28-2024.md)
        const pathDateMatch = input.match(/\/(\d{4})\//);
        if (pathDateMatch) {
          dateString = pathDateMatch[1]; // Just the year if no specific date
        }
      }

      // Extract description from front matter
      let description = '';
      const descriptionMatch = data.match(/description:\s*(.+)/);
      if (descriptionMatch) {
        description = descriptionMatch[1].trim().replace(/['"]/g, ''); // Remove quotes
      }

      // draw cover image
      const canvas = createCanvas(1200, 630); // Standard OG image size
      const ctx = canvas.getContext('2d');

      // Background
      ctx.fillStyle = 'rgba(239,233,228,1)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add a subtle border
      ctx.strokeStyle = '#e5e5e5';
      ctx.lineWidth = 2;
      ctx.strokeRect(0, 0, canvas.width, canvas.height);

      // Load and draw the PNG portrait - let it be bigger!
      try {
        const portraitPath = path.join(__dirname, 'social.png');
        const portraitImage = await loadImage(portraitPath);
        
        // Give the portrait more space based on the new image dimensions (403x512)
        // Since it's taller than wide, we can be more generous with width
        const maxPortraitWidth = (canvas.width * 0.55) - 30; // Up to 55% of canvas width
        const maxPortraitHeight = canvas.height - 140; // Reduced by another 40px (was -100, now -140)
        
        // Calculate the aspect ratio of the original image
        const imageAspectRatio = portraitImage.width / portraitImage.height;
        
        // Calculate the best fit dimensions while maintaining aspect ratio
        let portraitWidth = maxPortraitWidth;
        let portraitHeight = portraitWidth / imageAspectRatio;
        
        // If height is too large, scale by height instead
        if (portraitHeight > maxPortraitHeight) {
          portraitHeight = maxPortraitHeight;
          portraitWidth = portraitHeight * imageAspectRatio;
        }
        
        // Position the portrait on the left with minimal padding
        const portraitX = 35; // Moved right by 20px (was 15, now 35)
        const portraitY = (canvas.height - portraitHeight) / 2 - 20; // Center vertically, moved up 20px
        
        // Draw the PNG portrait with proper aspect ratio
        ctx.drawImage(portraitImage, portraitX, portraitY, portraitWidth, portraitHeight);
        
        
        // Calculate text area based on actual portrait size
        const textStartX = portraitX + portraitWidth + 40; // Start after portrait plus smaller gap
        const textMaxWidth = canvas.width - textStartX - 80; // Remaining width minus even larger right padding
        
        // Title styling - positioned in remaining space after portrait
        ctx.fillStyle = 'hsl(270,50%,20%)';
        ctx.font = 'bold 72px Arial, sans-serif'; // Simplified font syntax for Canvas
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';

        // Word wrap the title - now for the remaining space after the portrait
        const words = title.split(' ');
        const lines = [];
        let currentLine = words[0];

        for (let i = 1; i < words.length; i++) {
          const word = words[i];
          const width = ctx.measureText(currentLine + ' ' + word).width;
          if (width < textMaxWidth) {
            currentLine += ' ' + word;
          } else {
            lines.push(currentLine);
            currentLine = word;
          }
        }
        lines.push(currentLine);

        // Word wrap the description if we have one
        let descriptionLines = [];
        if (description) {
          ctx.font = '30px Arial, sans-serif'; // Set font for description measurement - FIXED to match drawing font
          const descWords = description.split(' ');
          if (descWords.length > 0 && descWords[0]) { // Only process if we have actual words
            let currentDescLine = descWords[0];

            for (let i = 1; i < descWords.length; i++) {
              const word = descWords[i];
              const width = ctx.measureText(currentDescLine + ' ' + word).width;
              if (width < textMaxWidth) {
                currentDescLine += ' ' + word;
              } else {
                descriptionLines.push(currentDescLine);
                currentDescLine = word;
              }
            }
            descriptionLines.push(currentDescLine);
          }
        }

        // Calculate total content height (title + date + description + spacing)
        const titleLineHeight = 78; // Reduced from 85px for tighter title spacing
        const dateLineHeight = 32;
        const descriptionLineHeight = 40; // Increased to accommodate 30px font
        const spacingBetween = 20;
        const totalTitleHeight = lines.length * titleLineHeight;
        const totalDateHeight = dateString ? dateLineHeight : 0;
        const totalDescriptionHeight = descriptionLines.length * descriptionLineHeight;
        const totalSpacing = (dateString ? spacingBetween : 0) + (description ? spacingBetween : 0);
        const totalContentHeight = totalTitleHeight + totalDateHeight + totalDescriptionHeight + totalSpacing;
        
        // Center the entire content block vertically
        const contentStartY = (canvas.height - totalContentHeight) / 2;
        
        // Draw the title lines
        ctx.fillStyle = 'hsl(270,50%,20%)';
        ctx.font = 'bold 72px Arial, sans-serif';
        lines.forEach((line, index) => {
          ctx.fillText(line, textStartX, contentStartY + (index * titleLineHeight));
        });

        let currentY = contentStartY + totalTitleHeight;

        // Draw the date below the title if we have one
        if (dateString) {
          ctx.font = '24px Arial, sans-serif';
          ctx.fillStyle = 'hsl(270,50%,20%)';
          currentY += spacingBetween;
          ctx.fillText(dateString, textStartX, currentY);
          currentY += dateLineHeight;
        }

        // Draw the description below the date if we have one
        if (description) {
          ctx.font = '30px Arial, sans-serif';
          ctx.fillStyle = 'rgba(10,10,25,1)';
          currentY += spacingBetween;
          descriptionLines.forEach((line, index) => {
            ctx.fillText(line, textStartX, currentY + (index * descriptionLineHeight));
          });
        }

        // Add site name centered under portrait image
        ctx.font = '24px Arial, sans-serif';
        ctx.fillStyle = 'rgba(10,10,25,1)';
        ctx.textAlign = 'left';
        const siteNameX = portraitX + (portraitWidth / 2) - 100; // Center under portrait, moved 100px left
        const siteNameY = canvas.height - 75; // Moved up 20px more (was -55, now -75)
        ctx.fillText('joshcrain.io', siteNameX, siteNameY);
      } catch (portraitError) {
        
        // Fallback to placeholder if PNG fails
        const portraitWidth = canvas.width / 3 - 60;
        const portraitHeight = 400; // Adjusted for taller aspect ratio
        const portraitX = 35; // Moved right by 20px (was 15, now 35)
        const portraitY = (canvas.height - portraitHeight) / 2 - 20; // Center vertically, moved up 20px
        
        ctx.fillStyle = 'rgba(10,10,25,0.1)';
        ctx.fillRect(portraitX, portraitY, portraitWidth, portraitHeight);
        
        ctx.fillStyle = 'rgba(10,10,25,0.3)';
        ctx.beginPath();
        ctx.ellipse(portraitX + portraitWidth/2, portraitY + portraitHeight/3, portraitWidth/4, portraitHeight/5, 0, 0, 2 * Math.PI);
        ctx.fill();
        
        // Calculate text area for fallback
        const fallbackTextStartX = portraitX + portraitWidth + 40;
        const fallbackTextMaxWidth = canvas.width - fallbackTextStartX - 80;
        
        // Title styling - positioned in remaining space after placeholder
        ctx.fillStyle = 'hsl(270,50%,20%)';
        ctx.font = 'bold 72px Arial, sans-serif'; // Updated to match main section
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';

        // Word wrap the description if we have one
        let descriptionLines = [];
        if (description) {
          ctx.font = '30px Arial, sans-serif'; // Updated to match main section
          const descWords = description.split(' ');
          if (descWords.length > 0 && descWords[0]) { // Only process if we have actual words
            let currentDescLine = descWords[0];

            for (let i = 1; i < descWords.length; i++) {
              const word = descWords[i];
              const width = ctx.measureText(currentDescLine + ' ' + word).width;
              if (width < fallbackTextMaxWidth) {
                currentDescLine += ' ' + word;
              } else {
                descriptionLines.push(currentDescLine);
                currentDescLine = word;
              }
            }
            descriptionLines.push(currentDescLine);
          }
        }

        // Word wrap the title - now for the remaining space after the placeholder
        const words = title.split(' ');
        const lines = [];
        let currentLine = words[0];

        for (let i = 1; i < words.length; i++) {
          const word = words[i];
          const width = ctx.measureText(currentLine + ' ' + word).width;
          if (width < fallbackTextMaxWidth) {
            currentLine += ' ' + word;
          } else {
            lines.push(currentLine);
            currentLine = word;
          }
        }
        lines.push(currentLine);

        // Calculate total content height (title + date + description + spacing)
        const titleLineHeight = 78; // Reduced from 85px for tighter title spacing
        const dateLineHeight = 32;
        const descriptionLineHeight = 40; // Increased to accommodate 30px font
        const spacingBetween = 20;
        const totalTitleHeight = lines.length * titleLineHeight;
        const totalDateHeight = dateString ? dateLineHeight : 0;
        const totalDescriptionHeight = descriptionLines.length * descriptionLineHeight;
        const totalSpacing = (dateString ? spacingBetween : 0) + (description ? spacingBetween : 0);
        const totalContentHeight = totalTitleHeight + totalDateHeight + totalDescriptionHeight + totalSpacing;
        
        // Center the entire content block vertically
        const contentStartY = (canvas.height - totalContentHeight) / 2;
        
        // Draw the title lines
        ctx.fillStyle = 'hsl(270,50%,20%)';
        ctx.font = 'bold 72px Arial, sans-serif';
        lines.forEach((line, index) => {
          ctx.fillText(line, fallbackTextStartX, contentStartY + (index * titleLineHeight));
        });

        let currentY = contentStartY + totalTitleHeight;

        // Draw the date below the title if we have one
        if (dateString) {
          ctx.font = '24px sans-serif';
          ctx.fillStyle = 'hsl(270,50%,20%)';
          currentY += spacingBetween;
          ctx.fillText(dateString, fallbackTextStartX, currentY);
          currentY += dateLineHeight;
        }

        // Draw the description below the date if we have one
        if (description) {
          ctx.font = '30px Arial, sans-serif';
          ctx.fillStyle = 'rgba(10,10,25,1)';
          currentY += spacingBetween;
          descriptionLines.forEach((line, index) => {
            ctx.fillText(line, fallbackTextStartX, currentY + (index * descriptionLineHeight));
          });
        }

        // Add site name centered under portrait image
        ctx.font = '24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';
        ctx.fillStyle = '#666666';
        ctx.textAlign = 'left';
        const siteNameX = portraitX + (portraitWidth / 2) - 100; // Center under portrait, moved 100px left
        const siteNameY = canvas.height - 75; // Moved up 20px more (was -55, now -75)
        ctx.fillText('joshcrain.io', siteNameX, siteNameY);
      }

      // test if the output directory already exists, if not, create
      const outputDir = path.dirname(output);
      if (!fs.existsSync(outputDir))
        fs.mkdirSync(outputDir, { recursive: true });

      // write the output image
      const stream = fs.createWriteStream(output);
      stream.on('finish', resolve);
      stream.on('error', reject);
      canvas
        .createJPEGStream({
          quality: 0.9,
        })
        .pipe(stream);
    } catch (error) {
      console.error(`Error creating social image for ${input}:`, error);
      resolve(); // Don't fail the build if social image generation fails
    }
  });

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  
  // Add explicit watch targets for notes directory
  eleventyConfig.addWatchTarget("./notes/");
  

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

  // Social image generation transform
  eleventyConfig.addTransform('social-image', async function (content) {
    // only handle markdown files in the notes directory
    if (!this.page.inputPath.endsWith('.md') || !this.page.inputPath.includes('/notes/')) {
      return content;
    }

    try {
      const outputImagePath = this.page.outputPath.replace('.html', '.jpg');
      
      await createSocialImageForArticle(
        // our input article
        this.page.inputPath,
        // the output image name
        outputImagePath
      );
      
    } catch (err) {
      console.error('Error generating social image:', err);
      // Don't fail the build if social image generation fails
    }

    // return normal content
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
    // Handle both numeric and object formats
    let durationValue;
    if (typeof duration === 'object' && duration !== null && duration.parsedValue !== undefined) {
      durationValue = duration.parsedValue;
    } else {
      durationValue = duration;
    }
    
    return moment('1900-01-01 00:00:00').seconds(durationValue).format(format);
  });

  // date filter
  eleventyConfig.addNunjucksFilter("date", function (date, format) {
    return moment(date).format(format);
  });
  // miles filter
  eleventyConfig.addNunjucksFilter("miles", function (miles) {
    // Handle both numeric and object formats
    let distanceValue;
    if (typeof miles === 'object' && miles !== null && miles.parsedValue !== undefined) {
      distanceValue = miles.parsedValue;
    } else {
      distanceValue = miles;
    }
    
    return parseFloat(distanceValue/1609.344).toFixed(2);
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
  // Fix SVG passthrough copy to avoid recursive _site directory issues
  eleventyConfig.addPassthroughCopy("_includes/**/*.svg");
  eleventyConfig.addPassthroughCopy("notes/**/*.svg");
  eleventyConfig.addPassthroughCopy("fonts/");
  
  // Copy generated social images - REMOVED: not needed since images are generated directly in _site
  

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

  eleventyConfig.addShortcode("storyImageFull", async function(src, alt) {
    let metadata = await eleventyImagePlugin(src, {
      widths: [1216],
      formats: ["avif", "jpeg"],
      outputDir: "./_site/img/",
    });

    let imageAttributes = {
      alt,
      class: "full_width",
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
  }));
});


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