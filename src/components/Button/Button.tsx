import { MouseEventHandler } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './../../vars.css';

export type ButtonProps = {
  label: string;
  primary: boolean;
  theme?: ButtonTheme;
  onClick: MouseEventHandler;
};

export type ButtonTheme = {
  mainColor: string;
  accentColor: string;
  darkAccentColor: string;
  focusColor: string;
};

const StyledButton = styled.button<{ $primary?: boolean }>`
  background-position: center;
  transition: background 0.8s;
  background-color: ${(props) =>
    props.$primary ? props.theme.mainColor : 'transparent'};
  color: ${(props) =>
    props.$primary ? 'var(--color-light)' : props.theme.mainColor};
  border: 2px solid ${(props) => props.theme.mainColor};
  font-family: 'Rubik', sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 20px;
  outline: none;
  border-radius: 5px;
  padding: 16px 24px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.$primary ? props.theme.accentColor : props.theme.mainColor};
    border: ${(props) =>
      props.$primary
        ? `2px solid ${props.theme.accentColor}`
        : `2px solid ${props.theme.mainColor}`};
    color: var(--color-light);
    background: ${(props) =>
      props.$primary
        ? `${props.theme.accentColor} radial-gradient(circle, transparent 1%, ${props.theme.accentColor} 1%)
      center/15000%`
        : `${props.theme.mainColor} radial-gradient(circle, transparent 1%, ${props.theme.mainColor} 1%)
      center/15000%`};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.focusColor};
  }

  &:active {
    background-color: ${(props) =>
      props.$primary ? props.theme.darkAccentColor : props.theme.accentColor};
    background-size: 100%;
    transition: background 0s;
  }

  @media (prefers-color-scheme: dark) {
    color: var(--color-light);
    border: ${(props) =>
      props.$primary
        ? `2px solid ${props.theme.mainColor}`
        : '2px solid var(--color-light)'};

    &:focus {
      box-shadow: 0 0 0 3px rgba(97, 229, 255, 0.835);
    }
  }
`;

const primaryTheme: ButtonTheme = {
  mainColor: 'var(--color-primary)',
  accentColor: 'var(--color-primary_dark)',
  darkAccentColor: 'var(--color-primary_xtra_dark)',
  focusColor: 'rgba(34, 150, 150, 0.4)',
};

function Button({ primary, label, onClick, theme }: ButtonProps) {
  return (
    <ThemeProvider theme={theme || primaryTheme}>
      <StyledButton $primary={primary} onClick={onClick}>
        {label}
      </StyledButton>
    </ThemeProvider>
  );
}

export default Button;
