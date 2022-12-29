
const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  try {
    // Garmin API: Garmin Connect public activity list JSON feed
    let json = await EleventyFetch("https://connect.garmin.com/activitylist-service/activities/search/activities?limit=9999&start=0&_=1672327593786", {
      duration: "1d", // 1 day
      type: "json", // also supports "text" or "buffer"
      fetchOptions: {
        headers: {
          accept: "application/json, text/javascript, */*; q=0.01",
          "accept-language": "en-US,en;q=0.9",
          authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImRpLW9hdXRoLXNpZ25lci1wcm9kLTIwMjIifQ.eyJzY29wZSI6WyJBVFBfUkVBRCIsIkFUUF9XUklURSIsIkNPTk5FQ1RfTk9OX1NPQ0lBTF9TSEFSRURfUkVBRCIsIkNPTk5FQ1RfUkVBRCIsIkNPTk5FQ1RfV1JJVEUiLCJESVZFX1NIQVJFRF9SRUFEIiwiR0hTX0hJRCIsIkdIU19SRUdJU1RSQVRJT04iLCJHSFNfU0FNRCIsIkdPTEZfQVBJX1JFQUQiLCJHT0xGX0FQSV9XUklURSIsIkdPTEZfU0hBUkVEX1JFQUQiLCJJTlNJR0hUU19SRUFEIiwiSU5TSUdIVFNfV1JJVEUiXSwiaXNzIjoiaHR0cHM6Ly9kaWF1dGguZ2FybWluLmNvbSIsImV4cCI6MTY3MjMzMTE0MiwiaWF0IjoxNjcyMzI3NTQyLCJnYXJtaW5fZ3VpZCI6IjM1ZjU4YmM1LWY0MTAtNGE1Mi04MTc1LTdmNGU1NTBlZmFmNCIsImp0aSI6ImExODJkYTZjLTgwOGYtNGNlYi1iNTFjLTQ1NTY1YmNlMWM5ZSIsImNsaWVudF9pZCI6IkNPTk5FQ1RfV0VCIiwiZmdwIjoiYWI1NGFmYzliNjY4ZjY5YmIyMDgzMzAwNTE2ZTE3ZjVkNDg5MzQ0NmY2MjE2NzAwNjQzMTQyN2M4MTIxZGIzNiJ9.C8oJtc4lwAhOwVLLpRFEHxEbuPbrOjll9LlSdwtaj7Ny7KzxSR9i3zBDbHH2iyz_Cm1Om-qsQEQpyWrPEpyXdmhUFihKkqj1a7wi04HLHCzliZZDpqAW_zw5Iew2FGmNjBk776237TkoImQ7tBSwev-OeHPRsEQk2L-bTuJfeshhNL81U8caA_aQTtIOdrYnMvnquVR_mtoxfj44t6XseMqyA1YiIgeMIlb_tKLAXvP2zCD9mqM2ha_gV00BnJrUBRbrDGppjIold6cI0rBsCrfUrI3abd1QuQwuwIoJBipGvsfmq-Rv3nZvOx-wFFTBXkZ52M_WnYZIWJGSUQLK-g",
          "cache-control": "no-cache",
          "di-backend": "connectapi.garmin.com",
          nk: "NT",
          pragma: "no-cache",
          "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-app-ver": "4.61.6.0",
          "x-lang": "en-US",
          "x-requested-with": "XMLHttpRequest",
          cookie: "_ga=GA1.2.1920408698.1618597913; notice_behavior=none; GarminUserPrefs=en; __cfruid=d6cee4e47369f4ec8ae8a5c3120d90ffa58824ec-1671298742; GARMIN-SSO=1; GarminNoCache=true; GARMIN-SSO-GUID=E9E41297301205CA395591B0ACA6D7B584AE7B5D; GARMIN-SSO-CUST-GUID=35f58bc5-f410-4a52-8175-7f4e550efaf4; __cflb=02DiuJLbVZHipNWxN8yYRX3u8XkAfEE5AKuXanRZicTSk; GarminUserPrefs=en-US; _gid=GA1.2.1677454060.1672327537; SESSIONID=MTc1ZDQwOTAtM2VmNS00NzU4LTg2M2MtN2UwMTc1ZjY1NjVj; JWT_FGP=778de7dd-b0bb-4cce-9a7c-e0b2fb8584c9; CONSENTMGR=consent:true%7Cts:1672327544395; utag_main=v_id:0184c9f9b78300170724eb68010505075006f06d00fb8$_sn:5$_ss:0$_st:1672329344398$ses_id:1672327536700%3Bexp-session$_pn:2%3Bexp-session; SameSite=None",
          Referer: "https://connect.garmin.com/modern/activities",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        body: null,
        method: "GET"
      }
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