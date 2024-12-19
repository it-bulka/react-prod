import { Decorator } from '@storybook/react'

import { Theme } from '@/shared/libs/context/ThemeContext'

import { DecoratorFactory } from './types'

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
