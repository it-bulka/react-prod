import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/test'
import i18n from '@/shared/config/i18n/i18n'
import { LangSwitcher } from './LangSwitcher'

const meta = {
  title: 'shared/LangSwitcher',
  tags: ['!autodocs'],
  component: LangSwitcher
} satisfies Meta<typeof LangSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'LangSwitcher',
  play: async ({ canvasElement, context }) => {
    const changedLang = context.globals.locale === 'en' ? 'uk' : context.globals.locale
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    await userEvent.click(button)
    await i18n.changeLanguage(changedLang)
  }
}
