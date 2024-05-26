import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        font-size: 10px; // Matching root font size of Pure website
        margin: 0;
    }

    body {
        background-color: #eae5dc;
        font-family: 'Quicksand', 'Arial', sans-serif;
        margin: 0;
    }
`;

export default GlobalStyles;