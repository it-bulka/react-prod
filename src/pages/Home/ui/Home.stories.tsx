import type { Meta, StoryObj } from '@storybook/react'

import HomePage from './Home'

const meta = {
  title: 'pages/HomePage',
  tags: ['!autodocs'],
  component: HomePage
} satisfies Meta<typeof HomePage>

export default meta

type Story = StoryObj<typeof meta>

export const Home: Story = {
  name: 'HomePage'
}
