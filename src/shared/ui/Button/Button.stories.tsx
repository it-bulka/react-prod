import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { PositionDecorator, DECORATOR_POSITION } from 'shared/config/storybook'
import { Button, ThemeButton, ButtonSize } from './Button'

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    theme: {
      control: { type: 'select' },
      options: [
        ThemeButton.MAIN,
        ThemeButton.CLEAR,
        ThemeButton.OUTLINE,
        ThemeButton.BACKGROUND,
        ThemeButton.BACKGROUND_INVERTED
      ]
    },
    size: {
      control: { type: 'select' },
      options: [ButtonSize.M, ButtonSize.L, ButtonSize.XL]
    },
    square: { control: { type: 'boolean' } }
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
    theme: ThemeButton.CLEAR
  }
}
export const Outline: Story = {
  args: {
    theme: ThemeButton.OUTLINE
  }
}

export const Background: Story = {
  args: {
    theme: ThemeButton.BACKGROUND
  }
}

export const BackgroundInverted: Story = {
  args: {
    theme: ThemeButton.BACKGROUND_INVERTED
  }
}

export const Square: Story = {
  args: {
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true
  }
}

export const Middle: Story = {
  args: {}
}
export const Large: Story = {
  args: {
    size: ButtonSize.L
  }
}
export const XLarge: Story = {
  args: {
    size: ButtonSize.XL
  }
}
