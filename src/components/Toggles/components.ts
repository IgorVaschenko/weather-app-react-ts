import styled from "styled-components";

import theme from "theme/theme";

export const ToggleBlock = styled.div` 
    margin-top: ${theme.spaces[3]}px;
    display: flex;
    justify-content:flex-end;
    flex-direction: row;

    @media (max-width: 620px) {.
        align-content: center;
        flex-wrap: wrap;
    }
`;