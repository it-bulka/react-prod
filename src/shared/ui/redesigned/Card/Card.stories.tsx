import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'

const meta = {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    variant: { control: 'radio', options: ['normal', 'outlined', 'light'] },
    max: { control: 'boolean', defaultValue: false },
    padding: { control: 'radio', options: ['0', '8', '16', '24', undefined], defaultValue: undefined}
  },
  args: {
    children: 'children'
  }
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const NORMAL: Story = {
  args: {
    variant: 'normal'
  }
}

export const Outlined: Story = {
  args: {
    variant: 'outlined'
  }
}
