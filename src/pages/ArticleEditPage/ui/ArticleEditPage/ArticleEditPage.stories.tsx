import type { Meta, StoryObj } from '@storybook/react'

import ArticleEditPage from './ArticleEditPage'

const meta = {
  title: 'entities/ArticleEditPage',
  tags: ['!autodocs'],
  component: ArticleEditPage
} satisfies Meta<typeof ArticleEditPage>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'ArticleEditPage'
}
