import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router'

import { AppLink } from './AppLink'
import { componentRender } from '../../../libs/test/componentRender'

describe('<AppLink />', () => {
  it('should be rendered correctly with default props', () => {
    componentRender(
      <AppLink to="/test">
        Link
      </AppLink>
    )

    const component = screen.getByTestId('AppLink')
    expect(component).toBeInTheDocument()
    expect(component).toHaveTextContent('Link')
    expect(component).toHaveClass('primary')
    expect(component).toHaveAttribute('href', '/test')
  })

  it('should have custom active class on click', async () => {
    const user = userEvent.setup()
    componentRender(
      <AppLink to="/test" activeClassName="active">
        Link
      </AppLink>
    )

    const component = screen.getByTestId('AppLink')
    expect(component).toBeInTheDocument()

    await user.click(component)
    expect(component).toHaveClass('active')
  })

  it('should switch to path set in the link', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<AppLink to="/test">Go to Test</AppLink>} />
          <Route path="/test" element={<div>Test Page</div>} />
        </Routes>
      </MemoryRouter>
    )

    const component = screen.getByTestId('AppLink')
    expect(component).toBeInTheDocument()

    await user.click(component)
    const testPageElement = screen.getByText('Test Page')
    expect(testPageElement).toBeInTheDocument()
  })
})
