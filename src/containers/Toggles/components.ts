import styled from "styled-components";

import theme from "theme/theme";

export const ToggleBlock = styled.div` 
    margin-top: ${theme.spaces[3]}px;
    display: flex;
    justify-content:flex-end;
    flex-direction: row;

    @media (max-width: 900px) {
        margin-top: ${theme.spaces[15]}px;
        align-content: center;
    }
    @media (max-width: 620px) {
        margin-top: ${theme.spaces[2]}px;
        flex-wrap: wrap;
    }
`;