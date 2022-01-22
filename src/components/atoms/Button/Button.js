import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';
import { ReactComponent as PlusIcon } from 'assets/icons/plus-icon.svg';

const Button = (props) => {
  const { role, label } = props;
  return (
    <StyledButton {...props}>
      {role === 'buttonOne' && <PlusIcon />}
      <span>{`${role === 'buttonSix' ? '+' + label : ''}`}</span>
    </StyledButton>
  );
};

Button.propTypes = {
  label: PropTypes.number,
  role: PropTypes.oneOf([
    'buttonOne',
    'buttonTwo',
    'buttonThreeLight',
    'buttonThreeDark',
    'buttonFourLight',
    'buttonFourDark',
    'buttonFive',
    'buttonSix',
  ]),
};

export default Button;
