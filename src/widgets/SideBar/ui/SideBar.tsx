import { type FC, useCallback, useState } from 'react'
import classnames from 'shared/libs/classnames/classnames'
import { Button, ThemeButton, ButtonSize } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { sidebarItemsList } from 'widgets/SideBar/model/items'
import { SidebarItem } from 'widgets/SidebarItem/ui/SidebarItem'
import cls from './SideBar.module.scss'

interface SideBarProps {
  className?: string
}
export const SideBar: FC<SideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = useCallback(() => {
    setCollapsed((prev) => !prev)
  }, [])

  return (
    <div
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
      <div className={cls.items}>
        {sidebarItemsList.map((item) => (
          <SidebarItem item={item} collapsed={collapsed} key={item.path} />
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          className={cls.lang}
          short={collapsed}
        />
      </div>
    </div>
  )
}
