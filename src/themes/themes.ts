import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.color.background};
  }
`;

export const lightTheme = {
  dark: 'var(--color-dark)',
  light: 'var(--color-light)',
  background: 'var(--color-light)',
  text: 'var(--color-light)',
  focusColor: 'rgba(79, 31, 255, 0.6)',
  accentFocusColor: 'rgba(63, 162, 162, 0.6)',
  primary: 'var(--color-light-primary)',
  primaryDark: 'var(--color-light-primary_dark)',
  primaryXDark: 'var(--color-light-primary_xtra_dark)',
  accent: 'var(--color-light-accent)',
  accentDark: 'var(--color-light-accent_dark)',
  accentXDark: 'var(--color-light-accent_xtra_dark)',
  danger: 'var(--color-light-danger)',
  dangerDark: 'var(--color-light-danger_dark)',
  dangerXDark: 'var(--color-light-danger_xtra_dark)',
};

export const darkTheme = {
  dark: 'var(--color-dark)',
  light: 'var(--color-light)',
  background: 'var(--color-dark)',
  text: 'var(--color-dark)',
  focusColor: 'rgba(159, 133, 255, 0.9)',
  accentFocusColor: 'rgba(196, 232, 232, 0.8)',
  primary: 'var(--color-dark-primary)',
  primaryDark: 'var(--color-dark-primary_dark)',
  primaryXDark: 'var(--color-dark-primary_xtra_dark)',
  accent: 'var(--color-dark-accent)',
  accentDark: 'var(--color-dark-accent_dark)',
  accentXDark: 'var(--color-dark-accent_xtra_dark)',
  danger: 'var(--color-dark-danger)',
  dangerDark: 'var(--color-dark-danger_dark)',
  dangerXDark: 'var(--color-dark-danger_xtra_dark)',
};

const theme = {
  dark: {
    color: darkTheme,
  },
  light: {
    color: lightTheme,
  },
};

export default theme;
