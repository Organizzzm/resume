/** @type { import('@storybook/html').Preview } */

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Charts', ['Equations', 'Oscillations']],
      },
    },
  },
};

export default preview;
