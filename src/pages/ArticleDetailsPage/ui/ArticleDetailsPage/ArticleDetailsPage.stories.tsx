import type { Meta, StoryObj } from '@storybook/react'

import { getRouteArticleDetails } from '@/shared/config/routeConfig/routeConfig'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { article } from '@/shared/const/storybookMockData'

import ArticleDetailsPage from './ArticleDetailsPage'

const meta = {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  decorators: [
    StoreDecorator({
     state: {
          articleDetails: {
            data: article
          }
        }
    })
  ]
} satisfies Meta<typeof ArticleDetailsPage>

export default meta

type Story = StoryObj<typeof meta>

export const WithArticleIdFounded: Story = {
  parameters: {
    reactRouter: {
      routePath: getRouteArticleDetails(':id'),
      routeParams: { id: '1' }
    }
  }
}

export const WithArticleIdNotFounded: Story = {}
