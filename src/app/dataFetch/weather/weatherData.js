export const getWeather = async (zip, country, apiKey) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `#1 Fetch Weather: Network response was not ok. Status: ${response.status}, Response: ${errorText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('#2 Fetch Weather: Error fetching weather data:', error);
    throw error;
  }
};

export const getWeatherList = async (lat, lon, apiKey) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `#3 Fetch Weather: Network response was not ok. Status: ${response.status}, Response: ${errorText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('#4 Fetch Weather: Error fetching weather data:', error);
    throw error;
  }
};
