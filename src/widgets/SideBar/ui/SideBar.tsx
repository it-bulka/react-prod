import { type FC, useCallback, useState } from 'react'
import classnames from 'shared/libs/classnames/classnames'
import { Button } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
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
    <div className={classnames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button onClick={onToggle}>toggle</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
