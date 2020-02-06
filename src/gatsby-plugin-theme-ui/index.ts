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
  letterSpacings: {
    heading: '0.05em',
  },
  lineHeights: {
    body: 1.625,
  },
  colors: {
    text: '#373a36', // PANTONE 447 C
    background: 'white',
    primary: '#a6192e', // PANTONE 187 C
    // TODO: muted: '#97999b', // PANTONE Cool Gray 7 C
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      letterSpacing: 'heading',
      my: '0.8125em',
    },
  },
  links: {
    nav: {
      fontWeight: 'heading',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: { color: 'primary' },
    h1: {
      variant: 'text.heading',
      fontSize: '2xl',
      lineHeight: 1.083, // 8 * 6.5px = 52px
    },
    h2: {
      variant: 'text.heading',
      fontSize: 'xl',
      lineHeight: 1.219, // 6 * 6.5px = 39px
      pt: '0.40625em', // 2 * 6.5px = 13px
    },
    h3: {
      variant: 'text.heading',
      fontSize: 'lg',
      lineHeight: 1.354, // 5 * 6.5px = 32.5px
      pt: '0.271em', // 6.5px
    },
    p: {
      my: '1.21875em', // 3 * 6.5px = 19.5px (75% of type size)
    },
  },
};
