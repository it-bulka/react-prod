import type { Meta, StoryObj } from '@storybook/react'
import { http, HttpResponse } from 'msw'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { article } from '@/shared/const/storybookMockData'

import { ArticleRecommendationsList } from './ArticleRecommendationsList'

// TODO: fix need of reloading to get data
const meta = {
  title: 'feature/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  decorators: [
    StoreDecorator({})
  ]
} satisfies Meta<typeof ArticleRecommendationsList>

export default meta

type Story = StoryObj<typeof meta>

export const SuccessBehavior: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(`/articles`, () => {
          return HttpResponse.json(
            new Array(5)
              .fill(article)
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
        http.get(`/articles`, () => {
          return HttpResponse.json(null, { status: 403 })
        })
      ]
    }
  }
}
