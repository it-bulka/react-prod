import type { Meta, StoryObj } from '@storybook/react'

import { Text } from './Text'

const meta = {
  title: 'shared/redesigned/Text',
  component: Text,
  argTypes: {
    variant: { control: 'radio', options: ['primary', 'error', 'accent'] },
    title: { control: 'text' },
    text: { control: 'text' },
    align: { control: 'radio', options: ['right', 'left', 'center'] },
    size: { control: 'radio', options: ['s', 'm', 'l'] }
  }
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
