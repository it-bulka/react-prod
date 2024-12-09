import type { Meta, StoryObj } from '@storybook/react'
import AvatarImg from '@/shared/assets/storybook/avatar.jpg'
import { Avatar } from './Avatar'

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  args: {
    src: AvatarImg,
    alt: 'avatar'
  }
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
