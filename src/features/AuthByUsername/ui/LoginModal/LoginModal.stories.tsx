import type { Meta, StoryObj } from '@storybook/react'
import { LoginModal } from 'features/AuthByUsername'
import { useArgs } from '@storybook/preview-api'
import { fn } from '@storybook/test'

const meta = {
  title: 'feature/LoginModal',
  component: LoginModal,
  tags: ['!autodocs'],
  args: {
    isOpen: true,
    onSuccess: fn()
  }
} satisfies Meta<typeof LoginModal>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'LoginModal',
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
