import styled from 'styled-components';

export const TextJustToTestStyles = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme, isBig }) => (isBig ? 32 : 20)};
`;
