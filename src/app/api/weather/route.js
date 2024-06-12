// src/app/api/weather/route.js

import fetchWeather from '../../lib/weather/data';

export async function GET(req) {
  const { searchParams } = new URL(req.url, 'http://localhost');
  const zip = searchParams.get('zip');
  const country = searchParams.get('country');
  const apiKey = searchParams.get('apiKey');

  if (!zip || !country || !apiKey) {
    return new Response(JSON.stringify({ error: 'Missing required query parameters' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const weatherData = await fetchWeather(zip, country, apiKey);
    return new Response(JSON.stringify(weatherData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error fetching weather data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
