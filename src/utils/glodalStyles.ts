import { createGlobalStyle } from 'styled-components';

export const GlobalSyles = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --white: #ffffff;
    --lightGrey: #eeeeee;
    --medGrey: #555555;
    --darkGrey: #333333;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }

  * {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    margin: 0;
    padding: 0;

    button, 
    input {
      outline: none;
      border: none;
    }
    a {
      text-decoration: none;
    }
    button,
    a {
      cursor: pointer;
    }
    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }
    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }
    p {
      font-size: 1rem;
      color: var(--white);
    }
  }
`;
