import type { Meta, StoryObj } from '@storybook/react'
import { NavBar } from 'widgets/NavBar'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta = {
  title: 'widgets/NavBar',
  component: NavBar,
  decorators: [StoreDecorator({})]
} satisfies Meta<typeof NavBar>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'Default'
}
