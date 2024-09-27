import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from './Button'

describe('<Button/>', () => {
  it('should be rendered', () => {
    render(<Button>text</Button>)
    expect(screen.getByText('text')).toBeInTheDocument()
  })

  it('should be rendered with CLEAR class using CLEAR theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>text</Button>)
    expect(screen.getByText('text')).toHaveClass('clear')
    screen.debug()
  })
})
