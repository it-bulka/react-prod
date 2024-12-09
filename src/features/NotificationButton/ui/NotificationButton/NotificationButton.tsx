import { memo, useState, useCallback } from 'react'
import classnames from '@/shared/libs/classnames/classnames'
import { Popover } from '@/shared/ui/Popups'
import { Button, ThemeButton, Icon } from '@/shared/ui'
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg'
import { NotificationList } from '@/entities/Notification'
import { useDevice } from '@/shared/libs/hooks/useDevice/useDevice'
import { Drawer } from '@/shared/ui/Drawer/Drawer'
import cls from './NotificationButton.module.scss'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props
    const isMobile = useDevice()
    const [isOpen, setIsOpen] = useState(false)

    const onOpenDrawer = useCallback(() => {
      setIsOpen(true)
    }, [])

    const onCloseDrawer = useCallback(() => {
      setIsOpen(false)
    }, [])

    const trigger = (
      <Button theme={ThemeButton.CLEAR} onClick={isMobile ? onOpenDrawer: undefined}>
        <Icon Svg={NotificationIcon} inverted />
      </Button>
    )

    return isMobile ? (
      <>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </>
    ) : (
      <Popover
        className={classnames('', {}, [className])}
        direction="bottom left"
        trigger={trigger}
      >
        <NotificationList className={cls.notifications} />
      </Popover>
    )
})
