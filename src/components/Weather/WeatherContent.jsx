'use client';

import React from 'react';
import Image from 'next/image';

export default function WeatherContent({ data }) {
  const calcTodaysDate = (dayIndex) => {
    const todaysDate = new Date();
    todaysDate.setDate(todaysDate.getDate() + dayIndex);
    return todaysDate.toISOString().split('T')[0];
  };

  console.log(data);

  return (
    <>
      {data && <h3>Forecast for the next 5 days in {data.name}</h3>}

      {/* {data &&
        Array.from({ length: 5 }).map((f, index) => {
          const todaysDate = calcTodaysDate(index);

          const todaysDataForecast = data?.filter((d) => d.dt.includes(todaysDate));

          const sunInfo = data?.sys || {};
          const todaysSunrise = sunInfo.sunrise || '';
          const todaysSunset = sunInfo.sunset || '';

          return (
            <article className='mx-auto px-4' key={index}>
              <div className='join join-vertical w-full'>
                <div className='collapse collapse-arrow join-item border border-base-content hover:ring-4 hover:ring-inset hover:ring-red-600'>
                  <input type='radio' name='my-accordion-4' defaultChecked={index === 0} />
                  {todaysSunrise && todaysSunset && (
                    <div className='collapse-title text-xl font-medium grid grid-cols-3'>
                      <div>
                        <div>Date</div>
                        <div>{todaysDate}</div>
                      </div>
                      <div>
                        <div>Sunrise</div>
                        <div>
                          {new Date(todaysSunrise * 1000).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </div>
                      </div>
                      <div>
                        <div>Sunset</div>

                        <div>
                          {new Date(todaysSunset * 1000).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                  {todaysDataForecast.map((f, index2) => (
                    <div
                      className='collapse-content grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5'
                      key={index2}>
                      <div>
                        <p>Time</p>
                        <p>
                          {new Date(f.dt * 1000).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                      <div>
                        <p>Temperatur</p>
                        <p>{Math.round(f.main.temp)}&deg;C</p>
                      </div>
                      <div>
                        <p>Description</p>
                        <p>{f.weather[0].description}</p>
                      </div>
                      <div>
                        <p></p>
                        <figure className=' w-fit bg-sky-500 rounded-full'>
                          <Image
                            src={`https://openweathermap.org/img/wn/${f.weather[0].icon}` + '.png'}
                            width={50}
                            height={50}
                            alt='Weather Icon'
                          />
                        </figure>
                      </div>
                      <div>
                        <p>Humidity</p>
                        <p>{f.main.humidity}%</p>
                      </div>
                      <div>
                        <p>Pressure</p>
                        <p>{f.main.pressure} hPa</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          );
        })} */}

      <div>
        <h2>Weather Details</h2>
        <p>Temperature: {data.main.temp}°C</p>
        <p>Weather: {data.weather[0].description}</p>
        {/* Add more weather details as needed */}
      </div>
    </>
  );
}
