import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_800};
    color: ${({theme})=>theme.COLORS.WHITE};
  }

  body, button, textarea, input {
    font-family: 'Roboto Slab', serif;
    //font-family: 'Roboto', sans-serif;
    font-size: 16px;
    outline: none;
  }

  button, a {
    text-decoration: none;
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;