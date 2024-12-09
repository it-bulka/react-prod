import { Decorator } from '@storybook/react'
import { Theme } from '@/app/providers/lib/ThemeContext'
import { DecoratorFactory } from '@/shared/config/storybook/types'

const ThemeDecoratorFactory: DecoratorFactory<Theme> = theme => Story => {
  document.body.className = theme

  return (
    <div className="app">
      <Story />
    </div>
  )
}

export const ThemeDecorator: Decorator = (Story, context) => {
  return ThemeDecoratorFactory(context.globals.theme)(Story, context)
}
