import styled from "styled-components";

import theme from "theme/theme";

export const WrapperRegion = styled.div`
display: flex;
justify-content:space-around;
margin-top: ${theme.spaces[13]}px;

@media (max-width: 780px) {
    flex-direction: column;
    padding: ${theme.spaces[5]}px;
    padding-top: ${theme.spaces[0]}px ;
    margin-top: ${theme.spaces[5]}px;
}
`