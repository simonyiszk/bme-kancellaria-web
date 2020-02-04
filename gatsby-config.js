module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'BME Kancellária',
        description:
          'A Budapesti Műszaki és Gazdaságtudományi Egyetem Kancelláriájának hivatalos weboldala.',
        display: 'minimal-ui',
        theme_color: '#a6192e',
        background_color: 'white',
        icon: 'src/assets/favicon.png',
        lang: 'hu-HU',
        start_url: '/',
      },
    },
    'gatsby-plugin-preact',
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-typescript',
    'gatsby-theme-style-guide',
  ],
};
