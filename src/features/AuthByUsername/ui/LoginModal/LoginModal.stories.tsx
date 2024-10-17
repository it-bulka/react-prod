import type { Meta, StoryObj } from '@storybook/react'
import { LoginModal } from 'features/AuthByUsername'
import { useArgs } from '@storybook/preview-api'
import { fn } from '@storybook/test'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta = {
  title: 'feature/LoginModal',
  component: LoginModal,
  args: {
    isOpen: true,
    onSuccess: fn()
  }
} satisfies Meta<typeof LoginModal>

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
  decorators: [StoreDecorator({ state: defaultState })],
  render: function Render(_, context) {
    const [{ isOpen }, updateArgs] = useArgs()

    const open = () => updateArgs({ isOpen: true })
    const close = () => updateArgs({ isOpen: false })
    const { theme } = context.globals

    return (
      <>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <button onClick={open} type="button">Open modal</button>
        <LoginModal isOpen={isOpen} onClose={close} className={theme} onSuccess={close} />
      </>
    )
  }
}

export const WithError: Story = {
  decorators: [StoreDecorator({ state: errorState })],
  render: Normal.render
}

export const WithLoading: Story = {
  decorators: [StoreDecorator({ state: loadingState })],
  render: Normal.render
}
