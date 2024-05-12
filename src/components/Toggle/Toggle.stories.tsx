import type { Meta, StoryObj } from '@storybook/react';
import Toggle, { ToggleProps } from './Toggle';
import React from 'react';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
    className: {
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
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

const ToggleTemplate = (args: ToggleProps) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Toggle
      {...args}
      label={args.label || 'Toggle Switch Label'}
      onChange={handleChange}
      checked={checked}
    ></Toggle>
  );
};

export const Default: Story = {
  render: (args) => <ToggleTemplate {...args}></ToggleTemplate>,
};

export const Disabled: Story = {
  render: (args) => <ToggleTemplate {...args} disabled></ToggleTemplate>,
};
