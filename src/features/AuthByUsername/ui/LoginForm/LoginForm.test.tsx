import { screen, waitFor } from '@testing-library/react'
import { componentRender } from 'shared/libs/test/componentRender'
import LoginForm from 'features/AuthByUsername/ui/LoginForm/LoginForm'

describe('LoginForm', () => {
  it('should be shown', async () => {
    componentRender(<LoginForm />)
    await waitFor(() => {
      expect(screen.queryByTestId('login-form')).toBeInTheDocument()
    })
  })
})
