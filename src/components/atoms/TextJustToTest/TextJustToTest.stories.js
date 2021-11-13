import React from 'react';
import TextJustToTest from './TextJustToTest';

export default {
  title: 'Components/Atoms/TextJustToTest',
  component: TextJustToTest,
};

const Template = (args) => <TextJustToTest {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Hello World',
  isBig: true,
};

export const Small = Template.bind({});
Small.args = {
  text: 'Hello World',
  isBig: false,
};
