import { screen } from '@testing-library/react'

import { componentRender } from '@/shared/libs/test/componentRender'

import { Modal } from './Modal'

describe('Modal', () => {
  it('should show  modal', () => {
    componentRender(<Modal isOpen />)
    const modal = screen.queryByTestId('modal')
    expect(modal).toBeInTheDocument()
    expect(modal).toHaveClass('opened')
  })

  it('should not be login modal', () => {
    componentRender(<Modal />)
    expect(screen.queryByTestId('modal')).not.toHaveClass('opened')
  })
})
