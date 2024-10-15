import { screen } from '@testing-library/react'
import { componentRender } from 'shared/libs/test/componentRender'
import { LoginModal } from 'features/AuthByUsername'

const mockedOnSuccess = jest.fn()

describe('LoginModal', () => {
  it('should be opened', () => {
    componentRender(<LoginModal isOpen onSuccess={mockedOnSuccess} />)
    const modal = screen.queryByTestId('modal')
    expect(modal).toBeInTheDocument()
    expect(modal).toHaveClass('opened')
  })

  it('should not be shown', () => {
    componentRender(<LoginModal onSuccess={mockedOnSuccess} />)
    expect(screen.queryByTestId('modal')).not.toHaveClass('opened')
  })
})
