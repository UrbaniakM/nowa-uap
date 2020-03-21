import { CSSProperties } from "react";

export interface ColorPalette {
  primary: CSSProperties['color'];
  secondary: CSSProperties['color'];
  textPrimary: CSSProperties['color'];
  textSecondary: CSSProperties['color'];
  error: CSSProperties['color'];
  warning: CSSProperties['color'];
  info: CSSProperties['color'];
}
