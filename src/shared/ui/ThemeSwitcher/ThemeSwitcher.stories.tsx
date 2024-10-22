import type { Meta, StoryObj } from '@storybook/react'
import { DECORATOR_POSITION, PositionDecorator } from 'shared/config/storybook'
import { ThemeProvider } from 'app/providers'
import { ThemeSwitcher } from './ThemeSwitcher'

const meta = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
  decorators: [
    Story => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
  ),
    PositionDecorator(DECORATOR_POSITION._CENTER)
  ]
} satisfies Meta<typeof ThemeSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {}
