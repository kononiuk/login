// GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Basis Grotesque Pro';
    src: url('/fonts/BasisGrotesquePro/BasisGrotesquePro-Regular.woff2') format('woff2'),
         url('/fonts/BasisGrotesquePro/BasisGrotesquePro-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Basis Grotesque Pro';
    src: url('/fonts/BasisGrotesquePro/BasisGrotesquePro-Medium.woff2') format('woff2'),
         url('/fonts/BasisGrotesquePro/BasisGrotesquePro-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Basis Grotesque Pro';
    src: url('/fonts/BasisGrotesquePro/BasisGrotesquePro-Bold.woff2') format('woff2'),
         url('/fonts/BasisGrotesquePro/BasisGrotesquePro-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }
`;