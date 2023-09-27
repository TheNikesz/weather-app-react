import { useEffect, useState } from "react";
import CityAndDate from "./components/CityAndDate";
import CitySearch from "./components/CitySearch";
import DailyWeatherList from "./components/DailyWeatherList";
import MainWeather from "./components/MainWeather";
import NightWeatherSwitch from "./components/NightWeatherSwitch";
import Weather from "./models/Weather";

function App() {
  const [isNight, setIsNight] = useState<boolean>(false);
  const [weatherForecast, setWeatherForecast] = useState<Weather[]>([]);

  function handleChange(): void {
    setIsNight((prevIsNight: boolean) => !prevIsNight);
  }

  useEffect(() => {
    fetch(
      "https://geocoding-api.open-meteo.com/v1/search?name=Warsaw&count=1&language=en&format=json"
    )
      .then((response) => response.json())
      .then((geocodingData) => {
        fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${geocodingData.results[0].latitude}&longitude=${geocodingData.results[0].longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`
        )
          .then((response) => response.json())
          .then((weatherData) => {
            const weather: Weather[] = [];

            for (let i = 0; i < 7; i++) {
              weather[i] = new Weather(
                geocodingData.results[0].name,
                weatherData.daily.time[i],
                weatherData.daily.weathercode[i],
                weatherData.daily.temperature_2m_min[i],
                weatherData.daily.temperature_2m_max[i]
              );
            }

            setWeatherForecast(weather);
          });
      });
  }, []);

  if (weatherForecast.length > 0) {
    return (
      <div className={isNight ? "app app-night" : "app"}>
        <CitySearch isNight={isNight} />
        <CityAndDate
          city={weatherForecast[0].city}
          date={weatherForecast[0].date}
          isNight={isNight}
        />
        <MainWeather dailyWeather={weatherForecast[0]} isNight={isNight} />
        <NightWeatherSwitch isNight={isNight} handleChange={handleChange} />
        <DailyWeatherList weeklyWeather={weatherForecast} isNight={isNight} />
      </div>
    );
  }

}

export default App;
