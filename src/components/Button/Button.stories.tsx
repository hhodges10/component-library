import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    innerText: {
      control: { type: 'text' },
    },
    customType: {
      control: false,
    },
    subtype: {
      control: false,
    },
    disabled: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const primaryButton: ButtonProps = {
  innerText: 'primary',
  customType: 'solid',
  subtype: 'primary',
  onClick: (event: any) => {
    console.log('Button clicked: ', event);
  },
};

const accentButton: ButtonProps = {
  ...primaryButton,
  innerText: 'accent',
  subtype: 'accent',
};

const destructiveButton: ButtonProps = {
  ...primaryButton,
  innerText: 'destructive',
  subtype: 'destructive',
};

export const Default: Story = {
  render: (args) => {
    const buttonArgs = { ...primaryButton, ...args };
    return (
      <div style={{ display: 'flex', gap: '3rem' }}>
        <Button {...buttonArgs} innerText={args?.innerText || 'Primary'} />
        <Button {...accentButton} />
        <Button {...destructiveButton} />
      </div>
    );
  },
};

const primaryOutline: ButtonProps = { ...primaryButton, customType: 'outline' };
const accentOutline: ButtonProps = { ...accentButton, customType: 'outline' };
const destructiveOutline: ButtonProps = {
  ...destructiveButton,
  customType: 'outline',
};

export const Outline: Story = {
  render: (args) => {
    const buttonArgs = { ...primaryOutline, ...args };
    return (
      <div style={{ display: 'flex', gap: '3rem' }}>
        <Button {...buttonArgs} innerText={args?.innerText || 'Primary'} />
        <Button {...accentOutline} />
        <Button {...destructiveOutline} />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: ({ innerText }) => {
    const disabledArg: ButtonProps = {
      innerText: innerText || 'disabled',
      customType: 'solid',
      disabled: true,
      subtype: 'primary',
    };
    return (
      <div style={{ display: 'flex', gap: '3rem' }}>
        <Button {...disabledArg} />
        <Button {...disabledArg} customType="outline" />
      </div>
    );
  },
};
