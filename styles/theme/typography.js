export const fonts = {
  heading: `'Space Grotesk', sans-serif;`,
  body: `'Raleway', sans-serif;`,
};

export const Heading = {
  sizes: null,
  variants: {
    h1: {
      textStyle: 'h1',
    },
    h2: {
      textStyle: 'h2',
    },
    h3: {
      textStyle: 'h3',
    },
    h4: {
      textStyle: 'h4',
    },
  },
};

export const Text = {
  sizes: null,
  variants: {
    menuTitleDesktop: (props) => ({
      textStyle: 'menuTitleDesktop',
      color: props.colorMode === 'light' ? 'primary.dark' : 'secondary.dark',
    }),
    menuTitlePhone: (props) => ({
      textStyle: 'menuTitlePhone',
      color: props.colorMode === 'light' ? 'primary.dark' : 'secondary.dark',
    }),
    footerTitle: (props) => ({
      textStyle: 'footerTitle',
      color: props.colorMode === 'light' ? 'primary.dark' : 'secondary.dark',
    }),

    footerText: (props) => ({
      textStyle: 'footerText',
      color: props.colorMode === 'light' ? 'primary.dark' : 'secondary.dark',
    }),
    subtitle: (props) => ({
      textStyle: 'subTitle',
      color: props.colorMode === 'light' ? 'primary.dark' : 'secondary.dark',
    }),
    numtitle: (props) => ({
      textStyle: 'numTitle',
      color: props.colorMode === 'light' ? 'primary.dark' : 'secondary.dark',
    }),
    small: {
      textStyle: 'small',
    },
  },
  defaultProps: {
    variant: 'body',
  },
};

export const textStyles = {
  h1: {
    fontSize: { base: '1em', sm: '1.3em', lg: '2em' },
    fontWeight: 100,
    lineHeight: { base: '1.15em', lg: '130%' },
  },
  h2: {
    fontSize: { base: '2em', xl: '2.5em' },
    fontWeight: 100,
    lineHeight: { base: '1.75em', lg: '1.5em' },
  },
  h3: {
    fontSize: '1.5em',
    fontWeight: 400,

    lineHeight: '32px',
  },
  h4: {
    fontSize: { base: '0.938em', xl: '1.063em' },
    fontWeight: 300,
    lineHeight: { base: '2.813rem', lg: '2.813rem' },
  },
  menuTitleDesktop: {
    fontSize: { base: '0.5em', md: '0.625em', xl: '0.875em' },
    fontWeight: 500,
    lineHeight: { base: '1.125em', md: '1.375em', lg: '1.5em' },
  },
  menuTitlePhone: {
    fontSize: { base: '0.5em', md: '0.625em', xl: '0.875em' },
    fontWeight: 700,
    lineHeight: { base: '1.125em', md: '1.375em', lg: '1.5em' },
  },
  footerTitle: {
    fontSize: { base: '0.875em', md: '0.875em', xl: '1em' },
    fontWeight: 300,
    lineHeight: { base: '1.313em', md: '1.313em', lg: '1.5em' },
  },
  footerText: {
    fontSize: { base: '0.75em', md: '0.813em', xl: '0.875em' },
    fontWeight: 100,
    lineHeight: { base: '1.313em', md: '1.313em', lg: '1.5em' },
  },
};