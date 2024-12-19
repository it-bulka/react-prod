import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

import LoginForm from './LoginForm'

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

const defaultState = {
  loginForm: { username: '123', password: 'asd' }
}

const errorState = {
  loginForm: { username: '123', password: 'asd', error: 'ERROR' }
}

const loadingState = {
  loginForm: { isLoading: true }
}

export const Normal: Story = {
  name: 'default',
  decorators: [StoreDecorator({ state: defaultState })]
}

export const WithError: Story = {
  decorators: [StoreDecorator({ state: errorState })]
}

export const WithLoading: Story = {
  decorators: [StoreDecorator({ state: loadingState })]
}
