import { CSSProperties } from "react";

// https://atlassian.design/guidelines/product/foundations/typography
export type TypographyStyle = 'h800' | 'h700' | 'h600' | 'h500' | 'h400' | 'h300' | 'h200' | 'h100' | 'body' | 'button';

export interface FontStyle {
  fontFamily: CSSProperties['fontFamily'];
  fontSize: number;
  fontWeight: CSSProperties['fontWeight'];
  fontStyle: CSSProperties['fontStyle'];
  color: CSSProperties['color'];
  letterSpacing?: CSSProperties['letterSpacing'];
  lineHeight?: CSSProperties['lineHeight'];
  textTransform?: CSSProperties['textTransform'];
}

export type TypographyTheme = Record<TypographyStyle, FontStyle>;
