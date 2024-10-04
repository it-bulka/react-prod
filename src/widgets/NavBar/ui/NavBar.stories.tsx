import type { Meta, StoryObj } from '@storybook/react'
import { NavBar } from 'widgets/NavBar'

const meta = {
  title: 'widgets/NavBar',
  component: NavBar
} satisfies Meta<typeof NavBar>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'Default'
}
