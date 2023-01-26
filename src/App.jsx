import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Search from "./components/search";
import Layout from "./components/layout";
import CurrentWeather from "./components/weather/current_weather";
import { WEATHER_API, WEATHER_URL } from "./components/helpers/api";
import { ForecastWeather } from "./components/weather/forecast_weather";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [count, setCount] = useState(0);
  const handleOnSearchChange = (e) => {
    console.log(e);
    const [lat, lon] = e.value.split(" ");

    const fetchCurrentWeather =
      fetch(`${WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API}&units=metric
    `);

    const fetchForecastWeather =
      fetch(`${WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API}&units=metric
    `);

    Promise.all([fetchCurrentWeather, fetchForecastWeather])
      .then(async (response) => {
        const responseWeather = await response[0].json();
        const responseForecast = await response[1].json();

        setCurrentWeather({ city: e.label, ...responseWeather });
        setForecastWeather({ city: e.label, ...responseForecast });
      })
      .catch((err) => console.error(err));
  };
  console.log(forecastWeather);
  return (
    <Layout>
      <div>
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecastWeather && <ForecastWeather data={forecastWeather} />}
      </div>
    </Layout>
  );
}

export default App;
