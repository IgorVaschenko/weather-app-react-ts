import {createGlobalStyle} from "styled-components"


import theme from './theme'
import bgImage from '../assets/bg_large.jpg'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: ${theme.font};
  }

  html{
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    

    @media (max-width: 550) {

    }
    @media (max-width: 768) {

    }
    @media (max-width: 992) {

    }
    @media (max-width: 1200) {

    }
  }

  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }
`
// width: 100%;
// height: 100%;