import React from 'react';
import cls from './CurrentWeather.module.scss';
import type { CurrentWeatherData } from '../model/forecast.type';

interface Props {
  data: CurrentWeatherData;
}

export const CurrentWeather: React.FC<Props> = ({ data }) => {
  return (
    <div className={cls.current}>
      <p className={cls.location}>{data.name}</p>
      {data.main && <h1 className={cls.temp}>{data.main.temp.toFixed()}°C</h1>}
      {data.weather && (
        <div className={cls.description}>
          <p>{data.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </div>
      )}
      {data.main && (
        <div className={cls.bottom}>
          <div>
            <p className={cls.bold}>{data.main.feels_like.toFixed()}°C</p>
            <p>По ощущениям</p>
          </div>
          <div>
            <p className={cls.bold}>{data.main.humidity}%</p>
            <p>Влажность</p>
          </div>
          {data.wind && (
            <div>
              <p className={cls.bold}>{data.wind.speed.toFixed()} м/с</p>
              <p>Ветер</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
