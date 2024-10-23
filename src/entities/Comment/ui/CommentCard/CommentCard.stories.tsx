import type { Meta, StoryObj } from '@storybook/react'
import { CommentCard } from './CommentCard'

const meta = {
  title: 'shared/CommentCard',
  args: {
    comment: {
      id: '1',
      text: 'some comment',
      user: {
        id: '2',
        username: 'user',
        avatar: 'https://uploads.commoninja.com/searchengine/wordpress/user-avatar-reloaded.png'
      }
    }
  },
  component: CommentCard
} satisfies Meta<typeof CommentCard>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {}
export const Loading: Story = {
  args: {
    isLoading: true
  }
}
