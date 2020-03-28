import { CSSProperties } from "react";

// https://atlassian.design/guidelines/product/foundations/typography
export type TypographyStyle = 'header1' | 'header2' | 'header3' | 'subtitle' | 'body' | 'caption' | 'quote' | 'button';

export interface FontStyle {
  fontFamily: CSSProperties['fontFamily'];
  fontSize: number;
  fontWeight: CSSProperties['fontWeight'];
  fontStyle?: CSSProperties['fontStyle'];
  letterSpacing?: CSSProperties['letterSpacing'];
  lineHeight?: CSSProperties['lineHeight'];
  textTransform?: CSSProperties['textTransform'];
}

export type TypographyTheme = Record<TypographyStyle, FontStyle>;
