import { screen } from '@testing-library/react'
import { componentRender } from '@/shared/libs/test/componentRender'
import { Input } from './Input'

describe('Input', () => {
  it('should render correctly', () => {
    componentRender(<Input />)
    expect(screen.getByTestId('input')).toBeInTheDocument()
  })

  it('should show value', () => {
    componentRender(<Input value="input value" />)
    expect(screen.getByTestId('input').querySelector('input')).toHaveValue('input value')
  })

  it('should be in focus', () => {
    componentRender(<Input focus />)
    const input = screen.getByTestId('input').querySelector('input')
    expect(input).toBeInTheDocument()
    expect(input).toHaveFocus()
  })

  it('should have autofocus', () => {
    componentRender(<Input autofocus />)
    const input = screen.getByTestId('input').querySelector('input')
    expect(input).toBeInTheDocument()
    expect(input).toHaveFocus()
  })
})
