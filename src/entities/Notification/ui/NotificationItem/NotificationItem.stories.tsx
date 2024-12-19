import type { Meta, StoryObj } from '@storybook/react'

import { NotificationItem } from './NotificationItem'

const meta = {
  title: 'entities/Notification',
  tags: ['!autodocs'],
  component: NotificationItem,
  args: {
    item: {
      id: '1',
      title: 'Notification',
      description: 'Notification description'
    }
  }
} satisfies Meta<typeof NotificationItem>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'Notification'
}
