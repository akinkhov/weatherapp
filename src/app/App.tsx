import React from 'react';
import cls from './App.module.scss';
import WeatherPage from '../pages/WeatherPage/WeatherPage';

export const App: React.FC = () => {
  return (
    <div className={cls.App}>
      <WeatherPage />
    </div>
  );
};
