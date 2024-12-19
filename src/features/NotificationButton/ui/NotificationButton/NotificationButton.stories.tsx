import type { Meta, StoryObj } from '@storybook/react'

import { NotificationButton } from './NotificationButton'

const meta = {
  title: 'features/NotificationButton',
  tags: ['!autodocs'],
  component: NotificationButton
} satisfies Meta<typeof NotificationButton>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'NotificationButton'
}
