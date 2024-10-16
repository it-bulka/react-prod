import type { Meta, StoryObj } from '@storybook/react'
import ProfilePage from 'pages/ProfilePage/ui/ProfilePage'

const meta = {
  title: 'pages/ProfilePage',
  tags: ['!autodocs'],
  component: ProfilePage
} satisfies Meta<typeof ProfilePage>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'ProfilePage'
}
