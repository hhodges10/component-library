import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'click me',
    primary: true,
    handler: (event) => {
      console.log('Button clicked: ', event);
    },
  },
};

export const Outline: Story = {
  args: {
    label: 'click me',
    primary: false,
    handler: (event) => {
      console.log('Button clicked: ', event);
    },
  },
};

export const DestructivePrimary: Story = {
  args: {
    label: 'click me',
    primary: true,
    destructive: true,
    handler: (event) => {
      console.log('Button clicked: ', event);
    },
  },
};

export const DestructiveOutline: Story = {
  args: {
    label: 'click me',
    primary: false,
    destructive: true,
    handler: (event) => {
      console.log('Button clicked: ', event);
    },
  },
};
