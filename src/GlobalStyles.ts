import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 67.5%;
    }

    body {
        min-height: 100vh;
        font-size: 1.6rem;
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 600;
    }
`;

export default GlobalStyle;
