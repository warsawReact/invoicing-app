import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: { onClick: { action: 'handleClick' } },
};

const Template = (args) => <Button {...args} />;

export const ButtonOne = Template.bind({});
ButtonOne.args = {
  label: 'New Invoice',
  role: 'buttonOne',
};

export const ButtonTwo = Template.bind({});
ButtonTwo.args = {
  label: 'Mark as Paid',
  role: 'buttonTwo',
};

export const ButtonThreeLight = Template.bind({});
ButtonThreeLight.args = {
  label: 'Edit',
  role: 'buttonThreeLight',
};

export const ButtonThreeDark = Template.bind({});
ButtonThreeDark.args = {
  label: 'Edit',
  role: 'buttonThreeDark',
};

export const ButtonFourLight = Template.bind({});
ButtonFourLight.args = {
  label: 'Save as Draft',
  role: 'buttonFourLight',
};

export const ButtonFourDark = Template.bind({});
ButtonFourDark.args = {
  label: 'Save as Draft',
  role: 'buttonFourDark',
};

export const ButtonFive = Template.bind({});
ButtonFive.args = {
  label: 'Delete',
  role: 'buttonFive',
};

export const ButtonSix = Template.bind({});
ButtonSix.args = {
  label: 'Add New Item',
  role: 'buttonSix',
};
