import { screen, fireEvent } from '@testing-library/react'
import { useState } from 'react'

import { componentRender } from '@/shared/libs/test/componentRender'

import { SideBarDeprecated as SideBar } from './SideBarDeprecated'
import { items } from '../testing'

const fn = jest.fn()

describe('SideBar', () => {
  it('should render correctly', () => {
    componentRender(
      <SideBar
        collapsed={false}
        onToggle={fn}
        sidebarItemsList={items}
      />
    )
    expect(screen.getByTestId('sidebar.deprecated')).toBeInTheDocument()
  })

  it('should toggle', () => {
    const mockOnToggle = jest.fn()
    const Wrapper = () => {
      const [collapsed, setCollapsed] = useState(false)
      mockOnToggle.mockImplementation(() => {
        setCollapsed(prev => !prev)
      })
      return <SideBar collapsed={collapsed} onToggle={mockOnToggle} sidebarItemsList={items} />
    }

    const renderedComponent = componentRender(<Wrapper />)
    expect(screen.getByTestId('sidebar.deprecated')).toBeInTheDocument()

    const toggleBtn = renderedComponent.getByTestId('toggle-btn')
    expect(toggleBtn).toBeInTheDocument()
    expect(toggleBtn).toHaveTextContent('<')
    fireEvent.click(toggleBtn)
    expect(mockOnToggle).toHaveBeenCalledTimes(1)
    expect(screen.getByTestId('sidebar.deprecated')).toHaveClass('collapsed')
    expect(toggleBtn).toHaveTextContent('>')
  })
})
