import * as React from 'react';
import { Link as RouterLink } from '@reach/router';
import styled from 'styled-components';

export interface LinkProps {
  to: string;
}

const StyledRouterLink = styled(RouterLink)`
  color: ${props => props.theme.colorPalette.textSecondary};
  text-decoration: none;
  padding: ${props => props.theme.spacing(0, 2)};
`;

export const Link: React.FC<LinkProps> = ({ to, children }) => {
  return (
    <StyledRouterLink to={to}>
      {children}
    </StyledRouterLink>
  )
}
