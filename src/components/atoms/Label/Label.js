import React from 'react';
import { StyledLabel } from './Label.styles';

function Label(props) {
  return <StyledLabel>{props.children}</StyledLabel>;
}

export default Label;
