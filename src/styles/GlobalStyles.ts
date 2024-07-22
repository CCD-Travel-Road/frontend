import { createGlobalStyle } from 'styled-components';

export const colors = {
    mainColor: '#2958DB',
    subColor: '#E1E9FF'
};

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        background-color: ${colors.subColor};
    }

    * {
        box-sizing: border-box;
    }
`;
