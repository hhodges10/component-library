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
  render: (args) => (
    <div style={{ width: '480px' }}>
      <Input {...args} inputLabel={args.inputLabel || 'First Name'}></Input>
    </div>
  ),
};

export const Outline: Story = {
  render: (args) => (
    <div style={{ width: '480px' }}>
      <Input
        {...args}
        inputLabel={args.inputLabel || 'First Name'}
        type="outline"
      ></Input>
    </div>
  ),
};
