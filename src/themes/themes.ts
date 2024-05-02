import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.color.background};
  }
`;

export const lightTheme = {
  color: {
    background: 'var(--color-light)',
  },
};

export const darkTheme = {
  color: {
    background: 'var(--color-dark)',
  },
};
