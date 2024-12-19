import type { Meta, StoryObj } from '@storybook/react'

import { SideBar } from './SideBar'

const meta = {
  title: 'widgets/SideBar',
  component: SideBar
} satisfies Meta<typeof SideBar>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'Default'
}
