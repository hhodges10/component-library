import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    inputLabel: 'First Name',
  },
};

export const Outline: Story = {
  args: {
    inputLabel: 'First Name',
    type: 'outline',
    subtype: 'primary',
  },
};
