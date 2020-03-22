import * as React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps, useMatch } from '@reach/router';
import styled, { StyledFunction } from 'styled-components';

export interface LinkProps {
  to: string;
}

interface StyledRouterLinkProps {
  active?: boolean;
}

const StyledRouterLink = styled(RouterLink)<StyledRouterLinkProps>`
  color: ${props => props.active ? props.theme.colorPalette.textPrimary : props.theme.colorPalette.textSecondary};
  text-transform: uppercase;
  padding: ${props => props.theme.spacing(0, 2)};

  &:hover {
    color: ${props => props.theme.colorPalette.textPrimary};
  }
`;

export const Link: React.FC<LinkProps> = ({ to, children }) => {
  const match = useMatch(to);

  return (
    <StyledRouterLink to={to} active={!!match}>
      {children}
    </StyledRouterLink>
  )
}
