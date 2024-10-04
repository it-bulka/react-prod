import type { Meta, StoryObj } from '@storybook/react'
import { PositionDecorator, DECORATOR_POSITION } from 'shared/config/storybook'
import { AppLink, AppLinkTheme } from './AppLink'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    children: { control: 'text' },
    theme: {
      control: { type: 'select' },
      options: [AppLinkTheme.PRIMARY, AppLinkTheme.SECONDARY, AppLinkTheme.RED],
      defaultOptions: [AppLinkTheme.PRIMARY]
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
    theme: AppLinkTheme.PRIMARY
  }
}
export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY
  }
}
export const Red: Story = {
  args: {
    theme: AppLinkTheme.RED
  }
}
