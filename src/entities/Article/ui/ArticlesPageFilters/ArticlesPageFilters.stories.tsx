import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article'
import { ArticlesPageFilters } from './ArticlesPageFilters'

const meta = {
  title: 'pages/ArticlesPageFilters',
  component: ArticlesPageFilters,
  decorators: [
    StoreDecorator({
      state: {
        articlesPage: {
          isLoading: false,
          // pagination
          page: 1,
          hasMore: true,
          // filters
          view: ArticleView.BIG,
          order: 'asc',
          sort: ArticleSortField.TITLE,
          search: 's',
          type: ArticleType.ALL
        }
      }
    })
  ]
} satisfies Meta<typeof ArticlesPageFilters>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
}
