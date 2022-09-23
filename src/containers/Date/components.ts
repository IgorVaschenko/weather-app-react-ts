import styled from "styled-components";

import theme from "theme/theme";

export const DateBlock = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 300px) {
        flex-direction: column;
    }
`;
export const DayToday = styled.div`
    @media (max-width: 300px) {
        font-size: ${theme.fontSize[0]}rem;
    }
`;
export const DateToday = styled.div`
    @media (max-width: 300px) {
        font-size: ${theme.fontSize[0]}rem;
    }
`;
