import { createGlobalStyle } from "styled-components";
import ReactDOM from "react-dom";

import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    max-width: 100%;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
  body {
    font-family: ${(props) => props.theme.fonts.main}, sans-serif;
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;
    font-display: swap;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title},sans-serif;
    font-display: swap;
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;
