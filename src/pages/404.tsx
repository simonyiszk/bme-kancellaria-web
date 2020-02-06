import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';

export default function NotFoundPage(): JSX.Element {
  return (
    <Layout>
      <Helmet>
        <title>Nem található</title>
      </Helmet>

      <h1>Nem található</h1>
      <p>A keresett oldal nem található.</p>
    </Layout>
  );
}
