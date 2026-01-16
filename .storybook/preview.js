/** @type { import('@storybook/vue3-vite').Preview } */
import { setup } from '@storybook/vue3';
import { registerPlugins } from '../src/plugins';
import { withVuetifyTheme } from './withVuetifyTheme.decorator';

setup((app) => {
  registerPlugins(app);
});

export const decorators = [withVuetifyTheme];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global Theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light', icon: 'circlehollow' },
        { value: 'dark', title: 'Dark', icon: 'circle' },
      ],
      showName: true,
    },
  },
};

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo"
    }
  },
};

export default preview;