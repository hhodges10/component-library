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
