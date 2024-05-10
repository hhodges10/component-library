import { ComponentPropsWithRef } from 'react';
import styled, { css } from 'styled-components';

export type TextAreaProps = ComponentPropsWithRef<'textarea'> & {};

const StyledTextArea = styled.textarea`
  ${({ theme: { typography, color, border } }) => css`
    width: 100%;
    height: 6rem;
    font-family: ${typography.fontFamily};
    font-size: ${typography.sizeSmedium};
    color: ${color.text};
    background-color: ${color.backgroundVar};
    padding: 0.5rem;
    border: 4px solid ${color.primaryLight};
    border-radius: ${border.radiusSmall};
    resize: none;
  `}
`;

function TextArea(props: TextAreaProps) {
  return <StyledTextArea {...props}></StyledTextArea>;
}

export default TextArea;
