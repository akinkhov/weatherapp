// src/shared/api/weatherApi.ts
import axios from 'axios';
import type { CurrentWeatherData, ForecastItem } from '../../entities/weather/model/weather.types';

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const weatherApi = {
  async getCurrentWeather(city: string) {
    return axios.get<CurrentWeatherData>(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
        lang: 'ru',
      },
    });
  },

  async getForecast(city: string) {
    return axios.get<{ list: ForecastItem[] }>(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
        lang: 'ru',
      },
    });
  },
};
