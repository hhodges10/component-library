import './../vars.css';

const defaultTheme = {
  font: {
    family: 'var(--font-family)',
    sm: 'var(--font-sm)',
    smd: 'var(--font-smd)',
    md: 'var(--font-md)',
    lg: 'var(--font-lg)',
    xl: 'var(--font-xl)',
    bold: 'var(--font-bold)',
    light: 'var(--font-light)',
  },
};

export const lightTheme = {
  dark: '#171926',
  light: '#edf0f5',
  lightVar: 'var(--color-light)',
  background: '#edf0f5',
  backgroundVar: 'var(--color-light-background_variant)',
  text: 'var(--color-dark)',
  textVar: 'var(--color-dark-background_variant)',
  focusColor: 'rgba(71, 131, 215, 0.6)',
  accentFocusColor: 'rgba(215, 29, 91, 0.6)',
  primary: 'var(--color-light-primary)',
  primaryDark: 'var(--color-light-primary_dark)',
  primaryXDark: 'var(--color-light-primary_xtra_dark)',
  accentLight: 'var(--color-light-accent_light)',
  accent: 'var(--color-light-accent)',
  accentDark: 'var(--color-light-accent_dark)',
  accentXDark: 'var(--color-light-accent_xtra_dark)',
  danger: 'var(--color-light-danger)',
  dangerDark: 'var(--color-light-danger_dark)',
  dangerXDark: 'var(--color-light-danger_xtra_dark)',
};

export const darkTheme = {
  dark: '#171926',
  light: '#edf0f5',
  lightVar: 'var(--color-light-background_variant)',
  background: '#171926',
  backgroundVar: 'var(--color-dark-background_variant)',
  text: 'var(--color-light)',
  textVar: 'var(--color-light-background_variant)',
  focusColor: 'rgba(159, 133, 255, 0.9)',
  accentFocusColor: 'rgba(196, 232, 232, 0.8)',
  primary: 'var(--color-dark-primary)',
  primaryDark: 'var(--color-dark-primary_dark)',
  primaryXDark: 'var(--color-dark-primary_xtra_dark)',
  accentLight: 'var(--color-dark-accent_light)',
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
    ...defaultTheme,
  },
  light: {
    color: lightTheme,
    ...defaultTheme,
  },
};

export default theme;
