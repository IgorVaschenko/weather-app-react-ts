import styled from "styled-components";

import { FIRST_SOURCE_ICON, SECOND_SOURCE_ICON } from "constants/api";
import theme from "theme/theme";

export const WeatherToday = styled.div`
    flex-basis: ${theme.flexBasis[4]}%;
    display: flex;
    justify-content:center;
    align-items:center;

    @media (max-width: 780px) {
        flex-basis: ${theme.flexBasis[11]}%;
        margin: ${theme.spaces[1]}px ${theme.spaces[0]}px;
    }
`;
export const IconToday = styled.div <{ icon: string }> `
    background-image:${({ icon }) => icon.length === 3
        ? `${FIRST_SOURCE_ICON}${icon}@2x.png)`
        : `${SECOND_SOURCE_ICON}${icon}.png)`
    };
    flex-basis:${theme.flexBasis[7]}%;
    height: ${theme.height[9]}px;
    
    background-size: 65%;
    background-repeat: no-repeat;
    background-position: center center;

    @media (max-width: 780px) {
        height: ${theme.height[12]}px;
    }
`;
export const DegreesToday = styled.div`
    font-size: ${theme.fontSize[6]}rem;
    font-weight: ${theme.fontWeight[2]};
    color: ${theme.colors.textColor};
`;
export const DayWeekToday = styled.div`
    color: ${theme.colors.textColor};
    background-color: ${theme.colors.dayWeek};
    padding: ${theme.spaces[1]}px;
    border-radius: ${theme.spaces[3]}px;
`;
export const WeatherInDay = styled.div`
    display: flex;
    flex-direction: column;
`;