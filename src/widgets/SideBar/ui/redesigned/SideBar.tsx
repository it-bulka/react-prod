import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg'
import classnames from '@/shared/libs/classnames/classnames'
import { ThemeSwitcher } from '@/shared/ui'
import { VStack } from '@/shared/ui/deprecated/Stack'
import { AppLogo } from '@/shared/ui/redesigned/AppLogo'
import { Icon } from '@/shared/ui/redesigned/Icon/Icon'

import cls from './SideBar.module.scss'

import { LangSwitcher } from '../../../LangSwitcher/LangSwitcher'
import { SidebarItem } from '../../../SidebarItem/ui/SidebarItem'
import { SidebarItemType } from '../../model/types/items'

interface SideBarProps {
  className?: string
  onToggle: () => void
  collapsed: boolean
  sidebarItemsList: SidebarItemType[]
}
export const SideBar = ({
 className, collapsed, sidebarItemsList, onToggle
}: SideBarProps) => {
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
      <Icon
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        Svg={ArrowIcon}
        clickable
      />
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </aside>
  )
}
