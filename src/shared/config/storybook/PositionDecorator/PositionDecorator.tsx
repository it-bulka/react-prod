import { Decorator } from '@storybook/react'
import style from './PositionDecorator.module.scss'

// instead of parameters pf stories, due to having vars in theming

export enum DECORATOR_POSITION {
  _CENTER = 'center',
  _TOP_CENTER = 'top_center',
  _TOP_LEFT = 'top_left',
  _TOP_RIGHT = 'top_right',
  _BOTTOM_CENTER = 'bottom_center',
  _BOTTOM_LEFT = 'bottom_left',
  _BOTTOM_RIGHT = 'bottom_right',
  _LEFT_CENTER = 'left_center',
  _RIGHT_CENTER = 'right_center',
}

type DecoratorFactory = (_position?: DECORATOR_POSITION) => Decorator

export const PositionDecorator: DecoratorFactory = (
  position = DECORATOR_POSITION._CENTER
) => (Story) => (
  <div className={`${style.fullscreen} ${style[position]}`}>
    <Story />
  </div>
)
