import { useEffect, useState } from 'react';
import { WeatherWidget } from '../../widgets/WeatherWidget';
import cls from './WeatherPage.module.scss';
import { imageApi } from '../../shared/api/imageApi';
import { Loader } from '../../shared/ui/loader';

export const WeatherPage = () => {
  const [bgImage, setBgImage] = useState('');
  const [loadingBg, setLoadingBg] = useState(false);

  const loadCityImage = async (city: string) => {
    try {
      setLoadingBg(true);
      const img = await imageApi.getCityImage(city);

      if (img) {
        // Ждем полной загрузки картинки
        const image = new Image();
        image.src = img;
        image.onload = () => {
          setBgImage(img);
          setLoadingBg(false);
        };
        image.onerror = () => {
          setBgImage('');
          setLoadingBg(false);
        };
      } else {
        setBgImage('');
        setLoadingBg(false);
      }
    } catch {
      setBgImage('');
      setLoadingBg(false);
    }
  };

  useEffect(() => {
    const city = localStorage.getItem('currentCity') || 'Москва';
    if (city) {
      loadCityImage(city);
    }
  }, []);

  return (
    <div
      className={cls.page}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {loadingBg && (
        <Loader />
      )}
      <WeatherWidget onCityChange={loadCityImage} />
    </div>
  );
};

export default WeatherPage;
