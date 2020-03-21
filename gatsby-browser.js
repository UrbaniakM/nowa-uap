import React from 'react';
import Layout from './src/Layout';

export const wrapRootElement = ({ element }) => {
  return (
    <Layout>
      {element}
    </Layout>
  );
}
