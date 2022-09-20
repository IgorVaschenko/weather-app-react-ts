import styled from "styled-components"

import cloudy from 'assets/cloudy.jpg'
import fog from 'assets/fog.jpg'
import rain from 'assets/rain.jpg'
import snowfall from 'assets/snowfall.jpg'
import sun from 'assets/sun.jpg'
import clearNight from 'assets/clear_night.jpg'
import thunderstorm from 'assets/thunderstorm.jpg'
import windly from 'assets/wind.jpg'
import theme from "theme/theme";

export const InsideBlockWrap = styled.div`
    color:  ${theme.colors.textColor};
    margin: ${theme.height[0]}vh auto;
    width: ${theme.height[8]}vw;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    text-align: center;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 0 30px 10px black;
`

export const OutsideBlock = styled.div<{ idWeather: number, timesOfDay: number }>`
    display: flex;
    justify-content: center;
    align-items:center;
    max-width: 100%;
    max-height: 100%;
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
                                    : 'none'
    )});
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
`