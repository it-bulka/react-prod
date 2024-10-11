import { screen } from '@testing-library/react'
import { componentRender } from 'shared/libs/test/componentRender'
import { LoginModal } from 'features/AuthByUsername'

describe('LoginModal', () => {
  it('should be opened', () => {
    componentRender(<LoginModal isOpen />)
    const modal = screen.queryByTestId('modal')
    expect(modal).toBeInTheDocument()
    expect(modal).toHaveClass('opened')
  })

  it('should not be shown', () => {
    componentRender(<LoginModal />)
    expect(screen.queryByTestId('modal')).not.toHaveClass('opened')
  })
})
