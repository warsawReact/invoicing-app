import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  line-height: 15px;
  font-family: 'Spartan', sans-serif;
  transition: 0.3s;

  padding: ${({ role }) => (role === 'buttonOne' ? '5px 25px 5px 8px' : '15px 25px')};

  width: ${({ role }) => (role === 'buttonSix' ? '100%' : 'auto')};

  background: ${({ role }) => {
    switch (role) {
      case 'buttonOne':
        return '#7C5DFA';
      case 'buttonTwo':
        return '#7C5DFA';
      case 'buttonThreeLight':
        return '#F9FAFE';
      case 'buttonThreeDark':
        return '#252945';
      case 'buttonFourLight':
        return '#373B53';
      case 'buttonFourDark':
        return '#373B53';
      case 'buttonFive':
        return '#EC5757';
      case 'buttonSix':
        return '#F9FAFE';

      default:
        return '#FFFFFF';
    }
  }};

  &:hover {
    background-color: ${({ role }) => {
      switch (role) {
        case 'buttonOne':
          return '#9277FF';
        case 'buttonTwo':
          return '#9277FF';
        case 'buttonThreeLight':
          return '#DFE3FA';
        case 'buttonThreeDark':
          return '#FFFFFF';
        case 'buttonFourLight':
          return '#0C0E16';
        case 'buttonFourDark':
          return '#1E2139';
        case 'buttonFive':
          return '#FF9797';
        case 'buttonSix':
          return '#DFE3FA';

        default:
          return '#FFFFFF';
      }
    }};
  }

  color: ${({ role }) => {
    switch (role) {
      case 'buttonOne':
        return '#FFFFFF';
      case 'buttonTwo':
        return '#FFFFFF';
      case 'buttonThreeLight':
        return '#7E88C3';
      case 'buttonThreeDark':
        return '#DFE3FA';
      case 'buttonFourLight':
        return '#888EB0';
      case 'buttonFourDark':
        return '#DFE3FA';
      case 'buttonFive':
        return '#FFFFFF';
      case 'buttonSix':
        return '#7E88C3';

      default:
        return '#FFFFFF';
    }
  }};

  svg {
    margin-right: 10px;
  }
`;
