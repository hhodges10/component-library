import React from 'react';
import './App.css';
import Button, { ButtonProps } from './components/Button';
import { ThemeProvider } from 'styled-components';
import theme from './themes/themes';

function App() {
  const [systemColorScheme, setSystemColorScheme] = React.useState(
    window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches
      ? 'dark'
      : 'light'
  );

  const updateColorScheme = () => {
    setSystemColorScheme(
      window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches
        ? 'dark'
        : 'light'
    );
  };

  if (window.matchMedia) {
    var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQuery.addEventListener('change', updateColorScheme);
  }

  const buttonProps: ButtonProps = {
    label: 'Button',
    type: 'solid',
    subtype: 'primary',
    onClick: (event) => console.log(event),
  };
  const outlineButton: ButtonProps = { ...buttonProps, type: 'outline' };
  const currentTheme =
    systemColorScheme === 'dark' ? { ...theme.dark } : { ...theme.light };

  return (
    <ThemeProvider theme={currentTheme}>
      <h1>
        Testing out storybook for creating component library and testing github
        branch rule
      </h1>
      <Button {...buttonProps}></Button>
      <div style={{ margin: '10px' }}></div>
      <Button {...outlineButton}></Button>
    </ThemeProvider>
  );
}

export default App;
