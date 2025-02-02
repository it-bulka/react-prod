import { useCallback, useState, memo } from 'react'
import { useSelector } from 'react-redux'

import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'

import { SideBarDeprecated } from './deprecated/SideBarDeprecated'
import { SideBar as RedesignedSideBar } from './redesigned/SideBar'
import { getSidebarItems } from '../model/selectors/getSidebarItem/getSidebarItem'

export const SideBar = memo(() => {
  const [collapsed, setCollapsed] = useState(false)
  const sidebarItemsList = useSelector(getSidebarItems)

  const onToggle = useCallback(() => {
    setCollapsed(prev => !prev)
  }, [])

  return (
    <ToggleFeaturesComponent
      feature="isAppRedesigned"
      on={(
        <RedesignedSideBar
          collapsed={collapsed}
          sidebarItemsList={sidebarItemsList}
          onToggle={onToggle}
        />
      )}
      off={(
        <SideBarDeprecated
          onToggle={onToggle}
          sidebarItemsList={sidebarItemsList}
          collapsed={collapsed}
        />
)}
    />
  )
})

SideBar.displayName = 'SideBar'
