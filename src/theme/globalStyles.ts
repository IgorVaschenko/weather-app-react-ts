import {createGlobalStyle} from "styled-components"

import bg from 'assets/bg.jpg'
import theme from 'theme/theme'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: ${theme.font};
  }
  html{
    background-image: url(${bg});
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
  }
  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }
`