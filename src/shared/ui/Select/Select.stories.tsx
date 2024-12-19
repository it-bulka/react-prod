import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './Select'

const options = [
  { value: 'one', content: 'one' },
  { value: 'two', content: 'two' },
  { value: 'three', content: 'three' },
  { value: 'four', content: 'four' }
]
const meta = {
  title: 'shared/Select',
  component: Select,
  args: {
    options,
    value: options[2].value
  }
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Main: Story = {}
