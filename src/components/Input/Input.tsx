import styled, { css } from 'styled-components';

type InputProps = {
  type?: 'underline' | 'outline';
  subtype?: 'primary' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  required?: boolean;
};

const InputWrapper = styled.div`
  position: relative;
  width: 480px;
`;

const UnderlineInput = styled.input<{ $subtype: string }>`
  ${({ theme: { font, color }, $subtype }) => css`
    height: 48px;
    width: 480px;
    font-size: ${font.md};
    border: none;
    border-bottom: ${$subtype === 'primary'
      ? `4px solid ${color.primary}`
      : `4px solid ${color.accent}`};
    border-radius: 3px;
    padding: 6px 12px 0;
    margin-top: 12px;
    outline: none;
    color: ${color.text};
    background-color: ${color.backgroundVar};

    &:focus {
      outline: ${`2px solid ${color.accentFocusColor}`};
      outline-offset: 2px;
    }
  `}
`;

const Label = styled.label<{ $subtype: string }>`
  ${({ theme: { color } }) => css`
    position: absolute;
    top: 30px;
    left: 10px;
    color: ${color.text};
    font-family: 'Rubik', sans-serif;
    font-size: 1.25rem;
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
      ? `4px solid ${theme.color.primary}`
      : `4px solid ${theme.color.accent}`};
  + ${Label} {
    top: 32px;
  }
`;

function Input({
  type = 'underline',
  subtype = 'primary',
  required = false,
}: InputProps) {
  return (
    <InputWrapper>
      {type === 'underline' ? (
        <UnderlineInput
          id="input"
          $subtype={subtype}
          required={required}
          placeholder=" "
        ></UnderlineInput>
      ) : (
        <OutlineInput
          id="input"
          $subtype={subtype}
          required={required}
          placeholder=" "
        ></OutlineInput>
      )}
      <Label id="label" htmlFor="input" $subtype={subtype}>
        First Name
      </Label>
    </InputWrapper>
  );
}

export default Input;
