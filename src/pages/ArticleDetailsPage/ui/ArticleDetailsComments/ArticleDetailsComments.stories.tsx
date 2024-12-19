import type { Meta, StoryObj } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

import { ArticleDetailsComments } from './ArticleDetailsComments'

const user = {
  'id': '2',
  'username': 'user',
  'avatar': 'https://uploads.commoninja.com/searchengine/wordpress/user-avatar-reloaded.png'
}

const meta = {
  title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
  component: ArticleDetailsComments,
  args: {
    id: '1'
  }
} satisfies Meta<typeof ArticleDetailsComments>

export default meta

type Story = StoryObj<typeof meta>

export const SuccessBehavior: Story = {
  decorators: [
    StoreDecorator({
      state: {
        articleDetailsPage: {
          comments: {
            isLoading: false,
            error: undefined,
            ids: ['1', '2', '3'],
            entities: {
              '1': {
                'id': '1',
                'text': 'This quantum computing article is fascinating!',
                'user': user
              },
              '2': {
                'id': '2',
                'text': 'This quantum computing article is fascinating!',
                'user': user
              },
              '3': {
                'id': '3',
                'text': 'This quantum computing article is fascinating!',
                'user': user
              }
            }
          }
        }
      }
    })
  ]
}

export const LoadingBehavior: Story = {
  decorators: [
    StoreDecorator({
      state: {
        articleDetailsPage: {
          comments: {
            isLoading: true,
            ids: [],
            entities: {}
          }
        }
      }
    })
  ]
}
