import React from 'react';
import AppProviders from 'providers/AppProviders';
import TextJustToTest from 'components/atoms/TextJustToTest/TextJustToTest';
import Button from 'components/atoms/Button/Button';

const Root = () => {
  return (
    <AppProviders>
      <TextJustToTest isBig text='Hello, World!' />
      <Button role='buttonSix' label='5'>
        click
      </Button>
    </AppProviders>
  );
};

export default Root;
