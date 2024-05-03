import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import './../../vars.css';

export type ButtonProps = {
  label: string;
  type: 'solid' | 'outline';
  subtype: 'primary' | 'accent' | 'destructive';
  onClick?: MouseEventHandler;
};

const SolidButton = styled.button<{ $subtype?: string }>`
  background-position: center;
  transition: background 0.8s;
  background-color: ${({ $subtype, theme }) =>
    $subtype === 'primary'
      ? theme.color.primary
      : $subtype === 'accent'
        ? theme.color.accent
        : theme.color.danger};
  color: ${({ theme }) => theme.color.text};
  border: ${({ $subtype, theme }) =>
    $subtype === 'primary'
      ? `2px solid ${theme.color.primary}`
      : $subtype === 'accent'
        ? `2px solid ${theme.color.accent}`
        : `2px solid ${theme.color.danger}`};
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
    background-color: ${({ $subtype, theme }) =>
      $subtype === 'primary'
        ? theme.color.primaryDark
        : $subtype === 'accent'
          ? theme.color.accentDark
          : theme.color.dangerDark};
    border: ${({ $subtype, theme }) =>
      $subtype === 'primary'
        ? `2px solid ${theme.color.primaryDark}`
        : $subtype === 'accent'
          ? `2px solid ${theme.color.accentDark}`
          : `2px solid ${theme.color.dangerDark}`};
    color: ${({ theme }) => theme.color.text};
    background: ${({ $subtype, theme }) =>
      $subtype === 'primary'
        ? `${theme.color.primaryDark} radial-gradient(circle, transparent 1%, ${theme.color.primaryDark} 1%)
      center/15000%`
        : $subtype === 'accent'
          ? `${theme.color.accentDark} radial-gradient(circle, transparent 1%, ${theme.color.accentDark} 1%)
      center/15000%`
          : `${theme.color.dangerDark} radial-gradient(circle, transparent 1%, ${theme.color.dangerDark} 1%)
      center/15000%`};
  }

  &:focus-visible {
    outline: ${({ theme }) => `2px solid ${theme.color.accentFocusColor}`};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${({ $subtype, theme }) =>
      $subtype === 'primary'
        ? theme.color.primaryXDark
        : $subtype === 'accent'
          ? theme.color.accentXDark
          : theme.color.dangerXDark};
    background-size: 100%;
    transition: background 0s;
  }
`;

const OutlineButton = styled(SolidButton)<{ $subtype?: string }>`
  background-color: transparent;
  color: ${({ $subtype, theme }) =>
    $subtype === 'primary'
      ? theme.color.primary
      : $subtype === 'accent'
        ? theme.color.accent
        : theme.color.danger};
  border: ${({ $subtype, theme }) =>
    $subtype === 'primary'
      ? `2px solid ${theme.color.primary}`
      : $subtype === 'accent'
        ? `2px solid ${theme.color.accent}`
        : `2px solid ${theme.color.danger}`};

  &:hover {
    color: ${({ theme }) => theme.color.text};
    background-color: ${({ $subtype, theme }) =>
      $subtype === 'primary'
        ? theme.color.primary
        : $subtype === 'accent'
          ? theme.color.accent
          : theme.color.danger};
    border: ${({ $subtype, theme }) =>
      $subtype === 'primary'
        ? `2px solid ${theme.color.primary}`
        : $subtype === 'accent'
          ? `2px solid ${theme.color.accent}`
          : `2px solid ${theme.color.danger}`};
    background: ${({ $subtype, theme }) =>
      $subtype === 'primary'
        ? `${theme.color.primary} radial-gradient(circle, transparent 1%, ${theme.color.primary} 1%)
      center/15000%`
        : $subtype === 'accent'
          ? `${theme.color.accent} radial-gradient(circle, transparent 1%, ${theme.color.accent} 1%)
      center/15000%`
          : `${theme.color.danger} radial-gradient(circle, transparent 1%, ${theme.color.danger} 1%)
      center/15000%`};
  }

  &:focus-visible {
    outline: ${({ theme }) => `2px solid ${theme.color.accentFocusColor}`};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${({ $subtype, theme }) =>
      $subtype === 'primary'
        ? theme.color.primaryDark
        : $subtype === 'accent'
          ? theme.color.accentDark
          : theme.color.dangerDark};
    background-size: 100%;
    transition: background 0s;
  }
`;

function Button({ type, subtype, label, onClick }: ButtonProps) {
  switch (type) {
    case 'solid':
      return (
        <SolidButton onClick={onClick} $subtype={subtype}>
          {label}
        </SolidButton>
      );
    case 'outline':
      return (
        <OutlineButton onClick={onClick} $subtype={subtype}>
          {label}
        </OutlineButton>
      );
  }
}

export default Button;
