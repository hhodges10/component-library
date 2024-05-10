import styled, { css } from 'styled-components';
import HiddenInput from '../../utilities/HiddenInput';
import { ComponentPropsWithRef } from 'react';

export type CheckboxProps = ComponentPropsWithRef<'input'> & {
  checked: boolean;
  label: string;
  disabled?: boolean;
};

const Icon = styled.svg`
  ${({ theme: { color } }) => css`
    fill: ${color.grey};
    width: 15px;
    height: 15px;
  `}
`;

const StyledCheckbox = styled.div<{ $checked: boolean; $disabled: boolean }>`
  ${({ theme: { color, border }, $checked, $disabled }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: ${border.radiusSmall};
    background-color: ${$disabled
      ? color.accentFocus
      : $checked
        ? color.accentDark
        : color.accentLight};
    transition: all 150ms;

    .checkbox:focus + & {
      outline: ${`2px solid ${color.primaryFocus}`};
      outline-offset: 2px;
    }

    ${Icon} {
      visibility: ${$checked ? 'visible' : 'hidden'};
    }

    &:hover {
      cursor: ${$disabled ? 'not-allowed' : 'pointer'};
    }
  `}
`;

const Label = styled.label`
  display: inline-flex;
  align-items: center;
`;

const LabelSpan = styled.span<{ $disabled: boolean }>`
  ${({ theme: { typography, color }, $disabled }) => css`
    color: ${color.text};
    font-size: ${typography.sizeMedium};
    margin-left: 8px;
    opacity: ${$disabled ? 0.6 : 1};
    user-select: none;

    &:hover {
      cursor: ${$disabled ? 'not-allowed' : 'pointer'};
    }
  `}
`;

const CheckboxWrapper = styled.div<{ $disabled: boolean }>`
  ${({ $disabled }) => css`
    display: inline-block;
    vertical-align: middle;
    opacity: ${$disabled ? 0.6 : 1};
  `}
`;

function Checkbox({
  checked,
  label = 'Checkbox label',
  disabled = false,
  className,
  ...props
}: CheckboxProps) {
  return (
    <div className={className}>
      <Label>
        <CheckboxWrapper $disabled={disabled}>
          <HiddenInput
            type="checkbox"
            className="checkbox"
            checked={checked}
            disabled={disabled}
            {...props}
          ></HiddenInput>
          <StyledCheckbox $checked={checked} $disabled={disabled}>
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </Icon>
          </StyledCheckbox>
        </CheckboxWrapper>
        <LabelSpan $disabled={disabled}>{label}</LabelSpan>
      </Label>
    </div>
  );
}

export default Checkbox;
