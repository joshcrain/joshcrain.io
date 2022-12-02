const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  try {
    // Cloudinary art feed
    let json = await EleventyFetch("https://res.cloudinary.com/joshcrain/image/list/art.json", {
      duration: "1d", // 1 day
      type: "json" // also supports "text" or "buffer"
    });
    console.log( "Fetching Artwork Cloudinary Data…" );
    return {
        cloudinary: json
    };
  } catch(e) {
    console.log( "Failed fetching Artwork Cloudinary Data…" );
    return {
        cloudinary: 0
    };
  }
};