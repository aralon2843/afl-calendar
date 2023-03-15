import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, input {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul {
    list-style: none;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
  form, button, input, textarea {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
  }
  * {
    margin: 0px;
    padding: 0px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;
