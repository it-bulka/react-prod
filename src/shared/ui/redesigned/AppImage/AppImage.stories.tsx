import type { Meta, StoryObj } from '@storybook/react'

import { AppImage } from './AppImage'
import { Skeleton } from '../../deprecated/Skeleton/Skeleton'

const meta = {
  title: 'entities/AppImage',
  tags: ['!autodocs'],
  component: AppImage
} satisfies Meta<typeof AppImage>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {}
export const Loading: Story = {
  args: {
    fallback: <Skeleton width={200} height={200} />
  }
}
