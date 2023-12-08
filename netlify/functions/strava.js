const fetch = require('@11ty/eleventy-fetch');

exports.handler = async function (event, context) {
  const { access_token } = process.env; // Access token stored as environment variable
  const url = 'https://www.strava.com/api/v3/athlete/activities';

  try {
    const response = await fetch.get(url, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch activities' }),
    };
  }
};