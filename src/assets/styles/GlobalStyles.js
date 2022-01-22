import { createGlobalStyle } from 'styled-components';
import { getColor, getFontFamily, getFontWeight } from './utils';

export const GlobalStyle = createGlobalStyle`
 html{
   font-size:10px;
  }
 * {
    box-sizing:border-box;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    font-family: ${getFontFamily('Spartan')};
    margin: 0;
    padding: 0;
    -ms-overflow-style: none;
  }
input{
  border:none;
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
    font-size: 3.2rem;
    line-height: 3.6rem;
    letter-spacing: -0.1rem;
  }
  
  h2 {
    font-size: 2.0rem;
    line-height: 2.2rem;
    letter-spacing: -0.0625rem;
  }
  
  h3 {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
  
  h4 {
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: -0.025rem;
  }

  body {
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: -0.025rem;
  }

  p {
    letter-spacing: -0.015em;
    line-height: 3.2rem;
    font-size: 1.6rem;
  }
`;

export default GlobalStyle;
