import React, { Fragment } from 'react';
import Image from 'next/image';

export default function WeatherContent({ data, dataList }) {
  const calcTodaysDate = (dayIndex) => {
    const todaysDate = new Date();
    todaysDate.setDate(todaysDate.getDate() + dayIndex);
    return todaysDate.toISOString().split('T')[0];
  };
  const calcTodaysDate2 = (dayIndex) => {
    const todaysDate = new Date();
    todaysDate.setDate(todaysDate.getDate() + dayIndex);
    return todaysDate;
  };

  if (!data || !dataList) return <p>Loading...</p>;

  return (
    <>
      <div className='divider divider-secondary my-10 text-xl'>
        <h2 className='text-3xl font-bold text-center'>{data.name}</h2>
      </div>
      <article className='mx-auto sm:px-4 my-10'>
        <div className='join join-vertical w-full'>
          {Array.from({ length: 5 }).map((_, index) => {
            const todaysDate = calcTodaysDate(index);
            const todaysDate2 = calcTodaysDate2(index);
            const formattedDate = todaysDate2.toLocaleDateString([], {
              month: '2-digit',
              day: '2-digit',
            });
            const dayOfWeek = todaysDate2.toLocaleDateString([], { weekday: 'short' });
            const todaysDataForecast = dataList.list.filter((d) => d.dt_txt.includes(todaysDate));
            const sunInfo = dataList.city || {};
            const todaysSunrise = sunInfo.sunrise || '';
            const todaysSunset = sunInfo.sunset || '';

            return (
              <div
                className='collapse collapse-arrow join-item border border-base-content hover:ring-4 hover:ring-inset hover:ring-red-600'
                key={index}>
                <input type='radio' name='my-accordion-4' defaultChecked={index === 0} />
                {todaysSunrise && todaysSunset && (
                  <div className='collapse-title text-xl font-medium grid grid-cols-3 justify-items-center'>
                    <div>
                      <div>{dayOfWeek}</div>
                      <div>{formattedDate}</div>
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
                <div className='collapse-content flex flex-col'>
                  {todaysDataForecast.map((f, index2) => (
                    <Fragment key={index2}>
                      <div className='flex justify-between text-center items-center sm:grid sm:grid-cols-5 sm:justify-start'>
                        <div>
                          <p>
                            {new Date(f.dt * 1000).toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </p>
                        </div>
                        <div className='flex items-center gap-x-2'>
                          <figure className='w-6 bg-sky-500 rounded-full sm:w-fit'>
                            <Image
                              src={`https://openweathermap.org/img/wn/${f.weather[0].icon}.png`}
                              width={50}
                              height={50}
                              alt='Weather Icon'
                            />
                          </figure>
                          {Math.round(f.main.temp)}&deg;C
                        </div>
                        <div>
                          <p className='capitalize text-sm'>{f.weather[0].description}</p>
                        </div>
                        <div>
                          <p>{f.main.humidity}%</p>
                        </div>
                        <div>
                          <p>{f.main.pressure} hPa</p>
                        </div>
                      </div>
                      <div className='divider'></div>
                      <div className='flex justify-between text-center items-center sm:grid sm:grid-cols-5 sm:justify-start'>
                        <div>
                          <p>
                            {new Date(f.dt * 1000).toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </p>
                        </div>
                        <div className='flex items-center gap-2'>
                          <figure className='w-6 bg-sky-500 rounded-full sm:w-fit'>
                            <Image
                              src={`https://openweathermap.org/img/wn/${f.weather[0].icon}.png`}
                              width={50}
                              height={50}
                              alt='Weather Icon'
                            />
                          </figure>
                          {Math.round(f.main.temp)}&deg;C
                        </div>
                        <div>
                          <p className='capitalize text-sm'>{f.weather[0].description}</p>
                        </div>
                        <div>
                          <p>{f.main.humidity}%</p>
                        </div>
                        <div>
                          <p>{f.main.pressure} hPa</p>
                        </div>
                      </div>
                      <div className='divider'></div>
                    </Fragment>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
}
