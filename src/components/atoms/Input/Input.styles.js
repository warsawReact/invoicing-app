import { getColor, getFontSize, getFontWeight } from 'assets/styles/utils';
import styled from 'styled-components';

export const StyledInput = styled.input`
  display: block;
  font-size: ${getFontSize('s')};
  font-weight: ${getFontWeight('bold')};
  border-radius: 4px;
  border: 1px solid ${getColor('lightGrey')};
  outline: none;
  width: 20rem;
  padding: 1.5rem 2rem;
  margin-top: 1rem;
  color:${getColor('black')}

  &:focus {
    border: 1px solid ${getColor('lightPurple')};
    caret-color: ${getColor('lightPurple')};
  }
`;
