import type { Meta, StoryObj } from '@storybook/react'
import { ArticleRecommendationsList } from './ArticleRecommendationsList'

const meta = {
  title: 'feature/ArticleRecommendationsList',
  tags: ['!autodocs'],
  component: ArticleRecommendationsList
} satisfies Meta<typeof ArticleRecommendationsList>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'ArticleRecommendationsList'
}
