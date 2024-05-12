import { ComponentPropsWithRef } from 'react';
import styled, { css } from 'styled-components';

export type TextAreaProps = ComponentPropsWithRef<'textarea'> & {
  inputLabel: string;
  type?: 'underline' | 'outline';
  subtype?: 'primary' | 'accent';
  disabled?: boolean;
};

const InputWrapper = styled.div<{ $disabled: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`;

const StyledTextArea = styled.textarea<{
  $type: TextAreaProps['type'];
  $subtype: TextAreaProps['subtype'];
}>`
  ${({
    theme: { typography, color, border },
    $type,
    $subtype,
    disabled,
  }) => css`
    width: 100%;
    height: 100%;
    overflow: scroll;
    font-family: ${typography.fontFamily};
    font-size: ${typography.sizeSmedium};
    color: ${color.text};
    background-color: ${color.backgroundVar};
    padding: 0.5rem;
    border: ${$type === 'outline'
      ? $subtype === 'primary'
        ? `1px solid ${color.primaryLight}`
        : `1px solid ${color.accentLight}`
      : undefined};
    border-bottom: ${$subtype === 'primary'
      ? `4px solid ${color.primaryLight}`
      : `4px solid ${color.accentLight}`};
    border-radius: ${border.radiusSmall};
    resize: none;

    &:hover {
      cursor: ${disabled ? 'not-allowed' : 'text'};
    }

    &:focus {
      outline: ${`1px solid ${color.primaryFocus}`};
      outline-offset: 2px;
    }
  `}
`;

const LabelSpan = styled.span<{ $disabled: boolean }>`
  ${({ theme: { typography, color }, $disabled }) => css`
    position: absolute;
    top: 10px;
    left: 10px;
    color: ${color.text};
    font-size: ${typography.sizeMedium};
    opacity: 0.85;
    transition: 0.2s ease all;

    &:hover {
      cursor: ${$disabled ? 'not-allowed' : 'text'};
    }

    ${StyledTextArea}:is(:focus, :not(:placeholder-shown)) ~ & {
      top: -30px;
      opacity: 1;
      font-size: 1.1rem;
    }
  `}
`;

function TextArea({
  inputLabel,
  type = 'underline',
  subtype = 'primary',
  disabled = false,
  ...props
}: TextAreaProps) {
  return (
    <InputWrapper $disabled={disabled}>
      <label>
        <StyledTextArea
          placeholder=" "
          $type={type}
          $subtype={subtype}
          disabled={disabled}
          {...props}
        ></StyledTextArea>
        <LabelSpan $disabled={disabled}>{inputLabel}</LabelSpan>
      </label>
    </InputWrapper>
  );
}

export default TextArea;
