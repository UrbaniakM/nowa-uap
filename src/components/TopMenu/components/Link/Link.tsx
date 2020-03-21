import * as React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from '@reach/router';

export interface LinkProps {
  to: string;
}

export const Link: React.FC<LinkProps> = ({ to, children }) => {
  return (
    <RouterLink to={to}>
      {children}
    </RouterLink>
  )
}
