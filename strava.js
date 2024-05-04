// strava.js

const axios = require('axios');

let accessToken = 'b84fa01821924c72910e61271bd4ce672c8b1564';
const refreshToken = '755bef2c81454fb791c81ab83c58a11cf15ac80b';
const clientId = '98665';
const clientSecret = '425c79e3875af538a3afaa65806e2fd7e3183bd2';

async function refreshAccessToken() {
  try {
    const response = await axios.post('https://www.strava.com/oauth/token', {
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token'
    });
    accessToken = response.data.access_token;
    console.log('Access token refreshed:', accessToken);
  } catch (error) {
    console.error('Error refreshing access token:', error.response.data);
  }
}

async function fetchStravaActivities() {
  try {
    const response = await axios.get('https://www.strava.com/api/v3/athlete/activities', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Strava activities:', error.response.data);
    return [];
  }
}

module.exports = {
  refreshAccessToken,
  fetchStravaActivities
};
