import * as React from 'react';
import { Typography, TypographyProps } from 'components/Typography';
import styled from 'styled-components';

const StyledPageTitle = styled(Typography)`
  margin-bottom: ${props => props.theme.spacing(4)};
`

export type PageTitleProps = Omit<TypographyProps, 'variant'>;

export const PageTitle: React.FC<PageTitleProps> = ({ children, className }) => {
  return (
    <StyledPageTitle variant='header1' className={className}>
      {children}
    </StyledPageTitle>
  )
}