import { TypographyTheme, typographyTheme } from "./typography";
import { ColorPalette, colorPaletteTheme } from "./colorPalette";

export interface Theme {
  typography: TypographyTheme;
  colorPalette: ColorPalette;
}

export const theme: Theme = {
  typography: typographyTheme,
  colorPalette: colorPaletteTheme
}
