export const styles = {
  global: (props) => ({
    body: {
      overflowX: 'hidden',
      bg: props.colorMode === 'light' ? 'primary.dark' : 'secondary.dark',
      color: props.colorMode === 'light' ? 'primary.dark' : 'secondary.dark',
    },
  }),
};
