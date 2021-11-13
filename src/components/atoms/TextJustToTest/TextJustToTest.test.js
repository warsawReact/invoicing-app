import React from 'react';
import TextJustToTest from './TextJustToTest';
import { render, screen } from 'test-utils';

describe('TextJustToTest', () => {
  it('renders the component', () => {
    render(<TextJustToTest isBig={true} text="Hello World" />);
    screen.getByText('Hello World');
  });
});
