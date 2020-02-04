import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LayoutProps {
  children: React.ReactNode;
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
      </Helmet>

      <header>{/* TODO */}</header>

      <main>{children}</main>

      <footer>{/* TODO */}</footer>
    </React.StrictMode>
  );
}
