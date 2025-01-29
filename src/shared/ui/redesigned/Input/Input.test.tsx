import { screen, render, fireEvent } from '@testing-library/react'

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

  it('should have autofocus', () => {
    componentRender(<Input autofocus />)
    const input = screen.getByTestId('input').querySelector('input')
    expect(input).toBeInTheDocument()
    expect(input).toHaveFocus()
  })

  it('should be without addons', () => {
    render(<Input />)
    const addonLeft = screen.queryByTestId('addonLeft')
    const addonRight = screen.queryByTestId('addonRight')

    expect(addonLeft).not.toBeInTheDocument()
    expect(addonRight).not.toBeInTheDocument()
  })

  it('should be with addons', () => {
    render(<Input addonLeft={<div>addonLeft</div>} addonRight={<div>addonRight</div>} />)
    const addonLeft = screen.queryByTestId('addonLeft')
    const addonRight = screen.queryByTestId('addonRight')

    expect(addonLeft).toBeInTheDocument()
    expect(addonRight).toBeInTheDocument()
  })

  test('should fire onChange while typing', () => {
    const onChange = jest.fn()
    render(<Input onChange={onChange} />)

    const input = screen.getByTestId('input').querySelector('input')
    if(input) {
      fireEvent.change(input, { target: { value: 'Hello' } })
    }
    expect(onChange).toHaveBeenCalledWith('Hello')
  })

  test('readOnly forbid typing', () => {
    const onChange = jest.fn()
    const initValue = 'Initial'
    render(<Input readonly value={initValue} onChange={onChange} />)

    const input = screen.getByTestId('input').querySelector('input')
    if(input) {
      fireEvent.change(input, { target: { value: 'Blocked' } })
      expect(input).toHaveValue(initValue)
    }
    expect(onChange).not.toHaveBeenCalled()
  })
})
