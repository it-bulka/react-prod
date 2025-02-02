import { screen, fireEvent } from '@testing-library/react'
import { useState } from 'react'

import { componentRender } from '@/shared/libs/test/componentRender'

import { SideBar } from './SideBar'
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
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    expect(screen.getAllByTestId('sidebar.item').length).toBe(items.length)
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
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()

    const toggleBtn = renderedComponent.getByTestId('sidebar-toggle')
    expect(toggleBtn).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(mockOnToggle).toHaveBeenCalledTimes(1)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
