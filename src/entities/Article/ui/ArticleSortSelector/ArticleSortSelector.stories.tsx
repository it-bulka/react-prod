import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import { ArticleSortSelector } from './ArticleSortSelector'
import { ArticleSortField } from '../../model/const/const'

const meta = {
  title: 'entities/ArticleSortSelector',
  tags: ['!autodocs'],
  component: ArticleSortSelector,
  argTypes: {
    sort: {
      control: 'select',
      options: [ArticleSortField.VIEWS, ArticleSortField.CREATED, ArticleSortField.TITLE]
    },
    order: {
      control: 'select',
      options: ['asc', 'desc']
    }
  },
  args: {
    sort: ArticleSortField.VIEWS,
    order: 'asc',
    onChangeSort: action('onChangeSort'),
    onChangeOrder: action('onChangeOrder')
  }
} satisfies Meta<typeof ArticleSortSelector>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'ArticleSortSelector'
}
