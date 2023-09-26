import { WiDayFog } from "weather-icons-react";

export default function DailyWeatherList({ isNight }: { isNight: boolean }) {
  return (
    <div className="daily-weather-list">
      <DailyWeather isNight={isNight} />
      <DailyWeather isNight={isNight} />
      <DailyWeather isNight={isNight} />
      <DailyWeather isNight={isNight} />
      <DailyWeather isNight={isNight} />
      <DailyWeather isNight={isNight} />
    </div>
  );
}

function DailyWeather({ isNight }: { isNight: boolean }) {
  return (
    <div
      className={
        isNight ? "daily-weather daily-weather-night" : "daily-weather"
      }
    >
      <p>Thursday</p>
      <div className="daily-weather-icon">
        <WiDayFog size={35} />
      </div>
      <p>13°C</p>
    </div>
  );
}
