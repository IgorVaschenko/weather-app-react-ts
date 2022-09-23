import {createGlobalStyle} from "styled-components"

import bg from 'assets/bg.jpg'
import theme from 'theme/theme'

import cloudy from 'assets/cloudy.jpg'
import fog from 'assets/fog.jpg'
import rain from 'assets/rain.jpg'
import snowfall from 'assets/snowfall.jpg'
import sun from 'assets/sun.jpg'
import clearNight from 'assets/clear_night.jpg'
import thunderstorm from 'assets/thunderstorm.jpg'
import windly from 'assets/wind.jpg'

export default createGlobalStyle<{ idWeather: number, timesOfDay: number }>`
  * {
    margin: 0;
    padding: 0;
    font-family: ${theme.font};
  }
  html{

    background-image:url(${(({ idWeather, timesOfDay }) => idWeather > 800
    ? cloudy
    : idWeather === 800 && (timesOfDay < 7 || timesOfDay > 20)
        ? clearNight
        : idWeather === 800 && (timesOfDay > 6 || timesOfDay < 21)
            ? sun
            : idWeather < 800 && idWeather > 770
                ? windly
                : idWeather < 770 && idWeather > 700
                    ? fog
                    : idWeather < 700 && idWeather >= 600
                        ? snowfall
                        : idWeather < 600 && idWeather >= 300
                            ? rain
                            : idWeather < 300 && idWeather >= 200
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