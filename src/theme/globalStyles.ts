import { createGlobalStyle } from "styled-components"

import { backgroundImage } from "helpers/backgroundImage"

import theme from 'theme/theme'

export default createGlobalStyle<{ idWeather: number, timesOfDay: number }>`
  * {
    margin: 0;
    padding: 0;
    font-family: ${theme.font};
  }
  html{
    background-image:url(${(({ idWeather, timesOfDay }) => backgroundImage(idWeather, timesOfDay))});
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