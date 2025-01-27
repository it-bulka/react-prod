import { AvatarDropdown } from '@/features/AvatarDropdown'
import { NotificationButton } from '@/features/NotificationButton'
import classnames from '@/shared/libs/classnames/classnames'
import { HStack } from '@/shared/ui/deprecated/Stack'

import cls from '../NavBar.module.scss'

interface NavBarProps {
  className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
  return (
    <header
      className={classnames(cls.navbarRedesigned, {}, [
        className
      ])}
    >
      <HStack gap="16" className={cls.actions}>
        <NotificationButton />
        <AvatarDropdown />
      </HStack>
    </header>
  )
}
