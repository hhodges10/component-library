import styled from 'styled-components';

type TypeOptions = 'checkbox' | 'radio';
type HiddenInputProps = {
  type: TypeOptions;
  className: string;
  checked: boolean;
  disabled: boolean;
  value?: string;
  onChange: (event: any) => void;
};

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const Hidden = styled.input.attrs<{ $type: TypeOptions }>((props) => ({
  type: props.$type,
}))`
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

function HiddenInput({
  type,
  className,
  value,
  checked,
  disabled,
  onChange,
}: HiddenInputProps) {
  return (
    <Hidden
      $type={type}
      className={className}
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    ></Hidden>
  );
}

export default HiddenInput;
