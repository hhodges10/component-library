import { ComponentPropsWithRef } from 'react';
import styled, { css } from 'styled-components';

export type LinkProps = ComponentPropsWithRef<'a'> & {
  href: string;
  target?: 'blank' | 'self' | 'parent' | 'top';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
};

const StyledLink = styled.a`
  ${({ theme: { color } }) => css`
    text-decoration: underline;
    text-decoration-color: ${color.accentLight};
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
    color: ${color.primaryLight};
    display: inline-flex;
    align-items: center;

    &:focus {
      outline: ${`1px solid ${color.primaryFocus}`};
      outline-offset: 2px;
    }

    &:visited {
      color: ${color.primary};
    }
  `}
`;

const StyledSpan = styled.span`
  ${({ theme: { color } }) => css`
    position: relative;

    &::before {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${color.accentDark};
      transform: scaleX(0);
      transition: transform 0.5s ease;
      transform-origin: bottom right;
    }

    &:hover,
    &:focus {
      &::before {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  `}
`;

function Link({
  href,
  children,
  target = 'self',
  icon,
  iconPosition,
  ...props
}: LinkProps) {
  return (
    <StyledLink href={href} target={`_${target}`} {...props}>
      {iconPosition === 'left' && icon}
      <StyledSpan>{children}</StyledSpan>
      {iconPosition === 'right' && icon}
    </StyledLink>
  );
}

export default Link;
