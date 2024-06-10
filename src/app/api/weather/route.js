// src/app/api/weather/route.js

import { NextResponse } from 'next/server';
import { getWeatherByZip, getForecastByLatLon, getGeoByZip } from '@/app/api/lib/weather';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type');
  const zip = searchParams.get('zip');
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  try {
    let data;
    if (type === 'current' && zip) {
      data = await getWeatherByZip(zip);
    } else if (type === 'forecast' && lat && lon) {
      data = await getForecastByLatLon(lat, lon);
    } else if (type === 'geo' && zip) {
      data = await getGeoByZip(zip);
    } else {
      return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
