import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import { ListBox } from './ListBox'

const meta = {
  title: 'shared/ListBox',
  tags: ['!autodocs'],
  component: ListBox,
  args: {
    onChange: action('onChange'),
    items: [
      { value: 'value 1', content: 'content 1' },
      { value: 'value 2', content: 'content 2' },
      { value: 'value 3', content: 'content 3' }
    ],
    value: 'value 1',
    label: 'label'
  }
} satisfies Meta<typeof ListBox>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'ListBox'
}
