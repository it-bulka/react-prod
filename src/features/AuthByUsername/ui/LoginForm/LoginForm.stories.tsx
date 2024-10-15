import type { Meta, StoryObj } from '@storybook/react'
import LoginForm from 'features/AuthByUsername/ui/LoginForm/LoginForm'

const meta = {
  title: 'shared/LoginForm',
  component: LoginForm,
  tags: ['!autodocs'],
  args: {
    withFocus: true
  }
} satisfies Meta<typeof LoginForm>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'LoginForm'
}
