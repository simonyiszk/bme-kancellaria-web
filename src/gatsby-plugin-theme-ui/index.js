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
    // TODO
    body: 400,
    heading: 400,
    bold: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25, // TODO
  },
  colors: {
    text: '#53565a', // PANTONE Cool Gray 11 C
    background: 'white',
    primary: '#a6192e', // PANTONE 187 C
    muted: '#97999b', // PANTONE Cool Gray 7 C
    modes: {
      dark: {
        text: 'white',
        background: '#3f4443', // PANTONE 446 C
      },
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      h1: { fontSize: '2xl' },
      h2: { fontSize: 'xl' },
      h3: { fontSize: 'lg' },
      a: { color: 'primary' },
    },
  },
};
