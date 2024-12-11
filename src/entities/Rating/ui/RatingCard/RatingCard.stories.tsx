import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { RatingCard } from './RatingCard'

const meta = {
  title: 'entities/RatingCard',
  tags: ['!autodocs'],
  args: {
    onCancel: action('onCancel'),
    onAccept: action('onAccept')
  },
  component: RatingCard
} satisfies Meta<typeof RatingCard>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const WithTitle: Story = {
  args: {
    title: 'Title'
  }
}

export const WithFeedback: Story = {
  args: {
    hasFeedback: true,
    feedbackTitle: 'Feedback Title'
  }
}
