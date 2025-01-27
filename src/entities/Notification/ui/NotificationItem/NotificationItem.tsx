import { memo } from 'react'

import classnames from '@/shared/libs/classnames/classnames'
import { ToggleFeaturesComponent } from '@/shared/libs/features/ToggleFeaturesComponent'
import { Card as CardDeprecated, CardTheme, Text as TextDeprecated } from '@/shared/ui'
import { Card } from '@/shared/ui/redesigned/Card/Card'
import { Text } from '@/shared/ui/redesigned/Text/ui/Text'

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
      <ToggleFeaturesComponent
        feature="isAppRedesigned"
        on={(
          <Card
            className={classnames(cls.notificationItem, {}, [className])}
          >
            <Text title={item.title} text={item.description} />
          </Card>
        )}
        off={(
          <CardDeprecated
            theme={CardTheme.OUTLINED}
            className={classnames(cls.notificationItem, {}, [className])}
          >
            <TextDeprecated title={item.title} text={item.description} />
          </CardDeprecated>
        )}
      />
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
