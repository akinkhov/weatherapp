# 🌤 Weather Widget App

Приложение отображает **текущую погоду и прогноз на несколько часов** для выбранного города с красивым **динамическим фоном**.  
Фон загружается из Unsplash и автоматически обновляется при смене города.

---

## ✨ Возможности

- 🔹 Поиск погоды по любому городу  
- 🔹 Отображение **текущей температуры, влажности, ветра и ощущаемой температуры**  
- 🔹 Прогноз на 8 ближайших временных интервалов  
- 🔹 **Динамический фон** города с Unsplash  
- 🔹 **Лоадер** и **плавная смена фона с блюром** при загрузке нового изображения  
- 🔹 Сохранение последнего выбранного города в `localStorage`  

---

## 🛠 Используемые технологии

- **React + TypeScript** – UI и логика
- **Vite** – быстрая сборка
- **SCSS Modules** – стилизация
- **Axios** – работа с API
- **Feature-Sliced Design (FSD)** – архитектура проекта
- **OpenWeatherMap API** – данные о погоде
- **Unsplash API** – фоновые изображения городов

---

## ⚙️ Переменные окружения

Для работы проекта нужны ключи API:  

1. **OpenWeatherMap**  
   Получить можно на [https://openweathermap.org/api](https://openweathermap.org/api)  

2. **Unsplash**  
   Получить на [https://unsplash.com/developers](https://unsplash.com/developers)

Создайте файл `.env` в корне проекта:

VITE_OPENWEATHER_KEY=ВАШ_КЛЮЧ
VITE_UNSPLASH_KEY=ВАШ_КЛЮЧ

---

## 🚀 Установка и запуск

1. **Клонировать проект**

```bash
git clone https://github.com/akinkhov/weatherapp.git
cd weatherapp
npm install
npm run dev