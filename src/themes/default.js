import { createGlobalStyle } from "styled-components";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Medium';
  src: url("../../fonts/FuturaLT-Book.woff2") format('woff2'),
       
}

@font-face {
  font-family: 'Bold';
  src: url("../../fonts/Futura Bold font.ttf") format('ttf'),
       
}
`;
export default {
  // Temp fonts
  fonts: {
    title: "futura-pt, sans-serif",
    main: "futura-pt, sans-serif",
  },
  // Colors for layout
  colors: {
    primary1: "hsl(204,23.8%,95.9%)",
    green: "#a3afa7",
    grey: "#7d7f7d",
    background1: "#ffffff",
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(232.7,27.3%,23.7%)",
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: "screen and (max-width: 640px)",
    md: "screen and (min-width: 641px)",
    lg: "screen and (max-width: 1024px)",
    xl: "screen and (max-width: 1280px)",
    max: "screen and (min-width: 1921px)",
  },
};
