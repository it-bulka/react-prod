import '../../src/app/styles/index.scss'
import type { Preview } from "@storybook/react";
import { ThemeDecorator, withI18nDecorator, RouterDecorator } from '../../src/shared/config/storybook'
import { Theme } from '../../src/app/providers/lib/ThemeContext'

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: Theme.DARK, title: 'dark' },
          { value: Theme.LIGHT, title: 'light' },
          { value: Theme.ORANGE, title: 'orange' },
        ],
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
    theme: Theme.LIGHT,
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
    ThemeDecorator,
    withI18nDecorator,
    RouterDecorator
  ]
};

export default preview;
