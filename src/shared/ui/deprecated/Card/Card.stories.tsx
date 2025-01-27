import type { Meta, StoryObj } from '@storybook/react'

import { Card, CardTheme } from './Card'

const meta = {
  title: 'shared/Card',
  component: Card
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const NORMAL: Story = {
  args: {
    theme: CardTheme.NORMAL
  }
}

export const Outlined: Story = {
  args: {
    theme: CardTheme.OUTLINED
  }
}
