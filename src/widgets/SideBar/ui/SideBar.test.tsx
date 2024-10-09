import { screen, fireEvent } from '@testing-library/react'
import { componentRender } from 'shared/libs/test/componentRender'
import { SideBar } from './SideBar'

describe('SideBar', () => {
  it('should render correctly', () => {
    componentRender(<SideBar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  it('should toggle', () => {
    const renderedComponent = componentRender(<SideBar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()

    const toggleBtn = renderedComponent.getByTestId('toggle-btn')
    expect(toggleBtn).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
