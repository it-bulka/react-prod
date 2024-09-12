import { type FC, useCallback, useState } from 'react'
import cls from './SideBar.module.scss'
import classnames from 'shared/libs/classnames/classnames';
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';

interface SideBarProps {
  className?: string
}
export const SideBar: FC<SideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = useCallback(() => {
    setCollapsed(prev => !prev)
  }, [])

  return (
    <div className={classnames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button onClick={onToggle}>toggle</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  )
}