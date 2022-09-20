import styled from 'styled-components'
import {MutatingDots} from 'react-loader-spinner'

import theme from "theme/theme";

export const Loader = styled(MutatingDots)`
  margin: auto;
`
export const LoaderWrap = styled.div`
  height: ${theme.height[2]}vh;
  margin: 0 auto;
`
