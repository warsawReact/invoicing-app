import React from 'react';
import AppProviders from 'providers/AppProviders';
import TextJustToTest from 'components/atoms/TextJustToTest/TextJustToTest';

const Root = () => {
  return (
    <AppProviders>
      <TextJustToTest isBig text="Hello, World!" />
    </AppProviders>
  );
};

export default Root;
