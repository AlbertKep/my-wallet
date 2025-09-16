import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62,5%;
  }

  body {
    height: 100svh;
    margin: 0;
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    /* background: #3F5EFB;
    background: linear-gradient(rgba(63, 94, 251, 1) 10%, rgba(252, 70, 107, 1) 100%); */
    background: #B134C9;
    background: linear-gradient(rgba(177, 52, 201, 1) 10%, rgba(252, 70, 107, 1) 100%);
  }

  li {
    list-style-type: none;
  }
`;
