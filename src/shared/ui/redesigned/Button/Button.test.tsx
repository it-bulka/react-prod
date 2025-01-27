import { render, screen, fireEvent } from '@testing-library/react'

import { Button } from './Button'

describe('<Button/>', () => {
  it('should be rendered', () => {
    render(<Button>text</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveTextContent('text')
  })

  it('applies variant class', () => {
    render(<Button variant="clear">text</Button>)
    expect(screen.getByText('text')).toHaveClass('clear')
    screen.debug()
  })

  test('applies size class', () => {
    render(<Button size="xl">Click Me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('xl')
  })

  test('renders as square button', () => {
    render(<Button square>Click Me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toHaveClass('square')
  })

  test('renders as fullWidth button', () => {
    render(<Button fullWidth>Click Me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toHaveClass('fullWidth')
  })

  test('renders as disabled button', () => {
    render(<Button disabled>Click Me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeDisabled()
    expect(button).toHaveClass('disabled')
  })

  test('handles click events', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click Me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
