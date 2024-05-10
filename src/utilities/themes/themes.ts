import * as colors from './colors';
import * as border from './border';
import * as typography from './typography';

const themeDarkColor = {
  background: colors.navy,
  backgroundVar: colors.navyLight,
  text: colors.grey,
  textVar: colors.greyDark,
  primaryLight: colors.tealLight,
  primary: colors.teal,
  primaryDark: colors.tealDark,
  accentLight: colors.purpleLight,
  accent: colors.purple,
  accentDark: colors.purpleDark,
  dangerLight: colors.red2Light,
  danger: colors.red2,
  dangerDark: colors.red2Dark,
  primaryFocus: colors.tealTransparent,
  accentFocus: colors.purpleTransparent,
  navy: colors.navy,
  grey: colors.grey,
  trueWhite: colors.white,
};

const themeLightColor = {
  background: colors.grey,
  backgroundVar: colors.greyDark,
  text: colors.navy,
  textVar: colors.navyLight,
  primaryLight: colors.pinkLight,
  primary: colors.pink,
  primaryDark: colors.pinkDark,
  accentLight: colors.blueLight,
  accent: colors.blue,
  accentDark: colors.blueDark,
  dangerLight: colors.red1Light,
  danger: colors.red1,
  dangerDark: colors.red1Dark,
  primaryFocus: colors.pinkTransparent,
  accentFocus: colors.blueTransparent,
  navy: colors.navy,
  grey: colors.grey,
  trueWhite: colors.white,
};

const theme = (mode: string) => ({
  color: mode === 'dark' ? themeDarkColor : themeLightColor,
  border: { ...border },
  mode: mode,
  typography: { ...typography },
});

export default theme;
