import type { Meta, StoryObj } from '@storybook/react'
import { ArticleDetails } from './ArticleDetails'

const meta = {
  title: 'shared/ArticleDetails',
  args: {
    id: '1'
  },
  component: ArticleDetails
} satisfies Meta<typeof ArticleDetails>

export default meta

type Story = StoryObj<typeof meta>

export const Main: Story = {}
