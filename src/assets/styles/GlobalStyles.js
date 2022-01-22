import { createGlobalStyle } from 'styled-components';
import { getColor, getFontFamily, getFontWeight } from './utils';

export const GlobalStyle = createGlobalStyle`
 * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    font-family: ${getFontFamily('Spartan')};
    margin: 0;
    padding: 0;
    -ms-overflow-style: none;
  }

  h1, h2, h3, p, body {
    color: ${getColor('black')};
  }
  
  h1, h2{
    font-weight: ${getFontWeight('extraBold')};
  }
  
  h3, h4 {
    font-weight: ${getFontWeight('bold')};
  }

  body, p {
    font-weight: ${getFontWeight('regular')};
  }
  
  h1 {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: -1px;
  }
  
  h2 {
    font-size: 20px;
    line-height: 22px;
    letter-spacing: -0.625px;
  }
  
  h3 {
    font-size: 16px;
    line-height: 24px;
  }
  
  h4 {
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
  }

  body {
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
  }

  p {
    letter-spacing: -0.015em;
    line-height: 32px;
    font-size: 16px;
  }
`;

export default GlobalStyle;
