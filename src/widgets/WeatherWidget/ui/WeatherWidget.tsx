import React, { useState } from 'react';
import cls from './WeatherWidget.module.scss';
import { weatherApi } from '../../../shared/api/weatherApi';
import { CurrentWeather } from '../../../entities/weather/ui/CurrentWeather';
import { Forecast } from '../../../entities/weather/ui/Forecast';
import { Button } from '../../../shared/ui/Button';
import type { CurrentWeatherData, ForecastItem } from '../../../entities/weather/model/weather.types';


interface WeatherWidgetProps {
  onCityChange?: (city: string) => void;
}

export const WeatherWidget: React.FC<WeatherWidgetProps> = ({ onCityChange }) => {
  const [city, setCity] = useState<string>('');
  const [current, setCurrent] = useState<CurrentWeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastItem[]>([]);

  const searchCity = async () => {
    if (!city) return;
    try {
      const currentRes = await weatherApi.getCurrentWeather(city);
      const forecastRes = await weatherApi.getForecast(city);

      setCurrent(currentRes.data as CurrentWeatherData);
      setForecast(forecastRes.data.list as ForecastItem[]);

      localStorage.setItem('currentCity', currentRes.data.name);
      onCityChange?.(currentRes.data.name);

      setCity('');
    } catch {
      alert('Нет такого города');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') searchCity();
  };

  return (
    <div className={cls.WeatherWidget}>
      <div className={cls.card}>
        <div className={cls.search}>
          <input
            type="text"
            value={city}
            placeholder="Выберите город"
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button variant="primary" disabled={!city} onClick={searchCity}>
            Найти
          </Button>
        </div>

        {current && <CurrentWeather data={current} />}
        {forecast.length > 0 && <Forecast list={forecast} />}
      </div>
    </div>
  );
};
