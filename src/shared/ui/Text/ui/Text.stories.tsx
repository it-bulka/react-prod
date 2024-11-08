import type { Meta, StoryObj } from '@storybook/react'
import {
 Text, TextTheme, TextAlign, TextSize
} from './Text'

const meta = {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    theme: { control: 'radio', options: [TextTheme.PRIMARY, TextTheme.ERROR, TextTheme.INVERTED] },
    title: { control: 'text' },
    text: { control: 'text' },
    align: { control: 'radio', options: [TextAlign.LEFT, TextAlign.RIGHT, TextAlign.CENTER] },
    size: { control: 'radio', options: [TextSize.S, TextSize.M, TextSize.L] }
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
