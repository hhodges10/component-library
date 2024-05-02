import './App.css';
import Button, { ButtonProps } from './components/Button';

const buttonProps: ButtonProps = {
  label: 'Button',
  primary: true,
  onClick: (event) => console.log(event),
};

const outlineButton: ButtonProps = { ...buttonProps, primary: false };

function App() {
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
