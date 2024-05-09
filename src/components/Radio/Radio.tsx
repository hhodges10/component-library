import styled, { css } from 'styled-components';
import HiddenInput from '../../utilities/HiddenInput';
import { ComponentPropsWithRef } from 'react';

export type RadioProps = ComponentPropsWithRef<'input'> & {
  checked: boolean;
  label?: string;
  disabled?: boolean;
};

const Hidden = styled(HiddenInput)``;

const StyledRadio = styled.div<{ $checked: boolean; $disabled: boolean }>`
  ${({ theme: { color }, $checked, $disabled }) => css`
    width: 0.9em;
    height: 0.9em;
    border-radius: 50%;
    border: 0.1em solid ${color.textVar};
    transition: all 150ms;
    transform: translateY(-0.11em);
    display: grid;
    place-content: center;
    opacity: ${$disabled ? 0.75 : 1};

    &::before {
      content: '';
      width: 0.7em;
      height: 0.7em;
      border-radius: 50%;
      transform: ${$checked ? 'scale(1)' : 'scale(0)'};
      transition: transform 150ms ease-in-out;
      box-shadow: inset 1em 1em ${color.accent};
    }

    &:checked::before {
      transform: scale(1);
    }

    .radio:focus + & {
      outline: ${`2px solid ${color.accentFocusColor}`};
      outline-offset: 2px;
    }

    &:hover {
      cursor: ${$disabled ? 'not-allowed' : 'pointer'};
    }
  `};
`;

const LabelSpan = styled.span<{ $disabled: boolean }>`
  ${({ theme: { color }, $disabled }) => css`
    color: ${color.text};
    margin-left: 8px;
    opacity: ${$disabled ? 0.6 : 1};
    user-select: none;

    &:hover {
      cursor: ${$disabled ? 'not-allowed' : 'pointer'};
    }
  `}
`;

const RadioWrapper = styled.div<{ $disabled: boolean }>`
  ${({ $disabled }) => css`
    display: inline-block;
    vertical-align: middle;
    opacity: ${$disabled ? 0.6 : 1};
  `}
`;

const Label = styled.label`
  ${({ theme: { font } }) => css`
    font-size: ${font.md};
  `}
`;

function Radio({
  checked,
  label = 'Radio button label',
  disabled = false,
  className,
  ...props
}: RadioProps) {
  return (
    <Label className={className}>
      <RadioWrapper $disabled={disabled}>
        <Hidden
          type="radio"
          className="radio"
          checked={checked}
          disabled={disabled}
          {...props}
        ></Hidden>
        <StyledRadio $checked={checked} $disabled={disabled}></StyledRadio>
      </RadioWrapper>
      <LabelSpan $disabled={disabled}>{label}</LabelSpan>
    </Label>
  );
}

export default Radio;
