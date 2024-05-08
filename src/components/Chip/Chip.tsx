import React from 'react';
import styled, { css } from 'styled-components';

type ChipProps = {
  label: string;
  type: 'default' | 'outline' | 'primary';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  clickable?: boolean;
  onClick?: (event: any) => void;
};

const baseStyles = css<{ $type: ChipProps['type'] }>`
  ${({ theme: { font, color }, $type }) => css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 4px 14px;
    border-radius: 50px;
    background-color: ${$type === 'default'
      ? color.backgroundVar
      : $type === 'primary'
        ? color.primary
        : 'transparent'};
    border: ${$type === 'primary'
      ? `2px solid ${color.primary}`
      : `2px solid ${color.backgroundVar}`};
    color: ${$type === 'primary' ? color.background : color.text};
    font-size: ${font.sm};
    font-weight: ${font.light};
  `}
`;

const ButtonChip = styled.button<{
  $type: ChipProps['type'];
}>`
  ${baseStyles};
  ${({ theme: { color }, $type }) => css`
    &:focus {
      outline: ${`2px solid ${color.accentFocusColor}`};
      outline-offset: 2px;
    }

    &:hover {
      cursor: pointer;
    }

    &:active {
      background-color: ${$type === 'primary'
        ? color.primaryDark
        : $type === 'outline'
          ? color.backgroundVar
          : 'transparent'};
      border: ${$type === 'primary'
        ? `2px solid ${color.primaryDark}`
        : `2px solid ${color.backgroundVar}`};
    }
  `};
`;

const StyledChip = styled.div<{
  $type: ChipProps['type'];
}>`
  ${baseStyles};
  &:hover {
    cursor: default;
  }
`;

function Chip({
  label,
  type,
  icon,
  iconPosition,
  clickable = false,
  onClick,
}: ChipProps) {
  return (
    <>
      {clickable ? (
        <ButtonChip $type={type} onClick={onClick}>
          {iconPosition === 'left' && icon}
          {label}
          {iconPosition === 'right' && icon}
        </ButtonChip>
      ) : (
        <StyledChip $type={type}>
          {iconPosition === 'left' && icon}
          {label}
          {iconPosition === 'right' && icon}
        </StyledChip>
      )}
    </>
  );
}

export default Chip;
