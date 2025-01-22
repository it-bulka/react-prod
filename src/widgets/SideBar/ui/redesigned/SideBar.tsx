import classnames from '@/shared/libs/classnames/classnames'
import { AppLogo } from '@/shared/ui/AppLogo'
import { VStack } from '@/shared/ui/Stack'

import cls from './SideBar.module.scss'

import { SidebarItem } from '../../../SidebarItem/ui/SidebarItem'
import { SidebarItemType } from '../../model/types/items'

interface SideBarProps {
  className?: string
  collapsed: boolean
  sidebarItemsList: SidebarItemType[]
}
export const SideBar = ({ className, collapsed, sidebarItemsList }: SideBarProps) => {
  return (
    <aside
      data-testid="sidebar"
      className={classnames(
        cls.SidebarRedesigned,
        { [cls.collapsed]: collapsed },
        [className]
      )}
    >
      <AppLogo className={cls.appLogo} />
      <VStack role="navigation" gap="8" align="start" className={cls.items}>
        {sidebarItemsList.map(item => (
          <SidebarItem item={item} collapsed={collapsed} key={item.path} />
        ))}
      </VStack>
    </aside>
  )
}
