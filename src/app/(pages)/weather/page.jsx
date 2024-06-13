'use client';

import React, { useState, useEffect } from 'react';
import { getWeather, getWeatherList } from '@/app/dataFetch/weather/weatherData';
import countryData from './countryCodes.json';
import WeatherContent from '@/components/Weather/WeatherContent';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function WeatherPage() {
  const [zip, setZip] = useState('8240');
  const [country, setCountry] = useState('dk'); // Default country code
  const [data, setData] = useState(null);
  const [dataList, setDataList] = useState(null);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Set countries array from imported countryData
    setCountries(countryData);
  }, []);

  const fetchWeatherData = async () => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API;
      const weatherData = await getWeather(zip, country, apiKey);
      setData(weatherData);

      const weatherListData = await getWeatherList(
        weatherData.coord.lat,
        weatherData.coord.lon,
        apiKey
      );
      setDataList(weatherListData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div>
      <div className='divider divider-secondary my-10 text-xl'>
        <h1 className='text-3xl font-bold text-center'>5 days forecast</h1>
      </div>
      <form onSubmit={handleSubmit} className='w-fit mx-auto my-10'>
        <div className='relative'>
          <select
            id='country'
            name='country'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className='input input-bordered w-full text-center'
            required>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
          <label htmlFor='zip_code' className='absolute -top-3 left-0 bg-base-100 px-1'>
            Country:
          </label>
        </div>
        <br />
        <div className='join relative'>
          <input
            type='text'
            id='zip_code'
            name='zip_code'
            maxLength={5}
            minLength={4}
            pattern='[0-9]{4,5}'
            placeholder='Type zip-code here'
            required
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className='input input-bordered w-fit join-item text-center'
          />
          <label htmlFor='zip_code' className='absolute -top-3 left-0 bg-base-100 px-1'>
            Zip code:
          </label>
          <button type='submit' className='btn btn-primary join-item hover:animate-heartbeat group'>
            <FaArrowRightLong className='size-4 group-hover:animate-slide-out-right' />
          </button>
        </div>
      </form>
      {data && dataList && <WeatherContent data={data} dataList={dataList} />}
    </div>
  );
}
