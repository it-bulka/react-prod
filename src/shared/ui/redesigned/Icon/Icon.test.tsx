import {
 render, screen, fireEvent, within
} from '@testing-library/react'

import AppSvg from '@/shared/assets/icons/app-image.svg'

import { Icon } from './Icon'

describe('<Icon />', () => {
  test('renders without crash', () => {
    render(<Icon Svg={AppSvg} />)
    const svg = screen.getByTestId('icon.svg')

    expect(svg).toBeInTheDocument()
  })

  test('should not be clicable', () => {
    render(<Icon Svg={AppSvg} />)
    const svg = screen.getByTestId('icon.svg')

    expect(svg).not.toHaveAttribute('onClick')
  })

  test('renders clickable button wrapper around with clickable prop', () => {
    const onClick = jest.fn()
    render(<Icon Svg={AppSvg} clickable onClick={onClick} />)
    const btn = screen.getByTestId('icon.btn')
    expect(btn).toBeInTheDocument()

    const childElement = within(btn).getByTestId('icon.svg')
    expect(childElement).toBeInTheDocument()

    fireEvent.click(btn)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
