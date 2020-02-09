module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'BME Kancellária',
        description:
          'A Budapesti Műszaki és Gazdaságtudományi Egyetem Kancelláriájának hivatalos weboldala.',
        categories: ['education', 'finance', 'news'],
        display: 'minimal-ui',
        theme_color: '#a6192e',
        background_color: 'white',
        icon: 'src/assets/favicon.png',
        lang: 'hu-HU',
        start_url: '/',
      },
    },
    'gatsby-plugin-preact',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve('./src/layouts/index.tsx'),
        injectPageProps: false,
      },
    },
    'gatsby-plugin-typescript',
    // TODO: 'gatsby-theme-style-guide',
  ],
};
