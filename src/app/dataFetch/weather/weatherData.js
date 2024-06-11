// src/app/dataFetch/weather/weatherData.js

export async function getWeatherByZip() {
  const myWeatherApi = process.env.NEXT_PUBLIC_OPENWEATHER_API;
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=8240,dk&units=metric&appid=${myWeatherApi}&lang=da`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch weather data');
  }
  return res.json();
}

/* export async function getForecastByLatLon(lat, lon) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=da&units=metric&appid=${myWeatherApi}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch forecast data');
  }
  return res.json();
}

export async function getGeoByZip(zip) {
  const res = await fetch(
    `https://api.openweathermap.org/geo/1.0/zip?zip=${zip},dk&appid=${myWeatherApi}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch geo data');
  }
  return res.json();
} */
