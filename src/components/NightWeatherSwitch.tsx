import Switch from "@mui/material/Switch";
import { WiDaySunny, WiNightClear } from "weather-icons-react";

export default function NightWeatherSwitch({
  isNight,
  handleChange,
}: {
  isNight: boolean;
  handleChange: () => void;
}) {
  return (
    <div
      className={
        isNight
          ? "night-weather-switch night-weather-switch-night"
          : "night-weather-switch"
      }
    >
      <WiDaySunny size={50} />
      <Switch onChange={handleChange} />
      <WiNightClear size={50} />
    </div>
  );
}
