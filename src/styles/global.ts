import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary-main: #5243C2;
        --primary-light: #7569CE;
        --primary-dark: #40339E;
        --primary-white: #ffffff;
        --primary-bg-light: #FAF9FD;
        --primary-bg-dark: #CBC7ED;

        --secondary-main: #DDDAF3;
        --secondary-light: #F5F3FD;
        --secondary-dark: #BCB6E7;
        --secondary-bg-light: #F4F3FD;
        --secondary-border: #CFCAF0;

        --info-main: #2196F3;
        --info-light: #64B6F7;
        --info-dark: #0B79D0;
        --info-dark-text: #0D3C61;
        --info-light-bg: #E9F5FE;

        --error-main: #F44336;
        --error-light: #F88078;
        --error-dark: #E31B0C;
        --error-dark-text: #621B16;
        --error-light-bg: #FEECEB;

        --warning-main: #FFAE00;
        --warning-light: #FFC83F;
        --warning-dark: #CC8B00;
        --warning-dark-text: #664600;
        --warning-light-bg: #FFF7E5;

        --success-main: #02B66F;
        --success-light: #36D385;
        --success-dark: #018350;
        --success-dark-text: #003420;
        --success-light-bg: #E6F8F1;


        --grey-1000: #111111;
        --grey-900: #222222;
        --grey-800: #333333;
        --grey-850: #323233;
        --grey-700: #444444;
        --grey-650: #868588;
        --grey-600: #636363;
        --grey-500: #888888;
        --grey-400: #A3A3A3;
        --grey-200: #D4D4D4;
        --grey-100: #EBEBEB;
        --grey-50: #FAFAFA;
        --grey-0: #FFFFFF;

        --shadow: 0px 9px 18px rgba(204, 204, 204, 0.4);
        --shadow-tooltip: 0px 4px 20px rgb(0 0 0 / 5%);
        --shadow-card: 0px 9px 18px rgba(204, 204, 204, 0.4);
        --mob-pd-layout: 16px;

        //animation time

        --base-delay: 0.350s;
        --base-scale: 1.05;
    }

    body {
        margin: 0;
        background: #FAFAFA;
    }

    * {
        font-family: 'Roboto', sans-serif;;
    }
`;
