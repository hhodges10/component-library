import { ComponentPropsWithRef } from 'react';
import styled, { css } from 'styled-components';

export type TextAreaProps = ComponentPropsWithRef<'textarea'> & {
  inputLabel: string;
  type?: 'underline' | 'outline';
  subtype?: 'primary' | 'accent';
};

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledTextArea = styled.textarea<{
  $type: TextAreaProps['type'];
  $subtype: TextAreaProps['subtype'];
}>`
  ${({ theme: { typography, color, border }, $type, $subtype }) => css`
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

    &:focus {
      outline: ${`1px solid ${color.primaryFocus}`};
      outline-offset: 2px;
    }
  `}
`;

const LabelSpan = styled.span`
  ${({ theme: { typography, color } }) => css`
    position: absolute;
    top: 10px;
    left: 10px;
    color: ${color.text};
    font-size: ${typography.sizeMedium};
    opacity: 0.85;
    transition: 0.2s ease all;

    &:hover {
      cursor: text;
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
  type = 'outline',
  subtype = 'primary',
  ...props
}: TextAreaProps) {
  return (
    <InputWrapper>
      <label>
        <StyledTextArea
          placeholder=" "
          $type={type}
          $subtype={subtype}
          {...props}
        ></StyledTextArea>
        <LabelSpan>{inputLabel}</LabelSpan>
      </label>
    </InputWrapper>
  );
}

export default TextArea;
