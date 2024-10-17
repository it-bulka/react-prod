import { Decorator } from '@storybook/react'
import { Theme } from 'app/providers/lib/ThemeContext'
import { DecoratorFactory } from 'shared/config/storybook/types'

const ThemeDecoratorFactory: DecoratorFactory<Theme> = theme => Story => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
)

export const ThemeDecorator: Decorator = (Story, context) => {
  return ThemeDecoratorFactory(context.globals.theme)(Story, context)
}
