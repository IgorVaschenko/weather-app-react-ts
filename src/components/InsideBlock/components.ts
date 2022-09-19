import styled from "styled-components" 

import cloudy from 'assets/cloudy.png'
import fog2 from 'assets/fog2.png'
import rain_large from 'assets/rain_large.png'
import snowfall2 from 'assets/snowfall2.png'
import sun from 'assets/sunny.png'
import thunderstorm from 'assets/thunderstorm.png'
import windly from 'assets/windy.png'
import theme from "theme/theme";

export const InsideBlockWrap = styled.div<{ idWeather: number }>`

 background-image:url(${(({ idWeather }) => idWeather > 800
        ? cloudy
        : idWeather === 800
            ? sun
            : idWeather < 800 && idWeather > 770
                ? windly
                : idWeather < 770 && idWeather > 700
                    ? fog2
                    : idWeather < 700 && idWeather >= 600
                        ? snowfall2
                        : idWeather < 600 && idWeather >= 300
                            ? rain_large
                            : idWeather < 300 && idWeather >= 200
                                ? thunderstorm
                                : 'none'
    )});

    color:  ${theme.colors.textColor};
    margin: ${theme.height[0]}vh auto;
    width: ${theme.height[7]}vw;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    text-align: center;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 1px 5px 7px 1px #00000040;
`




