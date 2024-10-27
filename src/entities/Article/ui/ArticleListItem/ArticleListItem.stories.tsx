import type { Meta, StoryObj } from '@storybook/react'
import { ArticleView } from 'entities/Article/model/types/articles'
import { ArticleListItem } from './ArticleListItem'
import { article } from '../ArticleDetails/ArticleDetails.stories'

const meta = {
  title: 'shared/ArticleListItem',
  component: ArticleListItem,
  args: {
    article
  }
} satisfies Meta<typeof ArticleListItem>

export default meta

type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {
    view: ArticleView.SMALL
  }
}

export const Big: Story = {
  args: {
    view: ArticleView.BIG
  }
}
