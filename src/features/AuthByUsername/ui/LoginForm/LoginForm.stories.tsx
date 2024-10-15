import type { Meta, StoryObj } from '@storybook/react'
import LoginForm from 'features/AuthByUsername/ui/LoginForm/LoginForm'
import { fn } from '@storybook/test'

const meta = {
  title: 'shared/LoginForm',
  component: LoginForm,
  tags: ['!autodocs'],
  args: {
    withFocus: true,
    onSuccess: fn()
  }
} satisfies Meta<typeof LoginForm>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'LoginForm'
}
