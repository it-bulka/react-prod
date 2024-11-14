import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { article } from 'entities/Article/ui/ArticleDetails/ArticleDetails.stories'
import ArticlesPage from './ArticlesPage'

const meta = {
  title: 'pages/ArticlesPage/ArticlesPage',
  component: ArticlesPage
} satisfies Meta<typeof ArticlesPage>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  decorators: [
    StoreDecorator({
      state: {
        articlesPage: {
          ids: ['1'],
          entities: {
            '1': article
          }
        }
      }
})
  ]
}

export const WithIsLoading: Story = {
  decorators: [
    StoreDecorator({
      state: {
        articlesPage: {
          ids: [],
          entities: {},
          isLoading: true
        }
      }
})
  ]
}
