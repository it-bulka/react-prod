import { screen, fireEvent } from '@testing-library/react'

import { componentRender } from '@/shared/libs/test/componentRender'

import { LangSwitcher } from './LangSwitcher'

describe('LangSwitcher', () => {
  it('should render with long text', () => {
    componentRender(<LangSwitcher />)
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveTextContent('ukrainian')
  })

  it('should render with short text', () => {
    componentRender(<LangSwitcher short />)
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveTextContent('uk')
  })

  it('should switch language', () => {
    componentRender(<LangSwitcher />)
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveTextContent('ukrainian')

    fireEvent.click(btn)
    expect(screen.getByRole('button')).toHaveTextContent('англійська')
  })
})
