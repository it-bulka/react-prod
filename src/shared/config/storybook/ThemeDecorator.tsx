import { Decorator } from '@storybook/react'
import { Theme } from 'app/providers/lib/ThemeContext'

type DecoratorFactory = (_theme: Theme) => Decorator

const ThemeDecoratorFactory: DecoratorFactory = (theme) => (Story) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
)

export const ThemeDecorator: Decorator = (Story, context) => {
  return ThemeDecoratorFactory(context.globals.theme)(Story, context)
}
