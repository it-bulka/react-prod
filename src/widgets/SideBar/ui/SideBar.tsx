import { useCallback, useState, memo } from 'react'
import { useSelector } from 'react-redux'
import classnames from '@/shared/libs/classnames/classnames'
import { Button, ThemeButton, ButtonSize } from '@/shared/ui/Button/Button'
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from '@/shared/ui/LangSwitcher/LangSwitcher'
import { SidebarItem } from '../../SidebarItem/ui/SidebarItem'
import { VStack } from '@/shared/ui/Stack'
import { getSidebarItems } from '../model/selectors/getSidebarItem/getSidebarItem'
import cls from './SideBar.module.scss'

interface SideBarProps {
  className?: string
}
export const SideBar = memo(({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const sidebarItemsList = useSelector(getSidebarItems)

  const onToggle = useCallback(() => {
    setCollapsed(prev => !prev)
  }, [])

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
})

SideBar.displayName = 'SideBar'
