import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

const primaryButton = {
  label: 'click me',
  primary: true,
  onClick: (event: any) => {
    console.log('Button clicked: ', event);
  },
};

const accentTheme: ButtonTheme = {
  mainColor: 'var(--color-accent)',
  accentColor: 'var(--color-accent_dark)',
  darkAccentColor: 'var(--color-accent_xtra_dark)',
  focusColor: 'rgba(79, 31, 255, 0.4)',
};

const accentButton = {
  label: 'click me',
  primary: true,
  theme: accentTheme,
  onClick: (event: any) => {
    console.log('Button clicked: ', event);
  },
};

const destructiveTheme: ButtonTheme = {
  mainColor: 'var(--color-danger)',
  accentColor: 'var(--color-danger_dark)',
  darkAccentColor: '#580c0c',
  focusColor: 'rgba(193, 30, 30, 0.4)',
};

export const Primary: Story = {
  render: (_args, { globals: { theme } }) => {
    const buttonArgs = { ...primaryButton, colorTheme: theme };
    const accentButtonArgs = {
      ...accentButton,
      colorTheme: theme,
    };
    return (
      <>
        <Button {...buttonArgs} />
        <div style={{ margin: '10px' }}></div>
        <Button {...accentButtonArgs}></Button>
      </>
    );
  },
};

export const Outline: Story = {
  render: (_args, { globals: { theme } }) => {
    const outlineArgs = { ...primaryButton, primary: false, colorTheme: theme };
    const accentOutlineArgs = {
      ...accentButton,
      primary: false,
      colorTheme: theme,
    };
    return (
      <>
        <Button {...outlineArgs} />
        <div style={{ margin: '10px' }}></div>
        <Button {...accentOutlineArgs}></Button>
      </>
    );
  },
};

export const DestructivePrimary: Story = {
  render: (_args, { globals: { theme } }) => {
    const destructiveArgs = {
      label: 'click me',
      primary: true,
      theme: destructiveTheme,
      colorTheme: theme,
      onClick: (event: any) => {
        console.log('Button clicked: ', event);
      },
    };
    return <Button {...destructiveArgs} />;
  },
};

export const DestructiveOutline: Story = {
  render: (_args, { globals: { theme } }) => {
    const destructiveOutlineArgs = {
      label: 'click me',
      primary: false,
      theme: destructiveTheme,
      colorTheme: theme,
      onClick: (event: any) => {
        console.log('Button clicked: ', event);
      },
    };
    return <Button {...destructiveOutlineArgs} />;
  },
};
