import React from 'react';
import AppProviders from 'providers/AppProviders';
import TextJustToTest from 'components/atoms/TextJustToTest/TextJustToTest';
import FormElement from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';

const Root = () => {
  return (
    <AppProviders>
      <TextJustToTest isBig text='Hello, World!' />
      <Label>Street Address </Label>
      <FormElement role='TextField' label='Street Address'></FormElement>
    </AppProviders>
  );
};

export default Root;
