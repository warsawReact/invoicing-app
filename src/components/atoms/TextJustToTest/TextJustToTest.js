import React from 'react';
import { TextJustToTestStyles } from './TextJustToTest.styles';

const TextJustToTest = ({ text, isBig }) => {
  return <TextJustToTestStyles isBig={isBig}>{text}</TextJustToTestStyles>;
};

export default TextJustToTest;
