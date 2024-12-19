import type { Meta, StoryObj } from '@storybook/react'
import { http, HttpResponse, delay } from 'msw'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

import { NotificationList } from './NotificationList'
import { mockNotification } from '../../model/mockData/storybookMockData'

const meta = {
  title: 'entities/NotificationList',
  component: NotificationList,
  decorators: [
    StoreDecorator({})
  ]
} satisfies Meta<typeof NotificationList>

export default meta

type Story = StoryObj<typeof meta>

export const SuccessBehavior: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(`/notifications`, async() => {
          await delay(500)
          return HttpResponse.json(
            new Array(5)
              .fill(mockNotification)
              .map((item, index) => ({...item, id: index}))
          )
        })
      ],
      onUnhandledRequest: 'warn'
    }
  }
}

export const FailedBehavior: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(`/notifications`, () => {
          return HttpResponse.json(null, { status: 403 })
        })
      ]
    }
  }
}
