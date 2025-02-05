import { memo, useState, useCallback } from 'react'

import { NotificationList } from '@/entities/Notification'
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg'
import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'
import { useDevice } from '@/shared/libs/hooks/useDevice/useDevice'
import { Button as DeprecatedButton, ThemeButton } from '@/shared/ui/deprecated/Button/Button'
import { Icon as DeprecatedIcon } from '@/shared/ui/deprecated/Icon/Icon'
import { Drawer as DeprecatedDrawer } from '@/shared/ui/redesigned/Drawer/Drawer'
import { Icon } from '@/shared/ui/redesigned/Icon/Icon'
import { Popover } from '@/shared/ui/redesigned/Popups'

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
      <ToggleFeaturesComponent
        feature="isAppRedesigned"
        on={
          <Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />
        }
        off={(
          <DeprecatedButton theme={ThemeButton.CLEAR} onClick={isMobile ? onOpenDrawer: undefined}>
            <DeprecatedIcon Svg={NotificationIcon} inverted />
          </DeprecatedButton>
        )}
      />
    )

    return isMobile ? (
      <>
        {trigger}
        <DeprecatedDrawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList className={cls.notifications} />
        </DeprecatedDrawer>
      </>
    ) : (
      <ToggleFeaturesComponent
        feature="isAppRedesigned"
        off={(
          <Popover
            className={className}
            direction="bottom left"
            trigger={trigger}
          >
            <NotificationList className={cls.notifications} />
          </Popover>
        )}
        on={(
          <Popover
            className={className}
            direction="bottom left"
            trigger={trigger}
          >
            <div className={cls.notifications}>
              <NotificationList />
            </div>
          </Popover>
        )}
      />
    )
})
