import type { Meta, StoryObj } from '@storybook/react'

import { CommentList } from './CommentList'
import { Comment } from '../../model/types/comment'

const comments: Comment[] = [
  {
    id: '1',
    text: 'hello world',
    user: { id: '1', username: 'Vasya' }
  },
  {
    id: '2',
    text: 'Comment 2',
    user: { id: '1', username: 'Petya' }
  }
]

const meta = {
  title: 'entities/CommentList',
  component: CommentList,
  args: {
    comments
  }
} satisfies Meta<typeof CommentList>

export default meta

type Story = StoryObj<typeof meta>

export const Main: Story = {}
