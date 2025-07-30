export interface WeatherMain {
  temp: number;
  feels_like: number;
  humidity: number;
}

export interface WeatherWind {
  speed: number;
}

export interface WeatherCondition {
  icon: string;
  description: string;
}

export interface CurrentWeatherData {
  name: string;               
  dt: number;                 
  main: WeatherMain;
  weather: WeatherCondition[];
  wind: WeatherWind;
}

export interface ForecastItem {
  dt: number;
  main: Pick<WeatherMain, 'temp'>; 
  weather: WeatherCondition[];
}

export type ForecastList = ForecastItem[];
