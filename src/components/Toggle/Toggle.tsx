import styled, { css } from 'styled-components';
import HiddenInput from '../../utilities/HiddenInput';
import { ComponentPropsWithRef } from 'react';

export type ToggleProps = ComponentPropsWithRef<'input'> & {
  checked: boolean;
  label: string;
  withIconIndicator?: boolean;
  disabled?: boolean;
  inputSize?: 'sm' | 'md' | 'lg';
  className?: string;
  value?: string;
};

const Icon = styled.svg<{ $size: string }>`
  ${({ theme: { color }, $size }) => css`
    fill: ${color.navy};
    width: ${$size === 'md' ? '15px' : $size === 'sm' ? '10px' : '21px'};
    height: ${$size === 'md' ? '15px' : $size === 'sm' ? '10px' : '21px'};
  `}
`;

const ToggleIndicator = styled.div<{ $checked: boolean; $size: string }>`
  ${({ theme: { color, border }, $checked, $size }) => css`
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    top: 3px;
    left: 3px;
    height: ${$size === 'md' ? '18px' : $size === 'sm' ? '14px' : '24px'};
    width: ${$size === 'md' ? '18px' : $size === 'sm' ? '14px' : '24px'};
    border-radius: ${border.radiusRound};
    background-color: ${color.grey};
    box-shadow: rgba(23, 25, 38, 0.3) 0px 0px 2px 2px;

    ${Icon} {
      animation: ${$checked ? '325ms fadeIn' : 'none'};
      animation-fill-mode: forwards;
      visibility: hidden;
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      30% {
        opacity: 0;
      }
      100% {
        visibility: visible;
        opacity: 1;
      }
    }
  `}
`;

const ToggleBackground = styled.div<{
  $checked: boolean;
  $disabled: boolean;
  $size: string;
}>`
  ${({
    theme: { typography, color, border },
    $disabled,
    $checked,
    $size,
  }) => css`
    position: relative;
    height: ${$size === 'md' ? '24px' : $size === 'sm' ? '20px' : '30px'};
    width: ${$size === 'md' ? '46px' : $size === 'sm' ? '42px' : '60px'};
    border-radius: ${border.radiusRound};
    background-color: ${$checked ? color.accentLight : color.backgroundVar};
    font-family: ${typography.fontFamily};
    opacity: ${$disabled ? 0.8 : 1};

    ${ToggleIndicator} {
      left: ${!$checked ? '3px' : $size !== 'lg' ? '25px' : '33px'};
      transition: left 150ms linear;
    }

    .toggle-checkbox:focus + & {
      outline: ${`1px solid ${color.primaryFocus}`};
      outline-offset: 2px;
    }

    &:hover {
      cursor: ${$disabled ? 'not-allowed' : 'pointer'};
    }
  `}
`;

const ToggleWrapper = styled.div<{ $disabled: boolean }>`
  ${({ $disabled }) => css`
    display: inline-block;
    vertical-align: middle;
    opacity: ${$disabled ? 0.6 : 1};
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

function Toggle({
  checked,
  label = 'Toggle Switch Label',
  disabled = false,
  inputSize: size = 'md',
  withIconIndicator: withIcon = true,
  className,
  ...props
}: ToggleProps) {
  return (
    <div className={className}>
      <Label>
        <ToggleWrapper $disabled={disabled}>
          <HiddenInput
            type="checkbox"
            className="toggle-checkbox"
            checked={checked}
            disabled={disabled}
            {...props}
          ></HiddenInput>
          <ToggleBackground
            $checked={checked}
            $disabled={disabled}
            $size={size}
          >
            <ToggleIndicator $checked={checked} $size={size}>
              {withIcon && (
                <Icon
                  $size={size}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </Icon>
              )}
            </ToggleIndicator>
          </ToggleBackground>
        </ToggleWrapper>
        <LabelSpan $disabled={disabled}>{label}</LabelSpan>
      </Label>
    </div>
  );
}

export default Toggle;
