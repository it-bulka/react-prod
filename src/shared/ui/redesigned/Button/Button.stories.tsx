import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { PositionDecorator, DECORATOR_POSITION } from '@/shared/config/storybook'

import { Button } from './Button'

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: { type: 'radio' },
      options: ['clear', 'outline']
    },
    size: {
      control: { type: 'radio' },
      options: ['m', 'l', 'xl']
    },
    square: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    fullWidth: { control: { type: 'boolean' } }
  },
  args: {
    onClick: fn(),
    children: 'Button'
  },
  decorators: [PositionDecorator(DECORATOR_POSITION._CENTER)]
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Main: Story = {}
export const Clear: Story = {
  args: {
    variant: 'clear'
  }
}
export const Outline: Story = {
  args: {
    variant: 'outline'
  }
}

export const Square: Story = {
  args: {
    children: '>',
    square: true
  }
}

export const Middle: Story = {
  args: {}
}
export const Large: Story = {
  args: {
    size: 'l'
  }
}
export const XLarge: Story = {
  args: {
    size: 'xl'
  }
}
