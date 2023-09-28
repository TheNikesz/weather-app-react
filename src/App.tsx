import { useEffect, useState } from "react";
import CityAndDate from "./components/CityAndDate";
import CitySearch from "./components/CitySearch";
import DailyWeatherList from "./components/DailyWeatherList";
import MainWeather from "./components/MainWeather";
import NightWeatherSwitch from "./components/NightWeatherSwitch";
import Weather from "./models/Weather";
import CircularProgress from "@mui/material/CircularProgress";
import { BiErrorAlt } from "react-icons/bi";

function App() {
  const [isNight, setIsNight] = useState<boolean>(false);

  const [city, setCity] = useState<string>("Warsaw");

  const [status, setStatus] = useState<string>("loading");

  const [weatherForecast, setWeatherForecast] = useState<Weather[]>([]);

  function handleChange(): void {
    setIsNight((prevIsNight: boolean) => !prevIsNight);
  }

  function handleClick(citySearch: string) {
    setCity(citySearch);
  }

  useEffect(() => {
    setStatus("loading");
    try {
      fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
      )
        .then((response) => response.json())
        .then((geocodingData) => {
          try {
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
                setStatus("success");
              });
          } catch (error) {
            setStatus("error");
          }
        });
    } catch (error) {
      setStatus("error");
    }
  }, [city]);

  if (status === "success") {
    return (
      <div className={isNight ? "app app-night" : "app"}>
        <CitySearch isNight={isNight} handleClick={handleClick} />
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
  } else if (status === "loading") {
    return (
      <div className={isNight ? "app app-night" : "app"}>
        <div className="loading">
          <CircularProgress
            className={
              isNight
                ? "circular-progress circular-progress-night"
                : "circular-progress"
            }
          />
        </div>
      </div>
    );
  } else if (status === "error") {
    return (
      <div className={isNight ? "app app-night" : "app"}>
        <div className={isNight ? "error error-night" : "error"}>
          <BiErrorAlt size={80} />
          <h3>
            Something went wrong while fetching the weather forecast. Please
            enter a new city or try again later.
          </h3>
          <CitySearch isNight={isNight} handleClick={handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
