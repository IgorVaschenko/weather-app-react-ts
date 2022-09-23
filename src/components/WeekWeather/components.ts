import styled from "styled-components";

import theme from "theme/theme";

export const DownBlock = styled.div`
  background: ${theme.colors.backgroundDown};
  opacity: ${theme.opacity[7]};
  padding-top: ${theme.spaces[2]}px;
  padding-bottom: ${theme.spaces[2]}px;
`;

export const WeatherBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;

  @media (max-width: 1500px) {
    flex-wrap:wrap;
  }
`;