import type { Meta, StoryObj } from '@storybook/react'
import { ArticleView } from 'entities/Article'
import { action } from '@storybook/addon-actions'
import { ArticleViewSelector } from './ArticleViewSelector'

const meta = {
  title: 'entities/ArticleViewSelector',
  tags: ['!autodocs'],
  component: ArticleViewSelector,
  argTypes: {
    view: {
      control: 'select',
      options: [ArticleView.SMALL, ArticleView.BIG]
    }
  },
  args: {
    view: ArticleView.SMALL,
    onViewClick: action('onViewClick')
  }
} satisfies Meta<typeof ArticleViewSelector>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'ArticleViewSelector'
}
