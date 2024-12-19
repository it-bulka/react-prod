import type { Meta, StoryObj } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { Country, Currency } from '@/shared/const/common'

import ProfilePage from './ProfilePage'

const meta = {
  title: 'pages/ProfilePage',
  tags: ['!autodocs'],
  component: ProfilePage,
  decorators: [StoreDecorator({
    state: {
      profile: {
        form: {
          username: 'admin',
          age: 22,
          country: Country.Ukraine,
          lastname: 'ulbi tv',
          first: 'asd',
          city: 'asf',
          currency: Currency.USD
        }
      }
  }
})]
} satisfies Meta<typeof ProfilePage>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'ProfilePage'
}
