import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeProvider } from 'styled-components';
import theme from './../src/utilities/themes/themes';

function ThemeWrapper(props: any) {
  const mode = useDarkMode() ? 'dark' : 'light';
  const currentTheme = theme(mode);
  return <ThemeProvider theme={currentTheme}>{props.children}</ThemeProvider>;
}

export const decorators = [
  (renderStory: () => any) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
];
