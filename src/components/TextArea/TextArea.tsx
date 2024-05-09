import { ComponentPropsWithRef } from 'react';
import styled, { css } from 'styled-components';

export type TextAreaProps = ComponentPropsWithRef<'textarea'> & {};

const StyledTextArea = styled.textarea`
  ${({ theme: { font, color } }) => css`
    width: 100%;
    height: 6rem;
    font-family: ${font.family};
    font-size: ${font.smd};
    color: ${color.text};
    background-color: ${color.backgroundVar};
    padding: 0.5rem;
    border: 4px solid ${color.primary};
    border-radius: 0.25rem;
    resize: none;
  `}
`;

function TextArea(props: TextAreaProps) {
  return <StyledTextArea {...props}></StyledTextArea>;
}

export default TextArea;
