import React from 'react';

export default function WeatherContent({ weatherData, forecastData, geoData }) {
  return (
    <div>
      <h1>Weather Information</h1>
      {weatherData && <div>Current Weather: {JSON.stringify(weatherData)}</div>}
      {forecastData && <div>Forecast: {JSON.stringify(forecastData)}</div>}
      {geoData && <div>Geo Data: {JSON.stringify(geoData)}</div>}
    </div>
  );
}
