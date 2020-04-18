import * as React from 'react';
import { Typography } from 'components/';

export const ListItem: React.FC = ({ children }) => {
  return (
    <Typography component='li' variant='body'>
      {children}
    </Typography>
  )
}