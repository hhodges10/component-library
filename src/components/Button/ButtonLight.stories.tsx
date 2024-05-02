import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Light',
  component: Button,
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const primaryButton: ButtonProps = {
  label: 'click me',
  primary: true,
  onClick: (event) => {
    console.log('Button clicked: ', event);
  },
};

const outlinePrimary: ButtonProps = { ...primaryButton, primary: false };

const accentTheme: ButtonTheme = {
  mainColor: 'var(--color-accent)',
  accentColor: 'var(--color-accent_dark)',
  darkAccentColor: 'var(--color-accent_xtra_dark)',
  focusColor: 'rgba(79, 31, 255, 0.4)',
};

const accentButton: ButtonProps = {
  label: 'click me',
  primary: true,
  theme: accentTheme,
  onClick: (event) => {
    console.log('Button clicked: ', event);
  },
};

const outlineAccent: ButtonProps = { ...accentButton, primary: false };

const destructiveTheme: ButtonTheme = {
  mainColor: 'var(--color-danger)',
  accentColor: 'var(--color-danger_dark)',
  darkAccentColor: '#580c0c',
  focusColor: 'rgba(193, 30, 30, 0.4)',
};

export const Primary: Story = {
  decorators: [
    () => {
      return (
        <>
          <Button {...primaryButton} />
          <div style={{ margin: '3rem' }}></div>
          <Button {...accentButton} />
        </>
      );
    },
  ],
};

export const Outline: Story = {
  decorators: [
    () => {
      return (
        <>
          <Button {...outlinePrimary} />
          <div style={{ margin: '3rem' }}></div>
          <Button {...outlineAccent} />
        </>
      );
    },
  ],
};

export const DestructivePrimary: Story = {
  args: {
    label: 'click me',
    primary: true,
    theme: destructiveTheme,
    onClick: (event) => {
      console.log('Button clicked: ', event);
    },
  },
};

export const DestructiveOutline: Story = {
  args: {
    label: 'click me',
    primary: false,
    theme: destructiveTheme,
    onClick: (event) => {
      console.log('Button clicked: ', event);
    },
  },
};
