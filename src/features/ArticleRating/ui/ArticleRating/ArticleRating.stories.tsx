import type { Meta, StoryObj } from '@storybook/react'
import { http, HttpResponse } from 'msw'
import ArticleRating from './ArticleRating'
import { feedback } from '../../const/storybookMockData'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

const meta = {
  title: 'features/ArticleRating',
  args: {
    articleId: '1'
  },
  component: ArticleRating,
  decorators: [
    StoreDecorator({}),

    Story => {
      return <Story />
    }
  ]
} satisfies Meta<typeof ArticleRating>

export default meta

type Story = StoryObj<typeof meta>

export const SuccessBehavior: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(`/article-ratings`, () => {
          return HttpResponse.json(
            new Array(5)
              .fill(feedback)
              .map((item, index) => ({...item, id: index}))
          )
        })
      ]
    }
  }
}

export const FailedBehavior: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(`/article-ratings`, () => {
          return HttpResponse.json(null, { status: 403 })
        })
      ]
    }
  }
}
