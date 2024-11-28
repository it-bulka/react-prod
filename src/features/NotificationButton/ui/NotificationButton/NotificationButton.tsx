import classnames from 'shared/libs/classnames/classnames'
import { memo } from 'react'
import { Popover } from 'shared/ui/Popups'
import { Button, ThemeButton, Icon } from 'shared/ui'
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg'
import { NotificationList } from 'entities/Notification'
import cls from './NotificationButton.module.scss'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props
    return (
      <Popover
        className={classnames('', {}, [className])}
        direction="bottom left"
        trigger={(
          <Button theme={ThemeButton.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
          </Button>
          )}
      >
        <NotificationList className={cls.notifications} />
      </Popover>
    )
})
