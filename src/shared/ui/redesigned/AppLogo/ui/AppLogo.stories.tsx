import type { Meta, StoryObj } from '@storybook/react'

import { PositionDecorator, DECORATOR_POSITION } from '@/shared/config/storybook'

import { AppLogo } from './AppLogo'

const meta = {
  title: 'shared/redesigned/AppLogo',
  component: AppLogo,
  argTypes: {
    size: { control: 'number' }
  },
  decorators: [PositionDecorator(DECORATOR_POSITION._CENTER)]
} satisfies Meta<typeof AppLogo>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    size: undefined
  }
}
