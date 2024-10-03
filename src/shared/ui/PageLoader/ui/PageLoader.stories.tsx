import type { Meta, StoryObj } from '@storybook/react'
import { PageLoader } from './PageLoader'

const meta = {
  title: 'shared/PageLoader',
  tags: ['!autodocs'],
  component: PageLoader
} satisfies Meta<typeof PageLoader>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'PageLoader'
}
