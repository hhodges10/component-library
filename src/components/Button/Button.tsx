import { MouseEventHandler } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './../../vars.css';

type ButtonProps = {
  label: string;
  primary: boolean;
  destructive?: boolean;
  handler: MouseEventHandler;
};

type ButtonTheme = {
  mainColor: string;
  accentColor: string;
  darkAccentColor: string;
  focusColor: string;
};

const StyledButton = styled.button<{ $primary?: boolean }>`
  background-color: ${(props) =>
    props.$primary ? props.theme.mainColor : 'white'};
  color: ${(props) => (props.$primary ? 'white' : props.theme.mainColor)};
  border: 2px solid ${(props) => props.theme.mainColor};
  font-family: 'Rubik', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  outline: none;
  border-radius: 5px;
  padding: 10px 20px;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.$primary ? props.theme.accentColor : props.theme.mainColor};
    border: ${(props) =>
      props.$primary
        ? `2px solid ${props.theme.accentColor}`
        : `2px solid ${props.theme.mainColor}`};
    color: white;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.focusColor};
  }

  &:active {
    background-color: ${(props) =>
      props.$primary ? props.theme.darkAccentColor : props.theme.accentColor};
    border: ${(props) =>
      props.$primary
        ? `2px solid ${props.theme.darkAccentColor}`
        : `2px solid ${props.theme.accentColor}`};
  }
`;

const destructiveTheme: ButtonTheme = {
  mainColor: 'var(--color-danger)',
  accentColor: 'var(--color-danger_dark)',
  darkAccentColor: '#580c0c',
  focusColor: 'rgba(193, 30, 30, 0.4)',
};

const primaryTheme: ButtonTheme = {
  mainColor: 'var(--color-primary)',
  accentColor: 'var(--color-primary_dark)',
  darkAccentColor: '#173533',
  focusColor: 'rgba(53, 124, 121, 0.4)',
};

function Button({ label, primary, destructive, handler }: ButtonProps) {
  return (
    <ThemeProvider theme={destructive ? destructiveTheme : primaryTheme}>
      <StyledButton onClick={handler} $primary={primary}>
        {label}
      </StyledButton>
    </ThemeProvider>
  );
}

export default Button;
