import type { Meta, StoryObj } from '@storybook/react'
import { NotFound as NotFoundPage } from './NotFound'

const meta = {
  title: 'pages/NotFoundPage',
  tags: ['!autodocs'],
  component: NotFoundPage
} satisfies Meta<typeof NotFoundPage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'NotFoundPage'
}
