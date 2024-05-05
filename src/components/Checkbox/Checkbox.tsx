import styled, { css } from 'styled-components';

export type CheckboxProps = {
  checked: boolean;
  label: string;
  props?: any[];
  className?: string;
  disabled?: boolean;
  onChange: (event: any) => void;
};

const Icon = styled.svg`
  ${({ theme: { color } }) => css`
    fill: ${color.light};
    width: 15px;
    height: 15px;
  `}
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
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

const StyledCheckbox = styled.div<{ $checked: boolean; $disabled: boolean }>`
  ${({ theme: { color }, $checked, $disabled }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    background-color: ${$disabled
      ? color.focusColor
      : $checked
        ? color.accentXDark
        : color.accent};
    transition: all 150ms;

    ${HiddenCheckbox}:focus + & {
      outline: ${`2px solid ${color.accentFocusColor}`};
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
  ${({ theme: { font, color }, $disabled }) => css`
    color: ${color.text};
    font-size: ${font.md};
    margin-left: 8px;
    opacity: ${$disabled ? 0.6 : 1};

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
  onChange,
  ...props
}: CheckboxProps) {
  return (
    <div className={className}>
      <Label>
        <CheckboxWrapper $disabled={disabled}>
          <HiddenCheckbox
            id="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            {...props}
          ></HiddenCheckbox>
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
