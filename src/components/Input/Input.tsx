import { ComponentPropsWithRef } from 'react';
import styled, { css } from 'styled-components';

type InputProps = ComponentPropsWithRef<'input'> & {
  inputLabel: string;
  type?: 'underline' | 'outline';
  subtype?: 'primary' | 'accent';
  inputSize?: 'sm' | 'md' | 'lg' | 'xl';
};

const InputWrapper = styled.div`
  position: relative;
  width: 480px;
`;

const UnderlineInput = styled.input<{ $subtype: string }>`
  ${({ theme: { typography, color, border }, $subtype }) => css`
    height: 48px;
    width: 480px;
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
      outline: ${`2px solid ${color.primaryFocus}`};
      outline-offset: 2px;
    }
  `}
`;

const Label = styled.label<{ $subtype: string }>`
  ${({ theme: { typography, color } }) => css`
    position: absolute;
    top: 30px;
    left: 10px;
    color: ${color.text};
    font-size: ${typography.sizeMedium};
    opacity: 0.85;
    transition: 0.2s ease all;

    &:hover {
      cursor: text;
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
      ? `4px solid ${theme.color.primaryLight}`
      : `4px solid ${theme.color.accentLight}`};
  + ${Label} {
    top: 32px;
  }
`;

function Input({
  type = 'underline',
  subtype = 'primary',
  inputSize = 'md',
  inputLabel,
  ...props
}: InputProps) {
  return (
    <InputWrapper>
      {type === 'underline' ? (
        <UnderlineInput
          id="input"
          $subtype={subtype}
          placeholder=" "
          {...props}
        ></UnderlineInput>
      ) : (
        <OutlineInput
          id="input"
          $subtype={subtype}
          placeholder=" "
          {...props}
        ></OutlineInput>
      )}
      <Label id="label" htmlFor="input" $subtype={subtype}>
        {inputLabel}
      </Label>
    </InputWrapper>
  );
}

export default Input;
