import { ComponentPropsWithRef } from 'react';
import styled, { css } from 'styled-components';

export type ButtonProps = ComponentPropsWithRef<'button'> & {
  innerText: string;
  customType: 'solid' | 'outline';
  subtype: 'primary' | 'accent' | 'destructive';
  disabled?: boolean;
};

const SolidButton = styled.button<{ $subtype?: string }>`
  ${({ theme: { color, border }, $subtype, disabled }) => css`
    opacity: ${disabled ? 0.5 : 1};
    background-position: center;
    transition: background 0.8s;
    background-color: ${$subtype === 'primary'
      ? color.primaryLight
      : $subtype === 'accent'
        ? color.accentLight
        : color.dangerLight};
    color: ${color.background};
    border: ${$subtype === 'primary'
      ? `2px solid ${color.primaryLight}`
      : $subtype === 'accent'
        ? `2px solid ${color.accentLight}`
        : `2px solid ${color.dangerLight}`};
    font-family: 'Rubik', sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-size: 20px;
    outline: none;
    border-radius: ${border.radiusLarge};
    padding: 16px 24px;
    cursor: pointer;

    &:hover {
      cursor: ${disabled ? 'not-allowed' : 'pointer'};
      background-color: ${!disabled &&
      ($subtype === 'primary'
        ? color.primary
        : $subtype === 'accent'
          ? color.accent
          : color.danger)};
      border: ${!disabled &&
      ($subtype === 'primary'
        ? `2px solid ${color.primary}`
        : $subtype === 'accent'
          ? `2px solid ${color.accent}`
          : `2px solid ${color.danger}`)};
      color: ${!disabled && color.background};
      background: ${!disabled &&
      ($subtype === 'primary'
        ? `${color.primary} radial-gradient(circle, transparent 1%, ${color.primary} 1%)
      center/15000%`
        : $subtype === 'accent'
          ? `${color.accent} radial-gradient(circle, transparent 1%, ${color.accent} 1%)
      center/15000%`
          : `${color.danger} radial-gradient(circle, transparent 1%, ${color.danger} 1%)
      center/15000%`)};
    }

    &:focus-visible {
      outline: ${`1px solid ${color.primaryFocus}`};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${!disabled &&
      ($subtype === 'primary'
        ? color.primaryDark
        : $subtype === 'accent'
          ? color.accentDark
          : color.dangerDark)};
      background-size: 100%;
      transition: background 0s;
    }
  `}
`;

const OutlineButton = styled(SolidButton)<{ $subtype?: string }>`
  ${({ theme: { color }, $subtype, disabled }) => css`
    background-color: transparent;
    color: ${$subtype === 'primary'
      ? color.primaryLight
      : $subtype === 'accent'
        ? color.accentLight
        : color.dangerLight};
    border: ${$subtype === 'primary'
      ? `2px solid ${color.primaryLight}`
      : $subtype === 'accent'
        ? `2px solid ${color.accentLight}`
        : `2px solid ${color.dangerLight}`};

    &:hover {
      cursor: ${disabled ? 'not-allowed' : 'pointer'};
      color: ${!disabled && color.background};
      background-color: ${!disabled &&
      ($subtype === 'primary'
        ? color.primaryLight
        : $subtype === 'accent'
          ? color.accentLight
          : color.dangerLight)};
      border: ${!disabled &&
      ($subtype === 'primary'
        ? `2px solid ${color.primaryLight}`
        : $subtype === 'accent'
          ? `2px solid ${color.accentLight}`
          : `2px solid ${color.dangerLight}`)};
      background: ${!disabled &&
      ($subtype === 'primary'
        ? `${color.primaryLight} radial-gradient(circle, transparent 1%, ${color.primaryLight} 1%)
      center/15000%`
        : $subtype === 'accent'
          ? `${color.accentLight} radial-gradient(circle, transparent 1%, ${color.accentLight} 1%)
      center/15000%`
          : `${color.dangerLight} radial-gradient(circle, transparent 1%, ${color.dangerLight} 1%)
      center/15000%`)};
    }

    &:focus-visible {
      outline: ${`1px solid ${color.primaryFocus}`};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${!disabled &&
      ($subtype === 'primary'
        ? color.primary
        : $subtype === 'accent'
          ? color.accent
          : color.danger)};
      background-size: 100%;
      transition: background 0s;
    }
  `}
`;

function Button({
  customType,
  subtype,
  innerText,
  disabled = false,
  ...props
}: ButtonProps) {
  switch (customType) {
    case 'solid':
      return (
        <SolidButton $subtype={subtype} disabled={disabled} {...props}>
          {innerText}
        </SolidButton>
      );
    case 'outline':
      return (
        <OutlineButton $subtype={subtype} disabled={disabled} {...props}>
          {innerText}
        </OutlineButton>
      );
  }
}

export default Button;
