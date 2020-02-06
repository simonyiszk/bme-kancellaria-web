export default {
  space: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
  },
  fonts: {
    body: "'Open Sans', system-ui, sans-serif",
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
    heading: '0.025em',
  },
  lineHeights: {
    body: 1.625,
  },
  colors: {
    text: '#373a36', // PANTONE 447 C
    background: 'white',
    primary: '#c5003e', // PANTONE 1935 C, TODO: Consider #ce0037 and #c8102e
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
