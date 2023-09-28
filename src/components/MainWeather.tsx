import getWeatherIcon from "../utils/getWeatherIcon";
import getWeatherLabel from "../utils/getWeatherLabel";
import Weather from "../models/Weather";

export default function MainWeather({
  dailyWeather,
  isNight,
}: {
  dailyWeather: Weather;
  isNight: boolean;
}) {
  return (
    <div
      className={isNight ? "main-weather main-weather-night" : "main-weather"}
    >
      <div className="main-weather-icon">
        {getWeatherIcon(isNight, dailyWeather.weatherCode, 100)}
        <h4>{getWeatherLabel(dailyWeather.weatherCode)}</h4>
      </div>
      <div
        className={
          isNight ? "vertical-spacer vertical-spacer-night" : "vertical-spacer"
        }
      ></div>
      <h1 className="main-weather-temperature">
        {isNight
          ? dailyWeather.minTemperature.toFixed()
          : dailyWeather.maxTemperature.toFixed()}
        °C
      </h1>
    </div>
  );
}
