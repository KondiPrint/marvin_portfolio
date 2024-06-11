import { getWeatherByZip } from '@/app/dataFetch/weather/weatherData';
import WeatherContent from '@/components/Weather/WeatherContent';

export default async function WeatherPage() {
  const data = await getWeatherByZip();

  console.log(data);

  return (
    <>
      <h1>Here is the weather</h1>

      <WeatherContent />
    </>
  );
}
