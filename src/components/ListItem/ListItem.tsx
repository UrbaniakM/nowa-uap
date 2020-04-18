import * as React from 'react';
import { Typography } from 'components/';

export interface ListItemProps {
  className?: string;
}

export const ListItem: React.FC<ListItemProps> = ({ children, className }) => {
  return (
    <Typography component='li' variant='body' className={className}>
      {children}
    </Typography>
  )
}