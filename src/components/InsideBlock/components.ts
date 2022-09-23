import styled from "styled-components"

import theme from "theme/theme";

export const InsideBlockWrap = styled.div`
    color:  ${theme.colors.textColor};
    margin: ${theme.insideBlockMar[1]}vh auto;
    width: ${theme.height[8]}vw;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    text-align: center;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 0 30px 10px black;
    position: relative;

    @media (max-width: 780px) {
        margin: ${theme.insideBlockMar[0]}vh auto;
    }
`

export const OutsideBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    max-width: 100%;
        
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;

    @media (max-width: 780px) {
        height: 100%;
    }
`