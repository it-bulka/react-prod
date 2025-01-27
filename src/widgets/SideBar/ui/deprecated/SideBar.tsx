import classnames from '@/shared/libs/classnames/classnames'
import {
 Button, ThemeButton, ThemeSwitcher
} from '@/shared/ui'
import { ButtonSize } from '@/shared/ui/deprecated/Button/Button'
import { VStack } from '@/shared/ui/redesigned/Stack'

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
  className,
  onToggle,
  collapsed,
  sidebarItemsList
}: SideBarProps) => {
  return (
    <aside
      data-testid="sidebar"
      className={classnames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid="toggle-btn"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <VStack role="navigation" gap="8" align="start" className={cls.items}>
        {sidebarItemsList.map(item => (
          <SidebarItem item={item} collapsed={collapsed} key={item.path} />
        ))}
      </VStack>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          className={cls.lang}
          short={collapsed}
        />
      </div>
    </aside>
  )
}
