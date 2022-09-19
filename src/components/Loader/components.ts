import styled from 'styled-components'
import {BallTriangle} from 'react-loader-spinner'

import theme from "theme/theme";

export const Loader = styled(BallTriangle)`
  margin: auto;
`
export const LoaderWrap = styled.div`
  height: ${theme.height[2]}vh;
  margin: 0 auto;
`
