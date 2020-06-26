import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *, *::before, *::after{
    box-sizing:inherit;
  }

  body {
    margin: 0;
    padding: 12.5rem 8.5rem 0;
    font-size: 160%;
    font-family: 'Montserrat', sans-serif; 
  }

  button {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 5.2rem;
    margin: 0.4em 0;
  }

  p {
    font-size: 1.8rem;
    line-height: 1.6;
    letter-spacing: -0.6px;
  }
`

export default GlobalStyle
