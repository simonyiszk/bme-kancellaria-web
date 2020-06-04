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

        <main
          sx={{
            maxWidth: ['100%', '100%', '720px', '960px', '1140px'],
            width: '100%',
            flexShrink: 0,
            flex: '1 0 auto',
            p: 0,
            pl: [
              'calc(0.5rem + env(safe-area-inset-left));',
              'calc(1rem + env(safe-area-inset-left));',
              0,
            ],
            pr: [
              'calc(0.5rem + env(safe-area-inset-right));',
              'calc(1rem + env(safe-area-inset-right));',
              0,
            ],
            m: 0,
            mx: 'auto',
          }}
        >
          {children}
        </main>

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
