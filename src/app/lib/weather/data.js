// src/app/api/lib/weather.js

export const fetchWeather = async (zip, country, apiKey) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('#1 Lib Weather: Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('#2 Lib Weather: Error fetching weather data:', error);
    throw error;
  }
};

export const fetchWeatherList = async (lat, lon, apiKey) => {
  const url = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('#3 Lib Weather: Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('#4 Lib Weather: Error fetching weather data:', error);
    throw error;
  }
};
