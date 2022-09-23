import styled from 'styled-components'

import theme from "theme/theme";

export const ErrorWrap = styled.div`
  margin: ${theme.spaces[0]}px auto;
  height: ${theme.height[2]}vh;
  cursor: pointer;
`
export const ErrorText = styled.div`
  margin:0 auto;
  font-size: ${theme.fontSize[2]}rem;

  @media (max-width: 400px) {
    font-size: ${theme.fontSize[0]}rem;
}
`
export const ErrorImg = styled.img`
  height: ${theme.height[9]}px;

  margin: ${theme.spaces[0]}px auto;
`
