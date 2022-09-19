import styled from 'styled-components'

import theme from "theme/theme";

export const ErrorWrap = styled.div`
  margin: ${theme.spaces[0]}px auto;
  height: ${theme.height[3]}vh;
  cursor: pointer;
`
export const ErrorText = styled.div`
  margin: auto;
  font-size: ${theme.fontSize[3]}rem;
`
export const ErrorImg = styled.img`
  height: ${theme.height[11]}px;
  width: ${theme.width[13]}px;
  margin: ${theme.spaces[0]}px auto;
`
