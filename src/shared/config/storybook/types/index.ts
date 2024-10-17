import { Decorator } from '@storybook/react'

export type DecoratorFactory<T> = (_arg: T) => Decorator
