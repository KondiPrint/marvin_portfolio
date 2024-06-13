import { fetchWeatherList, fetchWeather } from '../../lib/weather/data';

async function getWeatherByZip(zip, country, apiKey) {
  if (!zip || !country || !apiKey) {
    throw new Error('#1 Api Weather: Missing required query parameters');
  }
  return await fetchWeather(zip, country, apiKey);
}

async function getWeatherByLatLon(lat, lon, apiKey) {
  if (!lat || !lon || !apiKey) {
    throw new Error('#2 Api Weather: Missing required query parameters');
  }
  return await fetchWeatherList(lat, lon, apiKey);
}

export async function GET(req) {
  const { searchParams } = new URL(req.url, 'http://localhost');
  const zip = searchParams.get('zip');
  const country = searchParams.get('country');
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  const apiKey = searchParams.get('apiKey');

  try {
    const [weatherData, weatherDataList] = await Promise.all([
      getWeatherByZip(zip, country, apiKey),
      getWeatherByLatLon(lat, lon, apiKey),
    ]);

    return new Response(JSON.stringify({ weatherData, weatherDataList }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
