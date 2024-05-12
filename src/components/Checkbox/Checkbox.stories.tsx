import type { Meta, StoryObj } from '@storybook/react';
import Checkbox, { CheckboxProps } from './Checkbox';
import React from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
    checked: {
      table: {
        disable: true,
      },
    },
    disabled: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

const CheckboxTemplate = (args: CheckboxProps) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox {...args} checked={checked} onChange={handleChange}></Checkbox>
  );
};

export const Default: Story = {
  render: (args) => <CheckboxTemplate {...args}></CheckboxTemplate>,
};

export const Disabled: Story = {
  render: (args) => <CheckboxTemplate {...args} disabled></CheckboxTemplate>,
};
