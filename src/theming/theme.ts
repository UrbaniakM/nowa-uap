import { TypographyTheme, typographyTheme } from "./typography";
import { ColorPalette, colorPaletteTheme } from "./colorPalette";
import { Spacing, spacing } from "./spacing";
import 'styled-components'

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

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
