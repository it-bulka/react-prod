import type { Meta, StoryObj } from '@storybook/react'
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'

const meta = {
  title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
  tags: ['!autodocs'],
  component: ArticleDetailsPageHeader
} satisfies Meta<typeof ArticleDetailsPageHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'ArticleDetailsPageHeader'
}
