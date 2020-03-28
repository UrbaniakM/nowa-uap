import * as React from 'react';
import { TypographyStyle } from 'theming/typography';
import styled, { CSSProperties } from 'styled-components';

export interface TypographyProps {
  variant: TypographyStyle;
  textAlign?: CSSProperties['textAlign'];
};

const StyledTypography = styled.div<TypographyProps>`
  color: ${props => props.theme.typography[props.variant].color};
  font-family: ${props => props.theme.typography[props.variant].fontFamily};
  font-size: ${props => props.theme.typography[props.variant].fontSize}px;
  font-style: ${props => props.theme.typography[props.variant].fontStyle};
  font-weight: ${props => props.theme.typography[props.variant].fontWeight};
  text-align: ${props => props.textAlign}
`

export const Typography: React.FC<TypographyProps> = ({
  variant,
  textAlign,
  children
}) => {

  return (
    <StyledTypography variant={variant} textAlign={textAlign}>
      {children}
    </StyledTypography>
  )
}
