import styled, { css } from 'styled-components';

export type LinkProps = {
  href: string;
  children: React.ReactNode;
  target?: 'blank' | 'self' | 'parent' | 'top';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
};

const Paragraph = styled.p`
  ${({ theme: { font, color } }) => css`
    color: ${color.opposite};
    font-size: ${font.md};
  `}
`;

const StyledLink = styled.a`
  ${({ theme: { font, color } }) => css`
    text-decoration: underline;
    text-decoration-color: ${color.accent};
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
    font-family: ${font.family};
    color: ${color.primary};
    display: inline-flex;
    align-items: center;

    &:focus {
      outline: ${`2px solid ${color.accentFocusColor}`};
      outline-offset: 2px;
    }

    &:visited {
      color: ${color.primaryDark};
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
      background-color: ${color.accentXDark};
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
}: LinkProps) {
  return (
    <Paragraph>
      Here is some normal text,&nbsp;
      <StyledLink href={href} target={`_${target}`}>
        {iconPosition === 'left' && icon}
        <StyledSpan>{children}</StyledSpan>
        {iconPosition === 'right' && icon}
      </StyledLink>
    </Paragraph>
  );
}

export default Link;
