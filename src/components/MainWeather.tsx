import { WiDayFog } from "weather-icons-react";

export default function MainWeather({ isNight }: { isNight: boolean }) {
  return (
    <div
      className={isNight ? "main-weather main-weather-night" : "main-weather"}
    >
      <div className="main-weather-icon">
        <WiDayFog size={100} />
        <h4>Fog</h4>
      </div>
      <div className={isNight ? "vertical-spacer vertical-spacer-night" : "vertical-spacer"}></div>
      <h1>13°C</h1>
    </div>
  );
}
