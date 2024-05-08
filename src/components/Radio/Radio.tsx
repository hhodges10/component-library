import styled, { css } from 'styled-components';
import HiddenInput from '../utilities/HiddenInput';

export type RadioProps = {
  checked: boolean;
  value: string;
  label?: string;
  disabled?: boolean;
  className?: string;
  props?: any[];
  onChange: (event: any) => void;
};

const Hidden = styled(HiddenInput)``;

const StyledRadio = styled.div<{ $checked: boolean; $disabled: boolean }>`
  ${({ theme: { color }, $checked, $disabled }) => css`
    width: 1.15em;
    height: 1.15em;
    border-radius: 50%;
    border: 0.15em solid ${color.text};
    transition: all 150ms;
    transform: translateY(-0.2em);
    display: grid;
    place-content: center;
    opacity: ${$disabled ? 0.75 : 1};

    &::before {
      content: '';
      width: 0.8em;
      height: 0.8em;
      border-radius: 50%;
      transform: ${$checked ? 'scale(1)' : 'scale(0)'};
      transition: transform 150ms ease-in-out;
      box-shadow: inset 1em 1em ${color.accent};
    }

    &:checked::before {
      transform: scale(1);
    }

    .radio:focus + & {
      outline: ${`2px solid ${color.accentFocusColor}`};
      outline-offset: 2px;
    }

    &:hover {
      cursor: ${$disabled ? 'not-allowed' : 'pointer'};
    }
  `};
`;

const LabelSpan = styled.span<{ $disabled: boolean }>`
  ${({ theme: { font, color }, $disabled }) => css`
    color: ${color.text};
    font-size: ${font.md};
    margin-left: 8px;
    opacity: ${$disabled ? 0.6 : 1};
    user-select: none;

    &:hover {
      cursor: ${$disabled ? 'not-allowed' : 'pointer'};
    }
  `}
`;

const RadioWrapper = styled.div<{ $disabled: boolean }>`
  ${({ $disabled }) => css`
    display: inline-block;
    vertical-align: middle;
    opacity: ${$disabled ? 0.6 : 1};
  `}
`;

function Radio({
  checked,
  value,
  label = 'Radio button label',
  disabled = false,
  className,
  onChange,
  ...props
}: RadioProps) {
  return (
    <label className={className}>
      <RadioWrapper $disabled={disabled}>
        <Hidden
          type="radio"
          className="radio"
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          {...props}
        ></Hidden>
        <StyledRadio $checked={checked} $disabled={disabled}></StyledRadio>
      </RadioWrapper>
      <LabelSpan $disabled={disabled}>{label}</LabelSpan>
    </label>
  );
}

export default Radio;
