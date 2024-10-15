import { screen } from '@testing-library/react'
import { componentRender } from 'shared/libs/test/componentRender'
import LoginForm from 'features/AuthByUsername/ui/LoginForm/LoginForm'

describe('LoginForm', () => {
  it('should be shown', () => {
    componentRender(<LoginForm />)
    expect(screen.queryByTestId('login-form')).toBeInTheDocument()
  })
})
