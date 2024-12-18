import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { article } from '@/entities/Article/testing'
import { ArticleInfiniteList } from './ArticleInfiniteList'

const meta = {
  title: 'pages/ArticlesPage/ArticleInfiniteList',
  component: ArticleInfiniteList,
  decorators: [
    Story => (
      <div style={{ height: '500px'}}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof ArticleInfiniteList>

export default meta

type Story = StoryObj<typeof meta>

export const SuccessBehaviour: Story = {
  decorators: [
    StoreDecorator({
      state: {
        articlesPage: {
          ids: ['1', '2', '3', '4', '5', '6'],
          entities: {
            '1': article,
            '2': article,
            '3': article,
            '4': article,
            '5': article,
            '6': article
          }
        }
      }
    })
  ]
}

export const LoadingBehaviour: Story = {
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

export const ErrorBehaviour: Story = {
  decorators: [
    StoreDecorator({
      state: {
        articlesPage: {
          ids: [],
          entities: {},
          error: 'error'
        }
      }
    })
  ]
}
