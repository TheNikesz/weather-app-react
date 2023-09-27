import dateFormat from "dateformat";
import Weather from "../models/Weather";
import getWeatherIcon from "../utils/getWeatherIcon";

export default function DailyWeatherList({
  weeklyWeather,
  isNight,
}: {
  weeklyWeather: Weather[];
  isNight: boolean;
}) {
  return (
    <div className="daily-weather-list">
      {weeklyWeather.slice(1).map((dailyWeather: Weather) => (
        <DailyWeather
          key={dailyWeather.date}
          dailyWeather={dailyWeather}
          isNight={isNight}
        />
      ))}
    </div>
  );
}

function DailyWeather({
  dailyWeather,
  isNight,
}: {
  dailyWeather: Weather;
  isNight: boolean;
}) {
  return (
    <div
      className={
        isNight ? "daily-weather daily-weather-night" : "daily-weather"
      }
    >
      <p className="daily-weather-date">
        {dateFormat(dailyWeather.date, "dddd")}
      </p>
      <div className="daily-weather-icon">
        {getWeatherIcon(isNight, dailyWeather.weatherCode, 35)}
      </div>
      <p>
        {isNight
          ? dailyWeather.minTemperature.toFixed()
          : dailyWeather.maxTemperature.toFixed()}
        °C
      </p>
    </div>
  );
}
