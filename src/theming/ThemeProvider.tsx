import * as React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { theme } from './theme';

const ThemeProvider: React.FC = ({ children }) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  )
}

const MemoizedThemeProvider = React.memo(ThemeProvider);

export { MemoizedThemeProvider as ThemeProvider };
