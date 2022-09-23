import styled from "styled-components";

import theme from "theme/theme";

export const TimeBlock = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 720px) {
        margin-top: ${theme.spaces[3]}px;
    }
    `;
export const Timer = styled.div`
    font-size: ${theme.fontSize[7]}rem;
    font-weight: ${theme.fontWeight[2]};
`;