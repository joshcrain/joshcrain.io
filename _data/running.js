const fetch = require("node-fetch");

module.exports = async function() {
    console.log( "Fetching Garmin Connect Data…" );

  // Garmin API: Garmin Connect public activity list JSON feed
    return fetch("https://connect.garmin.com/proxy/activitylist-service/activities/8ee2fc52-fe2a-403a-9cc3-5113d520ab51?limit=9999")
        .then(res => res.json()) // node-fetch option to transform to json
        .then(json => {
        // return the data
        return {
            garmin: json
        };
    });
};