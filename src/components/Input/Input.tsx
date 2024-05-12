import { ComponentPropsWithRef } from 'react';
import styled, { css } from 'styled-components';

type InputProps = ComponentPropsWithRef<'input'> & {
  inputLabel: string;
  type?: 'underline' | 'outline';
  subtype?: 'primary' | 'accent';
  inputSize?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
};

const InputWrapper = styled.div<{ $disabled: boolean }>`
  position: relative;
  width: 100%;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`;

const UnderlineInput = styled.input<{ $subtype: string }>`
  ${({ theme: { typography, color, border }, $subtype, disabled }) => css`
    width: 100%;
    height: 48px;
    font-size: ${typography.sizeMedium};
    border: none;
    border-bottom: ${$subtype === 'primary'
      ? `4px solid ${color.primaryLight}`
      : `4px solid ${color.accentLight}`};
    border-radius: ${border.radiusSmall};
    padding: 6px 12px 0;
    margin-top: 12px;
    outline: none;
    color: ${color.text};
    background-color: ${color.backgroundVar};

    &:focus {
      outline: ${`1px solid ${color.primaryFocus}`};
      outline-offset: 2px;
    }

    &:hover {
      cursor: ${disabled ? 'not-allowed' : 'text'};
    }
  `}
`;

const LabelSpan = styled.span<{ $disabled: boolean }>`
  ${({ theme: { typography, color }, $disabled }) => css`
    position: absolute;
    top: 30px;
    left: 10px;
    color: ${color.text};
    font-size: ${typography.sizeMedium};
    opacity: 0.85;
    transition: 0.2s ease all;

    &:hover {
      cursor: ${$disabled ? 'not-allowed' : 'text'};
    }

    ${UnderlineInput}:is(:focus, :not(:placeholder-shown)) ~ & {
      top: -20px;
      opacity: 1;
      font-size: 1.1rem;
    }
  `}
`;

const OutlineInput = styled(UnderlineInput)`
  border: ${({ $subtype, theme }) =>
    $subtype === 'primary'
      ? `1px solid ${theme.color.primaryLight}`
      : `1px solid ${theme.color.accentLight}`};
  border-bottom: ${({ $subtype, theme }) =>
    $subtype === 'primary'
      ? `4px solid ${theme.color.primaryLight}`
      : `4px solid ${theme.color.accentLight}`};
  + ${LabelSpan} {
    top: 31px;
  }
`;

function Input({
  type = 'underline',
  subtype = 'primary',
  inputSize = 'md',
  disabled = false,
  inputLabel,
  ...props
}: InputProps) {
  return (
    <InputWrapper $disabled={disabled}>
      <label>
        {type === 'underline' ? (
          <UnderlineInput
            $subtype={subtype}
            placeholder=" "
            disabled={disabled}
            {...props}
          ></UnderlineInput>
        ) : (
          <OutlineInput
            $subtype={subtype}
            placeholder=" "
            disabled={disabled}
            {...props}
          ></OutlineInput>
        )}
        <LabelSpan $disabled={disabled}>{inputLabel}</LabelSpan>
      </label>
    </InputWrapper>
  );
}

export default Input;
