import React from 'react';
import Layout from './src/Layout';
import { ThemeProvider } from './src/theming/ThemeProvider';

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      <Layout>
        {element}
      </Layout>
    </ThemeProvider>
  );
}
