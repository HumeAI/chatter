import type { Preview } from '@storybook/react';

// import "../src/assets/fonts/FellixVF/FellixVF.css";
// import "../src/assets/fonts/FellixVF/variables.css";
// import "../src/assets/fonts/FraktionMono/FraktionMono.css";
// import "../src/assets/fonts/FraktionMono/variables.css";
import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
