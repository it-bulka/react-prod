import type { Meta, StoryObj } from '@storybook/react'
import { PositionDecorator, DECORATOR_POSITION } from 'shared/config/storybook'
import { Input } from 'shared/ui/Input/Input'
import { action } from '@storybook/addon-actions'

const meta = {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    autofocus: { control: 'boolean' },
    focus: { control: 'boolean' },
    value: { control: 'text' },
    onChange: { action: 'changed' }
  },
  args: {
    onChange: action('changed'),
    value: 'Input'
  },
  decorators: [PositionDecorator(DECORATOR_POSITION._CENTER)]
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Main: Story = {}
