import type { Meta, StoryObj } from '@storybook/react'
import { ArticleList } from './ArticleList'
import {
 Article, ArticleView
} from '../../model/types/articles'
import { article } from '../ArticleDetails/ArticleDetails.stories'

export const articles: Article[] = [
  article, article, article, article, article
]
const meta = {
  title: 'shared/ArticleList',
  component: ArticleList,
  args: {
    articles
  }
} satisfies Meta<typeof ArticleList>

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

export const SmallLoading: Story = {
  args: {
    view: ArticleView.SMALL,
    isLoading: true
  }
}

export const BigLoading: Story = {
  args: {
    view: ArticleView.BIG,
    isLoading: true
  }
}
