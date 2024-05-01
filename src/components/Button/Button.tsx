import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import './../../vars.css';

type ButtonProps = {
  label: string;
  primary: boolean;
  destructive?: boolean;
  handler: MouseEventHandler;
};

const StyledButton = styled.button<{ $primary?: boolean }>`
  background-color: ${(props) =>
    props.$primary ? 'var(--color-primary)' : 'white'};
  color: ${(props) => (props.$primary ? 'white' : 'var(--color-primary)')};
  border: 2px solid var(--color-primary);
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
      props.$primary ? 'var(--color-accent)' : 'var(--color-primary)'};
    border: ${(props) =>
      props.$primary
        ? '2px solid var(--color-accent)'
        : '2px solid var(--color-primary)'};
    color: white;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(53, 124, 121, 0.4);
  }

  &:active {
    background-color: ${(props) =>
      props.$primary ? '#173533' : 'var(--color-accent)'};
    border: ${(props) =>
      props.$primary ? '2px solid #173533' : '2px solid var(--color-accent)'};
  }
`;

const DestructiveButton = styled(StyledButton)<{ $primary?: boolean }>`
  background-color: ${(props) =>
    props.$primary ? 'var(--color-danger)' : 'white'};
  color: ${(props) => (props.$primary ? 'white' : 'var(--color-danger)')};
  border: 2px solid var(--color-danger);

  &:hover {
    background-color: ${(props) =>
      props.$primary ? 'var(--color-danger_dark)' : 'var(--color-danger)'};
    border: ${(props) =>
      props.$primary
        ? '2px solid var(--color-danger_dark)'
        : '2px solid var(--color-danger)'};
    color: white;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(193, 30, 30, 0.4);
  }

  &:active {
    background-color: ${(props) =>
      props.$primary ? '#580c0c' : 'var(--color-danger_dark)'};
    border: ${(props) =>
      props.$primary
        ? '2px solid #580c0c'
        : '2px solid var(--color-danger_dark)'};
  }
`;

function Button({ label, primary, destructive, handler }: ButtonProps) {
  return destructive ? (
    <DestructiveButton onClick={handler} $primary={primary}>
      {label}
    </DestructiveButton>
  ) : (
    <StyledButton onClick={handler} $primary={primary}>
      {label}
    </StyledButton>
  );
}

export default Button;
