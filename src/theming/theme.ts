import { TypographyTheme, typographyTheme } from "./typography";
import { ColorPalette, colorPaletteTheme } from "./colorPalette";
import { Spacing, spacingFunction } from "./spacing";
import 'styled-components'

export interface Theme {
  typography: TypographyTheme;
  colorPalette: ColorPalette;
  spacing: Spacing;
}

export const theme: Theme = {
  typography: typographyTheme,
  colorPalette: colorPaletteTheme,
  spacing: spacingFunction(8)
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
