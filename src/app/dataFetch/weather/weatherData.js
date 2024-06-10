// src/app/dataFetch/weather/weatherData.js

export async function getWeatherByZip(zip) {
  const res = await fetch(`/api/weather?type=current&zip=${zip}`);
  if (!res.ok) {
    throw new Error('Failed to fetch weather data');
  }
  return res.json();
}

export async function getForecastByLatLon(lat, lon) {
  const res = await fetch(`/api/weather?type=forecast&lat=${lat}&lon=${lon}`);
  if (!res.ok) {
    throw new Error('Failed to fetch forecast data');
  }
  return res.json();
}

export async function getGeoByZip(zip) {
  const res = await fetch(`/api/weather?type=geo&zip=${zip}`);
  if (!res.ok) {
    throw new Error('Failed to fetch geo data');
  }
  return res.json();
}
