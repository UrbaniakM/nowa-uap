import { TypographyTheme, typographyTheme } from "./typography";
import { ColorPalette, colorPaletteTheme } from "./colorPalette";
import { Spacing, spacing } from "./spacing";

export interface Theme {
  typography: TypographyTheme;
  colorPalette: ColorPalette;
  spacing: Spacing;
}

export const theme: Theme = {
  typography: typographyTheme,
  colorPalette: colorPaletteTheme,
  spacing
}
