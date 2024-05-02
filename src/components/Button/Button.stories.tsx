import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const primaryButton: ButtonProps = {
  label: 'primary',
  type: 'solid',
  subtype: 'primary',
  onClick: (event: any) => {
    console.log('Button clicked: ', event);
  },
};

const accentButton: ButtonProps = {
  ...primaryButton,
  label: 'accent',
  subtype: 'accent',
};

const destructiveButton: ButtonProps = {
  ...primaryButton,
  label: 'destructive',
  subtype: 'destructive',
};

export const Solid: Story = {
  render: (args) => {
    const buttonArgs = { ...primaryButton, ...args };
    return (
      <>
        <Button {...buttonArgs} />
        <div style={{ margin: '10px' }}></div>
        <Button {...accentButton} />
        <div style={{ margin: '10px' }}></div>
        <Button {...destructiveButton} />
      </>
    );
  },
};

const primaryOutline: ButtonProps = { ...primaryButton, type: 'outline' };
const accentOutline: ButtonProps = { ...accentButton, type: 'outline' };
const destructiveOutline: ButtonProps = {
  ...destructiveButton,
  type: 'outline',
};

export const Outline: Story = {
  render: (args) => {
    const buttonArgs = { ...primaryOutline, ...args };
    return (
      <>
        <Button {...buttonArgs} />
        <div style={{ margin: '10px' }}></div>
        <Button {...accentOutline} />
        <div style={{ margin: '10px' }}></div>
        <Button {...destructiveOutline} />
      </>
    );
  },
};
