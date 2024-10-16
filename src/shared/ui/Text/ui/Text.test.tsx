import { Text, TextTheme } from 'shared/ui/Text/ui/Text'
import { render, screen } from '@testing-library/react'

describe('Text', () => {
  it('should render correctly', () => {
    render(<Text title="Title" />)
    expect(screen.getByTestId('text')).toBeInTheDocument()
  })

  it('should render with title', () => {
    render(<Text title="Title" />)
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByTestId('text').querySelector('.title')).toBeInTheDocument()
  })

  it('should render with text', () => {
    render(<Text text="Text" />)
    expect(screen.getByText('Text')).toBeInTheDocument()
    expect(screen.getByTestId('text').querySelector('.text')).toBeInTheDocument()
  })

  it('should render with Primary theme', () => {
    render(<Text text="Text" />)
    expect(screen.getByTestId('text')).toHaveClass('primary')
  })

  it('should render with Error theme', () => {
    render(<Text text="Text" theme={TextTheme.ERROR} />)
    expect(screen.getByTestId('text')).toHaveClass('error')
  })
})
