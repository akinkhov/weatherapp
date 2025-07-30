export interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface CurrentWeatherData {
  name: string;
  dt: number;
  weather: WeatherDescription[];
  main: WeatherMain;
  wind: {
    speed: number;
    deg: number;
  };
}

export interface ForecastMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface ForecastItem {
  dt: number;
  main: ForecastMain;
  weather: WeatherDescription[];
  wind: {
    speed: number;
    deg: number;
  };
  dt_txt: string;
}
