import { ComponentPropsWithRef } from 'react';
import styled, { css } from 'styled-components';

export type ButtonProps = ComponentPropsWithRef<'button'> & {
  innerText: string;
  customType: 'solid' | 'outline';
  subtype: 'primary' | 'accent' | 'destructive';
};

const SolidButton = styled.button<{ $subtype?: string }>`
  ${({ theme: { color }, $subtype }) => css`
    background-position: center;
    transition: background 0.8s;
    background-color: ${$subtype === 'primary'
      ? color.primary
      : $subtype === 'accent'
        ? color.accent
        : color.danger};
    color: ${color.background};
    border: ${$subtype === 'primary'
      ? `2px solid ${color.primary}`
      : $subtype === 'accent'
        ? `2px solid ${color.accent}`
        : `2px solid ${color.danger}`};
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
      background-color: ${$subtype === 'primary'
        ? color.primaryDark
        : $subtype === 'accent'
          ? color.accentDark
          : color.dangerDark};
      border: ${$subtype === 'primary'
        ? `2px solid ${color.primaryDark}`
        : $subtype === 'accent'
          ? `2px solid ${color.accentDark}`
          : `2px solid ${color.dangerDark}`};
      color: ${color.background};
      background: ${$subtype === 'primary'
        ? `${color.primaryDark} radial-gradient(circle, transparent 1%, ${color.primaryDark} 1%)
      center/15000%`
        : $subtype === 'accent'
          ? `${color.accentDark} radial-gradient(circle, transparent 1%, ${color.accentDark} 1%)
      center/15000%`
          : `${color.dangerDark} radial-gradient(circle, transparent 1%, ${color.dangerDark} 1%)
      center/15000%`};
    }

    &:focus-visible {
      outline: ${`2px solid ${color.accentFocusColor}`};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${$subtype === 'primary'
        ? color.primaryXDark
        : $subtype === 'accent'
          ? color.accentXDark
          : color.dangerXDark};
      background-size: 100%;
      transition: background 0s;
    }
  `}
`;

const OutlineButton = styled(SolidButton)<{ $subtype?: string }>`
  ${({ theme: { color }, $subtype }) => css`
    background-color: transparent;
    color: ${$subtype === 'primary'
      ? color.primary
      : $subtype === 'accent'
        ? color.accent
        : color.danger};
    border: ${$subtype === 'primary'
      ? `2px solid ${color.primary}`
      : $subtype === 'accent'
        ? `2px solid ${color.accent}`
        : `2px solid ${color.danger}`};

    &:hover {
      color: ${color.background};
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
      outline: ${`2px solid ${color.accentFocusColor}`};
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
