import type { Meta, StoryObj } from '@storybook/react'
import { ErrorPage } from 'widgets/ErrorPage'

const meta = {
  title: 'widgets/ErrorPage',
  tags: ['!autodocs'],
  component: ErrorPage
} satisfies Meta<typeof ErrorPage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'ErrorPage'
}
