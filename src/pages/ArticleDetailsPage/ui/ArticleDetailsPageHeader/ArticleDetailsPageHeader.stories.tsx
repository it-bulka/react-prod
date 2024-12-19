import type { Meta, StoryObj } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { article } from '@/shared/const/storybookMockData'

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'

const meta = {
  title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
  tags: ['!autodocs'],
  component: ArticleDetailsPageHeader
} satisfies Meta<typeof ArticleDetailsPageHeader>

export default meta

type Story = StoryObj<typeof meta>

export const WithCanEdit: Story = {
  decorators: [
    StoreDecorator({
      state: {
        articleDetails: {
          data: article
        },
        user: {
          authData: {
            id: '1',
            username: 'username'
          }
        }
      }
    })
  ]
}
export const WithCanNotEdit: Story = {
  decorators: [
    StoreDecorator({
      state: {
        articleDetails: {
          data: article
        }
      }
    })
  ]
}
