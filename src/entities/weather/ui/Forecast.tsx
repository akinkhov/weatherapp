import React from 'react';
import cls from './Forecast.module.scss';
import type { ForecastItem } from '../model/forecast.type';

interface Props {
  list: ForecastItem[];
}

export const Forecast: React.FC<Props> = ({ list }) => {
  return (
    <div className={cls.forecast}>
      {list.slice(0, 8).map((item, idx) => (
        <div key={idx} className={cls.card}>
          <p>{new Date(item.dt * 1000).toLocaleString('ru-RU', { weekday: 'short', hour: '2-digit', minute: '2-digit' })}</p>
          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt="icon"
          />
          <p>{Math.round(item.main.temp)}°C</p>
        </div>
      ))}
    </div>
  );
};
