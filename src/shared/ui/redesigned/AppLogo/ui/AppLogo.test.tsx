import { render, screen } from '@testing-library/react'

import { AppLogo } from './AppLogo'

describe('<AppLogo />', () => {
  test('renders without crashing', () => {
    render(<AppLogo />)

    const svg = screen.getByTestId('AppLogo.svg')
    expect(svg).toBeInTheDocument()
  })

  test('applies default size', () => {
    render(<AppLogo />)

    const svg = screen.getByTestId('AppLogo.svg')
    expect(svg).toHaveAttribute('width', '50')
    expect(svg).toHaveAttribute('height', '50')
  })

  test('applies custom size', () => {
    const customSize = 100
    render(<AppLogo size={customSize} />)
    const svgElement = screen.getByTestId('AppLogo.svg')
    expect(svgElement).toHaveAttribute('width', `${customSize}`)
    expect(svgElement).toHaveAttribute('height', `${customSize}`)
  })

  test('renders gradients', () => {
    render(<AppLogo />)

    const gradientBig = screen.getByTestId('AppLogo.gradientBig')
    const gradientSmall = screen.getByTestId('AppLogo.gradientSmall')

    expect(gradientBig).toBeInTheDocument()
    expect(gradientSmall).toBeInTheDocument()
  })
})
