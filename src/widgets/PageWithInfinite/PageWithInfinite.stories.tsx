import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import { PageWithInfinite } from './PageWithInfinite'

const meta = {
  title: 'shared/PageWithInfinite',
  component: PageWithInfinite,
  tags: ['!autodocs'],
  args: {
    children: <div style={{backgroundColor: 'purple', height: '150vh'}} />,
    onScrollEnd: action('onScrollEnd')
  }
} satisfies Meta<typeof PageWithInfinite>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'PageWithInfinite'
}
