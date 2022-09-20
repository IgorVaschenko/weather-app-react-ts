import styled from "styled-components";

import theme from "theme/theme";

export const RegionBlock = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;

    @media (max-width: 600px) {
        margin: ${theme.spaces[2]}px auto;
        text-align: center;
    }
`;
export const City = styled.div`
    font-size: ${theme.fontSize[6]}rem;
    font-weight: ${theme.fontWeight[2]};
`;
export const Country = styled.div`
    font-size: ${theme.fontSize[2]}rem;
    font-weight: ${theme.fontWeight[0]};
`;