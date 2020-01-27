module.exports = {
  siteMetadata: {
    title: 'BME Kancellária',
    description:
      'A Budapesti Műszaki és Gazdaságtudományi Egyetem Kancelláriájának hivatalos weboldala.',
    languageCode: 'hu',
    countryCode: 'HU',
  },
  plugins: [
    'gatsby-plugin-chakra-ui',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'BME Kancellária',
        start_url: '/',
        background_color: 'white',
        theme_color: '#a6192e',
        display: 'minimal-ui',
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-preact',
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-typescript',
  ],
};
