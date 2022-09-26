import { createGlobalStyle } from "styled-components"

import theme from 'theme/theme'
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


export default createGlobalStyle<{ idWeather: number, timesOfDay: number }>`
  * {
    margin: 0;
    padding: 0;
    font-family: ${theme.font};
  }
  html{
    background-image:url(${(({ idWeather, timesOfDay }) => idWeather > WEATHER_CODES[0]
    ? cloudy
    : idWeather === WEATHER_CODES[0] && (timesOfDay <= MORNING || timesOfDay >= EVENING)
      ? clearNight
      : idWeather === WEATHER_CODES[0] && (timesOfDay > MORNING || timesOfDay < EVENING)
        ? sun
        : idWeather < WEATHER_CODES[0] && idWeather > WEATHER_CODES[1]
          ? windly
          : idWeather < WEATHER_CODES[1] && idWeather > WEATHER_CODES[2]
            ? fog
            : idWeather < WEATHER_CODES[2] && idWeather >= WEATHER_CODES[3]
              ? snowfall
              : idWeather < WEATHER_CODES[3] && idWeather >= WEATHER_CODES[4]
                ? rain
                : idWeather < WEATHER_CODES[4] && idWeather >= WEATHER_CODES[5]
                  ? thunderstorm
                  : bg
  )});
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
  }
  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }

`