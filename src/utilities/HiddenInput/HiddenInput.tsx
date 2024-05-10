import { ComponentPropsWithRef } from 'react';
import styled from 'styled-components';

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const Hidden = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

function HiddenInput({ ...props }: ComponentPropsWithRef<'input'>) {
  return <Hidden {...props} />;
}

export default HiddenInput;
