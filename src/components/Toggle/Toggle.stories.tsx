import type { Meta, StoryObj } from '@storybook/react';
import Toggle, { ToggleProps } from './Toggle';
import React from 'react';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
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
    props: {
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
      control: { type: 'boolean' },
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
  return <Toggle {...args} onChange={handleChange} checked={checked}></Toggle>;
};

export const Default: Story = {
  render: (args) => <ToggleTemplate {...args}></ToggleTemplate>,
};
