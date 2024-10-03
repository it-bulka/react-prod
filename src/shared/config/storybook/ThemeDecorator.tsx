import { Decorator } from '@storybook/react'
import { Theme } from 'app/providers/lib/ThemeContext'

type DecoratorFactory = (_theme: Theme) => Decorator

export const ThemeDecorator: DecoratorFactory = (theme) => (Story) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
)
