import { getWeather } from '@/app/dataFetch/weather/weatherData';
import WeatherContent from '@/components/Weather/WeatherContent';

export default async function WeatherPage() {
  const data = await getWeather('8240', 'dk', process.env.OPENWEATHER_API);

  return (
    <div>
      <h1>Weather Data</h1>
      <WeatherContent data={data} />
    </div>
  );
}
