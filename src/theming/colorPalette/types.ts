import { CSSProperties } from "react";

export interface ColorPalette {
  textPrimary: CSSProperties['color'];
  textSecondary: CSSProperties['color'];
  error: CSSProperties['color'];
  warning: CSSProperties['color'];
  info: CSSProperties['color'];
  whitePrimary: CSSProperties['color'];
  whiteSecondary: CSSProperties['color'];
  divider: CSSProperties['color'];
}
