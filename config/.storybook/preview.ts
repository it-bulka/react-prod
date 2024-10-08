import '../../src/app/styles/index.scss'
import type { Preview } from "@storybook/react";
import { ThemeDecorator, withI18nDecorator, RouterDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/lib/ThemeContext';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
      },
    },
    locale: {
      description: 'Control global locale',
      toolbar: {
        title: 'Locale',
        icon: 'globe',
        dynamicTitle: true,
        items: [
          { value: 'uk', title: 'Ukrainian', left: '' },
          { value: 'en', title: 'English', left: '' },
        ],
      },
    }
  },
  initialGlobals: {
    theme: 'light',
    locale: 'en',
  },
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme === 'dark' ? Theme.DARK : Theme.LIGHT;
      return ThemeDecorator(theme)(Story, context)
    },
    withI18nDecorator,
    RouterDecorator
  ]
};

export default preview;
