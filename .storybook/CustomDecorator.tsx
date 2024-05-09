import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeProvider } from 'styled-components';
import theme from './../src/themes/themes';

function ThemeWrapper(props: any) {
  return (
    <ThemeProvider theme={useDarkMode() ? theme.dark : theme.light}>
      {props.children}
    </ThemeProvider>
  );
}

export const decorators = [
  (renderStory: () => any) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
];
