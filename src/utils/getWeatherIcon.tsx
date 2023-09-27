import {
  WiNA,
  WiNightClear,
  WiNightAltCloudy,
  WiNightFog,
  WiNightAltShowers,
  WiNightAltRainMix,
  WiNightAltRain,
  WiNightAltSleet,
  WiNightAltSnow,
  WiNightAltThunderstorm,
  WiNightAltSnowThunderstorm,
  WiDaySunny,
  WiDayCloudy,
  WiDayFog,
  WiDayShowers,
  WiDayRainMix,
  WiDayRain,
  WiDaySleet,
  WiDaySnow,
  WiDayThunderstorm,
  WiDaySnowThunderstorm
} from "weather-icons-react";

export default function getWeatherIcon(
  isNight: boolean,
  weatherCode: number,
  size: number
): JSX.Element {
  if (isNight) {
    switch (weatherCode) {
      case 0:
        return <WiNightClear size={size} />;
      case 1:
      case 2:
      case 3:
        return <WiNightAltCloudy size={size} />;
      case 45:
      case 48:
        return <WiNightFog size={size} />;
      case 51:
      case 53:
      case 55:
      case 80:
      case 81:
      case 82:
        return <WiNightAltShowers size={size} />;
      case 56:
      case 57:
        return <WiNightAltRainMix size={size} />;
      case 61:
      case 63:
      case 65:
        return <WiNightAltRain size={size} />;
      case 66:
      case 67:
        return <WiNightAltSleet size={size} />;
      case 71:
      case 73:
      case 75:
      case 77:
      case 85:
      case 86:
        return <WiNightAltSnow size={size} />;
      case 95:
        return <WiNightAltThunderstorm size={size} />;
      case 96:
      case 99:
        return <WiNightAltSnowThunderstorm size={size} />;
      default:
        return <WiNA size={size} />;
    }
  }

  switch (weatherCode) {
    case 0:
      return <WiDaySunny size={size} />;
    case 1:
    case 2:
    case 3:
      return <WiDayCloudy size={size} />;
    case 45:
    case 48:
      return <WiDayFog size={size} />;
    case 51:
    case 53:
    case 55:
    case 80:
    case 81:
    case 82:
      return <WiDayShowers size={size} />;
    case 56:
    case 57:
      return <WiDayRainMix size={size} />;
    case 61:
    case 63:
    case 65:
      return <WiDayRain size={size} />;
    case 66:
    case 67:
      return <WiDaySleet size={size} />;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return <WiDaySnow size={size} />;
    case 95:
      return <WiDayThunderstorm size={size} />;
    case 96:
    case 99:
      return <WiDaySnowThunderstorm size={size} />;
    default:
      return <WiNA size={size} />;
  }
}
