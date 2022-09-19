import styled from "styled-components";

import theme from "theme/theme";

export const WeatherNextDay = styled.div`
    flex-basis: ${theme.flexBasis[4]}%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;

    @media (max-width: 780px) {
        flex-basis: ${theme.flexBasis[5]}%;
        margin: ${theme.spaces[2]}px 0 ${theme.spaces[8]}px 0;
    }
`;
export const Icon = styled.div <{ icon: string }> `
    background-image:${({ icon }) => icon.length === 3
        ? `url(http://openweathermap.org/img/wn/${icon}@2x.png)`
        : `url(https://www.weatherbit.io/static/img/icons/${icon}.png)`
    };
    width: ${theme.width[7]}px;
    height: ${theme.height[7]}px;
    background-size: cover;
    background-position: center center;
`
export const Degrees = styled.div`
    font-size: ${theme.fontSize[3]}rem;
    font-weight: ${theme.fontWeight[0]};
    color: white;
`
export const DayWeek = styled.div`
    color: ${theme.colors.textColor};
    background-color: ${theme.colors.dayWeek};
    padding: ${theme.spaces[1]}px ${theme.spaces[2]}px;
    border-radius: ${theme.spaces[3]}px;
`