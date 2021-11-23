import { createGlobalStyle } from 'styled-components';
import { getColor, getFontFamily, getFontWeight, getMedias } from './utils';

export const GlobalStyles = createGlobalStyle`
 * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -ms-overflow-style: none;
  }
`;

export default GlobalStyles;