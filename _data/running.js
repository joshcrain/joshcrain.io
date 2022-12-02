
const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  try {
    // Garmin API: Garmin Connect public activity list JSON feed
    let json = await EleventyFetch("https://connect.garmin.com/proxy/activitylist-service/activities/8ee2fc52-fe2a-403a-9cc3-5113d520ab51?limit=9999", {
      duration: "1d", // 1 day
      type: "json", // also supports "text" or "buffer"
    });
    console.log( "Fetching Garmin Connect Data…" );
    return {
      garmin: json
    };
  } catch(e) {
    console.log( "Failed fetching Garmin Connect Data…" );
    return {
        garmin: 0
    };
  }
};