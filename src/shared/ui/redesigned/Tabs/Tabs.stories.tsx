import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import { Tabs } from './Tabs'

const meta = {
  title: 'shared/redesigned/Tabs',
  tags: ['!autodoc'],
  component: Tabs,
  args: {
    tabs: [
      {
        value: 'tab 1',
        content: 'tab 1'
      },
      {
        value: 'tab 2',
        content: 'tab 2'
      },
      {
        value: 'tab 3',
        content: 'tab 3'
      }
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick')
  }
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'Tabs'
}
