import bg from 'assets/bg.jpg'
import cloudy from 'assets/cloudy.jpg'
import fog from 'assets/fog.jpg'
import rain from 'assets/rain.jpg'
import snowfall from 'assets/snowfall.jpg'
import sun from 'assets/sun.jpg'
import clearNight from 'assets/clear_night.jpg'
import thunderstorm from 'assets/thunderstorm.jpg'
import windly from 'assets/wind.jpg'
import { EVENING, MORNING, WEATHER_CODES } from "constants/days"

export const backgroundImage = (idWeather: number, timesOfDay: number) => {
  switch (!!idWeather) {
    case (idWeather > WEATHER_CODES[0]):
      return cloudy;
    case (idWeather === WEATHER_CODES[0] && (timesOfDay <= MORNING || timesOfDay >= EVENING)):
      return clearNight;
    case (idWeather === WEATHER_CODES[0] && (timesOfDay > MORNING || timesOfDay < EVENING)):
      return sun;
    case (idWeather < WEATHER_CODES[0] && idWeather > WEATHER_CODES[1]):
      return windly;
    case (idWeather < WEATHER_CODES[1] && idWeather > WEATHER_CODES[2]):
      return fog;
    case (idWeather < WEATHER_CODES[2] && idWeather >= WEATHER_CODES[3]):
      return snowfall;
    case (idWeather < WEATHER_CODES[3] && idWeather >= WEATHER_CODES[4]):
      return rain;
    case (idWeather < WEATHER_CODES[4] && idWeather >= WEATHER_CODES[5]):
      return thunderstorm;
    default:
      return bg
  }
}