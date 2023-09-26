import { useState } from "react";
import CityAndDate from "./components/CityAndDate";
import CitySearch from "./components/CitySearch";
import DailyWeatherList from "./components/DailyWeatherList";
import MainWeather from "./components/MainWeather";
import NightWeatherSwitch from "./components/NightWeatherSwitch";

function App() {
  const [isNight, setIsNight] = useState<boolean>(false);

  function handleChange(): void {
    setIsNight((prevIsNight: boolean) => !prevIsNight);
  }

  return (
    <div className={isNight ? "app app-night" : "app"}>
      <CitySearch isNight={isNight} />
      <CityAndDate isNight={isNight} />
      <MainWeather isNight={isNight} />
      <NightWeatherSwitch isNight={isNight} handleChange={handleChange} />
      <DailyWeatherList isNight={isNight} />
    </div>
  );
}

export default App;
