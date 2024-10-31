import type { Meta, StoryObj } from '@storybook/react'
import { ArticleType } from 'entities/Article'
import { action } from '@storybook/addon-actions'
import { ArticleTypeTabs } from './ArticleTypeTabs'

const meta = {
  title: 'entities/ArticleTypeTabs',
  tags: ['!autodocs'],
  component: ArticleTypeTabs,
  argTypes: {
    value: {
      control: 'select',
      options: [ArticleType.ALL, ArticleType.IT, ArticleType.SCIENCE, ArticleType.ECONOMICS]
    }
  },
  args: {
    value: ArticleType.ALL,
    onChangeType: action('onChangeType')
  }
} satisfies Meta<typeof ArticleTypeTabs>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'ArticleTypeTabs'
}
