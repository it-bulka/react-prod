import { screen } from '@testing-library/react'

import { componentRender } from '@/shared/libs/test/componentRender'
import { mockFeatureToggleComp } from '@/shared/libs/test/mockFeatuteToggleComp'

const mockFeatureTogler = mockFeatureToggleComp()

describe('Sidebar', () => {
  it('should render deprecated Sidebar component', async () => {
    await mockFeatureTogler({ isOn: false })

    const { SideBar } = await import('./SideBar')
    componentRender(<SideBar />)
    const deprecatedSidebar = screen.getByTestId('sidebar.deprecated')
    expect(deprecatedSidebar).toBeInTheDocument()
  })

  it('should render redesigned Sidebar component', async () => {
    await mockFeatureTogler({ isOn: true })

    const { SideBar } = await import('./SideBar')
    componentRender(<SideBar />)
    const deprecatedSidebar = screen.getByTestId('sidebar')
    expect(deprecatedSidebar).toBeInTheDocument()
  })
})
