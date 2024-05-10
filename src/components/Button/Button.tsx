import { ComponentPropsWithRef } from 'react';
import styled, { css } from 'styled-components';

export type ButtonProps = ComponentPropsWithRef<'button'> & {
  innerText: string;
  customType: 'solid' | 'outline';
  subtype: 'primary' | 'accent' | 'destructive';
};

const SolidButton = styled.button<{ $subtype?: string }>`
  ${({ theme: { color, border }, $subtype }) => css`
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
      background-color: ${$subtype === 'primary'
        ? color.primary
        : $subtype === 'accent'
          ? color.accent
          : color.danger};
      border: ${$subtype === 'primary'
        ? `2px solid ${color.primary}`
        : $subtype === 'accent'
          ? `2px solid ${color.accent}`
          : `2px solid ${color.danger}`};
      color: ${color.background};
      background: ${$subtype === 'primary'
        ? `${color.primary} radial-gradient(circle, transparent 1%, ${color.primary} 1%)
      center/15000%`
        : $subtype === 'accent'
          ? `${color.accent} radial-gradient(circle, transparent 1%, ${color.accent} 1%)
      center/15000%`
          : `${color.danger} radial-gradient(circle, transparent 1%, ${color.danger} 1%)
      center/15000%`};
    }

    &:focus-visible {
      outline: ${`2px solid ${color.primaryFocus}`};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${$subtype === 'primary'
        ? color.primaryDark
        : $subtype === 'accent'
          ? color.accentDark
          : color.dangerDark};
      background-size: 100%;
      transition: background 0s;
    }
  `}
`;

const OutlineButton = styled(SolidButton)<{ $subtype?: string }>`
  ${({ theme: { color }, $subtype }) => css`
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
      color: ${color.background};
      background-color: ${$subtype === 'primary'
        ? color.primaryLight
        : $subtype === 'accent'
          ? color.accentLight
          : color.dangerLight};
      border: ${$subtype === 'primary'
        ? `2px solid ${color.primaryLight}`
        : $subtype === 'accent'
          ? `2px solid ${color.accentLight}`
          : `2px solid ${color.dangerLight}`};
      background: ${$subtype === 'primary'
        ? `${color.primaryLight} radial-gradient(circle, transparent 1%, ${color.primaryLight} 1%)
      center/15000%`
        : $subtype === 'accent'
          ? `${color.accentLight} radial-gradient(circle, transparent 1%, ${color.accentLight} 1%)
      center/15000%`
          : `${color.dangerLight} radial-gradient(circle, transparent 1%, ${color.dangerLight} 1%)
      center/15000%`};
    }

    &:focus-visible {
      outline: ${`2px solid ${color.primaryFocus}`};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${$subtype === 'primary'
        ? color.primary
        : $subtype === 'accent'
          ? color.accent
          : color.danger};
      background-size: 100%;
      transition: background 0s;
    }
  `}
`;

function Button({ customType, subtype, innerText, ...props }: ButtonProps) {
  switch (customType) {
    case 'solid':
      return (
        <SolidButton $subtype={subtype} {...props}>
          {innerText}
        </SolidButton>
      );
    case 'outline':
      return (
        <OutlineButton $subtype={subtype} {...props}>
          {innerText}
        </OutlineButton>
      );
  }
}

export default Button;
