export default {
  space: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
  },
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  fonts: {
    body: '"Open Sans", system-ui, sans-serif',
    heading: '"Oswald", system-ui, sans-serif',
  },
  fontSizes: {
    sm: '0.8rem', //  1.25 ** -1
    base: '1rem', //  1.25 **  0
    md: '1.25rem',
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
    wide: '0.025em',
  },
  lineHeights: {
    h1: 1.083, // 8 * 6.5px = 52px
    h2: 1.219, // 6 * 6.5px = 39px
    h3: 1.354, // 5 * 6.5px = 32.5px
    body: 1.625,
  },
  colors: {
    text: '#373a36', // PANTONE 447 C
    background: 'white',
    primary: '#c5003e', // PANTONE 1935 C, TODO: Consider #ce0037 and #c8102e
    secondary: '#5d001d',
    lightgray: '#d9d9d6', // PANTONE Cool Gray 1 C
    darkgray: '#888b8d', // PANTONE Cool Gray 8 C
  },
  layout: {
    container: {
      px: '1rem',
      '&': {
        pl: 'calc(1rem + env(safe-area-inset-left))',
        pr: 'calc(1rem + env(safe-area-inset-right))',
      },
    },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      letterSpacing: 'wide',
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: 'wide',
    },
  },
  links: {
    nav: {
      fontFamily: 'heading',
      fontSize: 'md',
      textDecoration: 'none',
      textTransform: 'uppercase',
      fontWeight: 'heading',
      color: 'inherit',
      '&.active': {
        color: 'primary',
      },
      '&:hover, &:focus': {
        color: 'secondary',
      },
    },
    inverted: {
      textDecoration: 'none',
      color: 'inherit',
      '&:hover, &:focus, &.active': {
        color: 'background',
      },
    },
  },
  lists: {
    unstyled: {
      listStyle: 'none',
      pl: 0,
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      h1: {
        variant: 'text.heading',
        fontSize: '2xl',
        lineHeight: 'h1',
        my: '0.8125em',
      },
      h2: {
        variant: 'text.heading',
        fontSize: 'xl',
        lineHeight: 'h2',
        mt: '1.21875em', // +2 * 6.5px = 13px
        mb: '0.8125em',
      },
      h3: {
        variant: 'text.heading',
        fontSize: 'lg',
        lineHeight: 'h3',
        mt: '1.0835em', // +1 * 6.5px
        mb: '0.8125em',
      },
      p: {
        my: '1.21875em', // 3 * 6.5px = 19.5px (75% of type size)
      },
    },
    a: {
      color: 'primary',
      textUnderlineOffset: '0.25em',
    },
  },
};
