import { Decorator } from '@storybook/react'
import { MemoryRouter } from 'react-router'

export const RouterDecorator: Decorator = Story => (
  <MemoryRouter initialEntries={['/']}>
    <Story />
  </MemoryRouter>
)
