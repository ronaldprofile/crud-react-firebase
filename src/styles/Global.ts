import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  #root {
    height: 100vh;
  }

  body {
    background-color: #f0f2f5;
    font: 400 1rem "Roboto", sans-serif;
  }
  
  button,
  input {
    font-family: "Roboto";
    font-size: 1rem;
  }

  button {
    border: 0;
    border-radius: 0.312rem;
    cursor: pointer;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;
