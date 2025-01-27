import type { Meta, StoryObj } from '@storybook/react'

import { PositionDecorator, DECORATOR_POSITION } from '@/shared/config/storybook'

import { AppLink } from './AppLink'

const meta = {
  title: 'shared/redesigned/AppLink',
  component: AppLink,
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'red'],
      defaultOptions: ['primary']
    },
    onClick: { action: 'click' }
  },
  args: {
    to: '/',
    children: 'Link'
  },
  decorators: [PositionDecorator(DECORATOR_POSITION._CENTER)]
} satisfies Meta<typeof AppLink>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary'
  }
}
export const Red: Story = {
  args: {
    variant: 'red'
  }
}
