/** @jsx jsx */

import 'typeface-open-sans';
import 'typeface-oswald';

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { jsx } from 'theme-ui';

import { Footer } from './Footer';

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): JSX.Element {
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

      <header>{/* TODO */}</header>

      <main>{children}</main>

      <Footer
        sx={{
          variant: 'layout.container',
          bg: 'text',
          color: 'lightgray',
          pb: 12,
        }}
      />
    </React.StrictMode>
  );
}
