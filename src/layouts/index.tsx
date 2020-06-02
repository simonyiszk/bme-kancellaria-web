/** @jsx jsx */

import '@openfonts/open-sans_latin-ext';
import '@openfonts/oswald_latin-ext';

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { jsx } from 'theme-ui';

import { Footer } from '../components/footer/Footer';
import { Navbar } from '../components/navbar/NavBar';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  const data = useStaticQuery(graphql`
    {
      sitePlugin(name: { eq: "gatsby-plugin-manifest" }) {
        name
        pluginOptions {
          name
          description
          lang
        }
      }
    }
  `);

  return (
    <React.StrictMode>
      <Helmet
        titleTemplate={`%s - ${data.sitePlugin.pluginOptions.name}`}
        defaultTitle={data.sitePlugin.pluginOptions.name}
      >
        <html lang={data.sitePlugin.pluginOptions.lang} />
        <meta
          name="description"
          content={data.sitePlugin.pluginOptions.description}
        />

        {/* Mobile optimizations */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
      </Helmet>

      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Navbar />

        <main sx={{ flex: 1 }}>{children}</main>

        <Footer
          sx={{
            variant: 'layout.container',
            bg: 'text',
            color: 'lightgray',
            pb: 12,
          }}
        />
      </div>
    </React.StrictMode>
  );
}
