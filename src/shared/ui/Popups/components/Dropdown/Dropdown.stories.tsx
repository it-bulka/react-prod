import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/shared/ui'
import { PositionDecorator } from '@/shared/config/storybook'
import { Dropdown } from './Dropdown'

const meta = {
  title: 'shared/Dropdown',
  tags: ['!autodocs'],
  component: Dropdown,
  argTypes: {
    direction: { control: 'radio', options: ['top left', 'top right', 'bottom left', 'bottom right'] }
  },
  args: {
    trigger: <Button>Open</Button>,
    items: [
      {
        content: 'first'
      },
      {
        content: 'second'
      },
      {
        content: 'third'
      }
    ]
  },
  decorators: [
    PositionDecorator()
  ]
} satisfies Meta<typeof Dropdown>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'Dropdown'
}
