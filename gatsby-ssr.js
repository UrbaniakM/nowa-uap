import React from 'react'
import { renderToString } from 'react-dom/server'
import { ThemeProvider } from './src/theming/ThemeProvider';

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const ConnectedBody = () => (
    <ThemeProvider>
      {bodyComponent}
    </ThemeProvider>
  );

  replaceBodyHTMLString(renderToString(<ConnectedBody/>))
}