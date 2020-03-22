import * as React from 'react';
import { TypographyStyle } from 'theming/typography';
import styled from 'styled-components';

export interface TypographyProps {
  variant: TypographyStyle;
};

const StyledTypography = styled.div<TypographyProps>`
  color: ${props => props.theme.typography[props.variant].color};
  font-family: ${props => props.theme.typography[props.variant].fontFamily};
  font-size: ${props => props.theme.typography[props.variant].fontSize};
  font-style: ${props => props.theme.typography[props.variant].fontStyle};
  font-weight: ${props => props.theme.typography[props.variant].fontWeight};
`

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children
}) => {

  return (
    <StyledTypography variant={variant}>
      {children}
    </StyledTypography>
  )
}
