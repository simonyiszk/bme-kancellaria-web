export default {
  space: {
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    8: 32,
  },
  fonts: {
    body: "'Inter', system-ui, sans-serif",
    heading: "'Oswald', system-ui, sans-serif",
  },
  fontSizes: {
    sm: '0.8rem', //  1.25 ** -1
    base: '1rem', //  1.25 **  0
    lg: '1.5rem', //  1.25 ** +2
    xl: '2rem', //    1.25 ** +3
    '2xl': '3rem', // 1.25 ** +5
  },
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 600,
  },
  lineHeights: {
    body: 1.625,
  },
  colors: {
    text: '#373a36', // PANTONE 447 C
    background: 'white',
    primary: '#a6192e', // PANTONE 187 C
    // TODO: muted: '#97999b', // PANTONE Cool Gray 7 C
    modes: {
      dark: {
        text: '#dbdcdb', // PANTONE Cool Gray 1 XGC
        background: '#24282b', // PANTONE 426 XGC
      },
    },
  },
  text: {
    heading: {
      letterSpacing: '0.05em',
      marginBottom: '0.8125em', // TODO
    },
  },
  links: {
    nav: {
      fontWeight: 'heading',
    },
  },
  styles: {
    root: {
      // TODO: Remove baseline visualization
      backgroundImage: 'linear-gradient(#eee 1px, transparent 1px)',
      backgroundSize: '100% 13px',
      backgroundPosition: 'bottom 12px left',
      padding: '1rem',

      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      p: { marginBottom: '1.219rem !important' }, // 3 * 6.5px = 19.5px (75%)
      // TODO: Convert marginBottoms to `em`
      h1: {
        fontSize: '2xl',
        lineHeight: 1.083, // 8 * 6.5px = 52px
        marginBottom: '0.8125em !important',
      },
      h2: {
        fontSize: 'xl',
        lineHeight: 1.219, // 6 * 6.5px = 39px
        marginBottom: '0.8125em !important',
        paddingTop: '0.40625em',
      },
      h3: {
        fontSize: 'lg',
        lineHeight: 1.354, // 5 * 6.5px = 32.5px
        marginBottom: '0.8125em !important',
        paddingTop: '0.271em',
      },
    },
    a: { color: 'primary' },
  },
};
