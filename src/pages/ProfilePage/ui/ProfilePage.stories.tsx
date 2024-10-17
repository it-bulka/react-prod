import type { Meta, StoryObj } from '@storybook/react'
import ProfilePage from 'pages/ProfilePage/ui/ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta = {
  title: 'pages/ProfilePage',
  tags: ['!autodocs'],
  component: ProfilePage,
  decorators: [StoreDecorator({})]
} satisfies Meta<typeof ProfilePage>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'ProfilePage'
}
