import { TypographyTheme } from './types';

const SOURCE_SANS_PRO_FONT = 'Source Sans Pro';

export const typographyTheme: TypographyTheme = {
  header1: {
    fontFamily: SOURCE_SANS_PRO_FONT,
    fontSize: 34,
    fontWeight: 300,
  },
  header2: {
    fontFamily: SOURCE_SANS_PRO_FONT,
    fontSize: 24,
    fontWeight: 400
  },
  header3: {
    fontFamily: SOURCE_SANS_PRO_FONT,
    fontSize: 20,
    fontWeight: 600
  },
  subtitle: {
    fontFamily: SOURCE_SANS_PRO_FONT,
    fontSize: 16,
    fontWeight: 400
  },
  body: {
    fontFamily: SOURCE_SANS_PRO_FONT,
    fontSize: 16,
    fontWeight: 400
  },
  caption: {
    fontFamily: SOURCE_SANS_PRO_FONT,
    fontSize: 12,
    fontWeight: 600,
    fontStyle: 'italic'
  },
  quote: {
    fontFamily: SOURCE_SANS_PRO_FONT,
    fontSize: 16,
    fontWeight: 400,
    fontStyle: 'italic'
  },
  button: {
    fontFamily: SOURCE_SANS_PRO_FONT,
    fontSize: 14,
    fontWeight: 700
  }
}
