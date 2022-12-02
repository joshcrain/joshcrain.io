const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  try {
    // Cloudinary sketchbook feed
    let json = await EleventyFetch("https://res.cloudinary.com/joshcrain/image/list/sketchbook.json", {
      duration: "1d", // 1 day
      type: "json" // also supports "text" or "buffer"
    });
    console.log( "Fetching sketchbook Cloudinary Data…" );
    return {
        cloudinary: json
    };
  } catch(e) {
    console.log( "Failed fetching sketchbook Cloudinary Data…" );
    return {
        cloudinary: 0
    };
  }
};