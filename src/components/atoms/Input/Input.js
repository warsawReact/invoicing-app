import PropTypes from 'prop-types';
import React from 'react';
import { StyledInput } from './Input.styles';

function FormElement(props) {
  const { role } = props;

  let inputType;
  switch (role) {
    case 'TextField':
      inputType = 'text';
      break;
    case 'PaymentTerms':
      inputType = 'text'; //!To be changed
      break;
    case 'IssueDate':
      inputType = 'text'; //!To be changed
      break;
    default:
      inputType = 'text'; //!To be changed
      break;
  }
  return <StyledInput type={inputType} role={role} />;
}
FormElement.propTypes = {
  role: PropTypes.oneOf(['TextField', 'PaymentTerms', 'IssueDate']),
};

export default FormElement;
