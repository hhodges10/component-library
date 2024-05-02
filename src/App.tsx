import React from 'react';
import './App.css';
import Button, { ButtonProps } from './components/Button';

function App() {
  const [isDarkScheme, setIsDarkScheme] = React.useState(false);

  const updateColorScheme = () => {
    setIsDarkScheme(
      window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ?? false
    );
  };

  if (window.matchMedia) {
    var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQuery.addEventListener('change', updateColorScheme);
  }

  const buttonProps: ButtonProps = {
    label: 'Button',
    primary: true,
    colorTheme: isDarkScheme ? 'dark' : 'light',
    onClick: (event) => console.log(event),
  };
  const outlineButton: ButtonProps = { ...buttonProps, primary: false };
  
  return (
    <>
      <h1>
        Testing out storybook for creating component library and testing github
        branch rule
      </h1>
      <Button {...buttonProps}></Button>
      <div style={{ margin: '10px' }}></div>
      <Button {...outlineButton}></Button>
    </>
  );
}

export default App;
