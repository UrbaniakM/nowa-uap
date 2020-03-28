import * as React from 'react';
import { TypographyStyle } from 'theming/typography';
import styled, { CSSProperties } from 'styled-components';
import { ColorPalette } from 'theming/colorPalette';

export type TypographyColor = keyof ColorPalette;

export interface TypographyProps {
  variant: TypographyStyle;
  textAlign?: CSSProperties['textAlign'];
  color?: TypographyColor;
  className?: string;
};

const StyledTypography = styled.div<TypographyProps>`
  font-family: ${props => props.theme.typography[props.variant].fontFamily};
  font-size: ${props => props.theme.typography[props.variant].fontSize}px;
  font-style: ${props => props.theme.typography[props.variant].fontStyle || 'normal'};
  font-weight: ${props => props.theme.typography[props.variant].fontWeight};
  text-align: ${props => props.textAlign || 'initial'};
  text-transform: ${props => props.theme.typography[props.variant].textTransform || 'none'};
  padding: ${props => props.theme.spacing(0.25, 0)};
  color: ${props => props.color ? props.theme.colorPalette[props.color] : undefined}
`

export const Typography: React.FC<TypographyProps> = ({
  variant,
  textAlign,
  className,
  color,
  children
}) => {

  return (
    <StyledTypography variant={variant} textAlign={textAlign} className={className} color={color}>
      {children}
    </StyledTypography>
  )
}
