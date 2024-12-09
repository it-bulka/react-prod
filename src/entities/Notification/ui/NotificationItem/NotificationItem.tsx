import { memo } from 'react'
import classnames from '@/shared/libs/classnames/classnames'
import { Card, CardTheme, Text } from '@/shared/ui'
import cls from './NotificationItem.module.scss'
import { Notification } from '../../model/types/notification'

interface NotificationItemProps {
    className?: string
    item: Notification
}

export const NotificationItem = memo(({
  className,
  item
}: NotificationItemProps) => {
    const content = (
      <Card
        theme={CardTheme.OUTLINED}
        className={classnames(cls.notificationItem, {}, [className])}
      >
        <Text title={item.title} text={item.description} />
      </Card>
    )

    if (item.href) {
        return (
          <a className={cls.link} target="_blank" href={item.href} rel="noreferrer">
            {content}
          </a>
        )
    }

    return content
})
