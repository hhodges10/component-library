import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Dark',
  component: Button,
  parameters: {
    backgrounds: { disable: false },
  },
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

const outlinePrimary = { ...primaryButton, primary: false };

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

const outlineAccent = { ...accentButton, primary: false };

const destructiveTheme: ButtonTheme = {
  mainColor: 'var(--color-danger)',
  accentColor: 'var(--color-danger_dark)',
  darkAccentColor: '#580c0c',
  focusColor: 'rgba(193, 30, 30, 0.4)',
};

export const Primary: Story = {
  decorators: [
    (args: any, { globals: { theme } }: any) => {
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
    onClick: (event: any) => {
      console.log('Button clicked: ', event);
    },
  },
};

export const DestructiveOutline: Story = {
  args: {
    label: 'click me',
    primary: false,
    theme: destructiveTheme,
    onClick: (event: any) => {
      console.log('Button clicked: ', event);
    },
  },
};
