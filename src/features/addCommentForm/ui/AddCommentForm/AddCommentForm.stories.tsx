import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import AddCommentForm from './AddCommentForm'

const meta = {
  title: 'shared/AddCommentForm',
  args: {
    onSendComment: action('onSendComment')
  },
  component: AddCommentForm
} satisfies Meta<typeof AddCommentForm>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {}
