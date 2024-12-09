import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'
import { Modal } from '@/shared/ui/Modal/Modal'

const meta = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['!autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    children: { control: 'text' }
  },
  args: {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temper incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quits 
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
    consequat. Duis aute irure dolor in reprehenderit in voluptuary velit esse cillum dolore eu fugiat nulla pariatur`
  }
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'Modal',
  render: function Render(_, context) {
    const [{ isOpen, children }, updateArgs] = useArgs()

    const open = () => updateArgs({ isOpen: true })
    const close = () => updateArgs({ isOpen: false })
    const { theme } = context.globals

    return (
      <>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <button onClick={open} type="button">Open modal</button>
        <Modal isOpen={isOpen} onClose={close} className={theme}>
          <div>
            {children}
          </div>
        </Modal>
      </>
    )
  }
}
