import styled from 'styled-components';

type InputProps = {
  type?: 'underline' | 'outline';
  subtype?: 'primary' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  required?: boolean;
};

const UnderlineInput = styled.input<{ $subtype: string }>`
  height: 48px;
  width: 480px;
  font-size: ${({ theme }) => theme.font.md};
  border: none;
  border-bottom: ${({ $subtype, theme }) =>
    $subtype === 'primary'
      ? `4px solid ${theme.color.primary}`
      : `4px solid ${theme.color.accent}`};
  border-radius: 3px;
  padding: 6px 12px 0;
  margin-top: 12px;
  outline: none;
  color: ${({ theme }) => theme.color.opposite};
  background-color: ${({ theme }) => theme.color.backgroundVar};

  &:focus {
    outline: ${({ theme }) => `2px solid ${theme.color.accentFocusColor}`};
    outline-offset: 2px;
  }
`;

const Label = styled.label<{ $subtype: string }>`
  position: absolute;
  top: 30px;
  left: 10px;
  color: ${({ theme }) => theme.color.opposite};
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
`;

const InputWrapper = styled.div`
  position: relative;
  width: 480px;
`;

const OutlineInput = styled(UnderlineInput)`
  border: ${({ $subtype, theme }) =>
    $subtype === 'primary'
      ? `4px solid ${theme.color.primary}`
      : `4px solid ${theme.color.accent}`};
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
