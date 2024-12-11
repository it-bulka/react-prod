import type { Meta, StoryObj } from '@storybook/react'
import { PositionDecorator, DECORATOR_POSITION } from '@/shared/config/storybook'
import { StarRating } from './StarRating'

const meta = {
  title: 'shared/StarRating',
  component: StarRating,
  tags: ['autodocs'],
  decorators: [PositionDecorator(DECORATOR_POSITION._CENTER)]
} satisfies Meta<typeof StarRating>

export default meta

type Story = StoryObj<typeof meta>

export const Main: Story = {}
