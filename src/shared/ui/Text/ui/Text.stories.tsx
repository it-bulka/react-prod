import type { Meta, StoryObj } from '@storybook/react'
import { PositionDecorator, DECORATOR_POSITION } from 'shared/config/storybook'
import { Text, TextTheme } from './Text'

const meta = {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    theme: { control: 'select', options: [TextTheme.PRIMARY, TextTheme.ERROR] },
    title: { control: 'text' },
    text: { control: 'text' }
  },
  decorators: [PositionDecorator(DECORATOR_POSITION._CENTER)]
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const PrimaryTitle: Story = {
  args: {
    title: 'Title'
  }
}

export const PrimaryText: Story = {
  args: {
    text: 'Text'
  }
}

export const PrimaryWithAndText: Story = {
  args: {
    title: 'Title',
    text: 'Text'
  }
}

export const Primary: Story = {
  args: {
    text: 'Text'
  }
}

export const Error: Story = {
  args: {
    text: 'Text'
  }
}
