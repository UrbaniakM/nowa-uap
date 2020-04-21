import * as React from 'react';
import { Typography } from 'components/';

export const MenuText: React.FC = ({ children }) => {
  return (
    <Typography variant='header3' color='whitePrimary'>
      {children}
    </Typography>
  )
}