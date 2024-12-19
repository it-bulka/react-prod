import { screen, waitFor } from '@testing-library/react'

import { componentRender } from '@/shared/libs/test/componentRender'

import LoginForm from './LoginForm'

const mockedOnSuccess = jest.fn()

describe('LoginForm', () => {
  it('should be shown', async () => {
    componentRender(<LoginForm onSuccess={mockedOnSuccess} />)
    await waitFor(() => {
      expect(screen.queryByTestId('login-form')).toBeInTheDocument()
    })
  })
})
