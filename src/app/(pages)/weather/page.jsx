// src/app/(pages)/weather/page.jsx

import {
  getWeatherByZip,
  getForecastByLatLon,
  getGeoByZip,
} from '@/app/dataFetch/weather/weatherData';
import WeatherContent from '@/components/Weather/WeatherContent';

export default async function WeatherPage({ searchParams }) {
  const zip = searchParams?.zip || '8240'; // Default value
  const lat = searchParams?.lat || '56';
  const lon = searchParams?.lon || '10';

  try {
    const [weatherData, forecastData, geoData] = await Promise.all([
      getWeatherByZip(zip),
      getForecastByLatLon(lat, lon),
      getGeoByZip(zip),
    ]);

    return (
      <>
        <WeatherContent weatherData={weatherData} forecastData={forecastData} geoData={geoData} />
      </>
    );
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return <div>Error loading weather data: {error.message}</div>;
  }
}
