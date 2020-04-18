import * as React from 'react';
import { Link as RouterLink, useMatch } from '@reach/router';
import styled from 'styled-components';
import { Typography } from 'components/Typography';

export interface LinkProps {
  to: string;
  className?: string;
}

interface StyledRouterLinkProps {
  active?: boolean;
  className?: string;
}

const StyledRouterLink = styled(RouterLink)<StyledRouterLinkProps>`
  color: ${props => props.active ? props.theme.colorPalette.textPrimary : props.theme.colorPalette.textSecondary};
  padding: ${props => props.theme.spacing(0, 2)};

  &:hover {
    color: ${props => props.theme.colorPalette.textPrimary};
  }
`;

export const Link: React.FC<LinkProps> = ({ to, className, children }) => {
  const match = useMatch(to);

  return (
    <StyledRouterLink to={to} active={!!match} className={className}>
      <Typography variant='button'>
        {children}
      </Typography>
    </StyledRouterLink>
  )
}
